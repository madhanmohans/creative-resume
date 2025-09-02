import React, { useState } from "react";
import {
  FaReact,
  FaPython,
  FaJava,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMusic,
  FaGamepad,
  FaCode,
  FaCrown,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import {
  SiAndroidstudio,
  SiFlask,
  SiScikitlearn,
  SiGradle,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiRedux,
  SiNodedotjs,
  SiDocker,
  SiJest,
  SiTestinglibrary,
  SiMantine,
  SiNextdotjs,
} from "react-icons/si";

const Resume = () => {
  // State to track which experience cards are expanded (by index)
  const [expandedCards, setExpandedCards] = useState(new Set([0])); // First card expanded by default

  const toggleCard = (index) => {
    const newExpandedCards = new Set(expandedCards);
    if (newExpandedCards.has(index)) {
      newExpandedCards.delete(index);
    } else {
      newExpandedCards.add(index);
    }
    setExpandedCards(newExpandedCards);
  };

  const skills = [
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "TailwindCSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Mantine", icon: SiMantine, color: "#339AF0" },
    { name: "React Testing Library", icon: SiTestinglibrary, color: "#E33332" },
    { name: "Jest", icon: SiJest, color: "#C21325" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Docker Compose", icon: SiDocker, color: "#2496ED" },
    { name: "Java", icon: FaJava, color: "#ED8B00" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "Flask", icon: SiFlask, color: "#000000" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Android Studio", icon: SiAndroidstudio, color: "#3DDC84" },
    { name: "Gradle", icon: SiGradle, color: "#02303A" },
    { name: "Scikit-learn", icon: SiScikitlearn, color: "#F7931E" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "Git", icon: FaCode, color: "#F05032" },
  ];

  const currentExperience = [
    {
      title: "Application Developer",
      company: "Thoughtworks, Bangalore",
      period: "June 2024 - Present",
      domain: "Recruitment & Workspace IT",
      techStack: ["React", "TypeScript", "AWS Codebuild", "Google Apps Script"],
      points: [
        "Developed a secure document verification frontend with React for employment offers that handles KYC document uploads (Aadhar, PAN, Bank details), performs real-time validation through Signzy APIs, manages education credentials - streamlining the candidate onboarding process.",
        "Developed an automated Google Apps Script system that tracks employee office attendance across multiple India locations, processes leave data, and sends personalized emails to employees about their monthly office visits.",
      ],
    },
  ];

  const otherExperiences = [
    {
      title: "IT Automation Engineer",
      company: "KLA, Chennai",
      period: "July 2023 - May 2024",
      domain: "Workspace IT",
      techStack: ["Resolve Action Express", "ServiceNow", "ITPA Tools", "REST APIs"],
      points: [
        "IT experience in Analysis, Design, Development, Testing, Production Deployment and Support using ITPA Tool - Resolve Action Express (formerly Ayehu NG) along with ServiceNow integration.",
      ],
    },
    {
      title: "Android Application Developer Intern",
      company: "IoTReady, Bangalore",
      period: "Feb 2023 - June 2023",
      domain: "IoT & FNV Traceability",
      techStack: ["Java", "Kotlin", "Android Studio", "BLE", "Serial Communication"],
      points: [
        "Built an android native app using java for Wifi and Hotspot connectivity configuration for IoTReady's firmwares.",
        "Built a multi featured app for Big Basket using Kotlin that assists FNV traceability within and between warehouses compatible with IoTReady's Serial, BLE and TC21 firmware devices.",
      ],
    },
  ];

  const projects = [
    {
      category: "UI Projects in progress",
      items: [
        {
          name: "Personal Blog - madhanmohan.me",
          url: "https://madhanmohan.me",
          techStack: ["React", "Tailwind CSS", "JavaScript", "NextAuth.js", "SQLite3"]
        },
        {
          name: "FlowStacks - A Productivity timer tool",
          url: "https://github.com/madhanmohans/FlowStacks",
          techStack: ["React", "Material-UI", "Tailwind CSS", "JavaScript"]

        },
        {
          name: "JournAI - A simple journal tool with Gen AI",
          url: "https://github.com/madhanmohans/journai",
          techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
        },
        {
          name: "Habitica Widget - A Stats widget for Habitica",
          url: "https://github.com/madhanmohans/habitica-readme-stats",
          techStack: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
        },
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Browser Window Frame */}
      <div className="bg-white rounded-t-lg shadow-2xl">
        {/* Browser Header */}
        <div className="bg-gray-200 rounded-t-lg px-4 py-3 flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <div className="flex-1 text-center">
            <h1 className="text-2xl font-bold text-resume-dark-blue font-title tracking-wider">
              MY RESUME
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-resume-bg min-h-[85vh] flex relative overflow-hidden">
          {/* Left Sidebar */}
          <div className="w-1/3 p-6 space-y-6 bg-gradient-to-b from-white/30 to-transparent">
            {/* Profile Section */}
            <div className="bg-white rounded-lg p-4 shadow-md">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-resume-dark-blue mb-3">
                    MADHAN
                    <br />
                    MOHAN S
                  </h2>

                  {/* Contact Info */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-700">
                      <FaPhone className="text-resume-blue" />
                      <span>+91 9361620297</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <FaEnvelope className="text-resume-blue" />
                      <span>madhanmohan.s@thoughtworks.com</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-700">
                      <FaMapMarkerAlt className="text-resume-blue" />
                      <span>Bangalore, Karnataka, India</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="text-xs text-gray-700 leading-relaxed">
                <p>
                  Application developer and technology enthusiast with 2+ years
                  of experience. Proficient in full-stack development, mobile
                  applications, and automation systems. Passionate about
                  creating impactful, cutting-edge solutions for diverse client
                  needs.
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-x-2 flex justify-start">
              <div className="flex items-center gap-3 text-resume-dark-blue">
                <a
                  href="https://www.linkedin.com/in/madhanmohans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:text-blue-600 transition-colors duration-200 print-link"
                >
                  <FaLinkedin className="text-xl" />
                </a>
              </div>
              <div className="flex items-center gap-3 text-resume-dark-blue">
                <a
                  href="https://github.com/madhanmohans"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block hover:text-blue-600 transition-colors duration-200 print-link"
                >
                  <FaGithub className="text-xl" />
                </a>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-xl font-bold text-resume-dark-blue mb-4 font-title">
                SKILLS
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-white rounded-lg p-2 shadow-sm"
                    >
                      <Icon
                        className="text-lg flex-shrink-0"
                        style={{ color: skill.color }}
                      />
                      <span className="text-xs font-medium text-gray-700 truncate">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Interests */}
            <div>
              <h2 className="text-xl font-bold text-resume-dark-blue mb-4 font-title">
                INTERESTS
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FaMusic className="text-resume-blue text-lg" />
                  <span className="font-medium">Music</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaGamepad className="text-resume-blue text-lg" />
                  <span className="font-medium">Gaming</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xl font-bold text-resume-dark-blue mb-4 font-title">
                EDUCATION
              </h2>
              <div className="space-y-4">
                <div className="relative">
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-resume-blue rounded-full"></div>
                    <div>
                      <div className="font-semibold text-sm">2023</div>
                      <div className="text-xs text-gray-600">B.Tech IT</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-xs text-gray-600">
                Kumaraguru College of Technology
                <br />
                CGPA: 9.07
              </div>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="flex-1 p-6 space-y-8">
            {/* Current Experience Section */}
            <div>
              <h2 className="text-2xl font-bold text-resume-dark-blue mb-6 font-title">
                CURRENT EXPERIENCE
              </h2>
              <div className="space-y-6">
                {currentExperience.map((exp, index) => {
                  const isExpanded = expandedCards.has(index);
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-5 shadow-md transition-all duration-300 ease-in-out"
                    >
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleCard(index)}
                      >
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-resume-dark-blue">
                            {exp.title}
                          </h3>
                          <p className="text-resume-blue font-medium mb-2">
                            {exp.company}
                          </p>
                          <p className="text-sm text-gray-600 mb-2">
                            {exp.period}
                          </p>
                          <div className="mb-2">
                            <span className="text-xs font-semibold text-gray-700">Domain: </span>
                            <span className="text-xs text-gray-600">{exp.domain}</span>
                          </div>
                        </div>
                        <div className="ml-4 text-resume-blue hover:text-resume-dark-blue transition-colors duration-200">
                          {isExpanded ? (
                            <FaChevronUp className="text-lg" />
                          ) : (
                            <FaChevronDown className="text-lg" />
                          )}
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="mt-4 animate-fadeIn">
                          {exp.techStack && (
                            <div className="mb-4">
                              <span className="text-xs font-semibold text-gray-700 mb-2 block">
                                Tech Stack:
                              </span>
                              <div className="flex flex-wrap gap-1">
                                {exp.techStack.map((tech, techIdx) => (
                                  <span
                                    key={techIdx}
                                    className="inline-block bg-resume-blue/10 text-resume-dark-blue text-xs px-2 py-1 rounded-md font-medium"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          <ul className="space-y-2 text-sm">
                            {exp.points.map((point, idx) => (
                              <li key={idx} className="flex items-center  gap-2 ">
                                <span className="text-resume-blue mt-1"> • </span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Projects Section */}
            <div>
              <h2 className="text-2xl font-bold text-resume-dark-blue mb-6 font-title">
                PERSONAL PROJECTS
              </h2>
              <div className="space-y-4">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg p-5 shadow-md"
                  >
                    <h3 className="font-bold text-lg text-resume-dark-blue mb-3">
                      {project.category}
                    </h3>
                    {project.items.map((item, idx) => (
                      <div key={idx} className="mb-4 last:mb-0">
                        <div className="mb-2">
                          <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-resume-blue hover:text-resume-dark-blue transition-colors duration-200 underline print-link font-medium"
                          >
                            {item.name}
                          </a>
                        </div>
                        {item.techStack && (
                          <div className="mt-2">
                            <span className="text-xs font-semibold text-gray-600 mb-1 block">
                              Tech Stack:
                            </span>
                            <div className="flex flex-wrap gap-1">
                              {item.techStack.map((tech, techIdx) => (
                                <span
                                  key={techIdx}
                                  className="inline-block bg-resume-blue/10 text-resume-dark-blue text-xs px-2 py-1 rounded-md font-medium"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Other Experience Section */}
            <div>
              <h2 className="text-2xl font-bold text-resume-dark-blue mb-6 font-title">
                OTHER EXPERIENCE
              </h2>
              <div className="space-y-6">
                {otherExperiences.map((exp, index) => {
                  const cardIndex = index + 1; // Offset by 1 since current experience takes index 0
                  const isExpanded = expandedCards.has(cardIndex);
                  return (
                    <div
                      key={index}
                      className="bg-white rounded-lg p-5 shadow-md transition-all duration-300 ease-in-out"
                    >
                      <div
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => toggleCard(cardIndex)}
                      >
                        <div className="flex-1">
                          <h3 className="font-bold text-lg text-resume-dark-blue">
                            {exp.title}
                          </h3>
                          <p className="text-resume-blue font-medium mb-2">
                            {exp.company}
                          </p>
                          <p className="text-sm text-gray-600 mb-2">
                            {exp.period}
                          </p>
                          <div className="mb-2">
                            <span className="text-xs font-semibold text-gray-700">Domain: </span>
                            <span className="text-xs text-gray-600">{exp.domain}</span>
                          </div>
                        </div>
                        <div className="ml-4 text-resume-blue hover:text-resume-dark-blue transition-colors duration-200">
                          {isExpanded ? (
                            <FaChevronUp className="text-lg" />
                          ) : (
                            <FaChevronDown className="text-lg" />
                          )}
                        </div>
                      </div>

                      {isExpanded && (
                        <div className="mt-4 animate-fadeIn">
                          {exp.techStack && (
                            <div className="mb-4">
                              <span className="text-xs font-semibold text-gray-700 mb-2 block">
                                Tech Stack:
                              </span>
                              <div className="flex flex-wrap gap-1">
                                {exp.techStack.map((tech, techIdx) => (
                                  <span
                                    key={techIdx}
                                    className="inline-block bg-resume-blue/10 text-resume-dark-blue text-xs px-2 py-1 rounded-md font-medium"
                                  >
                                    {tech}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                          <ul className="space-y-2 text-sm">
                            {exp.points.map((point, idx) => (
                              <li key={idx} className="flex items-center  gap-2 ">
                                <span className="text-resume-blue mt-1"> • </span>
                                <span>{point}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
