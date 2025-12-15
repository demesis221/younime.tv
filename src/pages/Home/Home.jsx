import { useState } from 'react';
import VideoCard from '../../components/common/VideoCard';
import './Home.css';

const mockVideos = [
  {
    id: '1',
    title: 'One Piece Episode 1000 - Epic Battle Begins',
    thumbnail: 'https://via.placeholder.com/320x180/ff4444/ffffff?text=One+Piece',
    uploader: 'Anime Central',
    views: 1250000,
    uploadDate: new Date('2024-01-15'),
    duration: '24:15',
    category: 'Anime'
  },
  {
    id: '2',
    title: 'Demon Slayer Season 3 - Full Episode',
    thumbnail: 'https://via.placeholder.com/320x180/4444ff/ffffff?text=Demon+Slayer',
    uploader: 'Anime Hub',
    views: 890000,
    uploadDate: new Date('2024-01-20'),
    duration: '23:45',
    category: 'Anime'
  },
  {
    id: '3',
    title: 'Top 10 Anime Moments of 2024',
    thumbnail: 'https://via.placeholder.com/320x180/44ff44/ffffff?text=Top+10',
    uploader: 'WatchMojo Anime',
    views: 2100000,
    uploadDate: new Date('2024-01-10'),
    duration: '15:30',
    category: 'Trending'
  },
  {
    id: '4',
    title: 'Attack on Titan Final Season Part 3',
    thumbnail: 'https://via.placeholder.com/320x180/ff44ff/ffffff?text=AOT',
    uploader: 'Crunchyroll',
    views: 3500000,
    uploadDate: new Date('2024-01-05'),
    duration: '28:00',
    category: 'Anime'
  },
  {
    id: '5',
    title: 'Jujutsu Kaisen Movie Review',
    thumbnail: 'https://via.placeholder.com/320x180/ffff44/000000?text=JJK',
    uploader: 'Anime Reviews',
    views: 450000,
    uploadDate: new Date('2024-01-22'),
    duration: '12:20',
    category: 'Movies'
  },
  {
    id: '6',
    title: 'Naruto vs Sasuke - Best Fight Scenes',
    thumbnail: 'https://via.placeholder.com/320x180/ff8844/ffffff?text=Naruto',
    uploader: 'Epic Anime',
    views: 5200000,
    uploadDate: new Date('2024-01-01'),
    duration: '18:45',
    category: 'Anime'
  },
];

const categories = ['All', 'Anime', 'Movies', 'Shorts', 'Trending'];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredVideos = selectedCategory === 'All' 
    ? mockVideos 
    : mockVideos.filter(v => v.category === selectedCategory);

  return (
    <div className="home">
      <div className="container">
        <div className="category-filter">
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="video-grid">
          {filteredVideos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
