import { useNavigate } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import Cart from '../../assets/cart.png'
import './TopBar.css'
function TopBar() {
    const navigate = useNavigate()

    function handleLoginClick() {
        navigate('/auth')
    }

    return (
        <div className="top-bar">
            <div className="logo">
                <img src={Logo} className="logo-img" alt="Logo" />
                <span className="logo-text">JRL Tickets</span>
            </div>
            <div className="actions">
                <img src={Cart} alt="carrinho" className="cart-icon" />
                <button className="button" onClick={handleLoginClick}>ENTRAR</button>
            </div>
        </div>
    )
}
export default TopBar
