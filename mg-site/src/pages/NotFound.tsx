import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="h-[calc(100vh-96px)] flex flex-col items-center justify-center text-center px-6">
      {/* <motion.img
        src="/images/404.svg"
        alt="Page not found"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-72 md:w-96 mb-6 text-gray-200"
      /> */}

      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-4xl font-bold text-gray-200"
      >
        Page Not Found
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35 }}
        className="text-gray-500 mt-2 max-w-md"
      >
        The page you’re looking for doesn’t exist or may have been moved.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45 }}
        className="flex gap-4 mt-6"
      >
        <motion.button
          onClick={() => navigate(-1)}
          className="px-5 py-2 rounded-lg bg-gray-50 hover:bg-gray-300 transition"
        >
          Go Back
        </motion.button>

        <motion.button
          onClick={() => navigate("/")}
          className="px-5 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-700 transition"
        >
          Go Home
        </motion.button>
      </motion.div>
    </div>
  );
}
