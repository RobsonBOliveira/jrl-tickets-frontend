import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import AuthPage from '../pages/AuthPage/AuthPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  )
}
