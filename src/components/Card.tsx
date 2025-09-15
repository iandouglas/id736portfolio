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
    <div>
      <div>
        <span>{category}{type ? ` / ${type}` : ''}</span>
        {company && <span>{company}</span>}
      </div>
      <h5>{title}</h5>
      <p>{description || conference || event}</p>
      <div>
        {conference && <p><strong>Conference:</strong> {conference}</p>}
        {event && <p><strong>Event:</strong> {event}</p>}
        <div>
            <span>{formattedDate}</span>
            {duration && <span>~{duration}</span>}
        </div>
        {location && <p><strong>Location:</strong> {location}</p>}
      </div>
      {abstract && (
        <a href={abstract} target="_blank" rel="noopener noreferrer">
          More Details &rarr;
        </a>
      )}
    </div>
  );

  return (
    <div>
      {isEmbed ? (
        <div>
          <iframe
            src={url}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      ) : banner ? (
        <Link href={url || '#'} target="_blank" rel="noopener noreferrer">
            <div style={{position: 'relative', width: '100%', paddingTop: '37.5%'}}>
            <Image
                src={`/${banner}`}
                alt={title}
                fill
            />
            </div>
        </Link>
      ) : null}
      {isEmbed || !url ? (
         <CardContent />
      ) : (
        <Link href={url || ''} target="_blank" rel="noopener noreferrer">
            <CardContent />
        </Link>
      )}
    </div>
  );
};

export default Card;
