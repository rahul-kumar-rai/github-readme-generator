import React, { useState } from 'react';
import Header from './components/Header';
import ReadmeForm from './components/ReadmeForm';
import ReadmePreview from './components/ReadmePreview';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [readmeData, setReadmeData] = useState({
    name: '',
    tagline: '',
    about: '',
    skills: [],
    socialLinks: [],
    projects: [],
    githubStats: true,
    visitorBadge: true,
    template: 'modern',
    sections: ['header', 'about', 'skills', 'stats', 'projects', 'social']
  });

  const [generatedReadme, setGeneratedReadme] = useState('');

  const generateReadme = (data) => {
    const template = getTemplate(data.template, data);
    setGeneratedReadme(template);
  };

  const getTemplate = (templateName, data) => {
    const templates = {
      modern: generateModernTemplate,
      classic: generateClassicTemplate,
      minimal: generateMinimalTemplate,
      creative: generateCreativeTemplate
    };
    return templates[templateName](data);
  };

  const generateModernTemplate = (data) => {
    return `# 👋 Hi, I'm ${data.name || '[Your Name]'}

${data.tagline ? `> ${data.tagline}\n` : ''}

## 🚀 About Me
${data.about || 'I\'m a passionate developer...'}

## 🛠️ Skills
${data.skills.map(skill => `- ${skill}`).join('\n') || '- Add your skills'}

## 📊 GitHub Stats
${data.githubStats ? `![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${data.githubUsername || 'yourusername'}&show_icons=true&theme=radical)` : ''}

## 🔗 Connect With Me
${data.socialLinks.map(link => `[${link.platform}](${link.url})`).join(' • ') || 'Add your social links'}

${data.visitorBadge ? `![Profile Views](https://komarev.com/ghpvc/?username=${data.githubUsername || 'yourusername'}&color=blueviolet)` : ''}`;
  };

  const generateClassicTemplate = (data) => {
    return `### Hi there, I'm ${data.name || '[Your Name]'} 👋

${data.about || '## About Me\nI am a software developer...'}

### 💻 Tech Stack:
${data.skills.map(skill => `- ${skill}`).join('\n') || '- Add your tech stack'}

### 📈 GitHub Stats:
[![GitHub Stats](https://github-readme-stats.vercel.app/api?username=${data.githubUsername || 'yourusername'}&show_icons=true&theme=default)](https://github.com/${data.githubUsername || 'yourusername'})

### 📫 How to reach me:
${data.socialLinks.map(link => `[${link.platform}]: ${link.url}`).join('\n') || 'Add your contact information'}`;
  };

  const generateMinimalTemplate = (data) => {
    return `# ${data.name || '[Your Name]'}

${data.tagline || 'Developer'}

---

### About
${data.about || 'Write something about yourself...'}

### Skills
${data.skills.join(' • ') || 'Add your skills'}

### Connect
${data.socialLinks.map(link => `[${link.platform}](${link.url})`).join(' • ') || 'Add your links'}

${data.githubStats ? `![Stats](https://github-readme-stats.vercel.app/api?username=${data.githubUsername || 'yourusername'}&show_icons=true&hide=contribs,prs)` : ''}`;
  };

  const generateCreativeTemplate = (data) => {
    return `# ✨ Welcome to my GitHub profile! ✨

<div align="center">
  <h1>${data.name || '[Your Name]'}</h1>
  <h3>${data.tagline || 'Creative Developer'}</h3>
</div>

---

## 📖 Story
${data.about || 'Once upon a time, in a galaxy not so far away...'}

## ⚡ Superpowers
${data.skills.map(skill => `- **${skill}**`).join('\n') || '- Add your superpowers'}

## 🎯 Current Focus
- Building amazing projects
- Learning new technologies
- Contributing to open source

## 🌐 Let's Connect!
<p align="center">
${data.socialLinks.map(link => `<a href="${link.url}">${link.platform}</a>`).join(' • ')}
</p>

${data.githubStats ? `<img src="https://github-readme-stats.vercel.app/api?username=${data.githubUsername || 'yourusername'}&show_icons=true&theme=midnight-purple" alt="GitHub Stats" />` : ''}

${data.visitorBadge ? `<img src="https://komarev.com/ghpvc/?username=${data.githubUsername || 'yourusername'}&color=blueviolet&style=flat-square" alt="Profile Views" />` : ''}`;
  };

  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <div className="container">
          <div className="generator-container">
            <ReadmeForm 
              onGenerate={generateReadme} 
              readmeData={readmeData}
              setReadmeData={setReadmeData}
            />
            <ReadmePreview 
              generatedReadme={generatedReadme}
              setGeneratedReadme={setGeneratedReadme}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;