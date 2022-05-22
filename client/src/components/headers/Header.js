import React, { useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import Menu from "./icon/menu.svg";
import Close from "./icon/close.svg";
import Cart from "./icon/cart.svg";
import Heart from "./icon/heart.svg";
import { Link } from "react-router-dom";
import axios from "axios";

function Header() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [isAdmin] = state.userAPI.isAdmin;
  const [cart] = state.userAPI.cart;
  const [menu, setMenu] = useState(false);

  const logoutUser = async () => {
    await axios.get("/user/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/";
  };

  const adminRouter = () => {
    return (
      <>
        <li>
          <Link to="/create_product">Create Product</Link>
        </li>
        <li>
          <Link to="/category">Categories</Link>
        </li>
      </>
    );
  };

  const loggedRouter = () => {
    return (
      <>
        <li>
          <Link to="/history">𝙃𝙄𝙎𝙏𝙊𝙍𝙔</Link>
        </li>
        <li>
          <Link to="/" onClick={logoutUser}>
            ⫷ L̳O̳G̳O̳U̳T̳ ⫸
          </Link>
        </li>
      </>
    );
  };

  const styleMenu = {
    left: menu ? 0 : "-100%",
  };

  return (
    <header>
      <div className="menu" onClick={() => setMenu(!menu)}>
        <img src={Menu} alt="" width="30" />
      </div>

      <div className="logo">
        <h1>
          <Link to="/">
            {isAdmin ? "ミ★ 𝘈𝘥𝘮𝘪𝘯 ★彡" : "ミ★ 𝘚𝘩𝘰𝘱𝘱𝘪𝘯𝘨 𝘓𝘪𝘴𝘵 ★彡"}
          </Link>
        </h1>
      </div>

      <ul style={styleMenu}>
        <li>
          <Link to="/">{isAdmin ? "𝙋𝙍𝙊𝘿𝙐𝘾𝙏𝙎" : "𝙋𝙍𝙊𝘿𝙐𝘾𝙏𝙎"}</Link>
        </li>

        {isAdmin && adminRouter()}

        {isLogged ? (
          loggedRouter()
        ) : (
          <li>
            <Link to="/login">Login ✥ Register</Link>
          </li>
        )}

        <li onClick={() => setMenu(!menu)}>
          <img src={Close} alt="" width="30" className="menu" />
        </li>
      </ul>

      {isAdmin ? (
        ""
      ) : (
        <div className="cart-icon">
          <span>{cart.length}</span>
          <Link to="/cart">
            <img src={Cart} alt="" width="30" />
          </Link>
        </div>
      )}

      {/*{isAdmin ? (
        ""
      ) : (
        <div className="cart-icon">
          <span>{cart.length}</span>
          <Link to="/cart">
            <img src={Heart} alt="" width="30" />
          </Link>
        </div>
      )}*/}
    </header>
  );
}

export default Header;
