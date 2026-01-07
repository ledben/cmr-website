import fs from 'fs';
import path from 'path';
import ArticleGrid from './ArticleGrid';

export default function ArticleGridServer() {

  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const files = fs.readdirSync(imagesDir);
  const totalImages = files.filter(file => file.toLowerCase().endsWith('.jpg')).length;

  const columns = 5;

  const imageCount = totalImages - (totalImages % columns);

  console.log(totalImages);
  console.log(imageCount);

  return <ArticleGrid totalImages={imageCount} columns={columns} />;
}
