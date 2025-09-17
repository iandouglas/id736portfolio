import Layout from '@/components/Layout';
import ContentCard from '@/components/ContentCard';
import { getPublicSpeaking, sortByDate } from '@/lib/data';

export default function PublicSpeaking() {
  const publicSpeaking = sortByDate(getPublicSpeaking());

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Public Speaking
          </h1>
          <p className="text-xl text-secondary-300 max-w-3xl">
            Conference talks, workshops, and keynotes from events around the world. 
            Covering topics from AI productivity, API design and testing to developer relations and community building.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {publicSpeaking.map((item, index) => (
            <ContentCard key={`${item.title}-${index}`} item={item} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-secondary-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Speaking Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">
                {publicSpeaking.length}
              </div>
              <div className="text-secondary-400">Total Events</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">
                {publicSpeaking.filter(item => item.event_type === 'conference').length}
              </div>
              <div className="text-secondary-400">Conferences</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">
                {publicSpeaking.filter(item => item.type === 'workshop').length}
              </div>
              <div className="text-secondary-400">Workshops</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">
                {publicSpeaking.filter(item => item.recorded).length}
              </div>
              <div className="text-secondary-400">Recorded</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
