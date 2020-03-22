import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Recipe from './Recipe'
import './../styles/Scraper.css'

const axios = require("axios")
const cheerio = require("cheerio")

export default class Scraper extends Component {
    constructor(props) {
        super(props)
        this.state = {
            site: this.props.site,
            tags: this.props.tags
        }
        this.scraperFunc = this.scraperFunc.bind(this)
    }

    async scraperFunc() {
        //store URL to site as constant
        const siteURL = document.getElementById('recipe-link').value
    
        //wait on access request and load html into cheerio
        const html = await axios.get(siteURL);
        const $ = await cheerio.load(html.data)
        // name of the recipe
        let name = $(this.state.tags.header).text()
        // array to store ingredients in
        // let ingredients = []
        let ingredients = {}
        // array to store instructions in
        // let steps = []
        let steps = {}
      
        // scrape website for ingredients
        $(this.state.tags.ingredient).each((i, elem) => {
            // ingredients.push({
            //   ingredient: $(elem).text()
            // })
            ingredients[`ingredient-${i}`] = $(elem).text()
        })
      
        // scrape website for instructions
        $(this.state.tags.instruction).each((i, elem) => {
            // steps.push({
            //   num: i+1,
            //   step: $(elem).text()
            // })
            steps[`Step ${i+1}`] = $(elem).text()
        })
        
        //log the results
        // console.log(ingredients)
        // console.log(steps)
        //load the results to the webpage
        ReactDOM.render(<Recipe title={name} ingredients={ingredients} instructions={steps} link={siteURL} />, document.getElementById('recipes'))
    }

    render() {
        return (
            <div className='Scraper input-group mt-3'>
                <div className='input-group-prepend'>
                    <span className='input-group-text'>Recipe Link</span>
                </div>
                <input id='recipe-link' type='link' className='form-control' placeholder='Paste link here!' />
                <div className='input-group-append' >
                    <button className='btn btn-info' onClick={() => this.scraperFunc()}>Let's Go!</button>
                </div>
            </div>
        )
    }
}
