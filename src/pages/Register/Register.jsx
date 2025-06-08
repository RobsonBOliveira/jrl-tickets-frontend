function Register({ setIsLogin }) {
    return (
        <>
            <div className="login-container">
                <h2>Criar Conta</h2>

                <label htmlFor="name">Nome</label>
                <input type="text" id="name" name="name" placeholder="Seu nome" required />

                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Seu email" required />

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" name="password" placeholder="Sua senha" required />

                <label htmlFor="confirm-password">Confirmar Senha</label>
                <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirme sua senha"
                    required />

                <button>Cadastrar</button>

                <div className="extra-links">
                    <a onClick={() => setIsLogin(true)}>Já tenho conta</a>
                </div>
            </div>
        </>
    )
}
export default Register