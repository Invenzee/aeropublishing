import { notFound } from "next/navigation";
import { getBlogPostBySlug, getAllPosts } from "@/lib/blogData";
import type { Metadata } from "next";
import BlogPostClient from "./BlogPostClient";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);
    if (!post) return {};
    return {
        title: post.metaTitle,
        description: post.metaDescription,
    };
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const allPosts = getAllPosts().filter((p) => p.slug !== slug).slice(0, 3);

    return <BlogPostClient post={post} relatedPosts={allPosts} />;
}
