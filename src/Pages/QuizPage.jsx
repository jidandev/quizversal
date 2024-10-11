import Button from "../components/Elements/Button"
import { Link } from "react-router-dom";
import CardQuiz from "../components/Fragments/CardQuiz";
// import Card from "../components/Fragments/Card";
import questions from "../data/question"

import { useState } from "react";

const QuizPage = () => {
    const [type, setType] = useState(localStorage.getItem("type") || "")
    const [question, setQuestion] = useState(questions.filter((data) => data.type == type).sort(() => Math.random() - 0.5) || []);
    const [index, setIndex] = useState(0);
    const [selesai, setSelesai] = useState(false);
    const [lock, setLock] = useState(0);
    const [score, setScore] = useState(0);
    
    const nextQuestion = () => {
        if(lock == 1) {

            if(question.length == 1) {
                setSelesai(true);
            } else {
                if(index < question.length - 1) {
                    setIndex(index + 1);
                }
                else {
                    setSelesai(true);
                }
            }
        }
    }

    const handleLock = (condition) => {
            setLock(condition);
    }

    const addScore = () => {
        setScore(score + 1);
    }

    return(
        <>
            <div className="min-h-screen">
                <Link to="/"><Button classname="my-3 mx-4 bg-green-600 hover:bg-green-700">Home</Button></Link>
                {question.length > 0 &&
                    <CardQuiz>
                        {selesai == false && <CardQuiz.Circle angka={index +1}></CardQuiz.Circle>}
                        
                        <CardQuiz.Header title={selesai == false ? question[index].question : "Selamat anda telah menyelesaikan semua soal"}></CardQuiz.Header>
                        <CardQuiz.Body score={score} addScore={addScore} lock={lock} handleLock={handleLock} data={question[index]} selesai={selesai} answer={question[index].answer}></CardQuiz.Body>
                        <CardQuiz.Footer selesai={selesai} nextQuestion={nextQuestion} handleLock={handleLock}></CardQuiz.Footer>
                    </CardQuiz>
                }
                {question.length == 0 &&
                    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
                    <div className="text-center">
                      <p className="text-3xl font-semibold text-green-600">404</p>
                      <h1 className="mt-4 text-3xl font-bold tracking-tight text-green-700 sm:text-5xl">Quiz Coming Soon</h1>
                      <p className="mt-6 text-base leading-7 text-green-600">Maaf, kuis belum dibuat dan akan segera dibuat.</p>
                    </div>
                  </main>
                }
                
            </div>
        </>
    )
}

export default QuizPage;