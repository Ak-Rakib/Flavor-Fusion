/* eslint-disable react/prop-types */
import React from 'react';

const PopularMenuShowing = ({info}) => {
    const {name, image, recipe, price} = info;
    return (
        <div className='flex'>
            <img style={{borderRadius:"0px 200px 200px 200px"}} className='w-[200px]' src={image} alt="" />
            <div>
                <h1>{name}----------------</h1>
                <p>{recipe}</p>
            </div>
            <p className='text-[#7FD8BE]'>{'$'+price}</p>
        </div>
    );
};

export default PopularMenuShowing;