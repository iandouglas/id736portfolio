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

  const buttonClasses = (isActive: boolean) =>
    `px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-200 ${
      isActive
        ? 'bg-green-500 text-black'
        : 'bg-gray-800 text-green-300 hover:bg-green-900'
    }`;

  return (
    <div className="space-y-6 mb-12">
      {/* Company Filters */}
      <div>
        <h3 className="text-lg font-semibold text-green-400 mb-2">Filter by Company</h3>
        <div className="flex flex-wrap gap-2">
          {companies.map(company => (
            <button
              key={company}
              onClick={() => setCompanyFilter(company === 'All' ? null : company)}
              className={buttonClasses(companyFilter === company || (company === 'All' && companyFilter === null))}
            >
              {company}
            </button>
          ))}
        </div>
      </div>

      {/* Category Filters */}
      <div>
        <h3 className="text-lg font-semibold text-green-400 mb-2">Filter by Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setCategoryFilter(category === 'All' ? null : category)}
              className={buttonClasses(categoryFilter === category || (category === 'All' && categoryFilter === null))}
            >
              <span className="capitalize">{category}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Sorting */}
      <div>
          <label htmlFor="sort-select" className="block text-lg font-semibold text-green-400 mb-2">Sort by</label>
          <select
            id="sort-select"
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value as SortKey)}
            className="bg-gray-800 border border-green-700 text-green-300 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full md:w-1/4 p-2.5"
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
