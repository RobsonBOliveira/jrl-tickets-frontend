
function AuthLayout({ children, title }) {
  return (
    <div className="auth-layout">
      <h1>{title}</h1>
      {children}
    </div>
  )
}
