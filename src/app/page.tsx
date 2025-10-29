import Layout from '@/components/Layout';
import ContentCard from '@/components/ContentCard';
import Link from 'next/link';
import {
  getNewestConferenceTalks,
  // getNewestWorkshops,
  getNewestMeetupTalks,
  getNewestVideos,
  getNewestBlogs,
} from '@/lib/data';
import Image from 'next/image';

export default function Home() {
  const newestConferenceTalks = getNewestConferenceTalks(3);
  // const newestWorkshops = getNewestWorkshops(3);
  const newestMeetupTalks = getNewestMeetupTalks(3);
  const newestVideos = getNewestVideos(3);
  const newestBlogs = getNewestBlogs(3);

  // Create sections with their newest date for dynamic ordering
  const contentSections = [
    {
      title: "Latest Conference Talks/Workshops",
      items: newestConferenceTalks,
      seeMoreLink: "/public-speaking",
      newestDate: newestConferenceTalks.length > 0 ? newestConferenceTalks[0].date : "1900-01-01"
    },
    // {
    //   title: "Latest Workshops", 
    //   items: newestWorkshops,
    //   seeMoreLink: "/public-speaking",
    //   newestDate: newestWorkshops.length > 0 ? newestWorkshops[0].date : "1900-01-01"
    // },
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
        <section className="mb-10">
          <div className="max-w-6xl">
            <Image
              src="/logos/chatgpt_wildouglas_favicon.png"
              alt="Logo"
              width={250}
              height={250}
              priority
              className="md:float-left mr-6 mb-4 hidden md:inline-block"
            />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              w ian douglas
            </h1>
            <p className="text-xl md:text-2xl text-primary-400 mb-8">
              staff developer relations engineer<br/>
              <a href="#about-me" className="text-xs text-primary-400 hover:text-primary-300 transition-colors duration-200">what&apos;s with the w?</a>
            </p>
            <p className="text-lg text-secondary-300 mb-8 leading-relaxed">
              I&apos;m a back-end focused open-source developer and educator. My background extends across engineering disciplines, and I&apos;m always eager to broaden my horizons. I&apos;m currently working on several ML/AI projects and researching local LLM setups. My day job is working with an AI agent called <a href="https://block.github.io/goose">goose</a> and creating a series of developer-first content that appeals to developers who are curious about true AI productivity.
            </p>
            <p className="text-xs text-secondary-300 mb-8 leading-relaxed">
              
            </p>
            <div className="flex flex-wrap gap-6 text-secondary-400 clear-left">
              <div>Technical education</div>
              <div>•</div>
              <div>Conference speaking</div>
              <div>•</div>
              <div>Building developer communities</div>
              <div>•</div>
              <div>API/MCP design &amp; testing</div>
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
        <span id="about-me"></span>

        {/* About Section */}
        <section className="mb-2 bg-secondary-900 rounded-lg pt-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">About Me</h2>
          <div className="ml-10 prose prose-invert max-w-none">
            <p className="text-secondary-300 text-lg leading-relaxed mb-4">
              I&apos;m an educator. My entire life I&apos;ve been led by an inate curiosity to learn how everything works around me. This has driven me into all corners of the tech industry from finance to gaming to education technology to teaching to marketing to email processing and building newsfeeds/timelines to hosting platforms and system adminstration to deep database internals.
            </p>
            <p className="text-secondary-300 text-lg leading-relaxed mb-4">
I&apos;ve also been in the tech industry long enough to see several cycles of crazy hiring and massive layoffs.
            </p>
            <p className="text-secondary-300 text-lg leading-relaxed mb-4">
My strengths lie in API development, working with SDKs, system integrations and automation, and buliding things to scale to tens or hundreds of millions of users. I&apos;ve also held roles in DevOps/SRE, database administration (DBA), sales engineering, solution engineering, consulting/freelance, and even dabbled in some data analytics.
            </p>
            <p className="text-secondary-300 text-lg leading-relaxed mb-4">
I love to learn a thing and then teach it to others. I enjoy showing how I build solutions, and making the content as accessible as possible to everyone who wants to consume that content.
            </p>
          </div>
        </section>
        <section className="mb-2 bg-secondary-900 rounded-lg pt-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">What&apos;s with the W? (and the 736)</h2>
          <div className="ml-10 prose prose-invert max-w-none">
            <p className="text-secondary-300 text-lg leading-relaxed mb-4">
              I was born Ian William Douglas in Canada. My family has had a William Douglas in every generation dating back as far as we 
              can track into the UK and Scotland back to about the year 1750. Family rumor is that we decent from the <a href="https://en.wikipedia.org/wiki/William_Douglas,_6th_Earl_of_Morton" target="new" className="text-primary-400 hover:text-primary-300 transition-colors duration-200">William Douglas</a> who 
              reluctantly jailed Queen Mary of the Scots at his castle, but also likely aided in freeing her as well. I couldn&apos;t find 
              conclusive proof of that, yet, but AI is helping me sort through family history data. While we can&apos;t verify the lineage,
              there are several notable William Douglas characters in Scottish history. The Douglas family I do descend from southeast of 
              Glasgow were all humble-beginnings and hard workers, and that work ethis has stuck with me my whole life.
            </p>
            <p className="text-secondary-300 text-lg leading-relaxed mb-4">
When I became a US Citizen in 2019, I reversed &quot;Ian William&quot; to &quot;William Ian&quot; so I an now, legally, William Ian Douglas. However, since I&apos;ve gone by Ian my entire life, I answer to Ian more quickly than calling me William.
            </p>
            <p className="text-secondary-300 text-lg leading-relaxed mb-4">
This site is available on several domains such as <a href="https://iandouglas736.com" className="text-primary-400 hover:text-primary-300 transition-colors duration-200">iandouglas736.com</a>, <a href="https://wildouglas.com" className="text-primary-400 hover:text-primary-300 transition-colors duration-200">wildouglas.com</a>, <a href="https://iandouglas.dev" className="text-primary-400 hover:text-primary-300 transition-colors duration-200">iandouglas.dev</a>.
            </p>
            <p className="text-secondary-300 text-lg leading-relaxed mb-4">
              The &quot;736&quot; in my username is a story about how I met my wife; feel free to ask me when we chat. The &quot;wil&quot; is both a 
              shortened version of William into Will into Wil, but also a combination of my first three initials, W.I.L. (I have a second middle name).
              And because I&apos;ve gone by &quot;Ian Douglas&quot; most of my life, I keep a .dev domain there as well.
            </p>
          </div>
        </section>
        <section id="about-me" className="mb-2 bg-secondary-900 rounded-lg pt-8">
          <h2 className="text-3xl font-bold text-foreground mb-6">I Live by 2 Mottos</h2>
          <div className="ml-10 prose prose-invert max-w-none">
            <p className="text-secondary-300 text-2xl leading-relaxed mb-4">
1. Done is better than perfect
            </p>
            <p className="text-secondary-300 text-lg leading-relaxed mb-4">
Sometimes quoted as &quot;perfect is the enemy of done.&quot; Sometimes, as much as we all want the super-polished &apos;thing&apos; out there, we need to swallow our pride, take a microdose of apathy and realize that &quot;good enough is good enough.&quot;
            </p>
            <p className="text-secondary-300 text-lg leading-relaxed mb-4">
This has worked tremendously well in my career working at startups. Launch time is more important than that last bit of awesome UI/UX you want to build, or that documentation you SWEAR you&apos;re going to write. (Narrator: you will not) At other jobs, even startup environments, I&apos;ve had work held up because someone deemed the quality not to be the highest possible, and watch my efforts get bottlenecked.
            </p>
            <p className="text-secondary-300 text-lg leading-relaxed mb-4">
I have also rebuilt and redesigned and rethought and replanned this blog for almost a decade. And now it&apos;s good enough to at least get out there. It can always improve. And when Next.js isn&apos;t the greatest craze any more, I&apos;ll probably switch it to something else.
            </p>
            <p className="text-secondary-300 text-2xl leading-relaxed mb-4">
2. Share what you know, and we all win.
            </p>
            <p className="text-secondary-300 text-lg leading-relaxed mb-4">
I&apos;ve seen groundbreaking technologies left on the side of the road the moment the new hotness comes in. And how people jump on hte popular tools for a while then move on. Case in point: Sublime Text, which gave way to Atom by GitHub, which gave way to VSCode by Microsoft.
            </p>
            <p className="text-secondary-300 text-lg leading-relaxed mb-4">
How we did things back then isn&apos;t how we work now.
            </p>
            <p className="text-secondary-300 text-lg leading-relaxed mb-4">
Improvise. Adapt. Overcome.
            </p>
            <p className="text-secondary-300 text-lg leading-relaxed mb-4">
In the tech industry you have to CONSTANTLY be learning. Try a thing, analyze the result, make a change, repeat. Soon you&apos;ll be good enough to show others what you know, and hopefully teach them to avoid the traps you fell into along the way. Now we&apos;re ALL better for it.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mb-16 bg-secondary-900 rounded-lg pt-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Get In Touch</h2>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Contact Information</h3>
                <div className="space-y-3 text-secondary-300 pl-8">
                  <div>
                    <strong className="text-foreground">Email:</strong>{' '}
                    <a 
                      href="mailto:iandouglas736@gmail.com"
                      className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                    >
                      iandouglas736@gmail.com
                    </a>
                  </div>
                  <div>
                    <strong className="text-foreground">Discord:</strong>{' '}
                    <span className="text-primary-400">iandouglas736</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 pt-10">Other Content</h3>
                <div className="space-y-3 text-secondary-300 pl-8">
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
                    <strong className="text-foreground">Twitch:</strong>{' '}
                    <a 
                      href="https://twitch.tv/iandouglas736"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                    >
                      iandouglas736
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-4">Connect With Me</h3>
                <div className="space-y-3 text-secondary-300 pl-8">
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
                    <strong className="text-foreground">Mastodon:</strong>{' '}
                    <a 
                      href="https://hachyderm.io/@iandouglas736"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-400 hover:text-primary-300 transition-colors duration-200"
                    >
                      @iandouglas736@hachyderm.io
                    </a>
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
