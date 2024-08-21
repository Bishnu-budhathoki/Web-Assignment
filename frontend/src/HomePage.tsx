import React from 'react';
import './homepage.css';
import main from "./assets/BMW.jpg";




const HomePage: React.FC = () => {
    return (
        <div className="home-body">

            <main className="home-main">
                <div className="home-hero" style={{background: `url(${main}) no-repeat center center/cover`}}>

                </div>
            </main>

            {/*<div className="home-background" style={{background: `url(${system}) no-repeat center center/cover`}}>*/}

            {/*</div>*/}

        </div>
    );
};

export default HomePage;











