import { ReactComponent as Arrow } from '../img/arrow_1.svg';
import { FoodList } from '../Components/Home/home';
import { useState } from 'react';

const Home = (props) => {
    return (
        <div className = "main_body">
            <h1 className="h1"> Welcome to FoodCycle </h1>
            <p className="text1">A place where we bring more awareness to food waste and date label confusion.</p>
            <p className="text2">Scroll down to check you food date label </p>
            <Arrow className="img" />
            <FoodList setList={props.setList} listData={props.listData}/>
        </div>
    )
}

export default Home;