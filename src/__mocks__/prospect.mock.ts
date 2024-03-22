import { SOCIAL_TYPE } from "~/constants/common";
import { ProspectModel } from "~/models";
import { MOCK_CONTACTS, MOCK_MEDIA } from "./common.mock";
import { MOCK_COMPANIES } from "./company.mock";

export const MOCK_PROSPECT: ProspectModel[] = [
  {
    id: 1,
    fullname: "Ngân Nguyễn (Jamie)",
    contacts: [MOCK_CONTACTS[0], MOCK_CONTACTS[2]],
    avatar: MOCK_MEDIA[0],
    resume: {
      title:
        "Chief Information Officer ( Chief Information Officer ) - Gf , Group Chief Information Security Officer ( Ciso )",
      companyUrl: "https://www.sourceofasia.com",
      about:
        "The ASIAN century has arrived Located in Ho Chi Minh City, we’ve been on a mission to seize opportunities offered by Vietnam and ASEAN to make internationalization become a reality. For more than 2 decades, our clients have defined who we are: A Source of Growth. Way beyond a simple consulting firm, Source of Asia is an international business accelerator for corporations and entrepreneurs willing to embrace the dynamics of the region. Leveraging on our deep local expertise, we pro-actively enable you to explore new markets, operate, and grow business in Vietnam, across ASEAN, and further afield. We are here to act as your trusted local arm whether you aim to: • Export your products and services • Source and optimize your global supply chain • Set up and manage your operations locally Together, let’s accelerate your international development 🚀 We thrive on challenges, permanently motivated to learn, and grow along the way. We also believe success lies in the human relationships we build. Driven by this mindset, we represent your interest with passion and always act in a benevolent, collaborative, transparent and results-oriented way. Our 20 years of local presence and our talented community are the best assets to ensure your successful expansion. Everyday our 45 Vietnamese and Foreign experts translate the complexity of ASEAN markets into creative and tangible solutions. Every day, we interact with skilled entrepreneurs, business associations, suppliers, distributors, and high-level connections. Furthermore, we an active member of international networks such as Globallians and OSCI. This ecosystem is the ideal gateway for companies, who believe, like we do, in sustainable growth. Ready for a journey with SOA? HERE TO GET YOU THERE www.sourceofasia.com",
      employeeNumber: "11 - 50",
      industry: "Finance",
      subIndustry: "International Trade & Development",
      specialties: [
        "Project Management",
        "IncubationSourcingConsultingFactory",
        "PlanningSupplier",
        "AssessmentQualityMarketing",
        "DesignBusiness",
        "DevelopmentExport",
      ],
      founded: 2007,
      annualRevenue: "$5M to $10M",

      social: [
        {
          type: SOCIAL_TYPE.FACEBOOK,
          url: "#!",
        },
        {
          type: SOCIAL_TYPE.TWITTER,
          url: "#!",
        },
      ],
    },
    company: MOCK_COMPANIES[0],
    country: "Vietnam",
  },
  {
    id: 2,
    fullname: "Minh Trần (Michael)",
    contacts: [],
    avatar: MOCK_MEDIA[0],
    resume: {
      title: "Senior Software Engineer",
      companyUrl: "https://www.techinnovate.com",
      about:
        "Tech Innovate is a leading software development company specializing in innovative solutions for businesses of all sizes. Our team of experts is dedicated to delivering high-quality software products that exceed our clients' expectations. With a focus on cutting-edge technologies and a commitment to excellence, we help businesses thrive in today's digital landscape.",
      employeeNumber: "51 - 200",
      industry: "Information Technology & Services",
      subIndustry: "Computer Software",
      specialties: [
        "Software Development",
        "Web Development",
        "Mobile App Development",
        "Cloud Computing",
        "Artificial Intelligence",
        "Machine Learning",
      ],
      founded: 2010,
      annualRevenue: "$10M to $50M",
      social: [
        {
          type: SOCIAL_TYPE.LINKED,
          url: "#!",
        },
        {
          type: SOCIAL_TYPE.FACEBOOK,
          url: "#!",
        },
      ],
    },
    company: MOCK_COMPANIES[1],
    country: "Vietnam",
  },
  {
    id: 3,
    fullname: "Linh Đỗ (Jessica)",
    contacts: [],
    avatar: MOCK_MEDIA[0],
    resume: {
      title: "Marketing Manager",
      companyUrl: "https://www.digitalmarketers.com",
      about:
        "Digital Marketers is a leading marketing agency that specializes in helping businesses achieve their online goals. From SEO and social media management to content creation and digital advertising, our team of experts has the knowledge and experience to drive results for our clients. We believe in staying ahead of the curve and constantly adapting to the ever-changing digital landscape to ensure our clients' success.",
      employeeNumber: "11 - 50",
      industry: "Marketing & Advertising",
      subIndustry: "Online Marketing",
      specialties: [
        "Digital Marketing",
        "SEO",
        "Social Media Management",
        "Content Marketing",
        "PPC Advertising",
        "Email Marketing",
      ],
      founded: 2012,
      annualRevenue: "$5M to $10M",
      social: [
        {
          type: SOCIAL_TYPE.FACEBOOK,
          url: "#!",
        },
        {
          type: SOCIAL_TYPE.TWITTER,
          url: "#!",
        },
      ],
    },
    company: MOCK_COMPANIES[2],
    country: "Vietnam",
  },

  {
    id: 4,
    fullname: "Hải Vũ (Alex)",
    contacts: [],
    avatar: MOCK_MEDIA[0],
    resume: {
      title: "Financial Analyst",
      companyUrl: "https://www.financialanalytics.com",
      about:
        "Financial Analytics is a premier financial consulting firm specializing in providing comprehensive financial analysis and strategic planning services. Our team of experienced analysts works closely with clients to analyze market trends, evaluate investment opportunities, and develop strategies to maximize financial performance. We are committed to delivering actionable insights and innovative solutions that drive sustainable growth and success for our clients.",
      employeeNumber: "51 - 200",
      industry: "Financial Services",
      subIndustry: "Financial Consulting",
      specialties: [
        "Financial Analysis",
        "Investment Strategy",
        "Market Research",
        "Strategic Planning",
        "Risk Management",
        "Performance Evaluation",
      ],
      founded: 2008,
      annualRevenue: "$10M to $50M",
      social: [
        {
          type: SOCIAL_TYPE.LINKED,
          url: "#!",
        },
        {
          type: SOCIAL_TYPE.FACEBOOK,
          url: "#!",
        },
      ],
    },
    company: MOCK_COMPANIES[3],
    country: "Vietnam",
  },
  {
    id: 5,
    fullname: "Anh Phạm (Sophia)",
    contacts: [],
    avatar: MOCK_MEDIA[0],
    resume: {
      title: "Human Resources Manager",
      companyUrl: "https://www.hrconsulting.vn",
      about:
        "HR Consulting Vietnam is a leading human resources consulting firm dedicated to providing innovative HR solutions to businesses of all sizes. Our team of HR experts specializes in recruitment, training, performance management, and organizational development. We work closely with our clients to understand their unique needs and develop customized solutions to help them attract, retain, and develop top talent.",
      employeeNumber: "11 - 50",
      industry: "Human Resources",
      subIndustry: "HR Consulting",
      specialties: [
        "Recruitment",
        "Training & Development",
        "Performance Management",
        "Organizational Development",
        "Employee Relations",
        "HR Strategy",
      ],
      founded: 2015,
      annualRevenue: "$1M to $5M",
      social: [
        {
          type: SOCIAL_TYPE.LINKED,
          url: "#!",
        },
        {
          type: SOCIAL_TYPE.TWITTER,
          url: "#!",
        },
      ],
    },
    company: MOCK_COMPANIES[4],
    country: "Vietnam",
  },
  {
    id: 6,
    fullname: "Thảo Lê (Emily)",
    contacts: [],
    avatar: MOCK_MEDIA[0],
    resume: {
      title: "Product Manager",
      companyUrl: "https://www.productmanagement.com",
      about:
        "Product Management Solutions is a leading provider of product management consulting services. Our team of experienced product managers helps companies develop and launch successful products by providing strategic guidance, market analysis, and product development support. We work closely with our clients to understand their business objectives and market needs, and we develop customized solutions to help them achieve their goals.",
      employeeNumber: "51 - 200",
      industry: "Management Consulting",
      subIndustry: "Product Management",
      specialties: [
        "Product Strategy",
        "Market Analysis",
        "Product Development",
        "Product Launch",
        "Product Lifecycle Management",
        "Go-to-Market Strategy",
      ],
      founded: 2009,
      annualRevenue: "$10M to $50M",
      social: [
        {
          type: SOCIAL_TYPE.LINKED,
          url: "#!",
        },
        {
          type: SOCIAL_TYPE.FACEBOOK,
          url: "#!",
        },
      ],
    },
    company: MOCK_COMPANIES[5],
    country: "Vietnam",
  },
  {
    id: 7,
    fullname: "Nam Nguyễn (David)",
    contacts: [],
    avatar: MOCK_MEDIA[0],
    resume: {
      title: "Operations Manager",
      companyUrl: "https://www.operationsmanagement.com",
      about:
        "Operations Management Solutions is a leading provider of operations management consulting services. Our team of experienced operations managers helps companies improve efficiency, reduce costs, and increase profitability by optimizing their operations processes. We work closely with our clients to identify areas for improvement and develop customized solutions to address their specific needs.",
      employeeNumber: "51 - 200",
      industry: "Management Consulting",
      subIndustry: "Operations Management",
      specialties: [
        "Operations Optimization",
        "Process Improvement",
        "Cost Reduction",
        "Supply Chain Management",
        "Quality Management",
        "Lean Six Sigma",
      ],
      founded: 2011,
      annualRevenue: "$5M to $10M",
      social: [
        {
          type: SOCIAL_TYPE.LINKED,
          url: "#!",
        },
        {
          type: SOCIAL_TYPE.TWITTER,
          url: "#!",
        },
      ],
    },
    company: MOCK_COMPANIES[6],
    country: "Vietnam",
  },
  {
    id: 8,
    fullname: "Quỳnh Lê (Olivia)",
    contacts: [],
    avatar: MOCK_MEDIA[0],
    resume: {
      title: "Sales Manager",
      companyUrl: "https://www.salesmanagement.com",
      about:
        "Sales Management Solutions is a leading provider of sales management consulting services. Our team of experienced sales managers helps companies increase revenue, improve sales processes, and build high-performing sales teams. We work closely with our clients to understand their sales challenges and develop customized solutions to help them achieve their sales goals.",
      employeeNumber: "51 - 200",
      industry: "Management Consulting",
      subIndustry: "Sales Management",
      specialties: [
        "Sales Strategy",
        "Sales Process Improvement",
        "Sales Training",
        "Sales Team Development",
        "Sales Performance Management",
        "Customer Relationship Management (CRM)",
      ],
      founded: 2013,
      annualRevenue: "$5M to $10M",
      social: [
        {
          type: SOCIAL_TYPE.LINKED,
          url: "#!",
        },
        {
          type: SOCIAL_TYPE.FACEBOOK,
          url: "#!",
        },
      ],
    },
    company: MOCK_COMPANIES[7],
    country: "Vietnam",
  },
];
