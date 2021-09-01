import React from 'react'

const Hello = (props) => {
    return (
        <div>
            <p>Hello {props.name}, you are {props.age} years old.</p>
        </div>
    )
}

const Footer = () => {
    return (
        <>
            greeting app created by <a href="https://github.com/allanmilne">allanmilne</a>
        </>
    )
}

const App = () => {
    const name = "Allan";
    const age = 99;
    return (
        <>
            <h1>Greetings</h1>
            <Hello name={name} age={age}/>
            <Hello name="Maya" age="30"/>
            <Hello name="Fred" age="73"/>
            <Hello name="Merry" age="10"/>
            <Footer />
        </>
    )
}

export default App