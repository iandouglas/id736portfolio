import Layout from '@/components/Layout';
import ContentCard from '@/components/ContentCard';
import Link from 'next/link';
import {
  getNewestConferenceTalks,
  getNewestWorkshops,
  getNewestMeetupTalks,
  getNewestVideos,
  getNewestBlogs,
} from '@/lib/data';
import Image from 'next/image';

export default function Home() {
  const newestConferenceTalks = getNewestConferenceTalks(3);
  const newestWorkshops = getNewestWorkshops(3);
  const newestMeetupTalks = getNewestMeetupTalks(3);
  const newestVideos = getNewestVideos(3);
  const newestBlogs = getNewestBlogs(3);

  // Create sections with their newest date for dynamic ordering
  const contentSections = [
    {
      title: "Latest Conference Talks",
      items: newestConferenceTalks,
      seeMoreLink: "/public-speaking",
      newestDate: newestConferenceTalks.length > 0 ? newestConferenceTalks[0].date : "1900-01-01"
    },
    {
      title: "Latest Workshops", 
      items: newestWorkshops,
      seeMoreLink: "/public-speaking",
      newestDate: newestWorkshops.length > 0 ? newestWorkshops[0].date : "1900-01-01"
    },
    {
      title: "Latest Meetup Talks",
      items: newestMeetupTalks,
      seeMoreLink: "/tech-talks", 
      newestDate: newestMeetupTalks.length > 0 ? newestMeetupTalks[0].date : "1900-01-01"
    },
    {
      title: "Latest Videos",
      items: newestVideos,
      seeMoreLink: "/videos",
      newestDate: newestVideos.length > 0 ? newestVideos[0].date : "1900-01-01"
    },
    {
      title: "Latest Blog Posts",
      items: newestBlogs,
      seeMoreLink: "/blog-posts",
      newestDate: newestBlogs.length > 0 ? newestBlogs[0].date : "1900-01-01"
    }
  ];

  // Sort sections by newest date (most recent first)
  const sortedSections = contentSections.sort((a, b) => 
    new Date(b.newestDate).getTime() - new Date(a.newestDate).getTime()
  );

  const ContentSection = ({ 
    title, 
    items, 
    seeMoreLink 
  }: { 
    title: string; 
    items: any[]; 
    seeMoreLink: string; 
  }) => (
    <section className="mb-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-foreground">{title}</h2>
        <Link 
          href={seeMoreLink}
          className="text-primary-400 hover:text-primary-300 transition-colors duration-200 font-medium"
        >
          See more →
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <ContentCard key={`${item.title}-${index}`} item={item} />
        ))}
      </div>
    </section>
  );

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-20">
          <div className="max-w-6xl">
            <Image
              src="/logos/chatgpt_wildouglas_favicon.png"
              alt="Logo"
              width={250}
              height={250}
              priority
              className="rounded-full float-left mr-6 mb-4"
            />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              w ian douglas
            </h1>
            <p className="text-xl md:text-2xl text-primary-400 mb-8">
              staff developer relations engineer<br/>
              <a href="#about-me" class="text-xs text-primary-400 hover:text-primary-300 transition-colors duration-200">what's with the w?</a>
            </p>
            <p className="text-lg text-secondary-300 mb-8 leading-relaxed">
              I'm an back-end focused open-source developer and educator. My background extends across engineering disciplines, and I'm always eager to broaden my horizons. I'm currently working on several ML/AI projects and researching local LLM setups. My day job is working with an AI agent called <a href="https://block.github.io/goose">goose</a> and creating a series of developer-first content that appeals to developers who are curious about true AI productivity.
            </p>
            <p className="text-xs text-secondary-300 mb-8 leading-relaxed">
              
            </p>
            <div className="flex flex-wrap gap-6 text-secondary-400 clear-left">
              <div>Building developer communities</div>
              <div>•</div>
              <div>API design & testing</div>
              <div>•</div>
              <div>Conference speaking</div>
              <div>•</div>
              <div>Technical education</div>
            </div>
          </div>
        </section>

        {/* Content Sections - Dynamically ordered by newest content */}
        {sortedSections.map((section, index) => (
          <ContentSection
            key={section.title}
            title={section.title}
            items={section.items}
            seeMoreLink={section.seeMoreLink}
          />
        ))}

        {/* About Section */}
        <section id="about-me" className="mb-16 bg-secondary-900 rounded-lg p-8 pt-24">
          <h2 className="text-3xl font-bold text-foreground mb-6">About Me</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-secondary-300 text-lg leading-relaxed mb-4">
              [Placeholder for about content - to be added later]
            </p>
            <p className="text-secondary-300 text-lg leading-relaxed">
              This section will contain a detailed bio, background, and personal story.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16 bg-secondary-900 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h2>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-3 text-secondary-300">
                  <div>
                    <strong className="text-foreground">Email:</strong>{' '}
                    <a 
                      href="mailto:iandouglas736@gmail.com"
                      className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                    >
                      iandouglas736@gmail.com
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Connect With Me</h3>
                <div className="space-y-3 text-secondary-300">
                  <div>
                    <strong className="text-foreground">LinkedIn:</strong>{' '}
                    <a 
                      href="https://linkedin.com/in/iandouglas736"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                    >
                      linkedin.com/in/iandouglas736
                    </a>
                  </div>
                  <div>
                    <strong className="text-foreground">Twitter:</strong>{' '}
                    <a 
                      href="https://twitter.com/iandouglas736"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                    >
                      @iandouglas736
                    </a>
                  </div>
                  <div>
                    <strong className="text-foreground">Bluesky:</strong>{' '}
                    <a 
                      href="https://bsky.app/profile/iandouglas736.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                    >
                      @iandouglas736.com
                    </a>
                  </div>
                  <div>
                    <strong className="text-foreground">Threads:</strong>{' '}
                    <a 
                      href="https://www.threads.com/@iandouglas736"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                    >
                      @iandouglas736
                    </a>
                  </div>
                  <div>
                    <strong className="text-foreground">GitHub:</strong>{' '}
                    <a 
                      href="https://github.com/iandouglas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                    >
                      github.com/iandouglas
                    </a>
                  </div>
                  <div>
                    <strong className="text-foreground">Stack Overflow:</strong>{' '}
                    <a 
                      href="https://stackoverflow.com/users/364024/w-ian-douglas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                    >
                      w-ian-douglas
                    </a>
                  </div>
                  <div>
                    <strong className="text-foreground">Dev.to:</strong>{' '}
                    <a 
                      href="https://dev.to/iandouglas"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                    >
                      @iandouglas
                    </a>
                  </div>
                  <div>
                    <strong className="text-foreground">Discord:</strong>{' '}
                    <span className="text-primary-400">iandouglas736</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
