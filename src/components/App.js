import React, { Component } from 'react';
import '../css/App.css';
import Establishment         from './establishments/establishments';
import establishments from './establishments/fixtures';


class App extends Component {
    constructor(props){
        super(props);
        this.state={
            searchStringUser: "",
        }
    }
    render() {
        const establishmentFilter = establishments.filter((searchText) => {
            let search = searchText.name + " " + searchText.description;
            return search.toLowerCase().match(this.state.searchStringUser);
        });

        const listEstablishment = establishmentFilter.map( (establishment) => {
          return (
              <Establishment
                  key={ establishment.id }
                  establishment={ establishment } 
              />
          )
        });
        
        return (
          <div className="App">
            <header className="App-header">
              <h2>Welcome "{ this.state.pseudo }" to { this.props.title }</h2>
            </header>
            <div className="App-intro">
                {/* On appelle notre fonction lors du clic sur le lien */}
                <p> <a onClick={ this.randomPseudo } >Changer le pseudo !</a> </p>
                <div>
                    <input
                        type="text"
                        placeholder="search"
                        value={this.state.searchStringUser}
                        onChange={this.handleChange}
                    />
                </div>
                <section>
                    { listEstablishment }
                </section>
            </div>
          </div>
        );
    }
}

export default App;