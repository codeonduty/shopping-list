import React, { useContext, useState } from "react";
import { GlobalState } from "../../GlobalState";
import Menu from "./icon/menu.svg";
import Close from "./icon/close.svg";
import Cart from "./icon/cart.svg";
import { Link } from "react-router-dom";
import axios from "axios";

function Header() {
  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged; //this checks if the user is logged in
  const [isAdmin] = state.userAPI.isAdmin; //this checks if the user is an admin
  const [cart] = state.userAPI.cart; //this gets the logged in users cart information
  const [menu, setMenu] = useState(false);

  const logoutUser = async () => {
    await axios.get("/user/logout");

    localStorage.removeItem("firstLogin");

    window.location.href = "/"; //this logs out the use
  };

  const adminRouter = () => {
    //this checks if the user is an admin
    return (
      <>
        <li>
          <Link to="/create_product">Create Product</Link>
        </li>
        <li>
          <Link to="/category">Categories</Link>
        </li>
      </>
    ); //this allows the admin to change the product categories and create new products to add to the website
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
    //this creates a new menu when its minimum
    left: menu ? 0 : "-100%",
  };
  /*
this changes the title between the website name and admin
alines the header well and makes it clean
this also changes between logged in and login/register
makes the header responsive
 */
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
    </header>
  );
}

export default Header;
