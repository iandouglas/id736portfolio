import Card from '@/components/Card';
import { promises as fs } from 'fs';
import path from 'path';
import type { Blog } from '@/types';

async function getBlogs(): Promise<Blog[]> {
  const filePath = path.join(process.cwd(), 'src', 'data', 'blog.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const data: Blog[] = JSON.parse(fileContents);

  const filteredData = data.filter(item => item.date);

  const sortedData = filteredData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return sortedData;
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8 text-green-400">Blog</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <Card key={blog.url} {...blog} />
        ))}
      </div>
    </div>
  );
}
