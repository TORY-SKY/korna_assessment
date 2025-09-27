
import { v4 as uuidv4 } from "uuid";
import {
  Calendar,
  Heart,
  MessageSquare,
  ChevronUp,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";

interface BlogPost {
  id: string;
  userIcon: string;
  category: string;
  user: string;
  post: string;
  summary: string;
  date: string;
  dateIcon: JSX.Element;
  likeIcon: JSX.Element;
  commentIcon: JSX.Element;
  showlessIcon: JSX.Element;
  saveIcon: JSX.Element;
  moreIcon: JSX.Element;
  commentCount: number;
}
// types.ts
export interface StaffPick {
  id: number;
  category: string;
  title: string;
  subtitle?: string;
  author: string;
  description: string;
  logo: string; // path or URL to logo image
  userIcons: string[]; // 2 user avatar images
  date: string;
}



export const blogPosts: BlogPost[] = [
  {
    id: uuidv4(),
    userIcon: "https://randomuser.me/api/portraits/men/32.jpg",
    category: "Data Collective",
    user: "James Auther",
    post: "Still copy-pasting into ChatGPT 🤣? Here’s how to turn your ideas into AI-powered apps",
    summary: "Learn how to stop copy-pasting and start building AI-powered tools directly with React and APIs.",
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    dateIcon: <Calendar size={16} />,
    likeIcon: <Heart size={16} />,
    commentIcon: <MessageSquare size={16} />,
    showlessIcon: <ChevronUp size={16} />,
    saveIcon: <Bookmark size={16} />,
    moreIcon: <MoreHorizontal size={16} />,
    commentCount: 30,

  },
  {
    id: uuidv4(),
    userIcon: "https://randomuser.me/api/portraits/women/12.jpg",
    category: "Tech News",
    user: "Sophia Lee",
    post: "Why TypeScript is the future of JavaScript development",
    summary: "Exploring how TypeScript helps scale large projects with safety and confidence.",
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    dateIcon: <Calendar size={16} />,
    likeIcon: <Heart size={16} />,
    commentIcon: <MessageSquare size={16} />,
    showlessIcon: <ChevronUp size={16} />,
    saveIcon: <Bookmark size={16} />,
    moreIcon: <MoreHorizontal size={16} />,
    commentCount: 100,
  },
  {
    id: uuidv4(),
    userIcon: "https://randomuser.me/api/portraits/men/44.jpg",
    category: "Web Dev",
    user: "Michael Carter",
    post: "Building scalable apps with React Query and Server Components",
    summary: "A deep dive into how React Query simplifies fetching and caching remote states.",
   date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    dateIcon: <Calendar size={16} />,
    likeIcon: <Heart size={16} />,
    commentIcon: <MessageSquare size={16} />,
    showlessIcon: <ChevronUp size={16} />,
    saveIcon: <Bookmark size={16} />,
    moreIcon: <MoreHorizontal size={16} />,
    commentCount: 5,
  },
  {
    id: uuidv4(),
    userIcon: "https://randomuser.me/api/portraits/women/65.jpg",
    category: "AI Trends",
    user: "Emily Brown",
    post: "5 AI tools every frontend developer should know in 2025",
    summary: "A curated list of AI-powered tools that boost developer productivity.",
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    dateIcon: <Calendar size={16} />,
    likeIcon: <Heart size={16} />,
    commentIcon: <MessageSquare size={16} />,
    showlessIcon: <ChevronUp size={16} />,
    saveIcon: <Bookmark size={16} />,
    moreIcon: <MoreHorizontal size={16} />,
    commentCount: 10,
  },
  {
    id: uuidv4(),
    userIcon: "https://randomuser.me/api/portraits/men/76.jpg",
    category: "UI/UX Design",
    user: "Daniel Kim",
    post: "Design systems with Tailwind CSS: A practical guide",
    summary: "How to create consistent UI components and scale design using Tailwind CSS.",
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    dateIcon: <Calendar size={16} />,
    likeIcon: <Heart size={16} />,
    commentIcon: <MessageSquare size={16} />,
    showlessIcon: <ChevronUp size={16} />,
    saveIcon: <Bookmark size={16} />,
    moreIcon: <MoreHorizontal size={16} />,
    commentCount: 9,

  },
  {
    id: uuidv4(),
    userIcon: "https://randomuser.me/api/portraits/women/34.jpg",
    category: "Startups",
    user: "Rachel Green",
    post: "How Nigerian startups are scaling with AI-powered platforms",
    summary: "Insights on how startups in Africa are embracing AI to disrupt traditional markets.",
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    dateIcon: <Calendar size={16} />,
    likeIcon: <Heart size={16} />,
    commentIcon: <MessageSquare size={16} />,
    showlessIcon: <ChevronUp size={16} />,
    saveIcon: <Bookmark size={16} />,
    moreIcon: <MoreHorizontal size={16} />,
    commentCount: 3,
  },
  {
    id: uuidv4(),
    userIcon: "https://randomuser.me/api/portraits/men/15.jpg",
    category: "Cloud",
    user: "David Johnson",
    post: "Firebase vs. Supabase: Which backend is right for your next app?",
    summary: "Breaking down the pros and cons of Firebase and Supabase for developers in 2025.",
   date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    dateIcon: <Calendar size={16} />,
    likeIcon: <Heart size={16} />,
    commentIcon: <MessageSquare size={16} />,
    showlessIcon: <ChevronUp size={16} />,
    saveIcon: <Bookmark size={16} />,
    moreIcon: <MoreHorizontal size={16} />,
    commentCount: 315,
  },
  {
    id: uuidv4(),
    userIcon: "https://randomuser.me/api/portraits/women/23.jpg",
    category: "Career",
    user: "Olivia Martin",
    post: "How to land your first frontend developer role in 2025",
    summary: "Step-by-step guide to portfolio building, networking, and acing interviews.",
    date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    dateIcon: <Calendar size={16} />,
    likeIcon: <Heart size={16} />,
    commentIcon: <MessageSquare size={16} />,
    showlessIcon: <ChevronUp size={16} />,
    saveIcon: <Bookmark size={16} />,
    moreIcon: <MoreHorizontal size={16} />,
    commentCount: 415,

  },
  {
    id: uuidv4(),
    userIcon: "https://randomuser.me/api/portraits/men/61.jpg",
    category: "Next.js",
    user: "Chris Evans",
    post: "The power of Server Actions in Next.js 15",
    summary: "Learn how Server Actions change the way we handle forms, mutations, and server state.",
   date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    dateIcon: <Calendar size={16} />,
    likeIcon: <Heart size={16} />,
    commentIcon: <MessageSquare size={16} />,
    showlessIcon: <ChevronUp size={16} />,
    saveIcon: <Bookmark size={16} />,
    moreIcon: <MoreHorizontal size={16} />,
    commentCount: 55,

  },
  {
    id: uuidv4(),
    userIcon: "https://randomuser.me/api/portraits/women/47.jpg",
    category: "Productivity",
    user: "Hannah Scott",
    post: "10 VSCode extensions every React developer must have",
    summary: "A roundup of the most useful extensions to speed up your development workflow.",
   date: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
    dateIcon: <Calendar size={16} />,
    likeIcon: <Heart size={16} />,
    commentIcon: <MessageSquare size={16} />,
    showlessIcon: <ChevronUp size={16} />,
    saveIcon: <Bookmark size={16} />,
    moreIcon: <MoreHorizontal size={16} />,
    commentCount: 315,

  },
];


// data.ts


export const staffPicks: StaffPick[] = [
  {
    id: 1,
    category: "Staff Picks",
    title: "Rooted",
    subtitle: "In Rooted",
    author: "Joshua Samuel Brown",
    description:
      "The Four Stages of Life as Experienced Through Taiwanese Cuisine",
    logo: "https://randomuser.me/api/portraits/women/1.jpg",
    userIcons: "https://randomuser.me/api/portraits/women/47.jpg",
    date: "Sep 11",
  },
  {
    id: 2,
    category: "Staff Picks",
    title: "Beyond the Horizon",
    subtitle: "Journeys of Culture",
    author: "Jane Doe",
    description: "Exploring traditions and hidden stories across Asia.",
    logo: "https://randomuser.me/api/portraits/women/4.jpg",
    userIcons: "https://randomuser.me/api/portraits/women/47.jpg",
    date: "Aug 28",
  },
  {
    id: 3,
    category: "Staff Picks",
    title: "Voices of the Wild",
    subtitle: "Nature’s Symphony",
    author: "Michael Tan",
    description:
      "How the sounds of wildlife connect us to the earth’s rhythms.",
    logo: "https://randomuser.me/api/portraits/men/19.jpg",
    userIcons: "https://randomuser.me/api/portraits/women/7.jpg",
    date: "Jul 19",
  },
  
];