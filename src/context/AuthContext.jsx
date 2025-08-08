import { createContext, useContext, useState } from "react"

const AuthContext = createContext()

const AuthProvider = () => {
  const [user, setUser] = useState(null)


}