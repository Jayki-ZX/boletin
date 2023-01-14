import './App.css';
import data from './tasks.json'

import { Box } from '@mui/material'

function App() {

    return (
        <div className="App">
        <h1>Tareas de la semana FECHA</h1>
        {data.map(({date, tasks}) => {
            return (<div>
                <h2>{date}</h2>
                <h3>Eléctrica ⚡</h3>
                <ul>
                    {tasks["electrics"].map(task => (<li>{task}</li>))}
                </ul>
                <h3>Diseño 🎨</h3>
                <ul>
                    {tasks["design"].map(task => (<li>{task}</li>))}
                </ul>
                <h3>Gestión 💰</h3>
                <ul>
                    {tasks["management"].map(task => (<li>{task}</li>))}
                </ul>
                <h3>Mecánica 🔧</h3>
                <ul>
                    {tasks["mechanics"].map(task => (<li>{task}</li>))}
                </ul>
                <h3>Software 💻</h3>
                <ul>
                    {tasks["software"].map(task => (<li>{task}</li>))}
                </ul>
                </div>)
        })}
        </div>
    );
}

export default App;
