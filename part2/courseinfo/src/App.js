import React from 'react';

const Header = ({course}) => {
    return (
        <div>
            <h1>{course.name}</h1>
        </div>
    )
}

const Content = ({parts}) => {
    return (
        <div>
            {parts.map(part => {
                return <Part key={part.id} part={part.name} exercises={part.exercises}/>
            })}
        </div>
    )
}

const Part = ({part, exercises}) => {
    return (
        <div>
            <p>
                {part} {exercises}
            </p>
        </div>
    )
}

const Total = ({parts}) => {
    const exercises = parts.map(part => part.exercises);
    const sum = (previousValue, currentValue) => previousValue + currentValue;
    const totalExercises = exercises.reduce(sum, 0);

    return (
        <div>
            <strong>
                Total of {totalExercises} exercises
            </strong>
        </div>
    )
}

const Course = ({course}) => {
    return (
        <div>
            <Header course={course}/>
            <Content parts={course['parts']}/>
            <Total parts={course['parts']}/>
        </div>
    );
}

const App = () => {
    const course = {
        id: 1,
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
                id: 1
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
                id: 2
            },
            {
                name: 'State of a component',
                exercises: 14,
                id: 3
            }
        ]
    }

    return <Course course={course}/>
}

export default App;