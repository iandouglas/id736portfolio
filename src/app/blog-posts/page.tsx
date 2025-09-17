import Layout from '@/components/Layout';
import ContentCard from '@/components/ContentCard';
import { getBlogs, sortByDate } from '@/lib/data';

export default function BlogPosts() {
  const blogs = sortByDate(getBlogs());

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Blog Posts
          </h1>
          <p className="text-xl text-secondary-300 max-w-3xl">
            Written content exploring API design, testing strategies, developer experience, 
            and insights from the world of developer relations.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((item, index) => (
            <ContentCard key={`${item.title}-${index}`} item={item} />
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-secondary-900 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-foreground mb-6">Writing Stats</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">
                {blogs.length}
              </div>
              <div className="text-secondary-400">Total Posts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">
                {blogs.filter(item => item.type === 'blog').length}
              </div>
              <div className="text-secondary-400">Blog Posts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">
                {blogs.filter(item => item.type === 'guest post').length}
              </div>
              <div className="text-secondary-400">Guest Posts</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-400">
                {blogs.filter(item => item.type === 'article').length}
              </div>
              <div className="text-secondary-400">Articles</div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
