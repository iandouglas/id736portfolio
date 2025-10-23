'use client';

import { useState } from 'react';
import { FaPlay, FaTimes } from 'react-icons/fa';
import { getYouTubeVideoId } from '@/lib/data';

interface YouTubeEmbedProps {
  url: string;
  title: string;
  className?: string;
  banner?: string;
}

const YouTubeEmbed = ({ url, title, className = '', banner }: YouTubeEmbedProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoId = getYouTubeVideoId(url);

  if (!videoId) {
    return (
      <div className={`bg-secondary-800 rounded-lg flex items-center justify-center ${className}`}>
        <p className="text-secondary-400">Invalid video URL</p>
      </div>
    );
  }

  const thumbnailUrl = banner ? `/logos/${banner}` : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      {/* Thumbnail with play button */}
      <div 
        className={`relative cursor-pointer group ${className}`}
        onClick={openModal}
      >
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-200 rounded-lg flex items-center justify-center">
          <div className="bg-primary-600 hover:bg-primary-700 rounded-full p-4 transition-colors duration-200">
            <FaPlay className="text-white text-xl ml-1" />
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}
        >
          <div 
            className="relative bg-background rounded-lg max-w-4xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 bg-secondary-800 hover:bg-secondary-700 rounded-full p-2 text-white transition-colors duration-200 z-10"
            >
              <FaTimes className="text-lg" />
            </button>

            {/* Video embed */}
            <div className="aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title={title}
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default YouTubeEmbed;
