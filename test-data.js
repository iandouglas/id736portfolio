// Quick test to verify data loading works
const fs = require('fs');
const path = require('path');

try {
  const publicSpeaking = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/public_speaking.json'), 'utf8'));
  const talks = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/talks.json'), 'utf8'));
  const videos = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/videos.json'), 'utf8'));
  const blogs = JSON.parse(fs.readFileSync(path.join(__dirname, 'data/blog.json'), 'utf8'));

  console.log('Data loading test:');
  console.log(`Public Speaking: ${publicSpeaking.length} items`);
  console.log(`Talks: ${talks.length} items`);
  console.log(`Videos: ${videos.length} items`);
  console.log(`Blogs: ${blogs.length} items`);

  // Test filtering
  const conferenceTalks = publicSpeaking.filter(item => item.type === 'talk' && item.event_type === 'conference');
  const workshops = publicSpeaking.filter(item => item.type === 'workshop');
  
  console.log(`\nFiltering test:`);
  console.log(`Conference talks: ${conferenceTalks.length}`);
  console.log(`Workshops: ${workshops.length}`);

  // Test sorting by date
  const sortedTalks = conferenceTalks.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  console.log(`\nNewest conference talk: ${sortedTalks[0]?.title} (${sortedTalks[0]?.date})`);

  console.log('\n✅ All data loading tests passed!');
} catch (error) {
  console.error('❌ Data loading test failed:', error.message);
}
