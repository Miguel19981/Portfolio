import React from "react";
import UsesSection from "../../components/UsesSection/UsesSection";
import Profile from "../../components/Profile/Profile";

export const metadata = {
  title: 'Portfolio - Cybersecurity Tools',
  description: 'The cybersecurity tools and equipment I use for my portfolio.',
};

const items = [
  {
    groupName: 'Hardware',
    items: [
      {
        title: 'ThinkPad X1 Carbon Gen 9',
        description:
          'My primary work laptop. It offers excellent performance, security features, and durability, essential for handling cybersecurity tasks.',
      },
      {
        title: 'External Monitors (Dell UltraSharp U2717D)',
        description:
          'Dual monitors for enhanced productivity and multitasking during cybersecurity analysis and research.',
      },
      {
        title: 'Mechanical Keyboard (Ducky One 2 Mini)',
        description:
          'A compact and tactile keyboard optimized for long coding sessions and security operations.',
      },
      {
        title: 'Wireless Mouse (Logitech MX Master 3)',
        description:
          'Ergonomic mouse with customizable buttons for comfortable and efficient navigation during cybersecurity tasks.',
      },
      {
        title: 'Noise-Canceling Headphones (Sony WH-1000XM4)',
        description:
          'High-quality headphones for blocking distractions and focusing during intense cybersecurity work.',
      },
    ],
  },
  {
    groupName: 'Software',
    items: [
      {
        title: 'Kali Linux',
        description:
          'An essential operating system for penetration testing, vulnerability assessment, and ethical hacking.',
      },
      {
        title: 'Wireshark',
        description:
          'A powerful network protocol analyzer used for monitoring and analyzing cybersecurity threats and traffic.',
      },
      {
        title: 'Burp Suite',
        description:
          'A comprehensive cybersecurity tool for web application security testing and vulnerability scanning.',
      },
      {
        title: 'Metasploit Framework',
        description:
          'An advanced open-source penetration testing platform used for exploit development and security assessments.',
      },
    ],
  },
  {
    groupName: 'Productivity',
    items: [
      {
        title: 'Notion',
        description:
          'A versatile tool for organizing cybersecurity notes, project management, and collaboration with team members.',
      },
      {
        title: 'LastPass',
        description:
          'A secure password manager for generating and storing complex passwords, essential for maintaining strong security hygiene.',
      },
    ],
  },
];

export default function Uses() {
  return (
    <div>
      <Profile
        title="My Cybersecurity Arsenal"
        content="As a cybersecurity enthusiast, I rely on the following tools and equipment to tackle security challenges:"
      />
      <UsesSection items={items} />
    </div>
  );
}
