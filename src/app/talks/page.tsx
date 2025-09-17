import { getTalks } from '@/lib/data';
import ContentCard from '@/components/ContentCard';

export default function TalksPage() {
  const items = getTalks().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div>
      <h1 className="text-4xl font-bold mb-8">Talks</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item) => (
          <ContentCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
