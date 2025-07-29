import { Skill } from "../types";

export const DEFAULT_SKILLS: Skill[] = [
  {
    id: "prompt-engineering",
    name: "Prompt Engineering",
    value: 2,
    description:
      "Crafting effective prompts for AI models and understanding their capabilities/limitations. Tools: ChatGPT, Claude, Bard, Perplexity, Bing Chat",
  },
  {
    id: "image-generation",
    name: "Image Generation",
    value: 2,
    description:
      "Creating and editing images using AI tools, including advanced techniques like inpainting and outpainting. Tools: Midjourney, DALL-E, Stable Diffusion, Leonardo AI",
  },
  {
    id: "video-generation",
    name: "Video Generation/Editing",
    value: 2,
    description:
      "Creating and editing videos with AI, including motion generation and video-to-video translation. Tools: Runway, Pika Labs, Synthesia, D-ID, HeyGen",
  },
  {
    id: "automation",
    name: "AI Automation",
    value: 2,
    description:
      "Building automated workflows combining AI with business processes. Tools: n8n, Make (Integromat), Zapier AI Actions, Power Automate",
  },
  {
    id: "development",
    name: "AI Development",
    value: 2,
    description:
      "Building custom AI applications and integrating language models. Tools: LangChain, LlamaIndex, OpenAI API, Anthropic API, Semantic Kernel",
  },
  {
    id: "rag-embeddings",
    name: "RAG & Embeddings",
    value: 2,
    description:
      "Working with vector databases, embeddings, and retrieval-augmented generation. Tools: Pinecone, Weaviate, ChromaDB, PGVector",
  },
  {
    id: "audio-speech",
    name: "Audio & Speech",
    value: 2,
    description:
      "Text-to-speech, speech-to-text, and audio generation/editing. Tools: ElevenLabs, Whisper, Murf AI, Voice.ai",
  },
  {
    id: "fine-tuning",
    name: "Model Fine-tuning",
    value: 2,
    description:
      "Training and fine-tuning language models on custom data. Tools: OpenAI Fine-tuning, AutoTrain, Ludwig, TensorFlow",
  },
  {
    id: "agents-autonomous",
    name: "AI Agents",
    value: 2,
    description:
      "Working with autonomous AI agents and multi-agent systems. Tools: AutoGPT, BabyAGI, LangChain Agents, Microsoft Semantic Kernel",
  },
  {
    id: "ml-data-science",
    name: "ML & Data Science",
    value: 2,
    description:
      "Traditional machine learning, deep learning, and data analysis. Tools: scikit-learn, PyTorch, TensorFlow, Pandas",
  },
  {
    id: "3d-generation",
    name: "3D Generation",
    value: 2,
    description:
      "Creating 3D models and scenes using AI. Tools: Point-E, GET3D, Shap-E, Adobe Firefly 3D",
  },
  {
    id: "ai-research",
    name: "AI Research",
    value: 2,
    description:
      "Understanding latest AI research, papers, and implementing novel techniques. Areas: Transformers, Diffusion Models, RL, Neural Networks",
  },
];
