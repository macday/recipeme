import React from 'react';
import ReactDOM from 'react-dom'
import './App.css'
import Button from './components/Button'
import Scraper from './components/Scraper'
import Options from './components/Options'
import Fadein from 'react-fade-in'

class App extends React.Component {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );

  constructor(props) {
    super(props)
    this.state = {
      recipeList: {}
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(elemID) {
    if (elemID === 'grabber') {
      // ReactDOM.render(<Options />, document.getElementById('grabber-adder'))
      ReactDOM.render(<Fadein><Scraper /></Fadein>, document.getElementById('grabber-adder'))
    }
    if (elemID === 'adder') {
      // ReactDOM.render(<Uploader />, document.getElementById('grabber-adder'))
    }
  }
  render() {
    return (
      <div className='App p-3'>
        <header className='App-header'>
          <h1 className='Title m-3 p-3 font-italic font-weight-light font-underline'>
            <u>
              <Fadein>RecipeMe</Fadein>
            </u>
          </h1>
        </header>
        <body 
          className='container d-flex flex-column justify-content-center align-items-center rounded-lg border border-info my-5 p-4'
        >
          <div className='p-3'>
            <div className='row'>
              <div className='col d-flex flex-column align-items-center'>
                <h5 className='w-75 font-weight-light'>
                  Want to grab a recipe from another website, but don't want to read through Karen's story she just made up? This is the option for you!
                </h5>
                <Button id='grabber' name='Grab a Recipe' handleClick={this.handleClick} /> 
              </div>
              <div className='col d-flex flex-column align-items-center'>
                <h5 className='w-75 font-weight-light'>
                  Have your own recipe you want to have for safe keeping? Want to upload a recipe? Then this is the option you're looking for!
                </h5>
                <Button id='adder' name='Add Your Recipe' handleClick={this.handleClick} />
              </div>
            </div>
            <div id='grabber-adder'>
            </div>
          </div>
        </body>
        <section 
          className='container d-flex flex-column justify-content-center align-items-start rounded-lg border border-info my-5 p-4 bg-white'>
            <h1 className='font-weight-light font-italic border-bottom border-info'>
              My Recipes
            </h1>
            <ul id='recipes' className='container'>
              {/* {
                  Object.keys(props.ingredients).map(key => 
                      <li className='list-group-item'> {props.ingredients[key]} </li>
                  )
              } */}
            </ul>
        </section>
      </div>
    )
  }
}

export default App;
