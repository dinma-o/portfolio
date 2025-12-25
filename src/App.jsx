import React, { useState, useEffect } from 'react';
import './App.css';

export default function Portfolio() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "NeuroMotion (NatHacks Winner)",
      tech: ["Python", "PyTorch", "Flask", "Socket.IO"],
      description: "Brain-Computer Interface that classifies motor imagery from real-time EEG signals with live brainwave visualization dashboard",
      metrics: "2nd Place MedTech Division, 73% prediction accuracy",
      link: "https://github.com/Alberta-Bionix-natHacks-2025/natHacks2025"
    },
    {
      title: "Quartz Events",
      tech: ["Java", "Android Studio", "Firebase", "MVC"],
      description: "Production-ready Android event management app with fair lottery registration system and real-time data sync",
      metrics: "1000+ user capacity, 15+ activities/fragments",
      link: "https://github.com/CMPUT301F25quartz/quartz-events"
    },
    {
      title: "NeuroTune",
      tech: ["Python", "Flask", "SVM", "Eye-Tracking"],
      description: "Hands-free music player for users with motor impairments using custom eye-tracking and EEG mood detection",
      metrics: "Accessibility-focused, real-time adaptation",
      link: "https://github.com/dinma-o/NeuroTune"
    },
    {
      title: "AI Support Chatbot",
      tech: ["Python", "Jira API", "Vector DB", "GCP"],
      description: "AI-powered internal support chatbot with semantic search for documentation and automated incident triage",
      metrics: "25% reduction in repetitive tickets",
      link: "#"
    }
  ];

  const skills = {
    "Languages": ["Java", "Python", "C/C++", "C#", "JavaScript", "SQL", "HTML/CSS"],
    "Frameworks": ["React", "Node.js", "Flask", "Android SDK", "PyTorch", "Scikit-learn", "JUnit"],
    "Cloud & DevOps": ["Docker", "Google Cloud Platform", "Firebase", "MongoDB", "Firestore"],
    "Tools": ["Git", "Jira", "Android Studio", "PowerBI", "Figma", "BeautifulSoup"]
  };

  const experience = [
    {
      role: "Technical Services Developer Intern",
      company: "Geotab Inc.",
      period: "Jan 2025 - Aug 2025",
      achievements: [
        "Delivered high-tier technical support by diagnosing and resolving complex cross-platform issues across Windows, macOS, and Linux environments, ensuring 99.9% uptime for critical software applications",
        "Designed AI-powered chatbot using Jira APIs, decreasing repetitive tickets by 25%",
        "Authored  technical documentation for internal tools and troubleshooting processes to improve efficiency",
        "Architected and managed secure GCP environments by provisioning cloud resources and implementing granular IAM policies"
      ]
    },
    {
      role: "Software Team Member (Prosthetic Control)",
      company: "University of Alberta Bionix Club",
      period: "Sept 2024 - Present",
      achievements: [
        "Developing 'Direct Control' algorithm for prosthetic leg using Bayesian filtering on EMG data",
        "Constructed data pipelines to filter raw EMG signals for motor control systems",
        "Collaborating with EE sub-teams to integrate software with IMUs and motor drivers"
      ]
    },
    {
      role: "Software Engineering Instructor & Team Lead",
      company: "Future Creators",
      period: "Jan 2024 - Jan 2025",
      achievements: [
        "Led 6-member agile team to build Python educational game, 100% sprint deliverables on schedule",
        "Developed Tkinter GUI and used BeautifulSoup for web scraping educational content",
        "Mentored middle school students in Python programming concepts"
      ]
    }
  ];

  // Inline styles for guaranteed rendering
  const navStyle = {
    position: 'fixed',
    top: '24px',
    right: '24px',
    left: 'auto',
    background: 'rgba(15, 20, 25, 0.95)',
    backdropFilter: 'blur(12px)',
    border: '1px solid rgba(0, 255, 159, 0.2)',
    borderRadius: '8px',
    padding: '16px',
    zIndex: 100,
    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)'
  };

  const primaryBtnStyle = {
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: '#00ff9f',
    color: '#0a0e17',
    fontWeight: 600,
    borderRadius: '6px',
    textDecoration: 'none',
    transition: 'all 0.3s',
    border: 'none',
    cursor: 'pointer'
  };

  const secondaryBtnStyle = {
    display: 'inline-block',
    padding: '12px 24px',
    backgroundColor: 'transparent',
    color: '#00ff9f',
    fontWeight: 600,
    borderRadius: '6px',
    textDecoration: 'none',
    transition: 'all 0.3s',
    border: '1px solid #00ff9f',
    cursor: 'pointer'
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#0a0e17', color: '#e4e4e7' }}>
      {/* Progress bar */}
      <div style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        width: '100%', 
        height: '4px', 
        backgroundColor: '#1a1f2e', 
        zIndex: 1000 
      }}>
        <div style={{ 
          height: '100%', 
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #00ff9f, #00e0ff)',
          transition: 'width 0.15s'
        }} />
      </div>

      {/* Navigation - Fixed to RIGHT */}
      <nav style={navStyle}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', fontSize: '14px' }}>
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e4e4e7', textDecoration: 'none', padding: '4px 0' }}>
            <span style={{ color: '#00ff9f' }}>01</span> _init
          </a>
          <a href="#projects" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e4e4e7', textDecoration: 'none', padding: '4px 0' }}>
            <span style={{ color: '#00ff9f' }}>02</span> _projects
          </a>
          <a href="#skills" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e4e4e7', textDecoration: 'none', padding: '4px 0' }}>
            <span style={{ color: '#00ff9f' }}>03</span> _skills
          </a>
          <a href="#experience" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e4e4e7', textDecoration: 'none', padding: '4px 0' }}>
            <span style={{ color: '#00ff9f' }}>04</span> _experience
          </a>
          <a href="#contact" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e4e4e7', textDecoration: 'none', padding: '4px 0' }}>
            <span style={{ color: '#00ff9f' }}>05</span> _contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Grid background */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.1,
          backgroundImage: 'linear-gradient(#00ff9f 1px, transparent 1px), linear-gradient(90deg, #00ff9f 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        <div style={{ 
          maxWidth: '1200px', 
          width: '100%', 
          position: 'relative', 
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          gap: '32px'
        }}>
          {/* Terminal Window */}
          <div style={{
            flex: 1,
            background: 'rgba(15, 20, 25, 0.9)',
            backdropFilter: 'blur(8px)',
            border: '1px solid rgba(0, 255, 159, 0.3)',
            borderRadius: '12px',
            padding: '32px',
            boxShadow: '0 20px 60px rgba(0, 255, 159, 0.1)'
          }}>
            {/* Terminal Header */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '8px', 
              color: '#00ff9f', 
              marginBottom: '24px', 
              fontSize: '14px' 
            }}>
              <span>●</span>
              <span>~/portfolio</span>
              <span style={{ marginLeft: 'auto', opacity: 0.5 }}>bash</span>
            </div>
            
            {/* Terminal Prompt */}
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '12px', 
              fontSize: '20px', 
              marginBottom: '24px' 
            }}>
              <span style={{ color: '#00ff9f' }}>$</span>
              <span>&gt; whoami</span>
            </div>

            {/* Terminal Content */}
            <div style={{ paddingLeft: '16px', borderLeft: '2px solid rgba(0, 255, 159, 0.3)' }}>
              <h1 style={{ 
                fontSize: 'clamp(40px, 8vw, 64px)', 
                fontWeight: 700, 
                lineHeight: 1.1, 
                marginBottom: '24px' 
              }}>
                <span style={{ color: '#00ff9f' }}>Chidinma Obi-Okoye</span>
                <br />
                <span style={{ color: '#e4e4e7' }}>Software Engineer</span>
              </h1>
              
              <p style={{ 
                fontSize: '20px', 
                color: '#9ca3af', 
                maxWidth: '700px', 
                lineHeight: 1.7, 
                marginBottom: '32px' 
              }}>
                4th year Software Engineering Co-op student at the University of Alberta. 
                Passionate about building impactful solutions in ML/AI, brain-computer interfaces, 
                and accessible technology.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                <a href="#projects" style={primaryBtnStyle}>
                  View Projects →
                </a>
                <a href="#contact" style={secondaryBtnStyle}>
                  Get in Touch
                </a>
              </div>
            </div>
          </div>

          {/* Chevron on the right */}
          <div style={{ 
            color: '#00ff9f', 
            fontSize: '32px', 
            animation: 'bounce 2s infinite'
          }}>
            ↓
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '96px 24px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
          <span style={{ color: '#00ff9f', fontSize: '24px', fontWeight: 700 }}>02</span>
          <h2 style={{ fontSize: '36px', fontWeight: 700 }}>Featured Projects</h2>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(0, 255, 159, 0.5), transparent)' }} />
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', 
          gap: '24px' 
        }}>
          {projects.map((project, idx) => (
            <div 
              key={idx}
              className="project-card"
              style={{
                background: '#0f1419',
                border: '1px solid #1a1f2e',
                borderRadius: '8px',
                padding: '24px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                <span style={{ color: '#00ff9f', fontSize: '24px' }}>&lt;/&gt;</span>
                <a href={project.link} style={{ color: '#9ca3af', textDecoration: 'none', fontSize: '20px' }}>↗</a>
              </div>

              <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '12px' }}>
                {project.title}
              </h3>
              
              <p style={{ color: '#9ca3af', lineHeight: 1.6, marginBottom: '16px' }}>
                {project.description}
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    style={{
                      fontSize: '12px',
                      padding: '4px 12px',
                      background: 'rgba(0, 255, 159, 0.1)',
                      border: '1px solid rgba(0, 255, 159, 0.2)',
                      color: '#00ff9f',
                      borderRadius: '4px'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div style={{ fontSize: '14px', color: '#00e0ff', fontWeight: 600 }}>
                ⚡ {project.metrics}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: '96px 24px', background: 'rgba(15, 20, 25, 0.5)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
            <span style={{ color: '#00ff9f', fontSize: '24px', fontWeight: 700 }}>03</span>
            <h2 style={{ fontSize: '36px', fontWeight: 700 }}>Technical Stack</h2>
            <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(0, 255, 159, 0.5), transparent)' }} />
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '24px' 
          }}>
            {Object.entries(skills).map(([category, items]) => (
              <div 
                key={category}
                style={{
                  background: '#0a0e17',
                  border: '1px solid #1a1f2e',
                  borderRadius: '8px',
                  padding: '24px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
                  <span style={{ color: '#00ff9f' }}>⌥</span>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#00ff9f' }}>{category}</h3>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {items.map((skill, i) => (
                    <span 
                      key={i}
                      style={{
                        fontSize: '14px',
                        padding: '6px 12px',
                        background: '#1a1f2e',
                        color: '#e4e4e7',
                        borderRadius: '4px'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ padding: '96px 24px', maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '48px' }}>
          <span style={{ color: '#00ff9f', fontSize: '24px', fontWeight: 700 }}>04</span>
          <h2 style={{ fontSize: '36px', fontWeight: 700 }}>Work Experience</h2>
          <div style={{ flex: 1, height: '1px', background: 'linear-gradient(90deg, rgba(0, 255, 159, 0.5), transparent)' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {experience.map((exp, idx) => (
            <div 
              key={idx}
              style={{
                background: '#0f1419',
                border: '1px solid #1a1f2e',
                borderRadius: '8px',
                padding: '32px'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '24px', fontWeight: 700, color: '#00ff9f', marginBottom: '4px' }}>{exp.role}</h3>
                  <p style={{ fontSize: '18px', color: '#e4e4e7' }}>{exp.company}</p>
                </div>
                <span style={{ color: '#9ca3af' }}>{exp.period}</span>
              </div>
              
              <ul style={{ paddingLeft: '16px', listStyle: 'none' }}>
                {exp.achievements.map((achievement, i) => (
                  <li key={i} style={{ color: '#9ca3af', lineHeight: 1.8, paddingLeft: '24px', position: 'relative' }}>
                    <span style={{ position: 'absolute', left: 0, color: '#00ff9f' }}>▹</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: '96px 24px', background: 'rgba(15, 20, 25, 0.5)' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '48px' }}>
            <span style={{ color: '#00ff9f', fontSize: '24px', fontWeight: 700 }}>05</span>
            <h2 style={{ fontSize: '36px', fontWeight: 700 }}>Get In Touch</h2>
          </div>

          <p style={{ fontSize: '20px', color: '#9ca3af', maxWidth: '700px', margin: '0 auto 32px', lineHeight: 1.7 }}>
            I'm currently looking for new opportunities and interesting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '32px' }}>
            <a href="mailto:obiokoye@ualberta.ca" style={primaryBtnStyle}>
              📧 Email Me
            </a>
            <a href="https://github.com/dinma-o" style={secondaryBtnStyle} target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/chidinma-obi-okoye-4436002a0/" style={secondaryBtnStyle} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>

          <div style={{ paddingTop: '32px', borderTop: '1px solid #1a1f2e' }}>
            <p style={{ fontSize: '14px', color: '#9ca3af' }}>
              Built with React & Tailwind • Edmonton, AB • © 2025
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
