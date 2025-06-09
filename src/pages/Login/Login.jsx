import { useRef, useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

function Login({ setIsLogin }) {
	const [popupMessage, setPopupMessage] = useState('')
	const [showPopup, setShowPopup] = useState(false)
	const navigate = useNavigate()
	const email = useRef()
	const pass = useRef()
	const remember = useRef()

    useEffect(() => {
    document.title = "Login";
  }, []);

	async function login() {
		try {
			const response = await api.post('/auth', {
				email: email.current.value,
				password: pass.current.value
			})

			//armazena o token
			sessionStorage.setItem('token', response.data.token)

			//seta a msg do popup e mostra na tela
			setPopupMessage('Login efetuado com sucesso!')
			setShowPopup(true)

			//apos um tempo, desliga o popup e redireciona para login
			setTimeout(() => {
				setShowPopup(false)
				navigate('/')
			}, 3000)
		} catch {
			setPopupMessage('Email e/ou senha inválidos!') // ou mensagem de erro
			setShowPopup(true)
			setTimeout(() => setShowPopup(false), 3000)
		}
	}
	return (
		<>
			{showPopup && <div className="popup-message">{popupMessage}</div>}
			<div class="login-container">
				<h2>Entrar</h2>

				<label htmlFor="email">Email</label>
				<input type="email" id="email" name="email" placeholder="Email" ref={email} required />

				<label htmlFor="password">Senha</label>
				<input type="password" id="password" name="password" placeholder="Senha" ref={pass} required />

				<div className="remember-me">
					<input type="checkbox" id="remember" name="remember" ref={remember} />
					<label htmlFor="remember">Lembrar-me</label>
				</div>

				<button onClick={login}>Login</button>

				<div class="extra-links">
					<a href="/recuperar-senha.html">Esqueci minha senha</a>
					<span>|</span>
					<a onClick={() => setIsLogin(false)}>Criar conta</a>
				</div>
			</div>
		</>
	)
}
export default Login
