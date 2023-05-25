import React, { useEffect, useState } from 'react';
import ShowingChefRecommendsMenu from './ShowingChefRecommendsMenu/ShowingChefRecommendsMenu';
import SharedTitle from '../../../Components/SharedTitle/SharedTitle';

const ChefRecommends = () => {
    const [recommendsMenu, setRecommendsMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(data => {
            setRecommendsMenu(data)
        });
    },[]);
    return (
        <div className='mb-20'>
            <SharedTitle
                subHeading={"---Should Try---"}
                heading={"CHEF RECOMMENDS"}
            ></SharedTitle>
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    recommendsMenu.slice(0, 3).map(menu => <ShowingChefRecommendsMenu
                        key={menu._id}
                        menu = {menu}
                    ></ShowingChefRecommendsMenu>)
                }
            </div>
        </div>
    );
};

export default ChefRecommends;