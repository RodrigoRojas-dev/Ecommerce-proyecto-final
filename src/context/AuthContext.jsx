import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

const AuthProvider = (props) => {
  const [user, setUser] = useState(null)

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
    }
  }

  return (
    <AuthContext.Provider value={{ user, loginUser }}>
      {props.children}
    </AuthContext.Provider>
  )
}

const useAuth = () => useContext(AuthContext)

export { AuthProvider, useAuth }