/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import Button from "../Elements/Button"
import { useEffect, useState } from "react"

const CardQuiz = ({children}) => {
    return (
        <>
            <div className="flex flex-col w-80 sm:w-2/6  bg-slate-100 shadow-lg p-3 rounded mx-auto mt-12 relative">
                {children}
            </div>
        </>
    )
}

const Circle = ({angka = 1}) => {
    return (
        <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 flex justify-center items-center w-10 h-10 bg-green-600 text-white rounded-full font-bold">{angka}</div>
    )
}

const Header = ({title}) => {
    return (
        <h1 className="text-md font-semibold text-gray-600 mt-5 text-center">{title}</h1>
    )
}

const Body = ({data = [], score = 0, selesai = false, answer=0, lock = 0, handleLock, addScore}) => {
    const [bgColor, setBgColor] = useState("");
    const [bgColor1, setBgColor1] = useState("");
    const [bgColor2, setBgColor2] = useState("");
    const [bgColor3, setBgColor3] = useState("");

    useEffect(() => {
        if(lock == 0) {
            setBgColor("");
            setBgColor1("");
            setBgColor2("");
            setBgColor3("");
        }
    }, [lock])


    const answerHandle = (ans) => {
        if(lock == 0) {
            if(ans == 1) {
                if(ans == answer) {
                    setBgColor("bg-green-600 hover:bg-green-600");
                    addScore();
                  
                } else {
                    setBgColor("bg-red-600 hover:bg-red-600");
                }
                
            } else if(ans == 2) {
                if(ans == answer) {
                    setBgColor1("bg-green-600 hover:bg-green-600");
                    addScore();
                } else {
                    setBgColor1("bg-red-600 hover:bg-red-600");
                   
                }
            } else if(ans == 3) {
                if(ans == answer) {
                    setBgColor2("bg-green-600 hover:bg-green-600");
                    addScore();
                } else {
                    setBgColor2("bg-red-600 hover:bg-red-600");
                   
                }
            } else {
                if(ans == answer) {
                    setBgColor3("bg-green-600 hover:bg-green-600");
                    addScore();
                } else {
                    setBgColor3("bg-red-600 hover:bg-red-600");
                   
                }
            }
        }
    }

   

   
    return(
        <>
            {!selesai && 
            <div>
                <Button onClick={() => {answerHandle(1); handleLock(1);}} classname={`mt-5 bg-gray-400 w-full flex items-center hover:bg-gray-500 ${bgColor}`} >
                    <h1>A.</h1>
                    <h1 className="mx-auto text-center">{data.option1}</h1>
                </Button>
                <Button onClick={() => {answerHandle(2); handleLock(1);}} classname={`mt-5 bg-gray-400 w-full flex items-center hover:bg-gray-500 ${bgColor1}`}>
                    <h1>B.</h1>
                    <h1 className="mx-auto text-center">{data.option2}</h1>
                </Button>
                <Button onClick={() => {answerHandle(3); handleLock(1); }} classname={`mt-5 bg-gray-400 w-full flex items-center hover:bg-gray-500 ${bgColor2}`} >
                    <h1>C.</h1>
                    <h1 className="mx-auto text-center">{data.option3}</h1>
                </Button>
                <Button onClick={() => {answerHandle(4); handleLock(1); }} classname={`mt-5 bg-gray-400 w-full flex items-center hover:bg-gray-500 ${bgColor3}`}>
                    <h1>D.</h1>
                    <h1 className="mx-auto text-center">{data.option4}</h1>
                </Button>
            </div>
                
            } 

            {selesai &&
                <h1 className="text-center font-semibold text-xl my-24">Score Anda: {score}</h1>
            }
        </>
    )
}

const Footer = ({nextQuestion, handleLock, selesai}) => {
    return (
        <>
        {selesai && <Link className="mx-auto mt-8" to="/"><Button onClick={() => {nextQuestion(); handleLock(0);}} classname="bg-green-600 hover:bg-green-700 ">Home</Button></Link> }
        {!selesai && <Button onClick={() => {nextQuestion(); handleLock(0);}} classname="bg-green-600 hover:bg-green-700 mx-auto mt-8">Next</Button>
    }
        
        </>
    )
}

CardQuiz.Circle = Circle;
CardQuiz.Header = Header;
CardQuiz.Body = Body;
CardQuiz.Footer = Footer;

export default CardQuiz;