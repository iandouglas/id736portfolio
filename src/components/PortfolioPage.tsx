"use client";

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Card from '@/components/Card';
import type { Blog, Talk, Video, Conference, Workshop } from '@/types';
import { useRouter } from 'next/navigation';


type PortfolioItem = (Blog | Talk | Video | Conference | Workshop) & { category: string; event?: string; conference?: string; };

export default function PortfolioPage({ allItems }: { allItems: PortfolioItem[] }) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>(allItems);
    const [searchTerm, setSearchTerm] = useState('');
    const category = searchParams.get('category');

    useEffect(() => {
        let items = allItems;

        if (category) {
            items = items.filter(item => item.category === category);
        }

        if (searchTerm) {
            items = items.filter(item => {
                const searchCorpus = `
                    ${item.title}
                    ${item.description}
                    ${item.conference}
                    ${item.event}
                    ${(item as Conference).location}
                    ${item.url}
                    ${(item as any).abstract}
                    ${item.type}
                `.toLowerCase();
                return searchCorpus.includes(searchTerm.toLowerCase());
            });
        }

        setFilteredItems(items);
    }, [category, searchTerm, allItems]);

    const categories = ['blog', 'conference', 'talk', 'video', 'workshop'];

    const handleCategoryClick = (newCategory: string | null) => {
        const params = new URLSearchParams(searchParams.toString());
        if (newCategory) {
            params.set('category', newCategory);
        } else {
            params.delete('category');
        }
        router.push(`/full-portfolio?${params.toString()}`);
    }

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h1 className="text-5xl font-bold tracking-tight text-vanilla sm:text-6xl text-center my-12">
                Full Portfolio
            </h1>

            <div className="mb-8">
                <h2 className="text-2xl font-bold mb-4 text-vanilla">Search & Filter</h2>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full md:w-1/2 p-2 rounded bg-eerie_black-400 text-pearl border border-ebony"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div className="flex items-center gap-4 flex-wrap">
                        <h3 className="text-xl font-bold text-vanilla shrink-0">Categories:</h3>
                        <ul className="flex items-center gap-4 flex-wrap">
                            <li
                                className={`cursor-pointer p-2 rounded ${!category ? 'bg-moss_green text-eerie_black' : 'hover:bg-eerie_black-600'}`}
                                onClick={() => handleCategoryClick(null)}
                            >
                                All
                            </li>
                            {categories.map(cat => (
                                <li
                                    key={cat}
                                    className={`cursor-pointer p-2 rounded capitalize ${category === cat ? 'bg-moss_green text-eerie_black' : 'hover:bg-eerie_black-600'}`}
                                    onClick={() => handleCategoryClick(cat)}
                                >
                                    {cat.replace('_', ' ')}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <main>
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {filteredItems.map((item, index) => (
                        <Card
                            key={`${item.category}-${index}`}
                            {...item}
                        />
                    ))}
                </div>
                 {filteredItems.length === 0 && (
                    <p className="text-pearl text-center">No items found.</p>
                )}
            </main>
        </div>
    );
}
