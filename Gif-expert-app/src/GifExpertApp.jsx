import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);
    
    const onAddCategory = (onNewCategory) => {
        if(categories.includes(onNewCategory)) return;
        setCategories([onNewCategory, ...categories]);
        //setCategories( cats => [...cats, 'Valorant']);
        
    }

  return (
    <>
        <h1>GifExpertApp</h1>

        {/* Input */}
        <AddCategory  
            //setCategories={setCategories}
            onNewCategory={onAddCategory}
        />
        {/* Listado de gifs */}
        
        
            {categories.map((category) => {
                //<GifGrid key={category} category={category}/>; //Por alguna razon no funciono asi  
               return( <div key={category}>
                    <h3>{category}</h3>
                    <li>{category}</li>
                </div>
                )
            })
            }
        
            {/*gif items*/}
    </>
    )
}

export default GifExpertApp
