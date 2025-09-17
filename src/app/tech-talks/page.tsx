import Layout from '@/components/Layout';
import ContentCard from '@/components/ContentCard';
import { getTalks, sortByDate } from '@/lib/data';

export default function TechTalks() {
  const talks = sortByDate(getTalks());

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Tech Talks
          </h1>
          <p className="text-xl text-secondary-300 max-w-3xl">
            Meetup presentations, webinars, livestreams, and podcast appearances. 
            More intimate settings for deep dives into technical topics and community discussions.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {talks.map((item, index) => (
            <ContentCard key={`${item.title}-${index}`} item={item} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-secondary-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Talk Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">
                {talks.length}
              </div>
              <div className="text-secondary-400">Total Talks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">
                {talks.filter(item => item.type === 'meetup').length}
              </div>
              <div className="text-secondary-400">Meetups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">
                {talks.filter(item => item.type === 'livestream').length}
              </div>
              <div className="text-secondary-400">Livestreams</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">
                {talks.filter(item => item.recorded).length}
              </div>
              <div className="text-secondary-400">Recorded</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
