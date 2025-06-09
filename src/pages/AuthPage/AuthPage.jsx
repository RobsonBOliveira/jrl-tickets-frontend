import { useState } from 'react'
import Register from '../Register/Register'
import Login from '../Login/Login'
import './AuthPage.css'


function AuthPage() {
    const [isLogin, setIsLogin] = useState(true)

    return (
        <div className="auth-container">
            {isLogin ? (
                <Login setIsLogin={setIsLogin}/>
            ) : (
                <Register setIsLogin={setIsLogin}/>
            )}
        </div>
    )
}
export default AuthPage