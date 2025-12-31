import { HomeIcon, AcademicCapIcon, CodeBracketIcon, Cog6ToothIcon, DocumentDuplicateIcon, UserIcon} from "@heroicons/vue/24/outline";

import mySchedules from "../assets/svg/mySchedules.svg";
import CascadedDenoising from "../assets/svg/CascadedDenoising.svg";
import codeTracker from "../assets/svg/codeTracker.svg";
import CropPrediction from "../assets/svg/CropPrediction.svg";
import FolderOrganising from "../assets/svg/FolderOrganising.svg";
import SentimentCNN from "../assets/svg/SentimentCNN.svg";
import clustering3d from "../assets/svg/clustering3d.svg";
import Logo1 from "../assets/img/logo1.png";
import Logo2 from "../assets/img/logo2.png";
import Logo3 from "../assets/img/logo3.png";

import Java from "../assets/svg/java.svg"
import Angular from "../assets/svg/angular.svg"
import Vue from "../assets/svg/vue-9.svg";
import C from "../assets/svg/c.svg"
import PostgreSQL from "../assets/svg/postgresql.svg"
import mongodb from "../assets/svg/mongodb.svg"
import Python from "../assets/svg/python.svg";


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
    title: "AUDIT - AI",
    image: codeTracker, // Placeholder - replace with actual image
    link: "#",
    description: "Comprehensive 5-stage audit system automating the entire audit lifecycle from document ingestion to final audit opinion generation, reducing manual procedures by 60-80%."
  },
  {
    title: "WeHack",
    image: codeTracker, // Placeholder - replace with actual image
    link: "#",
    description: "Complete hackathon management system using React.js/TypeScript frontend and Spring Boot backend with RESTful APIs, user authentication, and role-based access control."
  },
  {
    title: "mySchedules",
    image: mySchedules,
    link: "https://github.com/mmanav02/mySchedules",
  },
  {
    title: "Multispectral Crop Prediction Data Pipeline",
    image: CropPrediction,
    link: "https://github.com/mmanav02/Unsupervised-Segmentation-of-Temporal-Sentinel-2-Data-for-Potato-Crop-Mapping",
  },
  {
    title: "HyperSpectral 3-Dimensional Clustering",
    image: clustering3d,
    link: "https://github.com/mmanav02/Unsupervised-3-Dimensional-Clustering-Methodology",
  },
  {
    title: "Folder Organising Task Scheduler",
    image: FolderOrganising,
    link: "https://github.com/mmanav02/Folder-Organiser-Automated-Task-Scheduler",
  },
  {
    title: "codeTracker",
    image: codeTracker,
    link: "https://github.com/mmanav02/codeTracker",
  },
  {
    title: "Cascaded Denoising of Hyperspectral Image",
    image: CascadedDenoising,
    link: "https://github.com/mmanav02/Implementation-of-Cascading-Total-Variational-Denoising-on-IIRS-Hx-Data",
  },
  {
    title: "Sentiment Detection using CNN",
    image: SentimentCNN,
    link: "https://github.com/mmanav02/Sentiment-Detection-Using-CNN",
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
    logo: Vue,
  },
  {
    name: "C/C++",
    description:
      "Systems Programming",
    logo: C,
  },
  {
    name: "PostgreSQL",
    description:
      "Database Management, SQLite3, MySQL",
    logo: PostgreSQL,
  },
  {
    name: "Cloud & DevOps",
    description:
      "Google Cloud Platform, AWS\nGit, Docker, Redis, Celery\nHadoop, QGIS, Google Earth Engine",
    logo: mongodb,
  },
  {
    name:"Vue",
    description:
      "Frontend Framework",
    logo: Vue,
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
    description: "Designed and developed an intelligent search orchestrator agent using LLM that analyzes user queries and routes searches across 4+ engines, reducing engagement confusion by 66% and improving contact fetch accuracy by 20%. Implemented OAuth 2.0 authentication for LinkedIn and Twitter with PKCE, enabling inbound messaging automation. Architected outreach backend supporting multi-channel messaging (LinkedIn, Twitter, Instagram, Reddit, Email, SMS) with AI-powered message generation and real-time WebSocket updates. Developed automated outreach agent using LangGraph workflows and built deep research algorithm using LangChain with concurrent research units." 
  },
  { 
    position: "Research Assistant", 
    company: "Santa Clara University (Guide: Prof. Navid Shaghaghi)", 
    location: "Santa Clara, USA",
    duration: "10/2024 - 02/2025", 
    description: "Developed SyllabGPT, an academic document analysis tool using LlamaIndex, Ollama and ChromaDB which automates extraction and processing of over 1,000+ PDF syllabi from 20+ institutions, increasing data accessibility by 80%. Implemented ETL pipeline with document embedding and semantic search using ChromaDB and Hugging Face models, enabling rapid syllabus retrieval (RAG). Built scalable data pipeline for syllabus ingestion, transformation, and storage using Pandas and SQLite3 with NLP techniques, achieving ~90% accuracy in syllabus section identification." 
  },
  { 
    position: "Machine Learning Research Intern", 
    company: "Space Applications Centre, ISRO", 
    location: "Ahmedabad, India",
    duration: "01/2024 - 05/2024", 
    description: "Novel Remote Sensing Method for Automatic Potato Crop Mapping without Labels using Temporal Sentinel-2 Data. Processed Sentinel-2A multispectral data (72 granules) with data masking, granule stacking, mosaicking, and filtering using various vegetation indices. Generated unsupervised crop detection feature using vegetation indices with thresholding, achieving 84.48% accuracy. Reduced processing time from 23 hours to 30 minutes by converting supervised system to unsupervised and automating the process." 
  }
];