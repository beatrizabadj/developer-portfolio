import React from "react";
import "./SoftwareSkill.scss";
import { ReactComponent as CsharpLogo } from "../../assets/images/icons8-c-sharp-logo.svg";
import { ReactComponent as FlaskLogo } from "../../assets/images/icons8-flask.svg";
import { ReactComponent as DjangoLogo } from "../../assets/images/icons8-django.svg";
import { ReactComponent as NETLogo } from "../../assets/images/dot-net-core-7.svg";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skillsSection.softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                {skills.icon ? (
                  skills.skillName === "Csharp" ? 
                  ( <CsharpLogo style={{ width: "55px", height: "50px" }} />
                  ) : skills.skillName === "django" ? 
                  ( <DjangoLogo style={{ width: "55px", height: "50px" }} />
                  ): skills.skillName === "flask" ? (
                    <FlaskLogo style={{ width: "55px", height: "50px" }} />
                  ) : skills.skillName === ".NET" ?
                  ( <NETLogo style={{ width: "55px", height: "50px" }} />
                  ) : undefined
                ) : (
                    <i className={skills.fontAwesomeClassname}></i>
                  )}
                  <p>{skills.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
