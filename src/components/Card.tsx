import Link from 'next/link';

interface CardProps {
  title: string;
  description: string;
  url: string;
  date: string;
}

const Card = ({ title, description, url, date }: CardProps) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const cardContent = (
    <>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-400">{title}</h5>
      <p className="font-normal text-green-300">{description}</p>
      <p className="mt-4 text-sm text-green-500">{formattedDate}</p>
    </>
  );

  if (!url || url === '#') {
    return (
      <div className="block p-6 bg-black rounded-lg border border-green-700">
        {cardContent}
      </div>
    );
  }

  return (
    <Link href={url} target="_blank" rel="noopener noreferrer" className="block p-6 bg-black rounded-lg border border-green-700 hover:bg-green-900 transition-colors duration-300">
      {cardContent}
    </Link>
  );
};

export default Card;
