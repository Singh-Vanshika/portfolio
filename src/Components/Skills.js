import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from "@fortawesome/free-solid-svg-icons";


class Skills extends Component {
  constructor(props) {
    super(props);

    this.skills = props.skills;
  }

  render() {
    return(
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="skills">
        <div className="w-100">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">Programming Languages &amp; Tools</div>
          
          {
              <div>
               <ul className="list-inline dev-icons">
                          <li className="list-inline-item"><span className="iconify" data-icon="logos:mysql" color="#101010"></span></li>
                          &nbsp;<li className="list-inline-item"><span className="iconify" data-icon="simple-icons:mysql" color=  "#DC3E15" width= "60" height="60"></span></li>
                          &nbsp;<li className="list-inline-item"><span className="iconify" data-icon="logos:python"></span></li>

                    &nbsp;<li className="list-inline-item"><span className="iconify" data-icon="logos:jira"></span></li>
                    &nbsp;<li className="list-inline-item"><span className="iconify" data-icon="logos:git"></span></li>
                    &nbsp;<li className="list-inline-item"><span className="iconify" data-icon="logos:github"></span></li>
                    &nbsp;<li className="list-inline-item"><span className="iconify" data-icon="logos:aws"></span></li>
                    &nbsp;<li className="list-inline-item"><span className="iconify" data-icon="logos:data"></span></li>

                    &nbsp;<li className="list-inline-item"><span className="iconify" data-icon="mdi:microsoft-office" color = "#DC3E15"></span></li>

                </ul>
                <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">
                    <li>
                        <span className="fa-li"><FontAwesomeIcon icon={faCheck} color="#34994f"/></span>
                        Uderstanding - UX + Tech + Bussiness
                    </li>
                    <li>
                        <span className="fa-li"><FontAwesomeIcon icon={faCheck} color="#34994f"/></span>
                        Product Vision & Development
                    </li>
                    <li>
                        <span className="fa-li"><FontAwesomeIcon icon={faCheck} color="#34994f"/></span>
                        Cross Functional Teams
                    </li>
                    <li>
                        <span className="fa-li"><FontAwesomeIcon icon={faCheck} color="#34994f"/></span>
                        Agile Development & Scrum
                    </li>
                    <li>
                        <span className="fa-li"><FontAwesomeIcon icon={faCheck} color="#34994f"/></span>
                        KPI & Metrics tracking
                    </li>
                </ul>
            </div>
          }
          
        </div>
      </section>
    );
  }
}

export default Skills;