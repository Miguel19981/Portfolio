import React from 'react';
import ArticleCard from '../components/ArticleCard/ArticleCard.jsx';
import './page.css';
import WorkWidget from '../components/WorkWidget/WorkWidget.jsx'; // Import the WorkWidget component
import SkillsWidget from '../components/SkillsWidgets/SkillsWidget.jsx';
import SignupWidget from '../components/SignupWidget/SignupWidget.jsx';
// Define your work experiences data
const experiences = [
  {
    logo: './images/slack.png',
    organization: 'Slack',
    jobTitle: 'Software Engineer',
    startYear: 2016,
    endYear: 'Present'
  },
  {
    logo: './images/spotify.jpeg',
    organization: 'Spotify',
    jobTitle: 'Software Engineer',
    startYear: 2014,
    endYear: 2015
  },
  {
    logo: './images/audible.webp',
    organization: 'Audible',
    jobTitle: 'Software Engineer',
    startYear: 2012,
    endYear: 2013
  },
  {
    logo: './images/microsoft (2).svg',
    organization: 'Microsoft',
    jobTitle: 'Software Engineer',
    startYear: 2010,
    endYear: 2011
  }
  // Add more experiences as needed
];
const skills = [
  { name: "HTML", proficiency: 60, icon: './images/3.jpg' },
  { name: "CSS", proficiency: 50, icon: './images/5.jpg' },
  { name: "JavaScript", proficiency: 75, icon: './images/js.jpg' },
]

const articles = [
  {
    date: 'Sep 25, 2021',
    title: 'BYU-Pathway Missionary support',
    content: '"BYU-Pathway Missionary Support provides essential resources and guidance to missionaries, aiding them in balancing their spiritual and educational pursuits. Through tailored programs, financial assistance, and academic advising, it empowers missionaries to continue their educational journey alongside their mission work, ensuring they are equipped for personal growth and future opportunities"',
    link: 'https://www.byupathway.edu/',
  },
  {
    date: 'Jun 01, 2020',
    title: 'TRC-MTC',
    content: '"The TRC-MTC, or Training Resource Center for Missionary Training Centers, serves as the cornerstone for preparing missionaries for their sacred service. "',
    link: 'https://provo.mtc.byu.edu/',
  },
  {
    date: 'Sep 2, 20',
    title: 'Lorem ipsum dolor sit amet',
    content: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."',
    link: 'https://medium.com/javascript-scene/the-missing-introduction-to-react-62837cb2fd76',
  },
];

const Home = () => {
  return (
    <div className="page-container">
      <div className="articles">
        <main>
          <div className="article-card-header">
            <img className="avatar" src='./images/Capture.PNG' alt="Avatar" />
            <div>
              <time>{/* Add your date here */}</time>
              <h1>Miguel Manzano</h1>
            </div>
          </div>
          <p className="intro-paragraph">
          Cyber Sentry: Safeguarding Digital Frontiers.
          </p>
          <div className="social-media-icons">
            <img src="./images/ficon.webp" alt="Facebook" />
            <img src="./images/xicon.png" alt="Twitter" />
            {/* Add more social media icons as needed */}
          </div>
        </main>

        <div className="articles-card">
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              date={article.date}
              title={article.title}
              content={article.content}
              link={article.link}
            />
          ))}
        </div>
      </div>

      <div className="right-side">

      <SignupWidget
        title={'Stay up to date'}
        content={'Get notified when I publish something new, and unsubscribe at any time.'}
      />
        {/* WorkWidget component */}
        <WorkWidget
          title="My Work Experience"
          content="Check out my previous work experiences."
          experiences={experiences}
        />
    <SkillsWidget
              title={"Skills"}
              content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi."}
              skills={skills}
      />


      </div>

    </div>

  );

};


export default Home;
