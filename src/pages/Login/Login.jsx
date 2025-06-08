function Login({ setIsLogin }) {
    return (
        <div class="login-container">
            <h2>Entrar</h2>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" required />

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" name="password" placeholder="Senha" required />

            <div class="remember-me">
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Lembrar-me</label>
            </div>

            <button type="button">Login</button>

            <div class="extra-links">
                <a href="/recuperar-senha.html">Esqueci minha senha</a>
                <span>|</span>
                <a onClick={() => setIsLogin(false)}>Criar conta</a>
            </div>
        </div>
    )
}
export default Login