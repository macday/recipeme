import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Image from 'react-bootstrap/Image'
import Fadein from 'react-fade-in'
import Scraper from './Scraper'
import './../styles/Options.css'

export default class Options extends Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(elemID) {
        let tags = {
            header: '',
            ingredient: '',
            intructions: ''
        }
        switch (elemID) {
            case 'allrecipes':
                tags = {
                    header: '#recipe-main-content',
                    ingredient: '.recipe-ingred_txt',
                    instruction: '.step'
                }
                break
            case 'foodnetwork':
                tags = {
                    header: '.o-AssetTitle',
                    ingredient: 'p.o-Ingredients__a-Ingredient',
                    instruction: 'li.o-Method__m-Step'
                }
                break
            case 'food':
                tags = {
                    header: '.recipe-title',
                    ingredient: 'li.recipe-ingredients__item',
                    instruction: 'li.recipe-directions__step'
                }
                break
            case 'thekitchn':
                tags = {
                    header: '.Recipe__title',
                    ingredient: 'li.Recipe__ingredient',
                    instruction: 'li.Recipe__instruction-step'
                }
                break
            case 'yummly':
                tags = {
                    header: '.recipe-title',
                    ingredient: '.IngredientLine',
                    instruction: '.prep-step'
                }
                break
                case 'chow':
                    tags = {
                        header: '.fr_r_info > h1',
                        ingredient: '.col .gu3 li',
                        instruction: '.col .gu9 li'
                    }
                    break
                case 'epicurious':
                    tags = {
                        header: '.title-source > h1',
                        ingredient: 'li.ingredient',
                        instruction: 'li.preparation-step'
                    }
                    break
                case 'simplyrecipes':
                    tags = {
                        header: 'h1.entry-title',
                        ingredient: 'li.ingredient',
                        instruction: '.instructions > div > p, .recipe-method > div > p'
                    }
                    break
                case 'cookinglight':
                    tags = {
                        header: 'h1.headline',
                        ingredient: '.ingredients > ul > li',
                        instruction: '.step'
                    }
                    break
                case 'bettycrocker':
                    tags = {
                        header: '.recipePartTitleText',
                        ingredient: '.recipePartIngredient',
                        instruction: '.recipePartStep'
                    }
                    break
            default:
                tags = {
                    header: 'h1.title, .post-title, .recipe-title',
                    ingredient: '.ingredient, .recipe-ingredient',
                    instruction: '.direction, .instruction, .step'
                }
        }
        ReactDOM.render(<Scraper site={elemID} tags={tags} />, document.getElementById('grabber-adder'))
    }

    render() {
        return (
            <div>
                <Fadein className='container-fluid d-flex flex-row flex-wrap justify-content-around align-items-center'>
                    <button onClick={() => this.handleClick('allrecipes')} className='btn p-0 m-3' id='AllRecipes'>
                        <Image src={require('./../images/allrecipes.png')} fluid />
                    </button>
                    <button onClick={() => this.handleClick('foodnetwork')} className='btn p-0 m-3' id='FoodNetwork'>
                        <Image src={require('./../images/foodnetwork.png')} fluid />
                    </button>
                    <button onClick={() => this.handleClick('food')} className='btn p-0 m-3' id='Food'>
                        <Image src={require('./../images/food.png')} fluid />
                    </button>
                    <button onClick={() => this.handleClick('thekitchn')} className='btn p-0 m-3' id='TheKitchn'>
                        <Image src={require('./../images/thekitchn.png')} fluid />
                    </button>
                    <button onClick={() => this.handleClick('yummly')} className='btn p-0 m-3' id='Yummly'>
                        <Image src={require('./../images/yummly.png')} fluid />
                    </button>
                    <button onClick={() => this.handleClick('chow')} className='btn p-0 m-3' id='Chow'>
                        <Image src={require('./../images/chow.png')} fluid />
                    </button>
                    <button onClick={() => this.handleClick('epicurious')} className='btn p-0 m-3' id='Epicurious'>
                        <Image src={require('./../images/epicurious.png')} fluid />
                    </button>
                    <button onClick={() => this.handleClick('simplyrecipes')} className='btn p-0 m-3' id='SimplyRecipes'>
                        <Image src={require('./../images/simplyrecipes.jpg')} fluid />
                    </button>
                    <button onClick={() => this.handleClick('cookinglight')} className='btn p-0 m-3' id='CookingLight'>
                        <Image src={require('./../images/cookinglight.png')} fluid />
                    </button>
                    <button onClick={() => this.handleClick('bettycrocker')} className='btn p-0 m-3' id='BettyCrocker'>
                        <Image src={require('./../images/bettycrocker.png')} fluid />
                    </button>
                </Fadein>
            </div>
        )
    }
}
