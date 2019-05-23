import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {CircleArrow as ScrollUpButton} from 'react-scroll-up-button
import CardList  from './components/CardList'
import  Footer  from './components/footer'




function App() {
  return (
    <div className="App">
      <div id='title'>GraphQL Easy</div>
      <CardList />
      {/* <Footer /> */}
    </div>

  );
}

export default App;
