import React from 'react';
import logo from './logo.svg';
import './App.css';
import Discogs from './Discogs';
import Playlist from './playlist';
import Header from './Header';
import Footer from './Footer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      tabComp: 'discog'
    }
    this.changeTab = this.changeTab.bind(this);
    this.renderTab = this.renderTab.bind(this);
  }


  changeTab(tab) {

    this.setState({ tabComp: tab })
  }

  renderTab() {
    switch (this.state.tabComp) {
      case 'discog': return (<Discogs />); break;
      case 'playlist': return (<Playlist />); break;
      default: return (<Discogs />); break;
    }
  }
  render() {
    return (
      <div >
        <Header username="prabh" />
        <nav className="navbar navbar-expand-lg navbar-light bg-light">


          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" onClick={() => this.changeTab('discog')}>Discogs <span className="sr-only"></span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={() => this.changeTab('playlist')}>Playlist</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row">
          <div className="col-6" >
            <Playlist />
          </div>
          <div className="col-6" >
            <Discogs />
          </div>
        
        {/* {this.renderTab()} */}
        </div>
        <div>
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
