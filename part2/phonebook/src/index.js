import ReactDOM from 'react-dom';
import App from './App';

const contacts =  [
    {
        name: 'Allan Milne',
        number: '01234-567890'
    },
    {
        name: 'Nalla Enlim',
        number: '09876-543210'
    },
    {
        name: 'Davey Davidson',
        number: '09872-543210'
    },
    {
        name: 'Testy McTavish',
        number: '90987-543210'
    },
    {
        name: 'Bob Milne',
        number: '01234-567890'
    },
    {
        name: 'Betty Enlim',
        number: '09876-543210'
    },
    {
        name: 'Cat Davidson',
        number: '09872-543210'
    },
    {
        name: 'Humphry McTavish',
        number: '90987-543210'
    },
]

ReactDOM.render(
    <App contacts={contacts}/>,
    document.getElementById('root')
);
