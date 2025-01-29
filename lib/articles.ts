import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface Post {
  meta: {
    [key: string]: string;
  };
  slug: string;
  date: string;
  href: string;
  content: string;
}

export const getRegexForSlug = (slug: string): RegExp => {
  return new RegExp(`^\\d{4}-\\d{2}-\\d{2}-${slug}.mdx$`);
};

const POSTS_PATH = 'posts';
const WORK_PATH = 'projects';

interface DateAndSlug {
  date: string;
  slug: string;
}

/**
 * Extracts date and slug from filename.
 * @param filename - The filename to extract data from.
 * @returns An object containing the date and slug, or null if the filename does not match the expected format.
 */
export const getDateAndSlugFromFilename = (
  filename: string
): DateAndSlug | null => {
  const match = filename.match(/^(\d{4}-\d{2}-\d{2})-(.*).mdx$/);
  if (match) {
    return {
      date: match[1],
      slug: match[2],
    };
  }
  return null;
};

/**
 * Reads a file and returns its front matter and date and slug.
 * @param filename - The name of the file to read.
 * @returns An object containing the front matter, date, slug, and href, or null if the filename does not match the expected format.
 */
const getPostFromFile = (filename: string, isWork?: boolean): Post | null => {
  const directoryPath = path.join(isWork ? WORK_PATH : POSTS_PATH);

  if (!fs.existsSync(directoryPath)) {
    console.warn(`⚠️ Warning: Directory "${directoryPath}" does not exist.`);
    return null;
  }

  const filePath = path.join(directoryPath, filename);

  if (!fs.existsSync(filePath)) {
    console.warn(`⚠️ Warning: File "${filePath}" not found.`);
    return null;
  }

  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data: frontMatter, content } = matter(fileContent);

  const dateAndSlug = getDateAndSlugFromFilename(filename);

  if (!dateAndSlug) {
    return null;
  }

  const { date, slug } = dateAndSlug;

  return {
    meta: frontMatter,
    content,
    slug,
    date,
    href: `/${isWork ? 'projects' : 'posts'}/${slug}`,
  };
};

/**
 * Gets a post by its slug.
 * @param slug - The slug of the post to get.
 * @returns The post with the given slug, or null if no such post exists.
 */
export const getPostBySlug = (slug: string, isWork?: boolean): Post | null => {
  const directoryPath = path.join(isWork ? WORK_PATH : POSTS_PATH);

  if (!fs.existsSync(directoryPath)) {
    console.warn(`⚠️ Warning: Directory "${directoryPath}" does not exist.`);
    return null;
  }

  let files: string[] = [];

  try {
    files = fs.readdirSync(directoryPath);
  } catch (error) {
    console.error(`❌ Error reading directory "${directoryPath}":`, error);
    return null;
  }

  if (files.length === 0) {
    console.warn(`⚠️ Warning: No files found in "${directoryPath}".`);
    return null;
  }

  for (const filename of files) {
    if (getRegexForSlug(slug).test(filename)) {
      const post = getPostFromFile(filename, isWork);
      if (post) {
        return post;
      }
    }
  }

  return null;
};

/**
 * Gets all posts.
 * @returns An array of all posts, sorted by date in descending order.
 */
export const getAllPosts = async ({
  includeDrafts,
  filePath,
  isWork,
}: {
  includeDrafts?: boolean;
  filePath?: string;
  isWork?: boolean;
}): Promise<Post[]> => {
  const directoryPath = path.join(isWork ? WORK_PATH : POSTS_PATH);

  if (!fs.existsSync(directoryPath)) {
    console.warn(`⚠️ Warning: Directory "${directoryPath}" does not exist.`);
    return [];
  }

  let files: string[] = [];

  try {
    files = fs.readdirSync(directoryPath);
  } catch (error) {
    console.error(`❌ Error reading directory "${directoryPath}":`, error);
    return [];
  }

  if (files.length === 0) {
    console.warn(`⚠️ Warning: No files found in "${directoryPath}".`);
    return [];
  }

  const posts: Post[] = files
    .map((item) => getPostFromFile(item, isWork))
    .filter((post): post is Post => post !== null);

  return posts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
};

/**
 * Generates an array of all the paths for the posts.
 * @returns An array of all the paths for the posts.
 */
export async function getAllPostPaths(isWork?: boolean) {
  const posts = await getAllPosts({ isWork });

  const paths = posts.map((post) => ({ slug: post.slug }));

  return paths;
}
