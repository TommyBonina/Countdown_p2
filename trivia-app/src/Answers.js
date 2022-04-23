import Answer from "./Answer"

const Answers = ( {questionAnswers, answers, index} ) => {
  return (
    <>
     {(getAnswers(questionAnswers, index)).map( (a, index) => (
        <Answer 
                    key = {index} 
                    clickChoice = {clickChoice} 
                    answer = {a} >
                </Answer>
            ) )} 
</>
  )
}

export default Answers;