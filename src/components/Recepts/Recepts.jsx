import React, { useState } from 'react';
import Ingredients from '../Ingredients/Ingredients';

const Recepts = () => {
    const [meal,setMeal] = useState([])
    return (
        <div>
            <input type="radio"  name='food' value="плов" onChange={(e)=> setMeal(e.target.value)}/>
            <label>плов</label>
            <input type="radio"  name='food' value="манты" onChange={(e)=> setMeal(e.target.value)}/>
            <label>лагман</label>
            <input type="radio" name='food' value="лагман" onChange={(e)=> setMeal(e.target.value)}/>
            <label>манты</label>
<Ingredients meal={meal}/>


        </div>
    );
};

export default Recepts;