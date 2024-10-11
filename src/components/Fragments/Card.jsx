/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import Button from "../Elements/Button"

const Card = ({children}) => {
    return (
        <div className="w-60 bg-slate-100 shadow-lg p-3 rounded mx-auto sm:mx-0 sm:ml-8  mb-8 ">
            {children}
        </div>
    )
}

const Header = () => {
    return(
        <div className="bg-green-600 w-56 h-36 rounded-md -ml-1"></div>
    )
}

const Body = ({title, subtitle}) => {
    return(
        <>
            <h1 className=" font-bold text-xl mt-4">{title}</h1>
            <h1 className=" font-medium text-md text-slate-600">{subtitle}</h1>
        </>
    )
}

const Footer = ({teks, kuis = ""}) => {

    return(
        <Link to="/quiz"><Button onClick={() => localStorage.setItem("type", kuis)} classname="bg-green-600 h-8 px-4 mt-4 hover:bg-green-700">{teks}</Button></Link>
    )
}

Card.Header = Header;
Card.Body = Body;
Card.Footer = Footer;

export default Card;