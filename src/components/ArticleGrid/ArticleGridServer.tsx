import fs from 'fs';
import path from 'path';
import ArticleGrid, { CaptionFile } from './ArticleGrid';

export const dynamic = 'force-static';

export default function ArticleGridServer() {

  const imagesDir = path.join(process.cwd(), 'public', 'images');
  const files = fs.readdirSync(imagesDir);
  const allImagePaths = files.filter(file => file.toLowerCase().endsWith('.jpg'));

  const columns = 5;
  const validCount = allImagePaths.length - (allImagePaths.length % columns);
  const allPtahToDisplay = allImagePaths.slice(0, validCount);

  const captionContent = fs.readFileSync(path.join(imagesDir, 'caption.json'), 'utf-8');
  const captionData: CaptionFile = JSON.parse(captionContent);

  return <ArticleGrid imagesPaths={allPtahToDisplay} columns={columns} captionData={captionData} />;
}
