import React from 'react';

const Header = ({course}) => {
    return (
        <div>
            <h1>{course.name}</h1>
        </div>
    )
}

const Content = ({parts}) => {
    const [part1, part2, part3] = parts;

    return (
        <div>
            <Part part={part1.name} exercises={part1.exercises}/>
            <Part part={part2.name} exercises={part2.exercises}/>
            <Part part={part3.name} exercises={part3.exercises}/>
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
    const [part1, part2, part3] = parts;
    const total = part1.exercises + part2.exercises + part3.exercises;

    return (
        <div>
            <p>Number of exercises {total}</p>
        </div>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            }, {
                name: 'Using props to pass data',
                exercises: 7
            }, {
                name: 'State of a component',
                exercises: 14
            }
        ]
    };

    return (
        <div>
            <Header course={course}/>
            <Content parts={course['parts']}/>
            <Total parts={course['parts']}/>
        </div>
    );
}

export default App;
