import React, { useState } from 'react'

const StatisticsLine = ({text, value, expression}) => {
  return (
      <div>
        {text} {value}{expression}
      </div>
  )
}

const Statistics = ({good, neutral, bad, total, avg, pos}) => {
    if (total === 0) {
        return <h3>No feedback given</h3>
    }

    return (
        <div>
            <StatisticsLine text={'Good ='} value={good}/>
            <StatisticsLine text={'Neutral ='} value={neutral}/>
            <StatisticsLine text={'Bad ='} value={bad}/>
            <StatisticsLine text={'All ='} value={total}/>
            <StatisticsLine text={'Average ='} value={avg}/>
            <StatisticsLine text={'Positive ='} value={pos} expression={'%'}/>
        </div>
    )
}

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

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
            <Button handleClick={handleGood} text={'Good'}/>
            <Button handleClick={handleNeutral} text={'Neutral'}/>
            <Button handleClick={handleBad} text={'Bad'}/>
          </div>
        <h2>Statistics</h2>
        <Statistics
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
