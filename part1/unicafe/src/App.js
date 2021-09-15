import React, { useState } from 'react'

const Statistics = ({text, feedback, expression}) => {
  return (
      <div>
        {text} {feedback}{expression}
      </div>
  )
}

const Content = ({good, neutral, bad, total, avg, pos}) => {
    if (total === 0) {
        return <h3>No feedback given</h3>
    }

    return (
        <div>
            <Statistics text={'Good ='} feedback={good}/>
            <Statistics text={'Neutral ='} feedback={neutral}/>
            <Statistics text={'Bad ='} feedback={bad}/>
            <Statistics text={'All ='} feedback={total}/>
            <Statistics text={'Average ='} feedback={avg}/>
            <Statistics text={'Positive ='} feedback={pos} expression={'%'}/>
        </div>
    )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setTotal(total + 1)
    setAverage(average + 1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setTotal(total + 1)
    setAverage(average)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setTotal(total + 1)
    setAverage(average - 1)
  }

  const averageScore = () => (isNaN(average / total)) ? 0 : average / total

  const positiveScore = () => isNaN(good / total) ? 0 : (good / total) * 100

  return (
      <div>
        <h1>Give Feedback</h1>
          <div>
            <button onClick={handleGood}>Good</button>
            <button onClick={handleNeutral}>Neutral</button>
            <button onClick={handleBad}>Bad</button>
          </div>
        <h2>Statistics</h2>
        <Content
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            avg={averageScore()}
            pos={positiveScore()}
        />
      </div>
  )
}

export default App
