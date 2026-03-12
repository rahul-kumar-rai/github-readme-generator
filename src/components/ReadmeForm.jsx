import React, { useState } from 'react';
import TemplateSelector from './TemplateSelector';
import SectionSelector from './SectionSelector';
import { FaPlus, FaTrash, FaMagic } from 'react-icons/fa';

const ReadmeForm = ({ onGenerate, readmeData, setReadmeData }) => {
  const [skill, setSkill] = useState('');
  const [socialPlatform, setSocialPlatform] = useState('');
  const [socialUrl, setSocialUrl] = useState('');

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setReadmeData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const addSkill = () => {
    if (skill.trim()) {
      setReadmeData(prev => ({
        ...prev,
        skills: [...prev.skills, skill.trim()]
      }));
      setSkill('');
    }
  };

  const removeSkill = (index) => {
    setReadmeData(prev => ({
      ...prev,
      skills: prev.skills.filter((_, i) => i !== index)
    }));
  };

  const addSocialLink = () => {
    if (socialPlatform && socialUrl) {
      setReadmeData(prev => ({
        ...prev,
        socialLinks: [...prev.socialLinks, { platform: socialPlatform, url: socialUrl }]
      }));
      setSocialPlatform('');
      setSocialUrl('');
    }
  };

  const removeSocialLink = (index) => {
    setReadmeData(prev => ({
      ...prev,
      socialLinks: prev.socialLinks.filter((_, i) => i !== index)
    }));
  };

  const handleGenerate = () => {
    onGenerate(readmeData);
  };

  return (
    <div className="readme-form">
      <h2>Customize Your Profile</h2>
      
      <TemplateSelector 
        selectedTemplate={readmeData.template}
        setReadmeData={setReadmeData}
      />

      <SectionSelector 
        selectedSections={readmeData.sections}
        setReadmeData={setReadmeData}
      />

      <div className="form-section">
        <h3>Basic Information</h3>
        <div className="form-group">
          <label>Name *</label>
          <input
            type="text"
            name="name"
            value={readmeData.name}
            onChange={handleInputChange}
            placeholder="Rahul Kumar"
          />
        </div>

        <div className="form-group">
          <label>GitHub Username</label>
          <input
            type="text"
            name="githubUsername"
            value={readmeData.githubUsername || ''}
            onChange={handleInputChange}
            placeholder="rahul-kumar-rai"
          />
        </div>

        <div className="form-group">
          <label>Tagline</label>
          <input
            type="text"
            name="tagline"
            value={readmeData.tagline}
            onChange={handleInputChange}
            placeholder="Full Stack Developer | Open Source Enthusiast"
          />
        </div>

        <div className="form-group">
          <label>About Me</label>
          <textarea
            name="about"
            value={readmeData.about}
            onChange={handleInputChange}
            placeholder="Write a brief introduction about yourself..."
            rows="4"
          />
        </div>
      </div>

      <div className="form-section">
        <h3>Skills</h3>
        <div className="skills-input">
          <input
            type="text"
            value={skill}
            onChange={(e) => setSkill(e.target.value)}
            placeholder="JavaScript, React, Node.js"
            onKeyPress={(e) => e.key === 'Enter' && addSkill()}
          />
          <button onClick={addSkill} className="btn-add">
            <FaPlus /> Add
          </button>
        </div>
        <div className="skills-list">
          {readmeData.skills.map((skill, index) => (
            <span key={index} className="skill-tag">
              {skill}
              <button onClick={() => removeSkill(index)} className="btn-remove">
                <FaTrash />
              </button>
            </span>
          ))}
        </div>
      </div>

      <div className="form-section">
        <h3>Social Links</h3>
        <div className="social-inputs">
          <select
            value={socialPlatform}
            onChange={(e) => setSocialPlatform(e.target.value)}
          >
            <option value="">Select Platform</option>
            <option value="Twitter">Twitter</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="YouTube">YouTube</option>
            <option value="Dev.to">Dev.to</option>
            <option value="Medium">Medium</option>
            <option value="Personal Website">Personal Website</option>
          </select>
          <input
            type="url"
            value={socialUrl}
            onChange={(e) => setSocialUrl(e.target.value)}
            placeholder="https://..."
          />
          <button onClick={addSocialLink} className="btn-add">
            <FaPlus /> Add
          </button>
        </div>
        <div className="social-list">
          {readmeData.socialLinks.map((link, index) => (
            <div key={index} className="social-item">
              <span>{link.platform}: {link.url}</span>
              <button onClick={() => removeSocialLink(index)} className="btn-remove">
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="form-section">
        <h3>Additional Options</h3>
        <div className="checkbox-group">
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="githubStats"
              checked={readmeData.githubStats}
              onChange={handleInputChange}
            />
            Include GitHub Stats
          </label>
          <label className="checkbox-label">
            <input
              type="checkbox"
              name="visitorBadge"
              checked={readmeData.visitorBadge}
              onChange={handleInputChange}
            />
            Include Visitor Badge
          </label>
        </div>
      </div>

      <button onClick={handleGenerate} className="btn-generate">
        <FaMagic /> Generate README
      </button>
    </div>
  );
};

export default ReadmeForm;