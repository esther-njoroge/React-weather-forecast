import './index.css'

const Weather = () =>{
    return(
        <div>
            <div className="navbar">
                <nav>
                <h3 className="heading">Rayn</h3>
                <input placeholder="Enter city  name..." className="search"/>
                </nav>
            </div>

            <div>
                <img src="/images/landing.png" className='landing-page'/>
            </div>

            <div>
                <div>
                <img src="/images/humidity.jpeg"/>
                <p>Humidity</p>
                <p>39%</p>

                <img src="/images/sunset3.png"/>
                <p>Sunset</p>
                <p>7:50 pm</p>
    
                </div>

                <div>
                <img src="/images/sun2.webp"/>
                <p>UV Index</p>
                <p>0 0f 10</p>

                <img src="/images/sunrise3.png"/>
                <p>Sunrise</p>
                <p>6:35pm</p>
                </div>

                <div>
                <div>
                    <p>Monthly Rainfall</p>
                    <p>45mm</p>
                    <p>This Year</p>
                    <p>+17%</p>
                    </div>
                    <div>
                        <img src="/images/temperature.jpeg"/>
                    </div>

                </div>
            </div>


        </div>

    )
}

export default Weather;