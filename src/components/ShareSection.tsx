import React, { useState } from "react";
import { useSkillContext } from "../context/SkillContext";
import { generateShareUrl } from "../utils/urlUtils";
import { Link, Share2, RefreshCw } from "lucide-react";
import { motion } from "motion/react";
import confetti from "canvas-confetti";

const ShareSection: React.FC<{ showLink?: boolean }> = ({ showLink }) => {
  const { skills, resetSkills } = useSkillContext();
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");

  const triggerConfetti = () => {
    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0.5,
      decay: 0.94,
      startVelocity: 30,
      shapes: ["circle"],
      scalar: 1,
    };

    function shootEmojis() {
      const emojis = ["🎉", "😊", "🎈", "🌟", "✨"];
      emojis.forEach((emoji, idx) => {
        setTimeout(() => {
          confetti({
            ...defaults,
            particleCount: 15,
            angle: 60 + idx * 30,
            origin: { x: 0.2 + idx * 0.15, y: 0.1 },
          });
        }, idx * 100);
      });
    }

    shootEmojis();
  };

  const handleShare = () => {
    const url = generateShareUrl(skills);
    setShareUrl(url);
    triggerConfetti();

    navigator.clipboard
      .writeText(url)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy URL: ", err);
      });
  };

  return (
    // <div className="max-w-4xl mx-auto px-4 md:px-6 mt-10 mb-16">
    <div className="flex items-center justify-center">
      {/* <div className="bg-white rounded-lg p-6 shadow-md border border-gray-100"> */}
      <div className="flex flex-col items-center justify-between gap-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.03 }}
          onClick={handleShare}
          // className="px-6 py-3 bg-[#c66d5a] text-white rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-[#b55d4a] transition-colors w-full md:w-auto justify-center"
          className="px-12 w-[300px] py-4 bg-[#2fe895] text-black rounded-lg text-lg font-medium flex items-center gap-2 justify-center"
        >
          {copied ? (
            <Link className="h-5 w-5" />
          ) : (
            <Share2 className="h-5 w-5" />
          )}
          {copied ? "Link Copied!" : "Share My Skills"}
        </motion.button>

        <button
          onClick={resetSkills}
          className="px-6 py-2 text-gray-700 bg-transparent rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-gray-100 transition-colors w-full md:w-auto justify-center"
        >
          <RefreshCw className="h-5 w-5" />
          Reset All
        </button>

        {!!(shareUrl && showLink) && (
          <div className="mt-2 flex items-center text-center gap-2">
            {/* <p className="text-sm text-gray-600">Share this URL with others:</p> */}
            <p className="text-xs text-gray-600">or share this:</p>
            <div className="p-2 bg-gray-50 rounded border border-gray-200 text-sm text-gray-700 break-all">
              {shareUrl}
            </div>
          </div>
        )}
      </div>

      {/* <div className="mt-8 border-t border-gray-100 pt-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Coming Soon Features</h3>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#c66d5a] rounded-full"></span>
              Have AI create a sharable blurb
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#c66d5a] rounded-full"></span>
              Recommend jobs based on slider selections
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#c66d5a] rounded-full"></span>
              Connect with a recruiter that works in your skill range
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#c66d5a] rounded-full"></span>
              Get recommended courses for the areas you scored wimpily in
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-[#c66d5a] rounded-full"></span>
              And more... send us ideas.
            </li>
          </ul>
        </div> */}
      {/* </div> */}
    </div>
  );
};

export default ShareSection;
