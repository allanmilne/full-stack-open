import React, {useState} from 'react';

const Anecdote = ({text, selection}) => <p>{text[selection]}</p>;

const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const Score = ({text}) => {
    return (
        <div>
            {text}
        </div>
    )
}

const App = () => {
    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is the same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ];

    const [selected, setSelected] = useState(0);
    const [points, setPoints] = useState(Array(7).fill(0));
    const prevPoints = [...points];

    const randomise = () => Math.floor((Math.random() * anecdotes.length));

    const handleSelected = () => setSelected(randomise());

    const handleAddPoint = () => {
        setPoints(prevPoints, prevPoints[selected] += 1);
    }


    return (
        <div>
            <Anecdote text={anecdotes} selection={selected}/>
            <Score text={`Has ${points[selected]} votes`}/>
            <Button handleClick={handleAddPoint} text={'Vote'}/>
            <Button handleClick={handleSelected} text={'Next anecdote'}/>
        </div>
    )
}

export default App;
