import { useRef, useState } from 'react'
import api from '../../services/api'

function Register({ setIsLogin }) {
	const [popupMessage, setPopupMessage] = useState('')
	const [showPopup, setShowPopup] = useState(false)
	const name = useRef()
	const email = useRef()
	const pass = useRef()
	const confPass = useRef()

	async function register() {
		const response = await api.post('/user', {
			name: name.current.value,
			email: email.current.value,
			password: pass.current.value
		})
		setPopupMessage('Cadastro realizado com sucesso!') // ou mensagem de erro
		setShowPopup(true)

		// esconde depois de alguns segundos
		setTimeout(() => setShowPopup(false), 3000)
	}
	return (
		<>
			{showPopup && <div className="popup-message">{popupMessage}</div>}
			<div className="login-container">
				<h2>Criar Conta</h2>

				<label htmlFor="name">Nome</label>
				<input type="text" id="name" name="name" placeholder="Seu nome" ref={name} required />

				<label htmlFor="email">Email</label>
				<input type="email" id="email" name="email" placeholder="Seu email" ref={email} required />

				<label htmlFor="password">Senha</label>
				<input type="password" id="password" name="password" placeholder="Sua senha" ref={pass} required />

				<label htmlFor="confirm-password">Confirmar Senha</label>
				<input type="password" id="confirm-password" name="confirm-password" placeholder="Confirme sua senha" ref={confPass} required />

				<button onClick={() => register()}>Cadastrar</button>

				<div className="extra-links">
					<a onClick={() => setIsLogin(true)}>Já tenho conta</a>
				</div>
			</div>
		</>
	)
}
export default Register
