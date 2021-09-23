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
    const total = parts.reduce((totalValue, currentValue) => {
        return totalValue + currentValue.exercises;
    }, 0);

    return (
        <div>
            <strong>
                Total of {total} exercises
            </strong>
        </div>
    )
}

const Course = ({courses}) => {
    const [course1, course2] = courses
    return (
        <div>
            <Header course={course1}/>
            <Content parts={course1['parts']}/>
            <Total parts={course1['parts']}/>
            <Header course={course2}/>
            <Content parts={course2['parts']}/>
            <Total parts={course2['parts']}/>
        </div>
    );
}

const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
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
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        },
        {
            name: 'Node.js',
            id: 2,
            parts: [
                {
                    name: 'Routing',
                    exercises: 3,
                    id: 1
                },
                {
                    name: 'Middlewares',
                    exercises: 7,
                    id: 2
                }
            ]
        }
    ]

    return <Course courses={courses}/>
}

export default App;
