import { MDXRemote } from 'next-mdx-remote/rsc';
import { Pluggable } from 'unified';
import '../../assets/github-dark.css';
import { notFound } from 'next/navigation';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { getAllPostPaths, getPostBySlug } from '@/lib/articles';
import { Metadata, ResolvingMetadata } from 'next';
import { ScrollAnimationDemoOne } from '@/app/components/posts/2024-05-20-future-css-scroll-animations';
import {
  TextWrapHero,
  TextWrapPrettyVsBalance,
} from '@/app/components/posts/2024-05-21-future-css-text-wrap-pretty';

/**
 * Generates static paths for blog posts.
 * Ensures that missing posts directory does not crash the build.
 */
export async function generateStaticParams() {
  try {
    const paths = await getAllPostPaths();

    if (!paths || paths.length === 0) {
      console.warn("⚠️ No posts found. Skipping static params generation.");
      return [];
    }

    return paths.map((post) => ({ slug: post.slug }));
  } catch (error) {
    console.error("❌ Error generating static params:", error);
    return [];
  }
}

/**
 * Generates metadata for each blog post dynamically.
 * Ensures missing metadata does not break the page.
 */
export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPostBySlug(params.slug); // Ensure awaiting the function

  const parentMeta = await parent;

  return {
    title: post?.meta?.title || "Untitled Post",
    description: post?.meta?.summary || "A blog post on my website.",
    publisher: "Alex Pate",
    creator: "Alex Pate",
    twitter: {
      ...parentMeta?.twitter,
      siteId: undefined,
      site: undefined,
      creator: "@alexjpate",
      creatorId: "243263662",
      description: post?.meta?.summary || parentMeta?.twitter?.description,
      title: post?.meta?.title || parentMeta?.twitter?.title,
    },
    openGraph: {
      ...parentMeta?.openGraph,
      title: post?.meta?.title || parentMeta?.openGraph?.title,
      description: post?.meta?.summary || parentMeta?.openGraph?.description,
      url: `https://alexjpate.com/posts/${params.slug}`,
    },
  };
}

type Params = {
  slug: string;
};

/**
 * Renders an individual blog post.
 * Ensures missing posts do not crash the page.
 */
export default async function Post({ params }: { params: Params }) {
  const post = await getPostBySlug(params.slug); // Ensure awaiting the function

  if (!post) return notFound();

  if (post.meta.draft && process.env.NODE_ENV !== "development") {
    return notFound();
  }

  const { meta, content } = post;

  return (
    <main className="px-4 md:px-0">
      <section>
        <h1 className="font-semibold tracking-tight text-4xl text-slate-900">
          {meta.title}
        </h1>
        <span className="text-slate-500 text-sm tracking-tight font-mono block mt-4">
          Published on{" "}
          <time dateTime={post.date}>
            {new Intl.DateTimeFormat("en-GB", {
              dateStyle: "medium",
            }).format(new Date(post.date))}
          </time>
        </span>
      </section>

      <section className="py-5">
        <article className="prose prose-lg">
          <MDXRemote
            source={content}
            components={{
              ScrollAnimationDemoOne,
              TextWrapHero,
              TextWrapPrettyVsBalance,
            }}
            options={{
              mdxOptions: {
                remarkPlugins: [remarkGfm],
                rehypePlugins: [[rehypeHighlight]] as unknown as Pluggable[],
              },
            }}
          />
        </article>
      </section>
    </main>
  );
}
