import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="bg-blue-500">
            <div className="flex flex-row justify-between">               
            <NavLink to = "/" >
            <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Ft3.ftcdn.net%2Fjpg%2F03%2F99%2F53%2F44%2F360_F_399534445_zG1tMcAn0q7bCaPw2Lp5ZWiBiBgQYxvN.jpg&tbnid=ScYEhdHo1A1JpM&vet=12ahUKEwjL8bmOv_iDAxXcamwGHU4pBhwQMygBegQIARBL..i&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fsearch%3Fk%3Dcode%2Blogo&docid=Uf8-gOwvB0yFHM&w=600&h=360&q=code%20help%20image%20logo&ved=2ahUKEwjL8bmOv_iDAxXcamwGHU4pBhwQMygBegQIARBL" alt="" />
            </NavLink>
                <div>
                <NavLink to = "/" >
                <p>Home</p>
                </NavLink>
                <NavLink to = "/cart" >
                    <div>
                        <FaShoppingCart/>
                    </div>
                </NavLink>
                    
                </div>
            </div>
        </div>
    )
};

export default Navbar