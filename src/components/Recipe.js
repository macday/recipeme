import React from 'react'

export default function Recipe(props) {
    return (
        <div className='Recipe p-3'>
            <h4>{props.title}</h4>
            <hr />
            <div className='row'>
                <div className='col ingredients-section'>
                    <h3>Ingredients</h3>
                    <ul className='list-group'>
                        {
                            Object.keys(props.ingredients).map(key => 
                                <li className='list-group-item'> {props.ingredients[key]} </li>
                            )
                        }
                    </ul>
                </div>
                <div className='col'>
                    <h3>Instructions</h3>
                    <ul className='list-group'>
                        {
                            Object.keys(props.instructions).map(key => 
                                <div className='p-0'>
                                    <li className='list-group-item my-1'>
                                        <h6 className='text-secondary'> {key} </h6>
                                        <p className='text-secondary font-weight-light p-0'>
                                            {props.instructions[key]}
                                        </p>
                                    </li>
                                </div>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

