import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Recipe from './Recipe'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Fadein from 'react-fade-in'

export default class RecipeLoader extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ingredients: {},
            instructions: {}
        }
        this.addIngredient = this.addIngredient.bind(this)
        this.addInstruction = this.addInstruction.bind(this)
        this.addRecipe = this.addRecipe.bind(this)
        this.ingredientsKeyPress = this.ingredientsKeyPress.bind(this)
        this.instructionsKeyPress = this.instructionsKeyPress.bind(this)

        this.foodCounter = 0
        this.stepCounter = 0
    }

    ingredientsKeyPress(event) {
        if (event.key === 'Enter') {
            this.addIngredient()
        }
    }

    instructionsKeyPress(event) {
        if (event.key === 'Enter') {
            this.addInstruction()
        }
    }

    addIngredient() {
        let item = document.getElementById('ingredients-input').value
        if (item !== "") {
            this.setState(prevState => ({
                ingredients: {
                    ...prevState.ingredients,
                    [this.foodCounter]: item
                }
            }))
            this.foodCounter++
            document.getElementById('ingredients-input').value = ""
        } else {
            alert('Please enter something first!')
        }
    }

    addInstruction() {
        let item = document.getElementById('instructions-input').value
        if (item !== "") {
            this.setState(prevState => ({
                instructions: {
                    ...prevState.instructions,
                    [`Step ` + this.stepCounter]: item
                }
            }))
            this.stepCounter++
            document.getElementById('instructions-input').value = ""
        } else {
            alert('Please enter something first!')
        }
    }

    addRecipe() {
        let title = document.getElementById('recipe-title').value
        if (title === "") {
            ReactDOM.render(<Recipe title="No Name" ingredients={this.state.ingredients} instructions={this.state.instructions} link="no-url" />, document.getElementById('recipes'))
        } else {
            ReactDOM.render(<Recipe title={title} ingredients={this.state.ingredients} instructions={this.state.instructions} link="no-url" />, document.getElementById('recipes'))
        }
        ReactDOM.render(<div></div>, document.getElementById('grabber-adder'))
    }

    render() {
        return (
            <div className='my-5'>
                <Fadein >
                    <Form className='container p-3 bg-white border border-info rounded-lg'>
                        <h1 className='text-center'>New Recipe</h1>
                        <Form.Group controlID='recipe-title'>
                            <Form.Label>Recipe Title</Form.Label>
                            <Form.Control type='text' id='recipe-title' placeholder='Chocolate Chip Cookies' />
                            <Form.Text className='text-muted font-italic'>Add a unique twist to it, make it yours!</Form.Text>
                        </Form.Group>

                        <Form.Label>Type Ingredients Here</Form.Label>
                        {/* ========================= INGREDIENTS INPUT ========================= */}
                        <Form.Group controlId="ingredients">
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="Choco Chips"
                                    id='ingredients-input'
                                    onKeyUp={this.ingredientsKeyPress}
                                />
                                <InputGroup.Append>
                                    <Button variant='info' onClick={() => this.addIngredient()} >+</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form.Group>
                        {/* ========================= INGREDIENTS ========================= */}
                        <Form.Group>
                            <Form.Label>Ingredients</Form.Label>
                            <ul id='recipe-ingredients'>
                                {
                                    Object.keys(this.state.ingredients).map(key =>
                                        <li className='list-group-item'> {this.state.ingredients[key]} </li>
                                    )
                                }
                            </ul>
                        </Form.Group>
                        {/* ========================= INSTRUCTIONS INPUT ========================= */}
                        <Form.Group controlId="instructions">
                            <InputGroup>
                                <Form.Control
                                    type="text"
                                    placeholder="Set oven to 400F..."
                                    id='instructions-input'
                                    onKeyUp={this.instructionsKeyPress}
                                />
                                <InputGroup.Append>
                                    <Button variant='info' onClick={() => this.addInstruction()} >+</Button>
                                </InputGroup.Append>
                            </InputGroup>
                        </Form.Group>
                        {/* ========================= INSTRUCTIONS ========================= */}
                        <Form.Group>
                            <Form.Label>Instructions</Form.Label>
                            <ul id='recipe-instructions'>
                                {
                                    Object.keys(this.state.instructions).map(key =>
                                            <li className='list-group-item my-1'>
                                                <h6 className='text-secondary'> {key} </h6>
                                                <p className='text-secondary font-weight-light p-0'>
                                                    {this.state.instructions[key]}
                                                </p>
                                            </li>
                                    )
                                }
                            </ul>
                        </Form.Group>

                        <Form.Group>
                            <button className='btn btn-info btn-lg btn-block' type='button' onClick={() => this.addRecipe()}>
                                Add Recipe!
                            </button>
                        </Form.Group>
                    </Form>
                </Fadein>
            </div>
        )
    }
}

