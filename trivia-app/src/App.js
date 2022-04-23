import { useState, useEffect } from 'react'
import Header from "./Header"
import Question from "./Question"
import Answers from "./Answers"

const App = () => {

  const [QuestionsAnswers, setQuestionsAnswers] = useState([])
  const [QuestionNumber, setQuestionNumber] = useState(0)

  const getTriviaQuestionsAnswers = async () => {
    const res = await fetch('https://opentdb.com/api.php?amount=10&type=multiple')
    const data = res.json()
    return data
  }


  useEffect( () => {
    const getData = async() => {
      const trivia = await getTriviaQuestionsAnswers()
      setQuestionsAnswers(trivia)
    }
    getData()
  }, []) 

  const getQuestion = (questionAnswers, index) => {
    if(questionAnswers.length !== 0){

      return questionAnswers.results[index].question
    }
    return ""
  } 

  const getCorrectAnswer = (index) => {
    return QuestionsAnswers.results[index].correct_answer
  }
  
  const getAnswers = (questionAnswers, index) => {
    if(questionAnswers.length !== 0 ){

      const answers = questionAnswers.results[index].incorrect_answers

      const correctAnswer = getCorrectAnswer(index)
      const insertingIndex = Math.floor(Math.random() * 5)

  }

  const clickChoice = (answer) => {
    const correctAnswer = getCorrectAnswer(QuestionNumber)
    if(answer === correctAnswer){
      setScore(Score + 1)
    }
    setQuestionNumber(QuestionNumber + 1)
    console.log(Score, QuestionNumber)
  }

  return (
    <div className="container"> 
      
      <Header> </Header>
      {QuestionsAnswers && ( 
        <>
        <Question
        questionAnswers = {QuestionsAnswers}
        getQuestion = {getQuestion} 
        index = {QuestionNumber}>
      </Question>

      <Answers
        questionAnswers = {QuestionsAnswers}
        getAnswers = {getAnswers}
        clickChoice = {clickChoice} 
        index = {QuestionNumber}>
      </Answers>
      </>)
      }
    </div>
  )
}
export default App;
