import Layout from '@/components/Layout';
import ContentCard from '@/components/ContentCard';
import { getVideos, sortByDate } from '@/lib/data';

export default function Videos() {
  const videos = sortByDate(getVideos());

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Videos
          </h1>
          <p className="text-xl text-secondary-300 max-w-3xl">
            Educational content, tutorials, demos, and interviews covering 
            developer tools, API best practices, and industry insights.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((item, index) => (
            <ContentCard key={`${item.title}-${index}`} item={item} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-secondary-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Video Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">
                {videos.length}
              </div>
              <div className="text-secondary-400">Total Videos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">
                {videos.filter(item => item.type === 'tutorial').length}
              </div>
              <div className="text-secondary-400">Tutorials</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">
                {videos.filter(item => item.type === 'demo').length}
              </div>
              <div className="text-secondary-400">Demos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">
                {videos.filter(item => item.recorded).length}
              </div>
              <div className="text-secondary-400">Recorded</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
