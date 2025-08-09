import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

const AuthProvider = (props) => {
  const [user, setUser] = useState(null)

  const generarId = () => crypto.randomUUID().replace(/[^0-9]/g, "");

  const loginUser = async (username, password) => {
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

    

  }

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser, registerUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }