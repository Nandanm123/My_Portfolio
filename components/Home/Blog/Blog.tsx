import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  const blogs = [
    {
      image: "/images/b1.jpg",
      title: "Building Scalable ETL Pipelines for IoT Sensor Data Processing",
      date: "18 April 2026",
      tags: ["Python", "Data Engineering", "ETL"]
    },
    {
      image: "/images/b2.jpg",
      title: "Machine Learning for Smart Agriculture: Crop Yield Prediction with Random Forest",
      date: "15 April 2026",
      tags: ["Python", "Machine Learning", "TensorFlow"]
    },
    {
      image: "/images/b3.jpg",
      title: "Real-Time Object Detection: Implementing YOLOv5 for Sports Analytics",
      date: "12 April 2026",
      tags: ["Computer Vision", "OpenCV", "PyTorch"]
    }
  ];

  return (
    <div className="pt-8 pb-8">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-white">
        My latest
        <span className="text-cyan-200"> Blogs</span>
      </h1>
      <div className="w-[70%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start mt-10">
        {blogs.map((blog, index) => (
          <div
            key={index}
            data-aos="fade-right"
            data-aos-anchor-placement="top-center"
            data-aos-delay={index * 100}
            className="h-full"
          >
            <BlogCard
              image={blog.image}
              title={blog.title}
              date={blog.date}
              tags={blog.tags}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
