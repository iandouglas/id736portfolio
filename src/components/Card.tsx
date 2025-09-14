import Link from 'next/link';
import Image from 'next/image';
import type { PortfolioItem } from '@/types';

const Card = ({ item }: { item: PortfolioItem }) => {
  const {
    title,
    url,
    date,
    company,
    description,
    duration,
    recorded,
    banner,
    type,
    category,
    conference,
    location,
    abstract,
    event,
  } = item;

  const dateObj = new Date(date);
  const formattedDate = !isNaN(dateObj.getTime())
    ? dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : date;

  const isEmbed = url && url.includes('youtube.com/embed');

  const CardContent = () => (
    <div className="p-6 flex flex-col flex-grow">
      {/* Category and Type */}
      <div className="flex items-center justify-between text-sm text-green-500 mb-2">
        <span className="font-semibold capitalize">{category}{type ? ` / ${type}` : ''}</span>
        {company && <span className="font-bold">{company}</span>}
      </div>

      {/* Title */}
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-400">{title}</h5>

      {/* Description */}
      {description && <p className="font-normal text-green-300 mb-4 flex-grow">{description}</p>}

      {/* Metadata */}
      <div className="mt-auto text-sm text-green-500 space-y-2">
        {conference && <p><strong>Conference:</strong> {conference}</p>}
        {event && <p><strong>Event:</strong> {event}</p>}
        <div className="flex justify-between">
            <span>{formattedDate}</span>
            {duration && <span>~{duration}</span>}
        </div>
        {location && <p><strong>Location:</strong> {location}</p>}
      </div>

      {/* Abstract Link */}
      {abstract && (
        <a href={abstract} target="_blank" rel="noopener noreferrer" className="text-green-400 hover:text-green-300 mt-4 inline-block">
          More Details &rarr;
        </a>
      )}
    </div>
  );

  const cardContainerClasses = "flex flex-col bg-black rounded-lg border border-green-700 shadow-lg overflow-hidden h-full transition-all duration-300 hover:border-green-500 hover:shadow-green-500/20";

  return (
    <div className={cardContainerClasses}>
      {/* Media Section */}
      {isEmbed ? (
        <div className="aspect-video">
          <iframe
            src={url}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      ) : banner ? (
        <Link href={url || '#'} target="_blank" rel="noopener noreferrer" className="block">
            <div className="relative w-full" style={{paddingTop: '37.5%'}}> {/* 400x150 aspect ratio */}
            <Image
                src={`/${banner}`}
                alt={title}
                layout="fill"
                objectFit="cover"
            />
            </div>
        </Link>
      ) : null}

      {/* Content Section */}
      {isEmbed || !url ? (
         <CardContent />
      ) : (
        <Link href={url} target="_blank" rel="noopener noreferrer" className="flex flex-col flex-grow">
            <CardContent />
        </Link>
      )}
    </div>
  );
};

export default Card;
