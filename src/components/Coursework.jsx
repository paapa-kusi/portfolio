import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaCode, FaCalculator, FaLightbulb, FaFlask, FaLaptopCode, FaChartBar, FaBook, FaGlobe, FaExternalLinkAlt } from 'react-icons/fa';

const Coursework = () => {
  const courses = [
    {
      id: 1,
      code: "COP 3502",
      name: "Programming Fundamentals I",
      semester: "Spring 2024",
      date: "2024-01",
      category: "Computer Science",
      icon: <FaCode />,
      color: "#e74c3c",
      description: "Introductory course in programming using a high-level language. Topics include basic data types, control structures, functions, and simple data structures.",
      syllabus: "SYLLABUS_LINK_HERE"
    },
    {
      id: 2,
      code: "COP 3503",
      name: "Programming Fundamentals II",
      semester: "Summer 2024",
      date: "2024-05",
      category: "Computer Science",
      icon: <FaCode />,
      color: "#e74c3c",
      description: "A continuation of COP 3502, focusing on object-oriented programming, classes, inheritance, polymorphism, and more advanced data structures.",
      syllabus: "SYLLABUS_LINK_HERE",
    },
    {
      id: 3,
      code: "COT 3100",
      name: "Applications of Discrete Structures",
      semester: "Summer 2024",
      date: "2024-05",
      category: "Mathematics",
      icon: <FaCalculator />,
      color: "#3498db",
      description: "Introduction to discrete mathematics for computer science. Topics include logic, sets, relations, functions, algorithms, graph theory, and combinatorics.",
      syllabus: "SYLLABUS_LINK_HERE"
    },
    {
      id: 4,
      code: "EIN 3354",
      name: "Engineering Economy",
      semester: "Summer 2024",
      date: "2024-05",
      category: "Engineering",
      icon: <FaChartBar />,
      color: "#9b59b6",
      description: "Economic analysis for engineering decisions. Topics include time value of money, cost analysis, depreciation, and project evaluation.",
      syllabus: "SYLLABUS_LINK_HERE",
    },
    {
      id: 5,
      code: "EME 2040",
      name: "Intro to Educational Technology",
      semester: "Summer 2024",
      date: "2024-05",
      category: "Education",
      icon: <FaLightbulb />,
      color: "#f39c12",
      description: "Introduction to the use of technology in educational settings. Focuses on various technologies and their applications in teaching and learning.",
      syllabus: "SYLLABUS_LINK_HERE",
    },
    {
      id: 6,
      code: "COP 3530",
      name: "Data Structures and Algorithms",
      semester: "Fall 2024",
      date: "2024-09",
      category: "Computer Science",
      icon: <FaCode />,
      color: "#e74c3c",
      description: "Design and analysis of fundamental data structures and algorithms. Topics include lists, trees, graphs, sorting, searching, and algorithm complexity.",
      syllabus: "SYLLABUS_LINK_HERE",
    },
    {
      id: 7,
      code: "STA 3032",
      name: "Engineering Statistics",
      semester: "Fall 2024",
      date: "2024-09",
      category: "Mathematics",
      icon: <FaCalculator />,
      color: "#3498db",
      description: "Probability and statistics for engineers. Topics include probability distributions, hypothesis testing, regression, and analysis of variance.",
      syllabus: "SYLLABUS_LINK_HERE",
    },
    {
      id: 8,
      code: "CIS 4930",
      name: "Enterprise Software Engineering",
      semester: "Fall 2024",
      date: "2024-09",
      category: "Computer Science",
      icon: <FaCode />,
      color: "#e74c3c",
      description: "Principles and practices of developing large-scale software systems. Covers topics like software architecture, design patterns, and project management.",
      syllabus: "SYLLABUS_LINK_HERE",
    },
    {
      id: 9,
      code: "EME 3319",
      name: "Design and Development of Educational Multimedia",
      semester: "Fall 2024",
      date: "2024-09",
      category: "Education",
      icon: <FaLightbulb />,
      color: "#f39c12",
      description: "Theory and practice of designing and developing multimedia resources for education. Includes instructional design principles and multimedia tools.",
      syllabus: "SYLLABUS_LINK_HERE",
    },
    {
      id: 10,
      code: "CDA 3101",
      name: "Intro to Computer Organization",
      semester: "Spring 2025",
      date: "2025-01",
      category: "Computer Science",
      icon: <FaLaptopCode />,
      color: "#e74c3c",
      description: "Basic principles of computer organization and architecture. Topics include digital logic, CPU structure, memory organization, and input/output systems.",
      syllabus: "SYLLABUS_LINK_HERE",
    },
    {
      id: 11,
      code: "CEN 3031",
      name: "Intro to Software Engineering",
      semester: "Spring 2025",
      date: "2025-01",
      category: "Computer Science",
      icon: <FaCode />,
      color: "#e74c3c",
      description: "Introduction to the software engineering process. Covers requirements, design, implementation, testing, and maintenance.",
      syllabus: "SYLLABUS_LINK_HERE",
    },
    {
      id: 12,
      code: "EEL 3872",
      name: "Artificial Intelligence Fundamentals",
      semester: "Spring 2025",
      date: "2025-01",
      category: "Artificial Intelligence",
      icon: <FaFlask />,
      color: "#2ecc71",
      description: "Fundamental concepts and techniques in artificial intelligence. Topics include search, knowledge representation, reasoning, and machine learning.",
      syllabus: "SYLLABUS_LINK_HERE",
    },
    {
      id: 13,
      code: "EEL 5840",
      name: "Fundamentals of Machine Learning",
      semester: "Spring 2025",
      date: "2025-01",
      category: "Artificial Intelligence",
      icon: <FaFlask />,
      color: "#2ecc71",
      description: "Introduction to the principles and algorithms of machine learning. Covers supervised learning, unsupervised learning, and reinforcement learning.",
      syllabus: "SYLLABUS_LINK_HERE",
    },
    {
      id: 14,
      code: "CIS 4930",
      name: "Intro to Machine Learning",
      semester: "Spring 2025",
      date: "2025-01",
      category: "Artificial Intelligence",
      icon: <FaFlask />,
      color: "#2ecc71",
      description: "Covers both theoretical concepts and practical applications of machine learning. Topics include supervised and unsupervised learning, regression, classification, prediction techniques, and algorithms such as Support Vector Machines (SVM), Neural Networks, and K-means clustering.",
      syllabus: "SYLLABUS_LINK_HERE",
    },
    {
      id: 15,
      code: "MAS 3114",
      name: "Computational Linear Algebra",
      semester: "Spring 2025",
      date: "2025-01",
      category: "Mathematics",
      icon: <FaCalculator />,
      color: "#3498db",
      description: "Linear algebra with a focus on computational aspects and applications. Topics include matrix operations, eigenvalues, eigenvectors, and numerical methods.",
      syllabus: "SYLLABUS_LINK_HERE",
    },
    {
      id: 16,
      code: "ECO 3713",
      name: "International Macroeconomics",
      semester: "Summer 2025",
      date: "2025-05",
      category: "Economics",
      icon: <FaGlobe />,
      color: "#16a085",
      description: "Macroeconomic theory and policy in an international context. Topics include exchange rates, trade, and global economic issues.",
      syllabus: "SYLLABUS_LINK_HERE",
    },
    {
      id: 17,
      code: "EME 3813",
      name: "Technology-Enhanced Learning Environments",
      semester: "Summer 2025",
      date: "2025-05",
      category: "Education",
      icon: <FaLightbulb />,
      color: "#f39c12",
      description: "Design and implementation of technology-rich learning environments. Focuses on creating effective and engaging learning experiences.",
      syllabus: "SYLLABUS_LINK_HERE",
    },
    {
      id: 18,
      code: "ENC 3246",
      name: "Professional Communication for Engineers",
      semester: "Summer 2025",
      date: "2025-05",
      category: "Engineering",
      icon: <FaBook />,
      color: "#9b59b6",
      description: "Written and oral communication skills for engineers. Covers technical writing, presentations, and professional correspondence.",
      syllabus: "SYLLABUS_LINK_HERE",
    },
    {
      id: 19,
      code: "CIS 4301",
      name: "Information and Database Systems 1",
      semester: "Summer 2025",
      date: "2025-05",
      category: "Ethics",
      icon: <FaLightbulb />,
      color: "#8e44ad",
      description: "The course covers essential aspects like data modeling, querying, and database application development",
      syllabus: "SYLLABUS_LINK_HERE",
    },
    {
      id: 20,
      code: "CIS 6261",
      name: "Trustworthy Machine Learning",
      semester: "Fall 2025",
      date: "2025-09",
      category: "Artificial Intelligence",
      icon: <FaFlask />,
      color: "#2ecc71",
      description: "Advanced topics in machine learning, focusing on building reliable, robust, and ethical AI systems. Includes fairness, explainability, and security.",
      syllabus: "SYLLABUS_LINK_HERE",
    },
    {
      id: 21,
      code: "COP 4020",
      name: "Programming Language Concepts",
      semester: "Fall 2025",
      date: "2025-09",
      category: "Computer Science",
      icon: <FaCode />,
      color: "#e74c3c",
      description: "Principles and paradigms of programming languages. Covers syntax, semantics, and implementation issues.",
      syllabus: "SYLLABUS_LINK_HERE",
    },
    {
      id: 22,
      code: "COP 4533",
      name: "Algorithm Abstraction and Design",
      semester: "Fall 2025",
      date: "2025-09",
      category: "Computer Science",
      icon: <FaCode />,
      color: "#e74c3c",
      description: "Advanced algorithm design techniques. Focuses on abstraction, design patterns, and efficient problem-solving.",
      syllabus: "SYLLABUS_LINK_HERE",
    },
    {
      id: 23,
      code: "COP 4600",
      name: "Operating Systems",
      semester: "Fall 2025",
      date: "2025-09",
      category: "Computer Science",
      icon: <FaLaptopCode />,
      color: "#e74c3c",
      description: "Principles of operating systems. Topics include process management, memory management, file systems, and concurrency.",
      syllabus: "SYLLABUS_LINK_HERE",
    },
    {
      id: 24,
      code: "CIS 6930",
      name: "Special Topics in CIS: Large Language Models",
      semester: "Fall 2025",
      date: "2025-09",
      category: "Artificial Intelligence",
      icon: <FaChartBar />,
      color: "#1abc9c",
      description: "Graduate-level introduction to large language models (LLMs). Covers tokenization, transformer architectures, training and fine-tuning methods, retrieval-augmented and knowledge-enhanced LLMs, reasoning and planning, multimodality, and safety alignment. Includes a team-based final project applying LLMs to real-world problems",
      syllabus: "SYLLABUS_LINK_HERE",
    },
    {
    id: 24,
    code: "CAP 4641",
    name: "Natural Language Processing",
    semester: "Fall 2025",
    date: "2025-09",
    category: "Artificial Intelligence",
    icon: <FaChartBar />,
    color: "#1abc9c",
    description: "Introduction to the theory and practice of natural language processing. Covers linguistic foundations, n-gram models, parsing, sequence labeling, embeddings, and modern transformer-based methods. Includes hands-on projects in Python applying NLP techniques to tasks such as machine translation, conversational agents, and evaluation of NLP systems",
    syllabus: "SYLLABUS_LINK_HERE",
  },
  ];

  return (
    <div className="w-full text-white py-12">
      <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-8">Relevant Coursework</div>
      <div className="text-lg text-slate-400 font-bold mt-2 text-center">As of Fall 2025</div>

      <VerticalTimeline>
        {courses.sort((a, b) => a.date.localeCompare(b.date)).map((course) => (
          <VerticalTimelineElement
            key={course.id}
            date={course.semester}
            icon={course.icon}
            iconStyle={{ background: course.color, color: "#fff" }}
            contentStyle={{ background: '#1a1a1a', color: '#fff' }}
            contentArrowStyle={{ borderRight: '7px solid  #1a1a1a' }}
          >
            <h3 className="vertical-timeline-element-title">{course.code} - {course.name}</h3>
            <p className="mt-2">{course.description}</p>
            {course.syllabus !== "SYLLABUS_LINK_HERE" && (
              <p className="mt-2">
                <a href={course.syllabus} target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">
                  Syllabus <FaExternalLinkAlt className="inline-block ml-1" />
                </a>
              </p>
            )}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Coursework;
