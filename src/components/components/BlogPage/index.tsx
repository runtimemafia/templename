import { Container } from "@/components/ui/container";
import React from "react";
import H1Typography from "../Typography/H1Typography";
import Typography from "@/components/ui/typography";
import { CardComponents } from "./CardComponents";
import { useStore } from "@/lib/store";
import { motion, useInView } from "framer-motion";

interface BlogPageProps {
  data: {
    title: string;
    decription: string;
    blog_page_blogs: {
      blogs: {
        heading: string;
        date_created: string;
        image: string;
      };
    }[];
  };
}

const BlogPage: React.FC<BlogPageProps> = ({ data }) => {
  const [visibleCount, setVisibleCount] = React.useState(12);

  const sectionRef = React.useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3, once: false });

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  const { blogs, setBlog } = useStore();

  React.useEffect(() => {
    setBlog(data?.blog_page_blogs);
  }, []);

  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="my-6"
      >
        <H1Typography data={data?.title} />
        <div className="flex justify-center">
          <Typography className="font-inter lg:text-[20px] md:text-[18px] sm:text-[16px] text-[15px] text-center lg:w-[65%] sm:w-[80%] md:w-[70%]">
            {data?.decription}
          </Typography>
        </div>
      </motion.div>
      <div className="lg:columns-3 md:columns-3 sm:columns-2 columns-1 space-x-3 space-y-8 mt-6">
        {data?.blog_page_blogs?.slice(0, visibleCount).map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="break-inside-avoid hover:scale-105 transition-transform duration-200"
          >
            <CardComponents
              title={card?.blogs.heading}
              date={card.blogs.date_created}
              index={index}
              image={card.blogs.image}
            />
          </motion.div>
        ))}
      </div>
      {visibleCount < data?.blog_page_blogs?.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleShowMore}
            className="my-6 px-4 py-2 font-david-libre font-[500] bg-[rgba(255,179,0,1)] text-black rounded-md"
          >
            Load More Blogs
          </motion.button>
        </motion.div>
      )}
    </Container>
  );
};

export default BlogPage;
