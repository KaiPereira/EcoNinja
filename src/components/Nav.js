import React from "react"
import { Link } from "react-router-dom";

export default function Nav(props) {
    const [style1, changeStyle1] = React.useState(false)
    const [style2, changeStyle2] = React.useState(false)
    const [style3, changeStyle3] = React.useState(false)
    const [style4, changeStyle4] = React.useState(false)

    function onTextOver(state) {
        state(false)
    }
    function onTextOff(state) {
        state(true)
    }
    return (
        <>
            <nav>
                <div className="navLogo">
                    <img src="logo.png" alt="Logo"/>
                    <p><span>Eco</span>Ninja</p>
                </div>
                <div className="navElements">
                        <div className="navElement">
                            <div className="navElementTextContainer">
                                <a href="/#about" className="navElementText" onMouseLeave={() => onTextOver(changeStyle1)} onMouseEnter={() => onTextOff(changeStyle1)}>About</a>
                            </div>
                            <div className={style1 ? "navElementTextHoverContainerHover" : "navElementTextHoverContainer"}></div>
                        </div>
                        <div className="navElement">
                            <div className="navElementTextContainer">
                                <a href="/#mission" className="navElementText" onMouseLeave={() => onTextOver(changeStyle2)} onMouseEnter={() => onTextOff(changeStyle2)}>Mission</a>
                            </div>
                            <div className={style2 ? "navElementTextHoverContainerHover" : "navElementTextHoverContainer"}></div>
                        </div>
                        <div className="navElement">
                            <div className="navElementTextContainer">
                                <a href="/#challenge" className="navElementText" onMouseLeave={() => onTextOver(changeStyle3)} onMouseEnter={() => onTextOff(changeStyle3)}>Challenge</a>
                            </div>
                            <div className={style3 ? "navElementTextHoverContainerHover" : "navElementTextHoverContainer"}></div>
                        </div>
                        <div className="navElement">
                            <div className="navElementTextContainer">
                                <Link to="/resources" className="navElementText" onMouseLeave={() => onTextOver(changeStyle4)} onMouseEnter={() => onTextOff(changeStyle4)}>Resources</Link>
                            </div>
                            <div className={style4 ? "navElementTextHoverContainerHover" : "navElementTextHoverContainer"}></div>
                        </div>
                </div>

                {
                    props.navState ? <i className="fa-solid fa-bars navBars" onClick={props.navClick}></i> : <i className="fa-solid fa-x navBars" onClick={props.navClick}></i>
                }
            </nav>
            <div className="navDropdownContainerAlign">
                <div className={props.navState ? "navDropdownContainerClose" : "navDropdownContainerOpen"}>
                    <div className="navDropdownElementContainer">
                        <div className="navDropdownElementHover">
                            <a href="/#about" className="navDropdownElementText" onClick={props.navClick}>About</a>
                        </div>
                    </div>
                    <div className="navDropdownElementContainer">
                        <div className="navDropdownElementHover">
                            <a href="/#mission" className="navDropdownElementText" onClick={props.navClick}>Mission</a>
                        </div>
                    </div>
                    <div className="navDropdownElementContainer">
                        <div className="navDropdownElementHover">
                            <a href="/#challenge" className="navDropdownElementText" onClick={props.navClick}>Challenge</a>
                        </div>
                    </div>
                    <div className="navDropdownElementContainer">
                        <Link to="/resources" className="navDropdownElementHover" onClick={props.navClick}>
                            <div className="navDropdownElementText">Resources</div>
                        </Link>
                    </div>
                </div>
           </div>
        </>
    )
}