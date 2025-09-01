/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
import reactCertificate from "./assets/images/certificado_fundamentos_de_react.pdf";
import reactCertificate2 from "./assets/images/certificado_react__ampliando_conceptos.pdf";
import bigDataCertificate from "./assets/images/certificado-bigdata-empresas.jpeg";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Beatriz Abad",
  title: "Hi all, I'm Bea",
  subTitle: emoji(
    "I am a Full Stack Developer aiming to build impactful web and mobile applications. Beyond programming, I am passionate about the humanities, and I believe technology should also serve as a tool for raising social awareness. My goal is to merge my technical expertise with my commitment to creating meaningful social impact."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/beatrizabadj",
  linkedin: "https://www.linkedin.com/in/beatriz-abad-973207339//",
  gmail: "beatrizabadjim@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    // emoji(
    //   "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    // )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
  
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
     {
      skillName: "flask",
      icon: true
    },
    {
      skillName: "django",
      icon: true
    },
    {
      skillName: "Csharp",
      icon: true
    },
    {
      skillName: ".NET",
      icon: true
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Fundación Javerianas",
      logo: require("./assets/images/Escola-Tecnico-Professional-Xavier.png"),
      subHeader: "Development of Web Applications - Big Data oriented",
      duration: "September 2023 - May 2025",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Universitat de Barcelona",
      logo: require("./assets/images/ub-logo.png"),
      subHeader: "Bachelor of Sociology",
      duration: "September 2019 - June 2023",
      desc: "Understanding human societies and their evolution and organization to capture collective, structural and individual dynamics that explain social, political, cultural and economic reality.",
      descBullets: [
        "Quantitative and qualitative investigation",
        "Analytical skills",
        "SPSS"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Web Developer Intern",
      company: "IT Nube Consulting",
      companylogo: require("./assets/images/itnube-logo.png"),
      date: "Dec 2024 – June 2025",
      desc: "",
      descBullets: [
        "Initial setup of WordPress websites as well as website closure",
        "Adapting plugin code to specific needs ",
        "Providing technical support to users (creating users, recovering passwords, troubleshooting uploads, etc.)",
        "Website configuration for live and pre-recorded events",
        "Certificate configuration",
        "Being part of the invoicing process and updating GDPR regulations",
        "Using languages ​​such as PHP, HTML/CSS, and Vanilla JS, contributing to the improvement of existing modules"
      ]
    },
    {
      role: "Volunteer",
      company: "EDAD 2000",
      companylogo: require("./assets/images/bonrepos-logo.png"),
      date: "Sept 2017 – July 2018",
      desc: "Volunteer at the residence Bon Repós. Visiting elderly residents regularly to provide companionship and emotional support."
    },
    {
      role: "Administrative Support & SAP Training Intern",
      company: "Serunion",
      companylogo: require("./assets/images/serunion-logo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Basic knowledge of the SAP program"
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: emoji("Projects 💻"),
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/weather.png"),
      projectName: "Weather Forecast",
      projectDate: "May 2025",
      projectDesc: [
        "Check current weather and weather forecast for any city",
        "MVC architecture"
      ],
      projectSoftware: "Csharp, .NET Core, SQLite, HTML, CSS, JS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://m9-m3-final.onrender.com/"
        }
      ]
    },
    {
      image: require("./assets/images/earth.png"),
      projectName: "Earth Explorer",
      projectDate: "Apr 2025",
      projectDesc: [
        "Travel around the world from home",
        "Save your favorite spots and keep track!",
        "Upload your pictures",
        "Admins are somewhat special..."
      ],
      projectSoftware: "PHP, JS, MySQL, HTML, CSS, Three.js, GSAP, toastr.js, loading.io",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://earth-project-frontend.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/juegosdesombras-logo.png"),
      projectName: "SPA for Juegos de Sombras",
      projectDate: "Apr 2025",
      projectDesc: ["SPA for the escape room of Juegos de Sombras"],
      projectSoftware: "HTML, CSS, JS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://beatrizabadj.github.io/juegos-de-sombras/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/discoverspain.png"),
      projectName: "Descubre España",
      projectDate: "Feb 2025",
      projectDesc: [
        "Search images from different Apis",
        "Web apis integrated: Clipboard, Web Share and Fullscreen."
      ],
      projectSoftware: "JS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://m6-proj-abad-beatriz.onrender.com/"
        }
      ]
    },
    {
      image: require("./assets/images/philo.png"),
      projectName: "Philosophers' League",
      projectDate: "Feb 2025",
      projectDesc: [
        "Dynamically creates philosopher cards, deletes, rearranges and saves in local storage",
      ],
      projectSoftware: "JS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://beatrizabadj.github.io/M6-PROJ_Abad_Beatriz/MP06_UF1_PROJ-Abad_Beatriz/index.html"
        }
      ]
    },
    {
      image: require("./assets/images/towers.png"),
      projectName: "Tower Blocks",
      projectDate: "Jan 2025",
      projectDesc: [
        "How many blocks can you stack before it collapses?",
        "Keeps records of your best scores",
        "Available for mobile too!",
      ],
      projectSoftware: "JS, HTML, CSS, SASS, Bootstrap, Howler.js, Apache Cordova, Android Studio",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://tower-blocks-project.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/retrobyte-logo.png"),
      projectName: "Retro Byte",
      projectDate: "Dec 2024",
      projectDesc: [
        "8-bit style website",
        "Exploring figma, animations and interactions",
      ],
      projectSoftware: "JS, HTML, CSS",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://retrobyte-project.vercel.app/"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 📜 "),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "React: Ampliando Conceptos",
      subtitle: "Aug 2025",
      image: require("./assets/images/openwebinars_logo.jfif"),
      imageAlt: "Open Webinars Logo",
      footerLink: [
        {
          name: "Certification",
          url: reactCertificate2
        },
      ]
    },
    {
      title: "Fundamentos de React",
      subtitle:
        "Jul 2025",
      image: require("./assets/images/openwebinars_logo.jfif"),
      imageAlt: "Open Webinars Logo",
      footerLink: [
        {
          name: "Certification",
          url: reactCertificate
        }
      ]
    },
    {
      title: "Big Data for Companies",
      subtitle:
        "Jun 2025",
      image: require("./assets/images/javerianas-logo.png"),
      imageAlt: "Open Webinars Logo",
      footerLink: [
        {
          name: "Certification",
          url: bigDataCertificate
        }
      ]
    },
    {
      title: "First Certificate in English",
      subtitle:
        "May 2016",
      image: require("./assets/images/cambridge-logo.png"),
      imageAlt: "Cambridge Logo Logo",
      footerLink: [
        {
          name: "Certification",
          // url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me 📫"),
  // image: buzonImage,
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "beatrizabadjim@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
