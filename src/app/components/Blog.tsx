"use client";

import { useMemo } from "react";
import BlogCardItem, { IBlog } from "./BlogCardItem";
import { motion } from "framer-motion";

export default function Blog() {
  const blogs = useMemo<IBlog[]>(
    () => [
      {
        image: "/project-1.png",
        comments: 100,
        createdDate: "2024-01-01 19:33:00",
        title: `What is ReactJS?`,
      },
      {
        image: "/project-1.png",
        comments: 100,
        createdDate: "2024-01-01 19:33:00",
        title: `What is ReactJS?`,
      },
      {
        image: "/project-1.png",
        comments: 1,
        createdDate: "2024-01-01 19:33:00",
        title: `What is ReactJS?`,
      },
      {
        image: "/project-1.png",
        comments: 0,
        createdDate: "2024-04-01 19:33:00",
        title: `What is ReactJS?`,
      },
      {
        image: "/project-1.png",
        comments: 100,
        createdDate: "2024-01-01 19:33:00",
        title: `What is ReactJS?`,
      },
      {
        image: "/project-1.png",
        comments: 100,
        createdDate: "2024-01-01 19:33:00",
        title: `What is ReactJS?`,
      },
      {
        image: "/project-1.png",
        comments: 1,
        createdDate: "2024-01-01 19:33:00",
        title: `What is ReactJS?`,
      },
      {
        image: "/project-1.png",
        comments: 0,
        createdDate: "2024-04-01 19:33:00",
        title: `What is ReactJS?`,
      },
    ],
    []
  );
  return (
    <div id="blog" className="mt-[100px] pb-[100px] flex flex-col items-center">
      <h1 className="text-5xl font-semibold text-center">Blog</h1>
      <br />
      <p className="text-center">
        There are many variations of passages of Lorem Ipsum available, <br />
        but the majority have suffered alteration.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-[70px]">
        {blogs.map((blog, index) => (
          <BlogCardItem blog={blog} key={index} />
        ))}
      </div>
      <motion.button
        className="bg-purple-500 text-white px-6 py-3 rounded hover:opacity-80 mt-12"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        View more
      </motion.button>
    </div>
  );
}
