import Link from 'next/link';
import Image from 'next/image';
import type { PortfolioItem } from '@/types';

const Card = (item: PortfolioItem) => {
  if (!item) {
    return null;
  }

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
      <div className="flex items-center justify-between text-sm text-moss_green mb-2">
        <span className="font-semibold capitalize">{category}{type ? ` / ${type}` : ''}</span>
        {company && <span className="font-bold">{company}</span>}
      </div>

      {/* Title */}
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-vanilla">{title}</h5>

      {/* Description */}
      <p className="font-normal text-pearl mb-4 flex-grow">{description || conference || event}</p>

      {/* Metadata */}
      <div className="mt-auto text-sm text-moss_green space-y-2">
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
        <a href={abstract} target="_blank" rel="noopener noreferrer" className="text-vanilla hover:text-moss_green mt-4 inline-block">
          More Details &rarr;
        </a>
      )}
    </div>
  );

  const cardContainerClasses = "flex flex-col bg-eerie_black rounded-lg border border-ebony shadow-lg overflow-hidden h-full transition-all duration-300 hover:border-moss_green hover:shadow-moss_green/20";

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
                fill
                className="object-cover"
            />
            </div>
        </Link>
      ) : null}

      {/* Content Section */}
      {isEmbed || !url ? (
         <CardContent />
      ) : (
        <Link href={url || ''} target="_blank" rel="noopener noreferrer" className="flex flex-col flex-grow">
            <CardContent />
        </Link>
      )}
    </div>
  );
};

export default Card;
