"use client";

import { useMemo } from 'react';
import type { PortfolioItem } from '@/types';

type SortKey = 'date-desc' | 'date-asc' | 'duration-desc' | 'duration-asc';

interface FilterControlsProps {
  items: PortfolioItem[];
  companyFilter: string | null;
  setCompanyFilter: (company: string | null) => void;
  categoryFilter: string | null;
  setCategoryFilter: (category: string | null) => void;
  sortKey: SortKey;
  setSortKey: (sortKey: SortKey) => void;
}

const FilterControls = ({
  items,
  companyFilter,
  setCompanyFilter,
  categoryFilter,
  setCategoryFilter,
  sortKey,
  setSortKey
}: FilterControlsProps) => {
  const companies = useMemo(() => {
    const allCompanies = items.map(item => item.company).filter(Boolean) as string[];
    return ['All', ...Array.from(new Set(allCompanies))];
  }, [items]);

  const categories = useMemo(() => {
    const allCategories = items.map(item => item.category);
    return ['All', ...Array.from(new Set(allCategories))];
  }, [items]);

  return (
    <div>
      {/* Company Filters */}
      <div>
        <h3>Filter by Company</h3>
        <div>
          {companies.map(company => (
            <button
              key={company}
              onClick={() => setCompanyFilter(company === 'All' ? null : company)}
            >
              {company}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filters */}
      <div>
        <h3>Filter by Category</h3>
        <div>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category === 'All' ? null : category)}
            >
              <span>{category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Sorting */}
      <div>
          <label htmlFor="sort-select">Sort by</label>
          <select
            id="sort-select"
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value as SortKey)}
          >
            <option value="date-desc">Date (Newest First)</option>
            <option value="date-asc">Date (Oldest First)</option>
            <option value="duration-desc">Duration (Longest First)</option>
            <option value="duration-asc">Duration (Shortest First)</option>
          </select>
      </div>
    </div>
  );
};

export default FilterControls;
