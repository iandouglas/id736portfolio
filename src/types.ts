export interface PortfolioItem {
  // Common fields
  title: string;
  url?: string;
  date: string;
  company?: string;
  description?: string;
  duration?: string;
  recorded?: boolean;
  banner?: string;
  type?: string; // e.g., 'talk', 'workshop', 'blog', 'video'
  category: 'conference' | 'talk' | 'workshop' | 'blog' | 'video';

  // Conference specific
  conference?: string;
  location?: string;
  abstract?: string;

  // Talk specific
  event?: string;

  // Video specific
  // 'type' is already used for 'short', 'howto', etc.
}

// Keeping old types for reference, will remove later if not needed.
export interface Blog {
    title: string;
    url: string;
    date: string;
    description: string;
    category: 'blog';
}

export interface Talk {
    title: string;
    event: string;
    date: string;
    url: string | null;
    recorded: boolean;
    category: 'talk';
}

export interface Video {
    title: string;
    url: string;
    date: string;
    description: string;
    category: 'video';
    type?: string;
    duration?: string;
}
