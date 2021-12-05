import { ReactComponent as Arrow } from '../img/arrow_1.svg';
import { FoodList } from '../Components/Home/home';
import GuideForm from '../Components/Guide/Guide'

const Home = ({
    setList,
    list
}) => {
    
    return (
        <div className="container">
            <section className="main_body content">
                <div className="content-body">
                    <h1 className="h1"> Welcome to FoodCycle </h1>
                    <p className="text1">A place where we bring more awareness to food waste and date label confusion.</p>
                    <p className="text2">Scroll down to check your food date label </p>
                    <Arrow className="img" />
                </div>
            </section>
            <section id="guide">
                <GuideForm setList={setList} listData={list} />
                <FoodList setList={setList} listData={list} />
            </section>
        </div>

    )
}

export default Home;