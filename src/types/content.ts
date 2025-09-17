export interface PublicSpeaking {
  title: string;
  url: string;
  date: string;
  description: string;
  type: 'talk' | 'workshop' | 'webinar' | 'keynote' | 'lightning talk' | 'livestream';
  duration: string;
  conference: string;
  location: string;
  company: string;
  recorded: boolean;
  event_type: 'conference' | 'meetup' | 'livestream';
  banner?: string;
  abstract?: string;
}

export interface Talk {
  title: string;
  url: string;
  date: string;
  description?: string;
  type: 'talk' | 'workshop' | 'webinar' | 'livestream' | 'podcast' | 'meetup';
  duration: string;
  event?: string;
  location?: string;
  company: string;
  recorded: boolean;
  category: string;
  banner?: string;
}

export interface Video {
  title: string;
  url: string;
  date: string;
  description: string;
  type: 'tutorial' | 'demo' | 'interview' | 'livestream' | 'howto' | 'short';
  duration?: string;
  company: string;
  recorded: boolean;
  category: string;
  banner?: string;
}

export interface Blog {
  title: string;
  url: string;
  date: string;
  description?: string;
  type?: 'blog' | 'article' | 'guest post';
  company: string;
  category: string;
  banner?: string;
}

export type ContentItem = PublicSpeaking | Talk | Video | Blog;

export interface ContentSection {
  title: string;
  items: ContentItem[];
  seeMoreLink: string;
}
