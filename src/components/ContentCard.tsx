import { ContentItem } from '@/types/content';
import YouTubeEmbed from './YouTubeEmbed';
import { FaCalendar, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

interface ContentCardProps {
  item: ContentItem;
  className?: string;
}

const ContentCard = ({ item, className = '' }: ContentCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const formatDuration = (duration: string) => {
    // Convert duration like "45:00" or "1:30:45" to readable format
    const parts = duration.split(':');
    if (parts.length === 2) {
      return `${parseInt(parts[0])}m ${parseInt(parts[1])}s`;
    } else if (parts.length === 3) {
      const hours = parseInt(parts[0]);
      const minutes = parseInt(parts[1]);
      const seconds = parseInt(parts[2]);
      if (hours > 0) {
        return `${hours}h ${minutes}m`;
      }
      return `${minutes}m ${seconds}s`;
    }
    return duration;
  };

  // Check if this is a blog post
  const isBlogPost = 'category' in item && item.category === 'blog';

  return (
    <div className={`bg-secondary-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}>
      {/* Media Section - Skip for blog posts */}
      {!isBlogPost && (
        <div className="aspect-video relative">
          {'recorded' in item && item.recorded && item.url.includes('youtube.com') ? (
            <YouTubeEmbed
              url={item.url}
              title={item.title}
              className="w-full h-full"
            />
          ) : item.banner ? (
            <img
              src={`/logos/${item.banner}`}
              alt={item.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-secondary-800 flex items-center justify-center">
              <p className="text-secondary-400">No media available</p>
            </div>
          )}
        </div>
      )}

      {/* Content Section */}
      <div className="p-6">
        {/* Title - make it a link for blog posts */}
        {isBlogPost ? (
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline text-xl font-semibold text-foreground hover:text-primary-400 transition-colors duration-200 mb-3 line-clamp-2"
          >
            {item.title}
            <svg className="inline ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        ) : (
          <h3 className="text-xl font-semibold text-foreground mb-3 line-clamp-2">
            {item.title}
          </h3>
        )}

        <p className="text-secondary-300 mb-4 line-clamp-3">
          {item.description}
        </p>

        {/* Metadata */}
        <div className="space-y-2 text-sm text-secondary-400">
          <div className="flex items-center gap-2">
            <FaCalendar className="text-primary-400" />
            <span>{formatDate(item.date)}</span>
          </div>

          {'duration' in item && item.duration && (
            <div className="flex items-center gap-2">
              <FaClock className="text-primary-400" />
              <span>{formatDuration(item.duration)}</span>
            </div>
          )}

          {'location' in item && (
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary-400" />
              <span>{item.location}</span>
            </div>
          )}

          {'conference' in item && item.conference !== 'none' && (
            <div className="text-primary-300 font-medium">
              {item.conference}
            </div>
          )}

          {'platform' in item && (
            <div className="text-primary-300 font-medium">
              {item.platform}
            </div>
          )}
        </div>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          <span className="px-2 py-1 bg-primary-900 text-primary-300 text-xs rounded-full">
            {item.type}
          </span>
          {'event_type' in item && (
            <span className="px-2 py-1 bg-secondary-800 text-secondary-300 text-xs rounded-full">
              {item.event_type}
            </span>
          )}
          {'company' in item && (
            <span className="px-2 py-1 bg-secondary-800 text-secondary-300 text-xs rounded-full">
              {item.company}
            </span>
          )}
        </div>

        {/* External Link - Hide for blog posts since title is already a link */}
        {!('recorded' in item && item.recorded) && !isBlogPost && (
          <div className="mt-4">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-200"
            >
              View Details
              <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentCard;
