import { ReactComponent as Arrow } from '../img/arrow_1.svg';

const Home = () => {
    return (
        <div className = "main_body">
            <h1 className="h1"> Welcome to FoodCycle </h1>
            <p className="text1">A place where we bring more awareness to food waste and date label confusion.</p>
            <p className="text2">Scroll down to check you food date label </p>
            <Arrow className="img" />
        </div>
    )
}

export default Home;