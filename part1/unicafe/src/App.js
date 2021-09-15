import React, { useState } from 'react'

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
            <button onClick={handleGood}>good</button>
            <button onClick={handleNeutral}>neutral</button>
            <button onClick={handleBad}>bad</button>
          </div>
        <h2>Statistics</h2>
          <div>good = {good}</div>
          <div>neutral = {neutral}</div>
          <div>bad = {bad}</div>
          <div>all = {total}</div>
          <div>average = {averageScore()}</div>
          <div>positive = {positiveScore()}%</div>
      </div>
  )
}

export default App
