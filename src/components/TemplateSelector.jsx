import React from 'react';

const TemplateSelector = ({ selectedTemplate, setReadmeData }) => {
  const templates = [
    { id: 'modern', name: 'Modern', description: 'Clean and professional with badges' },
    { id: 'classic', name: 'Classic', description: 'Traditional GitHub style' },
    { id: 'minimal', name: 'Minimal', description: 'Simple and straightforward' },
    { id: 'creative', name: 'Creative', description: 'Unique and eye-catching' }
  ];

  const handleTemplateChange = (templateId) => {
    setReadmeData(prev => ({ ...prev, template: templateId }));
  };

  return (
    <div className="template-selector">
      <h3>Choose Template</h3>
      <div className="template-grid">
        {templates.map(template => (
          <div
            key={template.id}
            className={`template-card ${selectedTemplate === template.id ? 'selected' : ''}`}
            onClick={() => handleTemplateChange(template.id)}
          >
            <h4>{template.name}</h4>
            <p>{template.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelector;