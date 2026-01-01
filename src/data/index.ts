import { HomeIcon, AcademicCapIcon, CodeBracketIcon, Cog6ToothIcon, DocumentDuplicateIcon, UserIcon} from "@heroicons/vue/24/outline";

import Logo1 from "../assets/img/logo1.png";
import Logo2 from "../assets/img/logo2.png";
import Logo3 from "../assets/img/logo3.png";

import Java from "../assets/svg/java.svg"
import Angular from "../assets/svg/angular.svg"
import C from "../assets/svg/c.svg"
import PostgreSQL from "../assets/svg/postgresql.svg"
import CloudDevops from "../assets/svg/CloudDevops.svg"
import Python from "../assets/svg/python.svg";
import agentWorkflow from "../assets/svg/agentWorkflow.svg";


export const navItems = [
  {
    name: "Home",
    href: "#home",
    icon: HomeIcon,
  },
  {
    name: "Skills",
    href: "#skills",
    icon: CodeBracketIcon,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: DocumentDuplicateIcon,
  },
  {
    name: "background",
    href: "#background",
    icon: AcademicCapIcon,
  },
  {
    name: "Services",
    href: "#services",
    icon: Cog6ToothIcon,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: UserIcon,
  },
  
];

export const projectsItems = [
  {
    title: "Audit AI",
    link: "https://github.com/mmanav02/ai-audit",
    description: "Comprehensive AI-powered audit application that automates financial analysis, risk assessment, and audit procedures using advanced machine learning and natural language processing."
  },
  {
    title: "WeHack",
    link: "https://github.com/mmanav02/WeHack",
    description: "Complete hackathon management system using React.js/TypeScript frontend and Spring Boot backend with RESTful APIs, user authentication, and role-based access control."
  },
  {
    title: "Distributed File Transmission System",
    link: "https://github.com/mmanav02/bittorrent",
    description: "BitTorrent-based distributed file transmission system for efficient peer-to-peer file sharing."
  },
  {
    title: "Automatic Gardening System",
    link: "https://github.com/mmanav02/Automatic-Gardening-System",
    description: "Automated gardening system with intelligent monitoring and control capabilities."
  },
  {
    title: "Genre Prediction",
    link: "https://github.com/mmanav02/Genre-Prediction",
    description: "Machine learning model for predicting genres using advanced classification techniques."
  },
  {
    title: "ConnectIN",
    link: "https://github.com/mmanav02/ConnectIN",
    description: "Google Chrome extension for automated LinkedIn, Instagram, and Twitter messaging, commenting, and connection requests."
  },
  {
    title: "MySchedules",
    link: "https://github.com/mmanav02/mySchedules",
    description: "Schedule management application for organizing and tracking personal schedules and events."
  }
];

export const skillsItems = [
  {
    name: "Python",
    description:
      "Frameworks: Django, FastAPI, Flask, TensorFlow\nLibraries: Pandas, Numpy, Scikit-learn\nAI/ML: RAG, Langchain, Langgraph, LlamaIndex",
    logo: Python,
  },
  {
    name: "Java",
    description:
      "Frameworks: Springboot\nUI: JavaFx",
    logo: Java,
  },
  {
    name: "TypeScript/JavaScript",
    description:
      "Frameworks: React, Vue, Angular, Next.js\nFrontend: HTML/CSS, Tailwind CSS",
    logo: Angular,
  },
  {
    name: "C/C++",
    description:
      "Systems Programming",
    logo: C,
  },
  {
    name: "Database",
    description:
      "PostgreSQL, SQLite3, MySQL\nDatabase Management",
    logo: PostgreSQL,
  },
  {
    name: "Cloud & DevOps",
    description:
      "Google Cloud Platform, AWS\nGit, Docker, Redis, Celery\nHadoop, QGIS, Google Earth Engine",
    logo: CloudDevops,
  },
  {
    name: "Agentic Workflow",
    description:
      "LangGraph, LangChain\nWorkflow Orchestration\nMulti-Agent Systems",
    logo: agentWorkflow,
  },
];

export const servicesItems = [
  {
    title: "Python Full Stack Development",
    description:
      "",
    logo: Logo1,
  },
  {
    title: "AI/ML Data Pipelining",
    description:
      "",
    logo: Logo2,
  },
  {
    title: "Web Development",
    description:
      "",
    logo: Logo3,
  },
];

export const testimonialsItems = [
  
];

export const educationItems = [
  { 
    degree: "Master of Science", 
    major: "Computer Science and Engineering",
    institution: "Santa Clara University", 
    year: "09/2024 - 06/2026", 
    course: "CGPA: 3.69/4.0 - Current Courses: Pattern Recognition and Data Mining, Object Oriented Application Design"
  },
  { 
    degree: "Bachelor of Technology", 
    major: "Computer Science and Engineering",
    institution: "Nirma University, India", 
    year: "10/2020 - 06/2024", 
    course: "CGPA: 3.74/4.0 - Data Structures and Algorithms, Object Oriented Programming, Programming for Scientific Computing, Operating Systems, Machine Learning, Computer Networks, Big Data Analytics, Blockchain Technologies, Information and Network Security, Natural Language Processing."
  }
]

export const experienceItems = [
  { 
    position: "Full Stack Engineer", 
    company: "StreamL", 
    location: "Remote (Santa Clara), USA",
    duration: "06/2025 - 12/2025",
    technologies: "Python, FastAPI, PostgreSQL, Alembic, Redis, Celery, Next.js, Tailwind CSS",
    description: "* Designed and developed an intelligent search orchestrator agent using LLM that analyzes user queries and routes searches across 4+ engines (Serper.dev, Apollo, Apify, PDL, Exa, Perplexity), reducing engagement confusion by 66% and improving contact fetch accuracy by 20% through an in-house search rate algorithm.\n* Implemented OAuth 2.0 authentication for LinkedIn and Twitter (X) with PKCE, enabling inbound messaging automation and social account integration, and architected the outreach backend supporting multi-channel messaging (LinkedIn, Twitter, Instagram, Reddit, Email, SMS) with AI-powered message generation, campaign scheduling, and real-time WebSocket updates using Celery and Redis.\n* Developed an automated outreach agent using LangGraph workflows that orchestrates contact search, enrichment, filtering, and personalized message generation, enabling end-to-end campaign automation with intelligent query generation and scheduling.\n* Built a deep research algorithm using LangChain and LangGraph with concurrent research units and real-time progress tracking, and designed an agentic LinkedIn web scraper using Apify, Redis, Celery, Serper.dev, and LangGraph that scrapes profiles at scale with OpenAI LLM enrichment for structured data extraction.\n* Developed ConnectIN – a Google Chrome extension for automated LinkedIn, Instagram, and Twitter messaging, commenting, and connection requests integrated with app.streaml.app, and SpeakSage – a Microsoft Excel extension for editing spreadsheets using LLM." 
  },
  { 
    position: "Research Assistant", 
    company: "Santa Clara University (Guide: Prof. Navid Shaghaghi)", 
    location: "Santa Clara, USA",
    duration: "10/2024 - 02/2025",
    technologies: "Python – LlamaIndex, Ollama, Chroma, Pinecone",
    description: "* Developed SyllabGPT, an academic document analysis tool using LlamaIndex, Ollama and ChromaDB which automates extraction and processing of over 1,000+ PDF syllabi from 20+ institutions, increasing data accessibility by 80%.\n* Implemented ETL pipeline which includes processing document embedding and semantic search with ChromaDB and Hugging Face models (BAAI), enabling rapid syllabus retrieval (RAG).\n* Built a scalable data pipeline for syllabus ingestion, transformation, and storage using Pandas and SQLite3 with the application of NLP techniques for key information extraction, achieving ~90% accuracy in syllabus section identification.\n* Managed and maintained a custom tree based vector database for efficient semantic search across 10,000+ academic documents by running segregation scripts on the documents." 
  },
  { 
    position: "Machine Learning Research Intern", 
    company: "Space Applications Center, ISRO", 
    location: "Ahmedabad, India",
    duration: "01/2024 - 05/2024",
    technologies: "Pandas, Scikit-learn, Tensorflow, QGIS, Google Earth Engine",
    description: "* Objective: Novel Remote Sensing Method for Automatic Potato Crop Mapping without Labels using Temporal Sentinel-2 Data.\n* Dataset Description and Collection: Sentinel-2A multispectral consisting of 12 Bands, primarily focused on Blue, Green, Red and NIR bands with period of interest - 01/10/2023 to 15/03/2024 and collected a total of 72 granules covering Banaskantha district of India from the Copernicus portal.\n* Data processing: Performed data masking (using LULC Mask + District Boundary Mask), granule stacking (Temporal stack for model training), granule mosaicking, filtering and data augmentation using various vegetation indices. Applied ML algorithms for the prediction of various crops and used various indices for carrying out unsupervised and segmentation.\n* Generated an unsupervised crop detection feature using various vegetation indices and used thresholding to filter out the potato crop regions in the granules - Potato feature less than -0.2078, giving an accuracy of 84.48%.\n* Impact: Reduced processing time from 23 hours to 30 minutes (converted a supervised system to an unsupervised system) and automating process by integrating all modules into a single program for execution purposes." 
  }
];