import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link, useNavigate } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import dropdown from '../Assets/dropdown.png'
import axios from 'axios'

const Navbar = ({setStatus}) => {

  const navigate = useNavigate();
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems } = useContext(ShopContext)
  const menuRef = useRef();

  const logout = () => {
    axios.get("https://shopper-1-awv0.onrender.com/logout")
      .then(function (response) {
        if (response.data.status == "admin logout") {
          setStatus(true)
          localStorage.setItem('status',true)
          navigate("/")
        }
      })
  }

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='logo' />
        <p>SHOPPER</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={dropdown} alt='' />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: "none" }} to='/'>Shop</Link>{menu == "shop" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("men") }}><Link style={{ textDecoration: "none" }} to='/men'>Men</Link>{menu == "men" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("women") }}><Link style={{ textDecoration: "none" }} to='/women'>Women</Link>{menu == "women" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: "none" }} to='/kids'>Kids</Link>{menu == "kids" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        <button onClick={() => logout()}>Logout</button>
        <Link to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className='nav-cart-count'>{getTotalCartItems()}</div>
      </div>

    </div>
  )
}

export default Navbar
