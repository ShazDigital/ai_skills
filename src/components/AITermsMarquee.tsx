import React from "react";

const AITermsMarquee: React.FC = () => {
  const terms = [
    "Machine Learning",
    "Neural Networks",
    "Deep Learning",
    "NLP",
    "Computer Vision",
    "Reinforcement Learning",
    "GANs",
    "Transformers",
    "Vector Embeddings",
    "Fine-tuning",
    "Prompt Engineering",
    "RAG",
    "LLMs",
    "Diffusion Models",
    "Semantic Search",
    "Token Optimization",
    "Context Window",
    "Temperature",
    "Top-p Sampling",
    "Zero-shot Learning",
  ];

  // Join terms with bullet points and repeat multiple times to ensure no gaps
  const marqueeText = Array(5).fill(terms).flat().join(" • ");

  return (
    <div className="w-full overflow-hidden bg-gray-800 bg-opacity-95 py-2">
      <div className="relative flex">
        <div className="animate-marquee whitespace-nowrap">
          <span className="text-xs text-gray-300 font-mono uppercase">
            {marqueeText}
          </span>
        </div>
        <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
          <span className="text-xs text-gray-300 font-mono uppercase">
            {marqueeText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default AITermsMarquee;
