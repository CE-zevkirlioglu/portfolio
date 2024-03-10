const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#',
  title: 'C.E.Z.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Coşkun Emre ',
  surname:'Zevkirlioğlu',
  role: 'Software Engineer',
  description: 'I\'m a software engineer with a passion for all fields of software development.',
  description1: 'I pursuing graduation from Hasan Kalyoncu University in Gaziantep/Turkey.',
  description2: 'Most of my experience is in full-stack development and problem-solving.',
  resume: '/Coskun Emre Zevkirlioglu - CV.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/cezevkirlioglu/',
    github: 'https://github.com',
    twitter: 'https://x.com/emre_zevkir',
  },
  photoLink: `${process.env.PUBLIC_URL}/circlePhoto.png`,
}

const education = [
  {
    timeLine: '2016 – 2020',
    schoolName : '19 Mayıs Lisesi',
    type: 'High School',
    explanation: 'I graduated top of my class with outstanding achievements throughout high school. In addition to my achievements in classes throughout the academic year, my leadership, contributions to the student community, and active participation in extra educational activities helped me achieve the first degree.'
  },
  {
    timeLine: '2020 – Present',
    schoolName : 'Hasan Kalyoncu University',
    type: 'Software Engineering - Undergraduate',
    explanation: 'I am a third-year student studying Software Engineering at Hasan Kalyoncu University. While pursuing my degree, I have been involved in a few projects and continue to enhance my technical knowledge and skills in the field of software engineering.'
  },

]

const certificates = [

  {
    name: 'Certificate 1',
    imgLink: `${process.env.PUBLIC_URL}/certificates/AgTeknolojileri-101-Sertifikası.jpg`,
    description: '',
    stack: ['Network Technologies 101'],
    livePreview: '',
  },
  {
    name: 'Certificate 2',
    imgLink: `${process.env.PUBLIC_URL}/certificates/BulutTeknolojileri-101-Sertifikası.jpg`,
    description:'',
    stack: ['Cloud Technologies 101'],
    livePreview: '',
  },
  {
    name: 'Certificate 3',
    imgLink: `${process.env.PUBLIC_URL}/certificates/CevikYonetim-101-Sertifikası.jpg`,
    description:'',
    stack: ['Agile Project Management 101'],
    livePreview: '',
  },
  {
    name: 'Certificate 4',
    imgLink: `${process.env.PUBLIC_URL}/certificates/Metaverse-101-Sertifikası.jpg`,
    description:'',
    stack: ['Metaverse 101'],
    livePreview: '',
  },
  {
    name: 'Certificate 5',
    imgLink: `${process.env.PUBLIC_URL}/certificates/MobilGelistirme-101-Sertifikası.jpg`,
    description:'',
    stack: ['Mobile App Development 101'],
    livePreview: '',
  },
  {
    name: 'Certificate 6',
    imgLink: `${process.env.PUBLIC_URL}/certificates/Oyunlastırma-101-Sertifikası.jpg`,
    description:'',
    stack: ['Gamification 101'],
    livePreview: '',
  },
  {
    name: 'Certificate 7',
    imgLink: `${process.env.PUBLIC_URL}/certificates/Siber-Guvenlik-101-Sertifikası.jpg`,
    description:'',
    stack: ['Cyber Security 101'],
    livePreview: '',
  },
  {
    name: 'Certificate 8',
    imgLink: `${process.env.PUBLIC_URL}/certificates/Veri-101-Sertifikası.jpg`,
    description:'',
    stack: ['Data 101'],
    livePreview: '',
  },
  {
    name: 'Certificate 9',
    imgLink: `${process.env.PUBLIC_URL}/certificates/YAPAY-ZEKA-101-Sertifikası.jpg`,
    description:'',
    stack: ['Artificial Intelligence 101'],
    livePreview: '',
  },

]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    imgLink: `${process.env.PUBLIC_URL}/projects/project1.jpg`,
    description:
      'Students coming together from different departments such as Software, Computer and Electrical and Electronics engineering became finalists in the autonomous vehicle category for the Teknofest competition.',
    stack: ['Python', 'Image Processing', 'Linux - Ubuntu', 'Gazebo Simulation'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://www.hku.edu.tr/haberler/ar-ge/otonom-arac-yazilim-ve-teknolojileri-egitimi-hkude-yapildi/',
    livePreview1: 'https://www.hku.edu.tr/haberler/otonom-araclar-ve-mobilitede-bilisim-vadisi-ve-hasan-kalyoncu-universitesi-is-birligi/',
  },
  {
    name: 'Project 2',
    imgLink: `${process.env.PUBLIC_URL}/projects/project2.jpg`,
    description:
      'Automatic opening window for heart attack and asthma patients. This project, part of the FE401 multidisciplinary integrated project course, develops a smart home window with sensors to help asthma and heart attack patients. By combining mechanical and AI components, it aims to enhance patients\' lives, demonstrating the value of interdisciplinary collaboration.',
    stack: ['C', 'C++', 'Arduino Uno'],
    sourceCode: 'https://github.com',
    livePreview: 'https://drive.google.com/file/d/1MvlOcbt3HdCTrzwkc68MTD06-A5NES35/view?usp=sharing',
    livePreview1: 'https://drive.google.com/file/d/1xw5LdxP0VaDn_Il0DASbsDM5rrJmWToG/view?usp=sharing',
  },
  {
    name: 'Project 3',
    imgLink: `${process.env.PUBLIC_URL}/projects/project3.jpg`,
    description:
      'This project outlines the design of smart shopping carts developed for a software requirement analysis course. These carts aim to enhance shopping experiences with features like touch screens and product recognition cameras. The system prioritizes user interface design and includes functions such as glove detection and personalized shelf navigation.',
    stack: ['Balsamiq', 'Adobe Photoshop', 'User Interface Design'],
    // sourceCode: 'https://github.com',
    livePreview: 'https://drive.google.com/file/d/1YXGfghYVb8xP0d6p5dgskilf9vLPg4wb/view?usp=sharing',
    livePreview1: 'https://drive.google.com/file/d/1Zk60q2TNy8hSToGcTJAyAfcfB7gKTFmI/view?usp=sharing',
  },
  
]
const myFronted = ['HTML5', 'CSS3', 'JavaScript','React','React Native', 'Figma', 'Adobe Photoshop', 'Adobe Illustrator', 'Adobe XD' , 'Balsamiq'];
const myBackend = ['PHP', 'Pyhton', 'Django', 'ASP.NET Core', 'Laravel', 'Flask', 'Node.js'];
const myOthers = ['C', 'C++', 'C#', 'SQL', 'NoSQL', 'Testing', 'Clean Code Principles', 'Designing' , 'Algorithms' , 'Problem Solving', 'Project Management', 'Camtasia', 'Responsive Design', 'Teamwork'];
const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'React Native',
  'C',
  'C++',
  'C#',
  'Git',
  'Github',
  'SQL',
  'MSSQL',
  'MYSQL',
  'Python'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'cemre.zevkirlioglu@std.hku.edu.tr',
}

export { header, about, projects, skills, contact, myFronted, myBackend, myOthers, education, certificates }
