import { useParams } from 'react-router-dom';
import VideoCard from '../../components/common/VideoCard';
import './Watch.css';

const Watch = () => {
  const { id } = useParams();

  const mockVideo = {
    id,
    title: 'One Piece Episode 1000 - Epic Battle Begins',
    description: 'The epic battle continues as Luffy faces his greatest challenge yet. Watch as the Straw Hat Pirates unite for an unforgettable showdown!',
    uploader: 'Anime Central',
    views: 1250000,
    likes: 45000,
    dislikes: 1200,
    uploadDate: new Date('2024-01-15'),
    tags: ['One Piece', 'Anime', 'Action', 'Shonen'],
  };

  const suggestedVideos = [
    {
      id: '2',
      title: 'Demon Slayer Season 3 - Full Episode',
      thumbnail: 'https://via.placeholder.com/320x180/4444ff/ffffff?text=Demon+Slayer',
      uploader: 'Anime Hub',
      views: 890000,
      uploadDate: new Date('2024-01-20'),
      duration: '23:45',
    },
    {
      id: '3',
      title: 'Top 10 Anime Moments of 2024',
      thumbnail: 'https://via.placeholder.com/320x180/44ff44/ffffff?text=Top+10',
      uploader: 'WatchMojo Anime',
      views: 2100000,
      uploadDate: new Date('2024-01-10'),
      duration: '15:30',
    },
  ];

  return (
    <div className="watch-page">
      <div className="container">
        <div className="watch-layout">
          <div className="video-section">
            <div className="video-player">
              <div className="player-placeholder">
                <p>🎬 Video Player</p>
                <small>Video ID: {id}</small>
              </div>
            </div>

            <div className="video-details">
              <h1 className="video-title">{mockVideo.title}</h1>
              
              <div className="video-actions">
                <div className="video-stats">
                  <span>{mockVideo.views.toLocaleString()} views</span>
                </div>
                <div className="action-buttons">
                  <button className="action-btn">
                    👍 {mockVideo.likes.toLocaleString()}
                  </button>
                  <button className="action-btn">
                    👎 {mockVideo.dislikes.toLocaleString()}
                  </button>
                  <button className="action-btn">↗️ Share</button>
                  <button className="action-btn">💾 Save</button>
                </div>
              </div>

              <div className="channel-info">
                <div className="channel-avatar">{mockVideo.uploader[0]}</div>
                <div className="channel-details">
                  <h3>{mockVideo.uploader}</h3>
                  <p>1.2M subscribers</p>
                </div>
                <button className="subscribe-btn">Subscribe</button>
              </div>

              <div className="video-description">
                <p>{mockVideo.description}</p>
                <div className="video-tags">
                  {mockVideo.tags.map(tag => (
                    <span key={tag} className="tag">#{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="suggestions-section">
            <h3>Suggested Videos</h3>
            <div className="suggestions-list">
              {suggestedVideos.map(video => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Watch;
