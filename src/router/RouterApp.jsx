import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "../views/Home"
import { Login } from "../views/Login"
import { Register } from "../views/Register"
import { Dashboard } from "../views/Dashboard"
import { NotFound } from "../views/NotFound"
import { Layout } from "../components/Layout"

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter >
  )
}

export { RouterApp }