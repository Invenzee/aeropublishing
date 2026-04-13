export interface BlogPost {
    slug: string;
    category: string;
    title: string;
    description: string;
    date: string;
    image: string;
    readTime: string;
    author: string;
    authorRole: string;
    content: string;
}

// Helper function to calculate reading time
export function calculateReadTime(content: string): string {
    const wordsPerMinute = 200; // Average reading speed
    const words = content.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return `${minutes} min read`;
}

export const featuredPost: BlogPost = {
    slug: "why-most-first-time-authors-fail-at-self-publishing",
    category: "Recent News",
    title: "Why Most First-Time Authors Fail at Self-Publishing (And How to Avoid It)",
    description:
        "Many first-time authors assume that once their manuscript is finished, publishing the book will be simple. In reality, the publishing journey involves far more than uploading a file online. Editing, formatting, cover design, metadata optimization, and distribution all play a crucial role in whether a book actually reaches readers.",
    date: "05 January 2026",
    image: "/main-blog-image.png",
    readTime: "8 min read",
    author: "Aero Publishing Team",
    authorRole: "Publishing Experts",
    content: `
## The Illusion of Simple Publishing

Many first-time authors assume that once their manuscript is finished, publishing the book will be simple. In reality, the publishing journey involves far more than uploading a file online. Editing, formatting, cover design, metadata optimization, and distribution all play a crucial role in whether a book actually reaches readers.

One of the biggest challenges new authors face is navigating the technical side of publishing. A poorly formatted book, an unprofessional cover, or weak book descriptions can significantly impact a book's visibility and sales.

## The Most Common Mistakes

### 1. Skipping Professional Editing

The first and most critical mistake is bypassing professional editing. Self-editing is limited — you simply cannot spot every inconsistency, grammatical error, or structural weakness in your own work. Readers notice these flaws immediately, and a book riddled with errors quickly loses credibility.

Professional editors bring fresh eyes and industry expertise. They don't just fix typos — they improve your narrative flow, strengthen character development, and ensure your message lands with maximum impact.

### 2. Underestimating Cover Design

"Don't judge a book by its cover" is advice readers don't follow. In a marketplace crowded with thousands of titles, your cover is your first and sometimes only chance to make an impression. Amateur covers signal amateur content, even if the writing inside is brilliant.

Invest in a professionally designed cover that communicates your book's genre, tone, and promise. A great cover isn't decoration — it's a marketing tool.

### 3. Ignoring Metadata and Keywords

Many authors publish their books without understanding how discoverability works on platforms like Amazon. Your title, subtitle, book description, and keywords determine whether readers can find your book through search.

Spend time researching relevant keywords in your genre. Write a compelling book description that hooks readers in the first two sentences. These small details have an outsized impact on your book's success.

### 4. Rushing to Publish

Patience is a virtue in publishing. Authors who rush their books to market — driven by excitement or impatience — often regret it. Once a book is live, negative reviews can follow you permanently.

Take the time to go through multiple editing passes, beta reader feedback, and formatting checks before hitting publish.

## How Aero Publishing Can Help

At Aero Publishing, we guide authors through every step of the publishing journey — from professional editing and stunning cover design to global distribution and marketing strategy. Our team has helped hundreds of first-time authors launch their books successfully.

You don't have to navigate this alone. With the right support, your book can reach the readers it deserves.

## Key Takeaways

- **Professional editing** is non-negotiable — it's the foundation of a credible, readable book.
- **Cover design** drives click-through rates and first impressions.
- **Metadata optimization** determines how easily readers can find your book.
- **Patience** saves you from permanent negative reviews that hurt long-term sales.

Publishing a book is one of the most rewarding experiences an author can have. Avoid these common pitfalls and give your book the best possible chance of success.
    `,
};

export const blogPosts: BlogPost[] = [
        {
        slug: "how-to-promote-your-ebook-on-booktok-instagram-linkedin",
        category: "Tips & Tricks",
        title: "How to Promote Your eBook on BookTok, Instagram & LinkedIn",
        description:
            "Learn how to promote your eBook using BookTok, Instagram, and LinkedIn. Proven strategies for fiction and non-fiction authors to boost visibility and sales.",
        date: "14 April 2026",
        image: "/ebook-promotion.jpg",
        readTime: "", // Will be calculated dynamically
        author: "Aero Publishing Team",
        authorRole: "Publishing Experts",
        content: `
Not long ago, publishing an eBook and listing it on Amazon to generate sales was fairly simple. Sadly, that is no longer the case today. The way people discover books now has changed. Readers are now finding books through social media, rather than search engines or marketplaces. Social media platforms like TikTok, Instagram and LinkedIn are now powerful tools for authors. These tools boost visibility, engagement and can also bring consistent sales. Understanding these platforms and using them strategically can make all the difference between a book that gathers dust and one that gains real traction.

## The New Rules of eBook Promotion

Readers today don't simply search for books, they stumble upon them. And not always accidentally. Social media has changed how it should be consumed, making it more organic to discover content. Algorithms favour engagement, storytelling and relatability over old school marketing tactics. This is where [BookTok marketing](https://www.blueticksocial.com/blog/the-rise-of-booktok-how-tiktok-transformed-publishing-and-digital-marketing) saves the day.

As an author, it means that visibility is no longer achieved by being listed, rather it is about being seen, shared and talked about. A strong author presence can allow you to build familiarity and a loyal audience. Instead of relying solely on book listings, authors are finding creative ways to increase their sales. Many also combine these efforts with professional support like [Aero Publishing](https://www.aeropublishing.us/book-marketing)'s book marketing services to amplify reach and position their eBooks effectively across platforms. Successful ecosystems, where readers can connect with their ideas, personality and process can make all the difference.

## Leveraging TikTok's Viral Potential

Social media platforms, especially TikTok, have the potential to capture the attention of the readers within seconds. The BookTok community has transformed how books gain popularity through emotionally engaging content.

### For Fiction: Selling the "Vibe" And Tropes

Fiction thrives on emotion and relatability. On TikTok readers are not looking for boring long summaries, rather they are drawn to the feeling a story evokes. Instead of rote reading, focus on creating a mood. Use short clips, trending sounds and highlight text or tropes. These nifty tricks can help you attract the attention of your audience. Even a simple POV style video can be far more effective than a traditional post.

A clip for example that reads, "POV: You fall in love with the villain who was never meant to be saved." Paired with the right visuals, it can immediately resonate with the right audience. This emotional hook encourages shares, which is where TikTok's true power lies.

### For Non-Fiction: Sharing "Aha" Moments

Non-fiction performs best when it delivers instant value. Readers want advice that can apply immediately.

Short impactful videos that present a key idea or a unique fact from your book can be impactful and leave a lasting impression.

For instance, if the book is about productivity, a quick 30 second video explaining a simple habit can garner attention. The book then becomes an extension of that value rather than a sole focus of it.

## Visual Storytelling On Instagram

As opposed to TikTok, [Instagram for authors](https://elizabethspanncraig.com/uncategorized/what-to-post-on-instagram-as-authors/) offers a more curated environment where aesthetics play a big role in building a loyal audience.

### Using Reels for Discovery

Reels function like TikTok and are currently one of the best ways to reach new audiences. Instagram prioritizes short form videos, making it an ideal platform for showcasing your book in creative ways.

For fiction authors, this might include aesthetics edits, character introductions, or visually engaging quotes. For non-fiction authors, reels can highlight key takeaways, quick lessons or myth-busting content.

In the end, the goal is to make your content discoverable. Strong hooks, captions and relatable messaging help ensure sales and increase reels reach beyond existing followers.

### Using Stories for Connection

While reels help you grow, stories can help you connect with your audience. They offer a more personal, behind the scenes look into your journey as an author.

Sharing daily updates, sharing your writing process or even small challenges build trust and make you more likeable. You can also add polls, Q&A, stickers and interactive elements to encourage engagement and make your followers feel involved.

This is how readers turn into a community. With time, that connection translates into stronger support when you promote your book.

## Professional Networking for Authors

LinkedIn may not be the first platform that comes to mind for book promotion; however, it has proven to be highly effective. This is especially true for authors who want to build credibility and a loyal audience. When combined with a strong publishing foundation such as professional formatting, positioning, and distribution offered by Aero Publishing authors can present themselves more confidently and attract the right audience on platforms like LinkedIn.

### For Non-Fiction: Thought Leadership

Non-Fiction authors have the advantage to establish themselves as experts by sharing insights from their books in a professional context.

Instead of promoting the book directly, it helps to break key ideas into short easy to read posts. Feel free to share day to day lessons, frameworks, or perspectives that align with your book.

If your book, for example, focuses on leadership, you might share a post discussing a common mistake managers make and simple ways on how to avoid it. This not only builds authority but also creates curiosity among the readers, leaving them wanting more.

### For Fiction: The "Authorpreneur" Journey

Fiction authors can use LinkedIn differently – by documenting the business side of writing.

Sharing your publishing journey, mistakes to avoid as a first time author, or even challenges that come up may resonate with a professional audience. Posts about discipline, creativity and perseverance often perform well.

This approach helps you not only as a writer, but also as a creator building something meaningful. It opens doors to new opportunities, collaborations and recognition among your niche audience.

## Maximizing Your Content with Repurposing

Creating content daily without pause can be tiring and overwhelming, but overtime it can become manageable when you focus on efficiency.

### The "Create Once, Post Thrice" Method

Rather than creating a separate content for each platform, focus on one relatable piece of content and adapt it.

Did you know that a single can be repurposed multiple times to create traction? This can be done as an Instagram reel, and then converted into a LinkedIn post by expanding on the idea. The core messages remain the same, but the format shifts to suit each platform individually.

A short video, for example explaining a concept from your book can become:

- A TikTok clip with a strong book
- An Instagram Reel with added captions and visuals
- A LinkedIn post that expands the idea into a professional insight

This method can save time, maintain consistency across all platforms and ensure your message reaches different audiences without making it tiresome.

## Your 30-Day Action Plan

Start small and stay consistent. During the first week, focus on understanding each platform and identify the type of content that aligns with your vision. In the weeks that follow, begin posting regularly – short videos for discovery, stories for connection and thought-provoking posts for curiosity.

Rather than perfection, aim for consistency. One strong idea, shared extensively across platforms in different formats, is more effective than sporadic posting.

Over time, these efforts compound. Visibility grows exponentially, your daily reach increases and your eBook becomes part of the conversation rather than sitting on the sidelines.

These eBook marketing strategies can increase your sales, if you follow them religiously.
        `,
    },
    {
        slug: "how-professional-book-editing-can-transform-your-manuscript",
        category: "Tips & Tricks",
        title: "How Professional Book Editing Can Transform Your Manuscript",
        description:
            "Many authors underestimate the importance of professional editing. Even the most talented writers benefit from expert editing that improves clarity, structure, and readability. Proper editing not only strengthens your story but also ensures your book meets publishing standards and creates a better experience for readers.",
        date: "04 January 2026",
        image: "/blog-1.jpg",
        readTime: "6 min read",
        author: "Aero Publishing Team",
        authorRole: "Publishing Experts",
        content: `
## Why Editing Is the Foundation of Every Great Book

No matter how talented a writer you are, your manuscript can always be improved. Professional book editing is the single most important investment an author can make before publishing. It transforms a raw manuscript into a polished, publication-ready book that readers will enjoy and respect.

## Types of Professional Editing

### Developmental Editing

Developmental editing addresses big-picture issues: structure, pacing, character arcs, plot consistency, and overall narrative flow. A developmental editor reads your manuscript holistically and provides feedback on what's working, what isn't, and how to fix it.

This type of editing is ideal early in the process, before you've finalized your manuscript. It can save you from significant rewrites later by catching fundamental issues upfront.

### Copy Editing

Copy editing focuses on grammar, punctuation, syntax, and style consistency. A copy editor ensures your prose is clean, clear, and error-free. They catch the mistakes that spell-checkers miss and ensure your writing adheres to a consistent style guide.

### Proofreading

Proofreading is the final pass before publication. At this stage, a proofreader checks for any remaining typos, formatting errors, and inconsistencies. Even after thorough copy editing, errors can slip through — proofreading is your last line of defense.

## The Impact on Reader Experience

Professional editing dramatically improves the reader experience. Well-edited books flow smoothly. Readers don't get pulled out of the story by awkward sentences or confusing passages. They can focus entirely on your message, your characters, and your world.

Poor editing, on the other hand, creates friction. Readers notice errors. They leave reviews mentioning grammar issues. They put the book down before finishing it.

## Return on Investment

Many authors balk at the cost of professional editing, but consider the alternative. A single wave of negative reviews citing poor writing quality can permanently damage your book's reputation on Amazon and other retailers. Professional editing is not a cost — it's an investment in your book's long-term success.

## Working With an Editor

Finding the right editor is about more than credentials. Look for someone who has experience in your genre, communicates clearly, and provides a sample edit before you commit. A good editor isn't just a mistake-finder — they're a partner in making your vision a reality.

At Aero Publishing, our team of professional editors is experienced across all genres. We offer developmental editing, copy editing, and proofreading services designed to elevate your manuscript to the highest standard.
        `,
    },
    {
        slug: "amazon-kdp-explained-a-beginners-guide-for-new-authors",
        category: "Tips & Tricks",
        title: "Amazon KDP Explained: A Beginner's Guide for New Authors",
        description:
            "Amazon Kindle Direct Publishing has made it easier than ever for authors to publish their own books. However, understanding the platform, formatting requirements, and publishing process is essential for success. With the right preparation, authors can turn their manuscripts into professionally published books available worldwide.",
        date: "04 January 2026",
        image: "/blog-2.jpg",
        readTime: "7 min read",
        author: "Aero Publishing Team",
        authorRole: "Publishing Experts",
        content: `
## What Is Amazon KDP?

Amazon Kindle Direct Publishing (KDP) is Amazon's self-publishing platform that allows authors to publish both digital (Kindle) and print-on-demand books. It's one of the most powerful publishing platforms in the world, giving authors direct access to millions of Amazon customers globally.

The platform is free to use — Amazon makes money by taking a percentage of your royalties rather than charging upfront fees.

## Getting Started With KDP

### Creating Your Account

Setting up a KDP account is straightforward. You'll need a standard Amazon account, bank account information for royalty payments, and tax information (W-9 for US authors, W-8BEN for international authors).

### Understanding Royalty Structures

KDP offers two royalty options for Kindle books:
- **35% royalty** for books priced below $2.99 or above $9.99
- **70% royalty** for books priced between $2.99 and $9.99 (in most markets)

For print books, KDP uses print-on-demand technology. Your royalty is the list price minus Amazon's printing costs and their percentage.

## Formatting Requirements

This is where many new authors struggle. KDP has specific formatting requirements for both Kindle and print books.

### Kindle Formatting

Kindle books are reflowable, meaning readers can adjust font size and the text reflows accordingly. Your manuscript should be formatted without complex page layouts. Use styles rather than manual formatting in Word, or use dedicated software like Vellum or Scrivener.

### Print Formatting

Print books require precise formatting with specific margin sizes, bleeds, and page dimensions. The interior layout needs to be a print-ready PDF. This is significantly more complex than Kindle formatting and often requires professional help.

## Keywords and Categories

Your book's discoverability on Amazon depends heavily on your keyword selection and category placement. Research relevant keywords using tools like Publisher Rocket or Amazon's own search suggestions. Choose your categories strategically — being a bestseller in a niche category is more achievable and still carries the "bestseller" badge.

## Common KDP Mistakes to Avoid

- Publishing before your manuscript is fully edited and formatted
- Choosing a cover that doesn't meet professional standards
- Pricing your book at extremes without testing
- Ignoring your book description — this is your sales pitch
- Not enrolling in KDP Select if you're exclusive to Amazon (you lose 70% royalties on some sales)

## Let Aero Publishing Guide You

Navigating KDP successfully requires both technical knowledge and publishing expertise. At Aero Publishing, we handle the entire KDP setup process for our authors — from formatting and cover design to keyword research and category selection. We ensure your book launches on the right foot.
        `,
    },
    {
        slug: "why-book-cover-design-is-one-of-the-most-important-parts-of-publishing",
        category: "Tips & Tricks",
        title: "Why Book Cover Design Is One of the Most Important Parts of Publishing",
        description:
            "Readers often judge a book by its cover before they ever read the description. A professionally designed cover communicates genre, tone, and credibility. Investing in strong cover design can dramatically improve a book's chances of attracting readers and standing out in competitive marketplaces.",
        date: "04 January 2026",
        image: "/blog-3.jpg",
        readTime: "5 min read",
        author: "Aero Publishing Team",
        authorRole: "Publishing Experts",
        content: `
## The Cover Is Your First Impression

In a marketplace with millions of books competing for attention, your cover has less than three seconds to capture a potential reader's interest. It's the single most powerful marketing tool your book has — and most authors underestimate it.

## What Makes a Cover Work?

### Genre Conventions

Every genre has visual conventions that readers recognize instantly. Romance novels feature specific typography and imagery. Thrillers use dark, high-contrast designs. Business books tend toward clean, minimalist layouts. Your cover needs to signal your genre immediately, or readers will scroll past.

A cover that doesn't match genre expectations confuses readers. Even if your book is excellent, breaking too many visual conventions can signal that the author doesn't understand their market.

### Typography

The font choices on your cover communicate as much as the imagery. Script fonts feel romantic and personal. Bold sans-serif fonts feel modern and confident. Serif fonts feel literary and traditional. Your author name and title need to be legible even as a small thumbnail — which is how most readers first see your book on Amazon.

### Imagery and Color

Color psychology plays a significant role in cover design. Blues and greens feel calm and trustworthy. Reds and oranges signal energy and excitement. Dark colors create mystery and tension.

The imagery on your cover should be high-quality and relevant to your story without giving too much away. Stock images must be licensed properly to avoid legal issues.

## The Thumbnail Test

Before finalizing your cover, view it as a small thumbnail — approximately the size it appears in Amazon search results. If the title isn't legible, if the imagery loses impact, or if the cover looks cluttered, it needs revision. Most book covers are viewed as thumbnails first, so design for that format.

## DIY vs. Professional Design

Many authors attempt to design their own covers using tools like Canva. While Canva has made design more accessible, truly professional, genre-appropriate covers require skills that most non-designers don't have: typography expertise, color theory knowledge, image licensing understanding, and the ability to produce print-ready files.

The cost of a professional cover ranges from a few hundred to over a thousand dollars. Given that your cover is often the primary factor in whether someone clicks on your book, this investment almost always pays for itself.

## How Aero Publishing Approaches Cover Design

Our design team works directly with authors to understand their book's genre, tone, and target audience. We create multiple concept directions before refining into a final design that balances artistic quality with market expectations.

Every cover we produce is delivered in both digital (Kindle) and print-ready formats, ensuring your book looks professional across all platforms.
        `,
    },
    {
        slug: "from-manuscript-to-published-book-understanding-the-publishing-process",
        category: "Tips & Tricks",
        title: "From Manuscript to Published Book: Understanding the Publishing Process",
        description:
            "Writing a manuscript is only the first step in becoming a published author. The publishing process includes editing, formatting, cover design, distribution setup, and marketing preparation. Understanding each step helps authors navigate the journey more confidently and avoid common mistakes.",
        date: "04 January 2026",
        image: "/blog-4.jpg",
        readTime: "9 min read",
        author: "Aero Publishing Team",
        authorRole: "Publishing Experts",
        content: `
## The Journey From Manuscript to Published Book

Completing your manuscript is a significant achievement. But for most authors, it marks the beginning of the publishing journey, not the end. Understanding the full process helps you plan effectively, set realistic timelines, and avoid the costly mistakes that derail so many first-time authors.

## Step 1: Developmental Editing

Before anything else, your manuscript needs a thorough review of its big-picture elements. Is the structure sound? Does the pacing work? Are characters compelling and consistent? Developmental editing addresses these fundamental questions.

This phase can involve significant revisions. It's normal — and expected. Even bestselling authors go through multiple developmental revisions before their books are ready for the next stage.

## Step 2: Copy Editing and Proofreading

Once the structure is solid, your manuscript moves into line-level editing. Copy editors address grammar, punctuation, syntax, and style. Proofreaders catch any remaining errors in the final pass.

This two-stage process is important because each type of editor focuses on different things. Don't skip proofreading even after thorough copy editing.

## Step 3: Interior Formatting

Book interior formatting is different from the formatting you've been doing in Word. Professional formatting creates a reading experience that feels clean and intentional — proper margins, consistent spacing, appropriate headers, and correctly formatted chapter openings.

For print books, formatting must meet the specific requirements of your chosen printer (Amazon KDP, IngramSpark, etc.). For Kindle, the file must be properly structured for reflowable display across different device sizes.

## Step 4: Cover Design

Simultaneously with interior formatting (or shortly before), your cover design should be finalized. Your cover needs to be delivered in multiple formats: a high-resolution JPEG for Kindle, and a print-ready PDF with proper bleed for the paperback.

## Step 5: Setting Up Distribution

Distribution determines where and how readers can buy your book. Amazon KDP covers Amazon distribution for both Kindle and print. IngramSpark provides access to thousands of bookstores, libraries, and retailers worldwide.

Setting up distribution correctly — including ISBNs, pricing, territories, and categories — requires careful attention to detail. Mistakes at this stage can limit your book's availability or affect your royalties.

## Step 6: Marketing Preparation

Many authors make the mistake of thinking about marketing only after their book is published. By that point, you've lost weeks of potential momentum. Marketing preparation should begin during the editing phase.

This includes building an author website, growing your email list, identifying advance readers for ARC copies, planning your launch strategy, and preparing advertising campaigns.

## Step 7: Launch and Beyond

Your book's launch week sets the trajectory for its long-term performance. A coordinated launch with early reviews, promotional pricing, and advertising gives your book the best chance of gaining traction on Amazon's algorithm.

But publishing is a long game. Consistent marketing efforts, serial publication (writing additional books), and building your author brand all contribute to sustainable success over time.

## Working With Aero Publishing

Navigating this entire process alone is possible, but challenging. Aero Publishing offers comprehensive packages that guide authors through every stage — from editing to distribution to launch strategy. Our team has experience with hundreds of successful book launches across every genre.
        `,
    },
    {
        slug: "how-self-publishing-gives-authors-more-control-over-their-work",
        category: "Tips & Tricks",
        title: "How Self-Publishing Gives Authors More Control Over Their Work",
        description:
            "Self-publishing allows authors to maintain full ownership of their books, including rights and royalties. Unlike traditional publishing models, authors have more flexibility in pricing, marketing, and distribution, allowing them to build their careers on their own terms.",
        date: "04 January 2026",
        image: "/blog-5.jpg",
        readTime: "6 min read",
        author: "Aero Publishing Team",
        authorRole: "Publishing Experts",
        content: `
## The Self-Publishing Revolution

The publishing industry has undergone a dramatic transformation over the past decade. Where once the only path to becoming a published author involved convincing a traditional publisher to take a chance on your work, today's authors have unprecedented access to global distribution and publishing tools.

Self-publishing isn't a compromise or a consolation prize — for many authors, it's the preferred pathway to publication.

## Full Creative Control

When you self-publish, every creative decision is yours. Your cover. Your title. Your pricing. Your launch date. Your marketing strategy. Traditional publishers often require authors to make significant compromises on these elements.

For authors with a strong sense of their brand and audience, this control is invaluable. You can make decisions that are right for your readers rather than decisions driven by a publisher's commercial priorities.

## Rights and Royalties

Traditional publishing deals typically involve authors signing over significant rights for extended periods. Publishers take the majority of royalties, justifying this arrangement with the services they provide: editing, design, distribution, and advances.

Self-publishing flips this equation. Platforms like Amazon KDP offer royalties of up to 70% compared to the 10-15% typical in traditional publishing. You retain your rights permanently and can modify your distribution arrangements at any time.

## Speed to Market

Traditional publishing moves slowly. From acceptance to publication, the process can take 18-24 months. Self-publishing can have your book available to readers in a matter of weeks.

This speed matters for trend-driven genres, for authors who want to build momentum quickly, and for those who simply don't want to wait two years to hold their published book.

## Building a Direct Relationship With Readers

Self-publishing encourages authors to develop their own platforms — websites, email lists, and social media presence. These direct connections with readers are assets that persist regardless of which publisher you work with.

An author who builds a loyal readership through self-publishing carries that audience with them throughout their career. This leverage gives self-published authors significant bargaining power if they later decide to pursue traditional deals.

## The Trade-offs

Self-publishing does require more upfront work and investment. You're responsible for hiring editors, designers, and marketing professionals. You manage your own distribution relationships. The quality of your final product depends entirely on the quality of the team you assemble.

This is why working with an experienced publishing partner like Aero Publishing can provide the best of both worlds — the control and royalties of self-publishing, combined with the professional support and guidance of a traditional publisher.

## Is Self-Publishing Right for You?

Self-publishing works best for authors who want full creative and business control, who are willing to invest in professional services, who are building a long-term writing career, and who want to see their book in readers' hands quickly. If that sounds like you, self-publishing may be your ideal path.
        `,
    },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    if (featuredPost.slug === slug) {
        const post = { ...featuredPost };
        post.readTime = calculateReadTime(post.content);
        return post;
    }
    const post = blogPosts.find((post) => post.slug === slug);
    if (post) {
        return { ...post, readTime: calculateReadTime(post.content) };
    }
    return undefined;
}

export function getAllPosts(): BlogPost[] {
    const allPosts = [featuredPost, ...blogPosts];
    return allPosts.map(post => ({
        ...post,
        readTime: calculateReadTime(post.content)
    }));
}
