import { Link } from 'react-router-dom';
import { formatDate, formatViews } from '../../utils/formatDate';
import './VideoCard.css';

const VideoCard = ({ video }) => {
  return (
    <Link to={`/watch/${video.id}`} className="video-card">
      <div className="video-thumbnail">
        <img src={video.thumbnail} alt={video.title} />
        <span className="video-duration">{video.duration}</span>
      </div>
      <div className="video-info">
        <h3 className="video-title">{video.title}</h3>
        <p className="video-channel">{video.uploader}</p>
        <div className="video-meta">
          <span>{formatViews(video.views)} views</span>
          <span>•</span>
          <span>{formatDate(video.uploadDate)}</span>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
