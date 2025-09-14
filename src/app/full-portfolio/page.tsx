import { getAllPortfolioItems } from '@/lib/data';
import PortfolioGrid from '@/components/PortfolioGrid';

export default async function PortfolioPage() {
  const allItems = await getAllPortfolioItems();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-green-400">My Work</h1>
      <p className="text-lg text-green-300 mb-12">
        A collection of my conference talks, workshops, meetups, blog posts, and videos.
        Use the filters to narrow down the results.
      </p>
      <PortfolioGrid items={allItems} />
    </div>
  );
}
