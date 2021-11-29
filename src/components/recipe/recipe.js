import React from 'react';
import './recipe.css';

let recipe =[ 
    {
        //--shortbread
    imageSrc: 'https://www.acceptcookies.uk/1images/photos/biscuits/shortbread.jpg',
    name: 'Shortbread',
    link: 'https://www.acceptcookies.uk/1biscuits/shortbread.html'
    },
    //--cookies
    {imageSrc: 'https://www.acceptcookies.uk/1images/photos/biscuits/chocolateChip.jpg',
    name: 'Chocolate Chip Cookies',
    link: 'https://www.acceptcookies.uk/1biscuits/chocolateChipCookies.html'
    },
    //--raspberry
    {imageSrc: 'https://www.acceptcookies.uk/1images/photos/biscuits/Hobnob_270x270.jpg',
    name: 'Raspberry Crunch',
    link: 'https://www.acceptcookies.uk/1biscuits/raspberryCrunch.html'
    },
    //--lemon
    {imageSrc: 'https://www.acceptcookies.uk/1images/photos/biscuits/bluelemon.jpg',
    name: 'Lemon & Blueberry',
    link: 'https://www.acceptcookies.uk/1biscuits/lemonBlueberry.html'
    }
]

class Recipe extends React.Component {
    render(){
        return (
            <div className="Recipe-box">
    <div className="Recipe">
            <div className="image-container">
                <img src={recipe[0].imageSrc} alt=''/>
            </div>
            <a className="recipe-link"
                href={recipe[0].link}
                target="_blank"
                rel="noopener noreferrer">
            <h2>{recipe[0].name}</h2>
            </a>
    </div>

    <div className="Recipe">
            <div className="image-container">
                <img src={recipe[1].imageSrc} alt=''/>
            </div>
            <a className="recipe-link"
                href={recipe[1].link}
                target="_blank"
                rel="noopener noreferrer">
            <h2>{recipe[1].name}</h2>
            </a>
    </div>

    <div className="Recipe">
            <div className="image-container">
                <img src={recipe[2].imageSrc} alt=''/>
            </div>
            <a className="recipe-link"
                href={recipe[2].link}
                target="_blank"
                rel="noopener noreferrer">
            <h2>{recipe[2].name}</h2>
            </a>
    </div>

    <div className="Recipe">
            <div className="image-container">
                <img src={recipe[3].imageSrc} alt=''/>
            </div>
            <a className="recipe-link"
                href={recipe[3].link}
                target="_blank"
                rel="noopener noreferrer">
            <h2>{recipe[3].name}</h2>
            </a>
    </div>
    
    </div>)
    }
}

export default Recipe;