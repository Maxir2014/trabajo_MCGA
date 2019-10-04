import React/*,{ Component}*/ from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

class App extends React.Component{
  
  state = {
    titulo : "Mi trabajo de MCGA"
  }

  
  componentWillMount= () => {
    console.log('Se está por dibujar el componente')
  }

  componentDidMount= () => {
    console.log('Ya se dibujò el componente')
  }

  componentWillReceiveProps(nextProps, nextState){
    console.log('Se actualizòi el componente')
    console.log(nextState)
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("state actual:", this.state)
    console.log("state siguiente:", nextState)
    console.log(nextState)
    return true
  }

  render() {
    console.log('Se está dibujando el componente')
    return(<div>  
            <button onClick={
              () => { 
              this.setState ({ titulo : "nuevo titulo"})
              }
            }>
            Cambia titulo
            </button>
            <Card text = {this.state.titulo}/>
          </div>
    )
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Probando la página
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}*/

export default App;
