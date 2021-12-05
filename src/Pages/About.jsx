import ReactPlayer from "react-player";


function About() {
    return (
        <div>
            <div className="flex-container centertext">
                <section className="flex-item">
                    <div className="AboutContext">
                        <header>
                            <h2>Problem Statement</h2>
                        </header>
                        <p className="SubText">
                            Data label confusion is one of many factors that contributes to the food waste problem.
                        </p>
                    </div>
 
                    <div className="AboutContext">
                        <header>
                            <h2>Our Solution</h2>
                        </header>
                        <p className="SubText">
                            An expiration date guide that allows our users to figure out when their food expires and mitigate the food waste problem.
                        </p>
                    </div>

                    <div className="AboutContext">
                        <header>
                            <h2>Our Goal</h2>
                        </header>
                        <p className="SubText">
                            Our goal is to potentially reduce the amount of food that goes to waste.
                        </p>
                    </div>
                        <ReactPlayer
                            className='video'
                            url='https://www.youtube.com/watch?v=KpD3joneuwY' />
                </section>
            </div>
        </div>
    );
}

export default About;


