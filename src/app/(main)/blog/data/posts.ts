export interface Post {
  id: number;
  title: string;
  description: string;
  content: string;
}

export const posts: Post[] = [
  {
    id: 1,
    title: "Getting Started with JavaScript",
    description: "Learn the basics of JavaScript for web development.",
    content:
      "JavaScript is the backbone of modern web development. It allows you to build interactive and dynamic websites.",
  },
  {
    id: 2,
    title: "What is React and Why Use It?",
    description: "Understand the core concepts of React.",
    content:
      "React is a popular JavaScript library for building user interfaces using reusable components.",
  },
  {
    id: 3,
    title: "Next.js for Beginners",
    description: "A beginner-friendly guide to Next.js.",
    content:
      "Next.js is a React framework that enables server-side rendering, static generation, and better performance.",
  },
  {
    id: 4,
    title: "Understanding HTML Semantics",
    description: "Write better and more accessible HTML.",
    content:
      "A full-featured e-commerce platform with shopping cart, user authentication, payment integration, and admin dashboard. Built with modern technologies for optimal performance and scalability. Includes real-time inventory management, order tracking, and customer analytics.",
  },
  {
    id: 5,
    title: "CSS Grid vs Flexbox",
    description: "When to use Grid and when to use Flexbox.",
    content:
      "CSS Grid is great for layouts, while Flexbox is perfect for aligning elements in one direction.",
  },
  {
    id: 6,
    title: "Tailwind CSS Explained",
    description: "Utility-first CSS made simple.",
    content:
      "Tailwind CSS allows rapid UI development using utility classes directly in your markup.",
  },

];
