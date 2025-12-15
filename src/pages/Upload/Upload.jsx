import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Upload.css';

const Upload = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Anime',
    videoFile: null,
    thumbnail: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData(prev => ({ ...prev, [name]: files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Upload data:', formData);
    alert('Video uploaded successfully! (Mock)');
    navigate('/');
  };

  return (
    <div className="upload-page">
      <div className="container">
        <div className="upload-container">
          <h1>Upload Video</h1>
          
          <form onSubmit={handleSubmit} className="upload-form">
            <div className="form-group">
              <label>Video File *</label>
              <div className="file-input">
                <input
                  type="file"
                  name="videoFile"
                  accept="video/*"
                  onChange={handleFileChange}
                  required
                />
                <div className="file-placeholder">
                  {formData.videoFile ? formData.videoFile.name : '📹 Choose video file'}
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Thumbnail *</label>
              <div className="file-input">
                <input
                  type="file"
                  name="thumbnail"
                  accept="image/*"
                  onChange={handleFileChange}
                  required
                />
                <div className="file-placeholder">
                  {formData.thumbnail ? formData.thumbnail.name : '🖼️ Choose thumbnail'}
                </div>
              </div>
            </div>

            <div className="form-group">
              <label>Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter video title"
                required
              />
            </div>

            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Tell viewers about your video"
                rows="5"
              />
            </div>

            <div className="form-group">
              <label>Category *</label>
              <select name="category" value={formData.category} onChange={handleChange}>
                <option value="Anime">Anime</option>
                <option value="Movies">Movies</option>
                <option value="Shorts">Shorts</option>
                <option value="Gaming">Gaming</option>
                <option value="Music">Music</option>
              </select>
            </div>

            <div className="form-actions">
              <button type="button" onClick={() => navigate('/')} className="btn-cancel">
                Cancel
              </button>
              <button type="submit" className="btn-submit">
                Upload Video
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
