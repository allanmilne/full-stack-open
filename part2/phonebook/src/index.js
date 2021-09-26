import ReactDOM from 'react-dom';
import App from './App';

const persons =  [
    {
        name: 'Allan Milne',
        number: '01234-567890'
    },
    {
        name: 'Nalla Enlim',
        number: '09876-543210'
    }
]

ReactDOM.render(
    <App persons={persons}/>,
    document.getElementById('root')
);
