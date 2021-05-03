import fs from 'fs';
import glob from 'fast-glob'
import path from 'path';

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'pages/post');

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const blogFilePaths = fs.readdirSync(POSTS_PATH).map((path) => {
    return path.replace('.mdx', '');
})
// export const blogFilePaths = glob.sync(`**/*.mdx`, { absolute: false });
console.log(blogFilePaths);

  // Only include md(x) files
  