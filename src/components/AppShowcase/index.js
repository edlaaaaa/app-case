import {Component} from 'react'
import './index.css'

class AppShowcase extends Component {
  render() {
    return (
      <div className="mobile-app-container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" href="#">
                Home
              </a>
              <a class="nav-link" href="#">
                About Us
              </a>
              <a class="nav-link" href="#">
                Features
              </a>
              <a class="nav-link" href="#">
                Contact
              </a>
              <a
                class="nav-link disabled"
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
