# Ian Douglas Portfolio Site - Project Requirements

## Overview
Building a Next.js portfolio site that 100% mimics andreagriffiths.dev for format, color scheme, and layout. The site will showcase Ian's workshops and conference talks using data from JSON files in the ./data folder.

## Key Requirements

### Site Structure (Separate Pages)
- **Home**: Hero + newest content sections + about + contact
- **Public Speaking**: Conferences and workshops from `public_speaking.json`
- **Talks**: Meetups, webinars, livestreams from `talks.json` 
- **Videos**: Content from `videos.json`
- **Blogs**: Content from `blog.json`

### Design Specifications
- **Copy Andrea's dark mode theme**: Deep blues/grays (#0d1117 background)
- **Font**: Inter (Google Fonts) - same as Andrea's site
- **Layout**: Clean, modern, card-based design
- **NO animations** (unlike Andrea's terminal animation)
- **Responsive design** for mobile/desktop

### Home Page Layout
1. Hero section with brief overview/highlights
2. **5 "newest" content sections** (3 items each with "see more" links):
   - 3 newest conference talks (from `public_speaking.json`, type="talk", event_type="conference")
   - 3 newest workshops (from `public_speaking.json`, type="workshop")
   - 3 newest meetup talks (from `talks.json`)
   - 3 newest videos (from `videos.json`)
   - 3 newest blogs (from `blog.json`)
3. About me section (placeholder for now)
4. Contact section (simple, no forms)

### Content Display Rules
- **Recorded content**: Embed YouTube videos directly on pages (no detail pages)
- **Non-recorded content**: Show banner image (400x150px) at top of card
- **Banner images**: Located in `./logos/` folder, specified in JSON `banner` field
- **Card layout**: Banner/video at top, text content below

### Data Structure Mapping
- `public_speaking.json`: Conferences, workshops, webinars (recorded/non-recorded)
- `talks.json`: Meetups, podcasts, livestreams
- `videos.json`: Video content
- `blog.json`: Written content

### Branding & Assets
- **Logo**: Use `chatgpt_wildouglas_favicon.png`
  - Crop (not resize) to 600x600 with ">w_" centered
  - Create tight crop of ">w_" for favicon.ico
- **Site title**: TBD (Ian's name or initials)

### Contact Information
- **Email**: iandouglas736@gmail.com
- **Social Media**: 
  - LinkedIn: @iandouglas736
  - Twitter: @iandouglas736  
  - Bluesky: @iandouglas736
- **Footer**: Include all social media with common icon library

### Technical Stack
- **Framework**: Next.js (latest stable)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons or similar common library
- **Deployment**: Vercel

## Data Processing Notes

### JSON File Structure
All JSON files contain arrays of objects with these common fields:
- `title`: Event/content title
- `date`: ISO date string (YYYY-MM-DD)
- `recorded`: boolean
- `banner`: filename for non-recorded events
- `url`: YouTube embed URL for recorded content
- `type`: talk, workshop, webinar, etc.
- `event_type`: conference, meetup, livestream, etc.

### Sorting Logic
- Sort all content by `date` field (newest first)
- Filter by `type` and `event_type` for home page sections

## Development Checklist

### Setup & Configuration
- [ ] Initialize Next.js project with TypeScript
- [ ] Configure Tailwind CSS with Andrea's dark theme colors
- [ ] Install React Icons and other dependencies
- [ ] Process favicon from chatgpt_wildouglas_favicon.png
- [ ] Set up project structure with pages and components

### Data Layer
- [ ] Create TypeScript interfaces for all JSON data
- [ ] Build data loading utilities
- [ ] Create helper functions for filtering/sorting by date and type
- [ ] Implement banner image processing (400x150)

### Components
- [ ] Layout component with navigation header and footer
- [ ] YouTube embed component for recorded content
- [ ] Content card component (handles both video and banner display)
- [ ] Social media links component for footer
- [ ] Navigation component

### Pages
- [ ] Home page with 5 "newest" sections + about + contact
- [ ] Public Speaking page (conferences & workshops)
- [ ] Talks page (meetups, webinars, livestreams)  
- [ ] Videos page
- [ ] Blogs page

### Styling
- [ ] Implement Andrea's color scheme and typography
- [ ] Create responsive card grid layouts
- [ ] Style navigation and footer
- [ ] Ensure proper YouTube embed styling
- [ ] Mobile responsiveness

### Final Steps
- [ ] Test all YouTube embeds work correctly
- [ ] Verify banner images display properly at 400x150
- [ ] Test navigation between all pages
- [ ] Add proper meta tags and SEO
- [ ] Optimize for Vercel deployment
- [ ] Test mobile responsiveness

## Reference Sites
- **Design inspiration**: https://andreagriffiths.dev (dark mode)
- **Color scheme**: Copy Andrea's dark theme exactly
- **Layout**: Card-based, clean, modern design

## Notes
- No individual detail pages - all content displays on list pages
- Embed videos directly in cards, don't require clicks to separate pages
- Banner images should be prominent visual element of cards for non-recorded content
- Keep design clean and professional, focused on content discovery
