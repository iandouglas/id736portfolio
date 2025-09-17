import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Blog, PublicSpeaking, Talk, Video } from '@/types';
import YouTubeEmbed from './YouTubeEmbed';
import { FiExternalLink } from 'react-icons/fi';

interface ContentCardProps {
  item: Blog | PublicSpeaking | Talk | Video;
}

const ContentCard: React.FC<ContentCardProps> = ({ item }) => {
  const isBlog = 'category' in item && item.category === 'blog';

  const cardContent = (
    <div className="bg-gun-metal-900 rounded-lg overflow-hidden shadow-lg h-full group">
      {!isBlog && item.recorded ? (
        <YouTubeEmbed url={item.url} />
      ) : (
        !isBlog && item.banner && (
          <Image
            src={`/banners/${item.banner}`}
            alt={item.title}
            width={400}
            height={150}
            className="w-full h-48 object-cover"
          />
        )
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 flex items-center justify-between">
          {item.title}
          {isBlog && <FiExternalLink className="text-gray-400 group-hover:text-white ml-2" />}
        </h3>
        <p className="text-gray-400">{new Date(item.date).toLocaleDateString()}</p>
      </div>
    </div>
  );

  if (isBlog) {
    return (
      <Link href={item.url} target="_blank" rel="noopener noreferrer" className="block h-full">
        {cardContent}
      </Link>
    );
  }

  return cardContent;
};

export default ContentCard;
