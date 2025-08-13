import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

const AuthProvider = (props) => {
  const [user, setUser] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const generarId = () => crypto.randomUUID().replace(/[^0-9]/g, "");

  const validateUser = (username, password) => {
    if (!username) {
      return "El nombre de usuario es obligatorio"
    }

    if (username.length < 4 || username.length > 20) {
      return "El nombre de usuario debe tener entre 4 y 20 caracteres."
    }

    if (!password) {
      return "La contraseña es obligatoria"
    }

    if (password.length < 6) {
      return "La contraseña debe tener un minimo de 6 caracteres"
    }

    return null
  }

  const loginUser = async (username, password) => {
    const error = validateUser(username, password)

    if (error) {
      setErrorMessage(error)
      return;
    }
    setErrorMessage(null);

    const response = await fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username, password })
    })

    if (response.ok) {
      const token = await response.json()
      setUser(true)
      return token
    } else {
      return false
    }
  }

  const logoutUser = () => {
    setUser(null)
  }

  const registerUser = async (username, email, password) => {
    const response = await fetch("https://fakestoreapi.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: parseInt(generarId),
        username,
        email,
        password
      })
    })

    if (response.ok) {
      const newUser = await response.json()
      setUser(newUser)
      return newUser
    } else {
      return false
    }
  }

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser, registerUser, errorMessage }}>
      {props.children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }