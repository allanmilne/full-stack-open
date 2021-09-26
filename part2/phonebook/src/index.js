import ReactDOM from 'react-dom';
import App from './App';

const persons =  [
    {
        name: 'Allan Milne',
    },
    {
        name: 'Nalla Enlim'
    }
]

ReactDOM.render(
    <App persons={persons}/>,
    document.getElementById('root')
);
