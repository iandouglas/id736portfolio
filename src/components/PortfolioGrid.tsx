"use client";

import { useState, useMemo } from 'react';
import type { PortfolioItem } from '@/types';
import FilterControls from './FilterControls';
import Card from './Card';

type SortKey = 'date-desc' | 'date-asc' | 'duration-desc' | 'duration-asc';

// Helper function to convert duration string (e.g., "MM:SS" or "HH:MM:SS") to seconds
const durationToSeconds = (duration?: string): number => {
  if (!duration) return 0;
  const parts = duration.split(':').map(Number);
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  }
  if (parts.length === 3) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }
  return 0;
};

export default function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const [companyFilter, setCompanyFilter] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [sortKey, setSortKey] = useState<SortKey>('date-desc');

  const filteredAndSortedItems = useMemo(() => {
    let filtered = [...items];

    // Apply filters
    if (companyFilter) {
      filtered = filtered.filter(item => item.company === companyFilter);
    }
    if (categoryFilter) {
      filtered = filtered.filter(item => item.category === categoryFilter);
    }

    // Apply sorting
    filtered.sort((a, b) => {
      switch (sortKey) {
        case 'date-asc':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'date-desc':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'duration-asc':
          return durationToSeconds(a.duration) - durationToSeconds(b.duration);
        case 'duration-desc':
          return durationToSeconds(b.duration) - durationToSeconds(a.duration);
        default:
          return 0;
      }
    });

    return filtered;
  }, [items, companyFilter, categoryFilter, sortKey]);

  return (
    <div>
      <FilterControls
        items={items}
        companyFilter={companyFilter}
        setCompanyFilter={setCompanyFilter}
        categoryFilter={categoryFilter}
        setCategoryFilter={setCategoryFilter}
        sortKey={sortKey}
        setSortKey={setSortKey}
      />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredAndSortedItems.map((item) => (
          <Card key={`${item.title}-${item.date}`} item={item} />
        ))}
      </div>
    </div>
  );
}
