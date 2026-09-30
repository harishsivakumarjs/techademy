// Edit course names, descriptions, logos and categories here.
import { LOGOS as L } from './logos'

export const CATS = [
  { id: 'popular', name: 'Popular Courses', icon: <path d="M4 6h16M4 12h16M4 18h10" /> },
  { id: 'dev', name: 'Software Development', icon: <path d="M8 8l-4 4 4 4M16 8l4 4-4 4" /> },
  {
    id: 'data',
    name: 'Data Science & AI',
    icon: (
      <>
        <circle cx="6" cy="12" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="18" cy="18" r="2" />
        <path d="M8 12h4l4-5M12 12l4 5" />
      </>
    ),
  },
  { id: 'cloud', name: 'Cloud & DevOps', icon: <path d="M7 18h10a4 4 0 0 0 .5-8 6 6 0 0 0-11.4 1.5A3.3 3.3 0 0 0 7 18z" /> },
  { id: 'testing', name: 'Software Testing', icon: <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" /> },
  { id: 'bi', name: 'BI & Visualization', icon: <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" /> },
  {
    id: 'enterprise',
    name: 'Enterprise (CRM & ERP)',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 10h18" />
      </>
    ),
  },
]

// Used for the "All Courses" category on the Technologies page
export const ALL_CAT = {
  id: 'all',
  name: 'All Courses',
  icon: (
    <>
      <rect x="3" y="3" width="7" height="7" />
      <rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" />
      <rect x="14" y="14" width="7" height="7" />
    </>
  ),
}

// slug = stable id for links (/technologies?course=<slug>), t = full title, b = banner title,
// desc = short description, topics = "What you'll learn" list in the course popup,
// logos = banner logos (max 3), c = category id, pop = show POPULAR tag, g = gradient colours
export const COURSES = [
  {
    slug: 'java-full-stack', t: 'Java Full Stack Development', b: 'Java Full Stack', c: 'dev', pop: true, g: ['#0B4F9C', '#1596D6'],
    logos: [L.java, L.spring],
    desc: 'Build complete web applications with Java, Spring Boot, REST APIs, SQL and a modern front end, finishing with a deployable full stack project.',
    topics: ['Core Java and object-oriented programming', 'Spring Boot and REST APIs', 'SQL databases with JPA and Hibernate', 'HTML, CSS and JavaScript front end', 'Building and deploying a full stack project'],
  },
  {
    slug: 'python', t: 'Python Programming with Django', b: 'Python Programming', c: 'dev', pop: true, g: ['#101B3D', '#1E2F66'],
    logos: [L.python, L.django],
    desc: 'Learn Python from the basics to object-oriented programming, then use Django to build secure, database-driven web applications you can showcase.',
    topics: ['Python syntax, data types and control flow', 'Functions, modules and object-oriented programming', 'Django models, views and templates', 'Forms, authentication and the admin panel', 'Building a database-driven web application'],
  },
  {
    slug: 'mern', t: 'MERN Full Stack Development', b: 'MERN Full Stack', c: 'dev', pop: true, g: ['#4C1D95', '#7C3AED'],
    logos: [L.mongodb, L.react, L.node],
    desc: 'Create modern web apps with MongoDB, Express, React and Node.js, covering APIs, authentication and deployment through a complete portfolio project.',
    topics: ['Modern JavaScript (ES6+) essentials', 'React components, hooks and routing', 'Node.js and Express REST APIs', 'MongoDB data modelling with Mongoose', 'Authentication and deploying a MERN project'],
  },
  {
    slug: 'core-java', t: 'Core & Advanced Java', b: 'Core & Advanced Java', c: 'dev', g: ['#7C2D12', '#EA580C'],
    logos: [L.java],
    desc: 'Master Java fundamentals, OOP, collections, exception handling, multithreading and JDBC, building the strong foundation needed for development roles.',
    topics: ['Java basics, OOP and exception handling', 'Collections framework and generics', 'Multithreading and concurrency', 'File handling and I/O streams', 'Database access with JDBC'],
  },
  {
    slug: 'web-design', t: 'Web Design (HTML, CSS, JavaScript)', b: 'Web Design', c: 'dev', g: ['#9D174D', '#DB2777'],
    logos: [L.html, L.css, L.js],
    desc: 'Design responsive, accessible websites with HTML5, CSS3 and JavaScript, and learn layouts, forms and interactivity by building real pages.',
    topics: ['Semantic HTML5 page structure', 'CSS3 styling, Flexbox and Grid layouts', 'Responsive design for mobile and desktop', 'JavaScript and DOM manipulation', 'Building and publishing a website'],
  },
  {
    slug: 'data-science', t: 'Data Science with Python & ML', b: 'Data Science', c: 'data', pop: true, g: ['#0E5E6F', '#14A3A3'],
    logos: [L.python, L.pandas, L.sklearn],
    desc: 'Analyse data with Python, Pandas and statistics, then build and evaluate machine learning models with scikit-learn on real-world datasets.',
    topics: ['Python for data analysis with NumPy and Pandas', 'Data cleaning and exploratory analysis', 'Statistics and data visualisation', 'Supervised and unsupervised learning with scikit-learn', 'Evaluating models on real-world datasets'],
  },
  {
    slug: 'generative-ai', t: 'Generative AI & Prompt Engineering', b: 'Generative AI', c: 'data', pop: true, g: ['#312E81', '#6366F1'],
    logos: [L.python, L.openai, L.langchain],
    desc: 'Learn how generative AI works and build practical applications with large language models, prompt engineering and AI APIs.',
    topics: ['Generative AI and large language model fundamentals', 'Prompt engineering techniques', 'Building apps with AI APIs', 'Chatbots and retrieval-augmented generation (RAG)', 'Responsible and safe use of AI', 'Mini project'],
  },
  {
    slug: 'data-analytics', t: 'Data Analytics (Excel, SQL, Power BI)', b: 'Data Analytics', c: 'bi', pop: true, g: ['#1E3A5F', '#2E7D9A'],
    logos: [L.excel, L.mysql, L.powerbi],
    desc: 'Clean, query and visualise business data using Excel, SQL and Power BI, and present clear insights through interactive reports and dashboards.',
    topics: ['Excel formulas, pivot tables and charts', 'SQL queries, joins and aggregations', 'Data cleaning and preparation', 'Power BI data modelling and DAX basics', 'Building interactive reports and dashboards'],
  },
  {
    slug: 'power-bi-tableau', t: 'Power BI & Tableau', b: 'Power BI & Tableau', c: 'bi', g: ['#78350F', '#D97706'],
    logos: [L.powerbi, L.tableau],
    desc: 'Connect to data sources, model data and design interactive dashboards in Power BI and Tableau that help teams make better decisions.',
    topics: ['Connecting to and transforming data sources', 'Data modelling and relationships', 'DAX measures in Power BI', 'Calculated fields and visualisations in Tableau', 'Designing interactive dashboards'],
  },
  {
    slug: 'sql', t: 'SQL & Database Management', b: 'SQL & Databases', c: 'bi', g: ['#134E4A', '#0F766E'],
    logos: [L.mysql, L.postgres],
    desc: 'Design relational databases and write efficient SQL queries, joins, views and stored procedures using MySQL and PostgreSQL on practical case studies.',
    topics: ['Relational database design and normalisation', 'SQL queries, joins and subqueries', 'Views, indexes and stored procedures', 'Transactions and data integrity', 'Working with MySQL and PostgreSQL'],
  },
  {
    slug: 'aws-cloud', t: 'AWS Cloud Practitioner & Architect', b: 'AWS Cloud', c: 'cloud', pop: true, g: ['#1F2937', '#F59E0B'],
    logos: [L.aws],
    desc: 'Learn core AWS services including EC2, S3, IAM and VPC, and design secure, scalable cloud architectures while preparing for AWS certification exams.',
    topics: ['Cloud concepts and the AWS global infrastructure', 'Compute with EC2 and storage with S3', 'Identity and access management with IAM', 'Networking with VPC', 'Designing secure, scalable architectures'],
  },
  {
    slug: 'devops', t: 'DevOps (Docker, Kubernetes, Jenkins)', b: 'DevOps Engineering', c: 'cloud', g: ['#0C4A6E', '#0284C7'],
    logos: [L.docker, L.kubernetes, L.jenkins],
    desc: 'Automate build, test and deployment pipelines with Git, Jenkins, Docker and Kubernetes, and learn how teams ship reliable software faster.',
    topics: ['Linux and Git fundamentals', 'CI/CD pipelines with Jenkins', 'Containerising applications with Docker', 'Container orchestration with Kubernetes', 'Monitoring and deployment practices'],
  },
  {
    slug: 'azure', t: 'Microsoft Azure Administration', b: 'Microsoft Azure', c: 'cloud', g: ['#1E40AF', '#3B82F6'],
    logos: [L.azure],
    desc: 'Manage Azure subscriptions, virtual machines, storage, networking and identity, gaining hands-on skills to administer cloud infrastructure and prepare for certification.',
    topics: ['Managing Azure subscriptions and resources', 'Virtual machines and storage accounts', 'Virtual networking', 'Identity management with Microsoft Entra ID', 'Monitoring and backup'],
  },
  {
    slug: 'software-testing', t: 'Manual & Automation Testing (Selenium)', b: 'Software Testing', c: 'testing', g: ['#14532D', '#16A34A'],
    logos: [L.selenium],
    desc: 'Learn testing fundamentals, test case design and defect tracking, then automate web application tests with Selenium to work as a QA engineer.',
    topics: ['Software testing life cycle and test types', 'Writing test cases and tracking defects', 'Selenium WebDriver basics', 'Locating elements and automating web tests', 'Testing a real web application'],
  },
  {
    slug: 'selenium', t: 'Selenium with Java & TestNG', b: 'Selenium Automation', c: 'testing', g: ['#3F6212', '#65A30D'],
    logos: [L.selenium, L.java],
    desc: 'Write maintainable automated tests using Selenium WebDriver, Java and TestNG, and build a page object framework with reports and data-driven testing.',
    topics: ['Java essentials for test automation', 'Selenium WebDriver and element locators', 'Organising tests with TestNG', 'Page Object Model framework design', 'Data-driven testing and test reports'],
  },
  {
    slug: 'salesforce', t: 'Salesforce Admin & Developer', b: 'Salesforce', c: 'enterprise', g: ['#075985', '#0EA5E9'],
    logos: [L.salesforce],
    desc: 'Configure Salesforce objects, security, flows and reports, then customise the platform with Apex and Lightning components for real business scenarios.',
    topics: ['Salesforce platform and data model', 'Users, profiles and security', 'Flows and process automation', 'Reports and dashboards', 'Apex programming and Lightning components'],
  },
  {
    slug: 'sap', t: 'SAP (Functional & Technical)', b: 'SAP', c: 'enterprise', g: ['#1E293B', '#475569'],
    logos: [L.sap],
    desc: 'Understand SAP business processes and modules, and gain practical configuration or ABAP development skills used by enterprises to run their operations.',
    topics: ['SAP overview and navigation', 'Core business processes and modules', 'Module configuration basics', 'ABAP programming fundamentals', 'Working through business case studies'],
  },
]
