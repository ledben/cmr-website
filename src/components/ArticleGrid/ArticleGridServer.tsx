import fs from 'fs';
import path from 'path';
import ArticleGrid from './ArticleGrid';

export const dynamic = 'force-static';

export default function ArticleGridServer() {

  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const files = fs.readdirSync(imagesDir);
  const allImages = files.filter(file => file.toLowerCase().endsWith('.jpg'));

  const columns = 5;
  const validCount = allImages.length - (allImages.length % columns);
  const displayImages = allImages.slice(0, validCount);

  return <ArticleGrid imageNames={displayImages} columns={columns} />;
}
