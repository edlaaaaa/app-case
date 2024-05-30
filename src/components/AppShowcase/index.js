import {Component} from 'react'
import './index.css'

class AppShowcase extends Component {
  render() {
    return (
      <div className="mobile-app-container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"> </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                About Us
              </a>
              <a className="nav-link" href="#">
                Features
              </a>
              <a className="nav-link" href="#">
                Contact
              </a>
              <a
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </div>
          </div>
        </nav>
        <h1 className="heading">
          Best Mobile <br /> App Showcase
        </h1>
        <p className="detail">vjhbj khbijhi kljmk</p>
        <button className="read">Read More</button>
      </div>
    )
  }
}

export default AppShowcase
