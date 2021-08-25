const { NavLink, Route } = ReactRouterDOM




export function About() {



    return (
        <section className="about">
            <strong>We are all about the sauce</strong>
            <p>Meet out team</p>
            <div className="cards">

                <div className="team-card">
                    <img src="../../css/assests/imgs/lior.PNG" className="about-img" />
                    <div>
                        <h4>Lior leizerovitch</h4>
                        <p>Just created this meme editor go ahead have fun</p>
                        <div className="socials">
                            <a className="linked" href="#"></a>
                            <a className="git" href="#"></a>
                            <a className="face" href="#"></a>
                        </div>
                    </div>
                </div>
                <div className="team-card">
                    <img src="../../css/assests/imgs/tal.jpeg" className="about-img" />
                    <div>
                        <h4>Tal Ekroni</h4>
                        <p>Just created this meme editor go ahead have fun</p>
                        <div className="socials">
                            <a className="linked" href="#"></a>
                            <a className="git" href="#"></a>
                            <a className="face" href="#"></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        // <section>


        // </section>
    )
}
