import PortfolioPage from '@/components/PortfolioPage';
import { getAllPortfolioItems } from '@/lib/data';
import type { PortfolioItem } from '@/types';
import { Suspense } from 'react';


export default async function FullPortfolio() {
    const allItems = await getAllPortfolioItems();

    const filteredItems = allItems.filter(item => {
        if (item.category === 'video') {
            // we can safely cast here because we know the category
            return (item as PortfolioItem & { type?: string }).type !== 'short';
        }
        return true;
    });

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PortfolioPage allItems={filteredItems} />
        </Suspense>
    );
}
