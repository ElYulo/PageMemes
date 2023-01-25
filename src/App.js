//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import html2canvas from 'html2canvas';


function App() {
  const [linea1, setLinea1] = useState('');
  const [linea2, setLinea2] = useState('');
  const [imagen, setImagen] = useState('');

  const onChangeLinea1 = function (evento) {
    //debugger;
    setLinea1(evento.target.value)
  }

  const onChangeLinea2 = function (evento) {
    //debugger;
    setLinea2(evento.target.value)
  }

  const onChangeImagen = function (evento) {
    setImagen(evento.target.value)
  }

  const onClickExportar = function (evento) {
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="chihu">Chihuahua</option>
        <option value="xd2">Morro con peluca</option>
        <option value="la berdura">la berdura</option>
      </select><br />
      <input onChange={onChangeLinea1} type="text" placeholder='Linea 1'></input><br />
      <input onChange={onChangeLinea2} type="text" placeholder='Linea 2'></input><br />
      <button onClick={onClickExportar}>Exportar</button>

      <div className="meme" id='meme'>
        <span>{linea1}</span><br />
        <span>{linea2}</span><br />
        <img src={"/img/" + imagen + ".jpg"} />
      </div>
    </div>
  );
}

export default App;
