import React from "react"

export default function Info() {
    return (
        <div className="info">
            <img className="info--profile-photo" src="./images/profile-photo.jpeg" />
            <h2>Mallory Antomarchi</h2>
            <h5 className="info--title">AI Engineer | Front-End Developer</h5>
            <button className="info--button">
                <a className="info--link" href="https://github.com/malloai">GitHub</a>
            </button>
            <button className="info--button" id="info--linkedin">
                <a className="info--link" id= "info--linkedin-link" href="https://www.linkedin.com/in/malloai/">LinkedIn</a>
            </button>
        </div>
    )
}