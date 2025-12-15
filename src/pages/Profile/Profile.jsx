import { useAuth } from '../../hooks/useAuth';
import VideoCard from '../../components/common/VideoCard';
import './Profile.css';

const Profile = () => {
  const { user } = useAuth();

  const userVideos = [
    {
      id: '1',
      title: 'My First Upload - Anime Review',
      thumbnail: 'https://via.placeholder.com/320x180/ff4444/ffffff?text=Video+1',
      uploader: user?.name || 'User',
      views: 15000,
      uploadDate: new Date('2024-01-20'),
      duration: '10:30',
    },
    {
      id: '2',
      title: 'Top 5 Anime of the Season',
      thumbnail: 'https://via.placeholder.com/320x180/4444ff/ffffff?text=Video+2',
      uploader: user?.name || 'User',
      views: 28000,
      uploadDate: new Date('2024-01-15'),
      duration: '12:45',
    },
  ];

  return (
    <div className="profile-page">
      <div className="profile-banner">
        <div className="banner-overlay"></div>
      </div>

      <div className="container">
        <div className="profile-header">
          <div className="profile-avatar">{user?.name?.[0] || 'U'}</div>
          <div className="profile-info">
            <h1>{user?.name || 'User'}</h1>
            <p className="profile-stats">
              <span>@{user?.name?.toLowerCase().replace(' ', '') || 'user'}</span>
              <span>•</span>
              <span>{userVideos.length} videos</span>
              <span>•</span>
              <span>1.2K subscribers</span>
            </p>
          </div>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>

        <div className="profile-tabs">
          <button className="tab active">Videos</button>
          <button className="tab">About</button>
        </div>

        <div className="profile-content">
          <div className="video-grid">
            {userVideos.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
