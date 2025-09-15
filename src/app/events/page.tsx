import { getAllPortfolioItems } from '@/lib/data';
import PortfolioGrid from '@/components/PortfolioGrid';

export default async function EventsPage() {
  const allItems = await getAllPortfolioItems();

  return (
    <div>
      <h1>My Work</h1>
      <p>
        A collection of my conference talks, workshops, meetups, blog posts, and videos.
        Use the filters to narrow down the results.
      </p>
      <PortfolioGrid items={allItems} />
    </div>
  );
}
