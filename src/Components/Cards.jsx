export function Cards() {
    return (
        <div>
            {/* cards go here */}
            <div class="row">
                <div class="column">
                    <div class="card">
                        <h2>
                            <a href="https://zenhabits.net/50-tips-for-grocery-shopping/" target="_blank">Grocery Planning Tips</a>
                        </h2>
                        <div className="icon">
                            <img src="icons/grocery.png" alt="Bag full of grocery"></img>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h2>
                            <a href="https://stefanieoconnell.com/stop-buying-stuff-dont-need/" target="_blank">How Not to Overbuy</a>
                        </h2>
                        <div className="icon">
                            <img src="icons/money.png" alt="Brocken piece of money"></img>
                        </div>
                    </div>
                </div>
                <div class="column">
                    <div class="card">
                        <h2>
                            <a href="https://www.feedingamerica.org/hunger-blog/what-donate-food-bank-and-what-avoid" target="_blank">What Foods You Can Donate</a>
                        </h2>
                        <div className="icon">
                            <img src="icons/list.png" alt="A list icon"></img>
                        </div>
                    </div>
                </div>

            </div>
            <div class="column">
                <div class="card">
                    <h2>
                        <a href="https://www.feedingamerica.org/find-your-local-foodbank" target="_blank">Find Your Local Food Bank</a>
                    </h2>
                    <div className="icon">
                        <img src="icons/dining-room.png" alt="Food shelter icon"></img>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <h2>
                        <a href="https://www.4ocean.com/blogs/blog/11-sustainable-grocery-shopping-tips" target="_blank">How to Shop Sustainably</a>
                    </h2>
                    <div className="icon">
                        <img src="icons/planet-earth.png" alt="Globe with plants around it"></img>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="card">
                    <h2>
                        <a href="https://clark.com/save-money/save-money-on-groceries/" target="_blank">Better Ways to Spend</a>
                    </h2>
                    <div className="icon">
                        <img src="icons/money-saving.png" alt="Coin going into piggy bank"></img>
                    </div>
                </div>
            </div>
        </div>
    );
}