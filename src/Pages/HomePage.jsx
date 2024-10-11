// import { useState } from "react";
// import Button from "../components/Elements/Button"
import Card from "../components/Fragments/Card";
import questions from "../data/question"

const HomePage = () => {

    return (
        <>
            <div className="min-h-screen"> 
                <h1 className="font-bold text-3xl text-black my-3 mx-8">Quiz<span className="text-green-600">versal</span></h1>
                <h1 className="font-bold text-3xl text-black mt-20 mx-8">List of quizzes</h1>
                <div className="flex flex-row flex-wrap mt-10">
                    <Card>
                        <Card.Header></Card.Header>
                        <Card.Body title="Quiz Matematika" subtitle={`${questions.filter((data) => data.type == "matematika").length} Questions`}></Card.Body>
                        <Card.Footer teks="Start" kuis="matematika"></Card.Footer>
                    </Card>
                    <Card>
                        <Card.Header></Card.Header>
                        <Card.Body title="Quiz Fisika" subtitle={`${questions.filter((data) => data.type == "fisika").length} Questions`}></Card.Body>
                        <Card.Footer teks="Start" kuis="fisika"></Card.Footer>
                    </Card>
                </div>
                
            </div>
        </>
    )
}

export default HomePage;