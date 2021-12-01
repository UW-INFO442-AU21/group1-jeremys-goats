const About = () => {
    return (
<div> 
            <div className="flex-container">
                <section className="flex-item">
                    <div className="About-PageTxt">
                    <header>
                        <h2>Problem Statement</h2>
                    </header>
                         <p className="problem">
                        Data label confusion is one of many factors that contributes to the food waste problem.
                        </p>
                     </div>
                   
                    <div className="Our-SolutionTxt">
                    <header>
                        <h2>Our Solution</h2>
                    </header>
                        <p className="solution">
                        An expiration date guide that allows our users to figure out when their food expires and mitigate the food waste problem. 
                        </p>
                    </div>
                    
                    <div className="GoalTxt">
                    <header>
                        <h2>Our Goal</h2>
                    </header>
                        <p className="goal">
                        Our goal is to potentially reduce the amount of food that goes to waste. 
                        </p>
                    </div>
            </section>
           </div>
        </div>
    );
}

export default About;