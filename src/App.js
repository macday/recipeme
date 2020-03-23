import React from 'react';
import ReactDOM from 'react-dom'
import './App.css'
import Button from './components/Button'
import Options from './components/Options'
import Fadein from 'react-fade-in'
import RecipeLoader from './components/RecipeLoader'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      recipeList: {}
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(elemID) {
    if (elemID === 'grabber') {
      ReactDOM.render(<Options />, document.getElementById('grabber-adder'))
    }
    if (elemID === 'adder') {
      ReactDOM.render(<RecipeLoader />, document.getElementById('grabber-adder'))
    }
  }

  render() {
    return (
      <div className='App px-5 py-3'>
        <body
          className='container-lg py-3 d-flex flex-column justify-content-center align-items-center rounded-lg border border-info'
        >
          <h1 className='font-italic font-weight-light font-underline'>
            <u>
              <Fadein transitionDuration="750" >RecipeMe</Fadein>
            </u>
          </h1>
          <div className='p-3'>
            <div className='row'>
              <div className='col d-flex flex-column align-items-center justify-content-between'>
                <h5 className='font-weight-light'>
                  Have you found a new recipe you really want to try, but don't want to read through the whole story of how and why it exists? Then this is the option for you! Click the button below, select the site you found the recipe on, and then paste the link. Voila! You now have the recipe and instructions at your fingertips without any of the other nonsense!
                </h5>
                <Button id='grabber' name='Grab a Recipe' handleClick={this.handleClick} />
              </div>
              <div className='col d-flex flex-column align-items-center justify-content-between'>
                <h5 className='font-weight-light'>
                  Maybe you have your own recipe you want to upload or you just want somewhere to keep it stored? Then this is the option for you! Click the button below, add all of the ingredients, then the instructions, and then click 'Save my Recipe!'. There you have it! You recipe saved for the next time you need it!
                </h5>
                <Button id='adder' name='Add Your Recipe' handleClick={this.handleClick} />
              </div>
            </div>
            <div id='grabber-adder'>
            </div>
          </div>
        </body>
        <section
          className='container-lg d-flex flex-column justify-content-center align-items-start rounded-lg border border-info my-5 p-4 bg-white'>
          <h1 className='font-weight-light font-italic border-bottom border-info'>
            My Recipes
          </h1>
          <p className='text-muted font-italic m-0 p-0'>
            {"You currently do not have any recipes" ? this.state.recipeList.empty : ""}
          </p>
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
