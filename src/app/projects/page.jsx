import React from 'react';
import CompanyCard from '../../components/CompanyCard/CompanyCard';
import Profile from '../../components/Profile/Profile';

export const metadata = {
  title: 'Portfolio - Cybersecurity Projects',
  description: 'The cybersecurity projects page of my portfolio.',
}

const cybersecurityProjects = [
  {
    name: "Network Penetration Testing",
    description: "Conducted comprehensive penetration testing on a corporate network infrastructure to identify vulnerabilities and recommend security enhancements.",
    link: "https://www.example1.com",
  },
  {
    name: "Web Application Security Assessment",
    description: "Performed thorough security assessment on a web application, including code review, vulnerability scanning, and penetration testing, to identify and mitigate potential risks.",
    link: "https://www.example2.com",
  },
  {
    name: "Cybersecurity Incident Response Plan Development",
    description: "Led the development and implementation of an incident response plan for a large organization, ensuring prompt detection, containment, and recovery from cyber threats.",
    link: "https://www.example3.com",
  },
  {
    name: "Security Awareness Training Program",
    description: "Designed and delivered interactive cybersecurity awareness training sessions for employees, covering topics such as phishing prevention, password security, and data protection best practices.",
    link: "https://www.example4.com",
  },
  {
    name: "Mobile Application Security Assessment",
    description: "Conducted in-depth security assessment on a mobile application, identifying vulnerabilities in both the client and server-side components and providing recommendations for secure development practices.",
    link: "https://www.example5.com",
  },
  {
    name: "Security Compliance Audit",
    description: "Performed a comprehensive audit of an organization's security controls and practices to ensure compliance with industry standards and regulatory requirements, resulting in actionable recommendations for improvement.",
    link: "https://www.example6.com",
  },
];

export default function Projects() {
  return (
    <div>
      <Profile
        title="Cybersecurity Projects"
        content="This is a list of cybersecurity projects I have contributed to."
      />

      <div className="company-display">
        {cybersecurityProjects.map((project, index) => (
          <CompanyCard
            key={index}
            name={project.name}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}
