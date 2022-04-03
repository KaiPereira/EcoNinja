import axios from "axios"
import React from "react"
import Aos from "aos"
import "aos/dist/aos.css"

export default function HomeMain() {
    React.useEffect(() => {
        Aos.init({
            duration: 1000
        })
    }, [])

    const [textareaValue, changeTextareaValue] = React.useState({
        textarea: ""
    })
    const [challenge, changeChallenge] = React.useState("")
    React.useEffect(() => {
        axios.get("https://eco-ninja.herokuapp.com/daily-challenge")
            .then(data => changeChallenge(data.data))
    }, [])

    function onTextareaChange(event) {
        changeTextareaValue(prevState => {
            return {
                ...prevState,
                textarea: event.target.value
            }
        })
    }
    function requestSubmit() {
        const details = {
            challenge: textareaValue.textarea
        }
        axios.post("https://eco-ninja.herokuapp.com/new-request", details)
    }
    return (
        <main>
            <section className="homeMain" id="about">
                <div className="homeMainInfo">
                    <h1 data-aos="fade-up" data-aos-once="true" data-aos-delay="500">Creating Change, One Step at a Time</h1>
                    <p data-aos="fade-up" data-aos-once="true" data-aos-delay="700">EcoNinja’s goal is to create change one step at a time. By providing daily environmental challenges everyday we hope that people can slowly reduce their footprint on our planet</p>
                    <div data-aos="fade-up" data-aos-once="true" data-aos-delay="900">
                        <a href="/#challenge">View Challenge</a>
                    </div>
                </div>
                <div className="homeMainImage">
                    <img src="ninja.png" alt="Ninja" data-aos="fade-up" data-aos-once="true" data-aos-delay="1100"/>
                </div>
            </section>
            <section className="homeArrowTransition">
                <div className="homeLine"></div>
                <i className="fa-solid fa-angle-down homeArrow"></i>
            </section>
            <section className="homeMissions" id="mission">
                <h2 data-aos="fade-up" data-aos-once="true" data-aos-offset="300">Our Missions</h2>
                <div className="homeMission" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                    <i className="fa-solid fa-shoe-prints homeMissionIcon"></i>
                    <p>We believe we can help everyone take gradual steps towards reducing their negative footprint on earth   </p>
                    <div className="homeMissionLine"></div>
                </div>
                <div className="homeMission homeMissionReverse" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                <i className="fa-solid fa-book homeMissionIcon"></i>
                    <p>We believe in educating people about what they are doing to our dear planet and how they can reduce their harm</p>
                    <div className="homeMissionLine"></div>
                </div>
                <div className="homeMission" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                <i className="fa-solid fa-people-arrows-left-right homeMissionIcon"></i>
                    <p>We hope others will spread their knowledge they gained from our platform to spread awareness about our environment</p>
                    <div className="homeMissionLine"></div>
                </div>
            </section>
            <section className="homeChallenge" id="challenge">
                <h3 data-aos="fade-up" data-aos-once="true" data-aos-offset="300">Our Daily Challenge</h3>
                <div className="homeChallengeChallenge" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                    <img src="logo.png" alt="logo"/>
                    <p className="homeChallengeVersion">Challenge #1</p>
                    <p className="homeChallengeText">{challenge}</p>
                </div>
            </section>
            <form className="homeRequest" onSubmit={requestSubmit} data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                <h4><span>Request</span> a new challenge?</h4>
                <textarea onChange={onTextareaChange} value={textareaValue.textarea} className="homeRequestInput" placeholder="Type Challenge Here" required></textarea>
                <button>Submit</button>
            </form>
            <section className="homeNewsletter" data-aos="fade-up" data-aos-once="true" data-aos-offset="300">
                <h5><span>Sign up</span> to our newsletter!</h5>
                <input className="homeNewsletterSignup" placeholder="Email..." />
            </section>
        </main>
    )
}