﻿
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Pulkit Goyal",
  title: "Hi I'm Pulkit Goyal",
  subTitle: emoji("A passionate Software Testing Engineer 🚀 having an experience of testing Web and Mobile applications. Provide services like automation testing, performance testing(Load, Volume, Spike), API testing(Rest and Soap), Manual testing."),
  resumeLink: "https://drive.google.com/file/d/1XgBT5H26K5F62RhQdeJL4VVPIW9F3AZx/view?usp=sharing"  
};

// Your Social Media Link

const socialMediaLinks = {

 // github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/pulkitgoyalqaprofile/",
  gmail: "pulkitclg@gmail.com",
//  gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/pulkit.goyal.520/",
  instagram: "https://www.instagram.com/realpulkit/?hl=en"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK TESTER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Provide 1111111"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Accessbility Testing",
      fontAwesomeClassname: "f368"
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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
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
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Automation Testing",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Performance Testing",
      progressPercentage: "90%"
    },
    {
      Stack: "API Testing(Soap and Rest)",
      progressPercentage: "80%"
    },
    {
      Stack: "Manual Testing",
      progressPercentage: "90%"
    }

  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer In Test",  
      company: "Watermark",
      companylogo: require("./assets/images/watermarkLogo.png"),
      date: "August 2019 – Present",
      desc: "Watermark’s mission is to put better data into the hands of administrators, educators, and learners everywhere in order to empower you to connect information and gain insights into learning that will drive meaningful improvements.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Senior QA Consultant",   
      company: "360 Logica Software Testing Services",
      companylogo: require("./assets/images/360LogicaLogo.jpg"),
      date: "June 2014 – August 2019",
      desc: "A leader in software testing services and quality assurance, 360logica offers high-end software testing programs and test solutions to independent software vendors (ISVs), software product companies, and SMEs."
    },
    // {
    //   role: "Software Engineer Intern",  
    //   company: "Airbnb",
    //   companylogo: require("./assets/images/airbnbLogo.jpg"),
    //   date: "Jan 2015 – Sep 2015",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    // },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
      link: "http://saayahealth.com/"
    },
    {
      image: "https://drive.google.com/uc?id=1MXoXcQRK-pH8J82wyjCW4SJk5AxJe7tf",
      link: "http://nextu.se/"
    }
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "ISTQB- Foundation Level Exam",
      subtitle: "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image:
        "https://www.istqb.org/images/ISTQB.png",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B37odDDA24JzV2hwSDg3aVpQRk0/view?usp=sharing" },
        // { name: "Award Letter", url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing" },
        // { name: "Google Code-in Blog", url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html" }
      ]
    },
    {
      title: "Certified Scrum Product Owner®",
      subtitle: "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: "https://www.scrumalliance.org/ScrumRedesignDEVSite/media/badge-library/SAI_BadgeSizes_DigitalBadging_CSPO.png",
      footerLink: [{ name: "Certification", url: "https://drive.google.com/file/d/1fZ7tTmhYWRgaj4ZA3voPPzjGGu75nJ0M/view?usp=sharing" }]
    },

    {
      title: "Java",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: "https://www.ducatindia.com/images/logo.png",
      footerLink: [
        { name: "Certification", url: "https://drive.google.com/file/d/0B37odDDA24JzcTRKc0tNYUpwUVU/view?usp=sharing" }
//        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
      },
    {
    title: "Java",
    subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    image: "https://www.ducatindia.com/images/logo.png",
    footerLink: [
    { name: "Certification", url: "https://drive.google.com/file/d/0B37odDDA24JzcTRKc0tNYUpwUVU/view?usp=sharing" }
    //        { name: "Final Project", url: "https://pakistan-olx-1.firebaseapp.com/" }
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "saadpasta70@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "twitter"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, podcastSection, contactInfo , twitterDetails};
