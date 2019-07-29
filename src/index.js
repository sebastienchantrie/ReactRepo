import React    from 'react';
import ReactDOM from 'react-dom';
import App      from './components/App';
import './css/index.css';

// On utilise la méthode render() de ReactDOM pour décrire DOM ,
// le premier paramètre correspond à ce que l'on veut rendre
// et le deuxième l'endroit où "accrocher" le DOM que l'on crée.
//      ici : l'élément d'id root dans le fichier ./public/index.html
ReactDOM.render(
    <App title = "HappyDrink"/>,
    document.getElementById('root')
);