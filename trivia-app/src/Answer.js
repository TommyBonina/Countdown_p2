const Answer = ({answer}) => {
    return (
        <div style = {{cursor: 'pointer'}} onClick={() => clickChoice(answer)}>
        <p 
            className = 'answer'>
            {answer}
        </p>
    </div>
    )
  }
  
  export default Answer