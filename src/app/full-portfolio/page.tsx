import { promises as fs } from 'fs';
import path from 'path';
import type { Blog, Talk, Video, Conference, Workshop } from '@/types';
import PortfolioPage from '@/components/PortfolioPage';

type PortfolioItem = (Blog | Talk | Video | Conference | Workshop) & { category: string };

async function getAllItems(): Promise<PortfolioItem[]> {
    const dataSources = [
        { file: 'blog.json', category: 'blog' },
        { file: 'conferences.json', category: 'conference' },
        { file: 'talks.json', category: 'talk' },
        { file: 'videos.json', category: 'video' },
        { file: 'workshops.json', category: 'workshop' },
    ];

    let allItems: PortfolioItem[] = [];

    for (const source of dataSources) {
        const filePath = path.join(process.cwd(), 'src', 'data', source.file);
        const fileContents = await fs.readFile(filePath, 'utf8');
        const items = JSON.parse(fileContents).map((item: any) => ({
            ...item,
            category: source.category,
        }));

        if (source.category === 'video') {
            allItems = allItems.concat(items.filter((item: Video) => item.type !== 'short'));
        } else {
            allItems = allItems.concat(items);
        }
    }

    return allItems.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export default async function FullPortfolio() {
    const allItems = await getAllItems();

    return <PortfolioPage allItems={allItems} />;
}
