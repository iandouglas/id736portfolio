"use client";

import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import Card from '@/components/Card';
import type { PortfolioItem } from '@/types';
import { useRouter } from 'next/navigation';

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
                    ${item.title || ''}
                    ${item.description || ''}
                    ${item.conference || ''}
                    ${item.event || ''}
                    ${item.location || ''}
                    ${item.url || ''}
                    ${item.abstract || ''}
                    ${item.type || ''}
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
        <div>
            <h1>Full Portfolio</h1>
            <div>
                <h2>Search & Filter</h2>
                <div>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <div>
                        <h3>Categories:</h3>
                        <ul>
                            <li onClick={() => handleCategoryClick(null)}>
                                All
                            </li>
                            {categories.map(cat => (
                                <li key={cat} onClick={() => handleCategoryClick(cat)}>
                                    {cat.replace('_', ' ')}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <main>
                <div>
                    {filteredItems.map((item, index) => (
                        <Card
                            key={`${item.category}-${index}`}
                            {...item}
                        />
                    ))}
                </div>
                 {filteredItems.length === 0 && (
                    <p>No items found.</p>
                )}
            </main>
        </div>
    );
}
