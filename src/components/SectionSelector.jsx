import React from 'react';

const SectionSelector = ({ selectedSections, setReadmeData }) => {
  const sections = [
    { id: 'header', name: 'Header', description: 'Name and introduction' },
    { id: 'about', name: 'About', description: 'Personal description' },
    { id: 'skills', name: 'Skills', description: 'Technical skills' },
    { id: 'stats', name: 'GitHub Stats', description: 'Contribution statistics' },
    { id: 'projects', name: 'Projects', description: 'Featured projects' },
    { id: 'social', name: 'Social Links', description: 'Connect with me' }
  ];

  const toggleSection = (sectionId) => {
    setReadmeData(prev => {
      const newSections = prev.sections.includes(sectionId)
        ? prev.sections.filter(id => id !== sectionId)
        : [...prev.sections, sectionId];
      return { ...prev, sections: newSections };
    });
  };

  return (
    <div className="section-selector">
      <h3>Sections</h3>
      <div className="sections-grid">
        {sections.map(section => (
          <label key={section.id} className="section-checkbox">
            <input
              type="checkbox"
              checked={selectedSections.includes(section.id)}
              onChange={() => toggleSection(section.id)}
            />
            <div className="section-info">
              <span className="section-name">{section.name}</span>
              <span className="section-description">{section.description}</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default SectionSelector;