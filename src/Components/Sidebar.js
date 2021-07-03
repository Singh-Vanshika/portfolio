import React, { Component } from 'react';
import image from '../Assets/IMG_1048.png';

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.sidebarData = props.sidebarData;
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
        <a className="navbar-brand js-scroll-trigger" href="#about">
          <span className="d-block d-lg-none">{this.sidebarData.firstName} {this.sidebarData.lastName}</span>
          <span className="d-none d-lg-block">
            <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={image} alt=""></img>
          </span>
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#about">About Me 👩‍💻</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#experience"> Work Experience 💻</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#education">Education 🎓</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#skills">Skills 💯</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#achievements">Achievements 🏆</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#testimonials">Testimonials 🌟</a>
            </li>
            <li className="nav-item">
              <a className="nav-link js-scroll-trigger" href="#resume">Resume 📜</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Sidebar;
