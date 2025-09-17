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
  description: string;
  type: 'talk' | 'workshop' | 'webinar' | 'livestream' | 'podcast';
  duration: string;
  conference: string;
  location: string;
  company: string;
  recorded: boolean;
  event_type: 'meetup' | 'livestream' | 'podcast';
  banner?: string;
  abstract?: string;
}

export interface Video {
  title: string;
  url: string;
  date: string;
  description: string;
  type: 'tutorial' | 'demo' | 'interview' | 'livestream';
  duration: string;
  platform: string;
  recorded: boolean;
  banner?: string;
}

export interface Blog {
  title: string;
  url: string;
  date: string;
  description: string;
  type: 'blog' | 'article' | 'guest post';
  platform: string;
  banner?: string;
}

export type ContentItem = PublicSpeaking | Talk | Video | Blog;

export interface ContentSection {
  title: string;
  items: ContentItem[];
  seeMoreLink: string;
}
