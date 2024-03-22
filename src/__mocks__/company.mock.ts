import { CompanyModel } from "~/models";
import { MOCK_MEDIA } from "./common.mock";
import { SOCIAL_TYPE } from "~/constants/common";

export const MOCK_COMPANIES: CompanyModel[] = [
  {
    id: 1,
    thumbnail: MOCK_MEDIA[1],
    name: "InterTwine LLC",
    url: "www.inter-twine.com",
    description:
      "Shell is a global energy company with around 87,000 employees in more than 70 countries. We work together to power progress through more and cleaner energy solutions. We serve more than 30 million customers at almost 46,000 retail service stations every day. Our strategy is to accelerate the transition of our business to net-zero emissions, purposefully and profitably. #PoweringProgress",
    industry: "Finance",
    subIndustry: "International Trade & Development",
    specialties: ["Project Management"],
    employeeNumber: "+10,000",
    annualRevenue: "$1B+",
    country: "Vietnam",
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
  {
    id: 2,
    thumbnail: MOCK_MEDIA[2],
    name: "HSBC",
    url: "www.hsbc.com",
    description:
      "HSBC is one of the world's largest banking and financial services organizations. We serve more than 40 million customers through our global businesses: Wealth and Personal Banking, Commercial Banking, and Global Banking and Markets. Our network covers 64 countries and territories in Europe, Asia, the Middle East and Africa, North America, and Latin America.",
    industry: "Finance",
    subIndustry: "Banking",
    specialties: ["Banking Services", "Wealth Management"],
    employeeNumber: "100,000+",
    annualRevenue: "$100B+",
    country: "United Kingdom",
    social: [
      {
        type: SOCIAL_TYPE.FACEBOOK,
        url: "#!",
      },
      {
        type: SOCIAL_TYPE.LINKED,
        url: "#!",
      },
    ],
  },
  {
    id: 3,
    thumbnail: MOCK_MEDIA[3],
    name: "Lusha",
    url: "www.lusha.com",
    description:
      "Lusha is the easiest way to find B2B contact information with just one click. Search contacts directly in LinkedIn or Salesforce and find any information including email addresses, phone numbers, and job titles.",
    industry: "Information Technology and Services",
    subIndustry: "Software",
    specialties: [
      "Lead Generation",
      "Sales Intelligence",
      "Contact Enrichment",
    ],
    employeeNumber: "201-500",
    annualRevenue: "$10M+",
    country: "United States",
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

  {
    id: 4,
    thumbnail: MOCK_MEDIA[4],
    name: "Tesla, Inc.",
    url: "www.tesla.com",
    description:
      "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses.",
    industry: "Automotive",
    subIndustry: "Electric Vehicles",
    specialties: ["Electric Vehicles", "Energy Storage", "Solar Panels"],
    employeeNumber: "10,001+",
    annualRevenue: "$20B+",
    country: "United States",
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
  {
    id: 5,
    thumbnail: MOCK_MEDIA[5],
    name: "Amazon.com, Inc.",
    url: "www.amazon.com",
    description:
      "Amazon is guided by four principles: customer obsession rather than competitor focus, passion for invention, commitment to operational excellence, and long-term thinking.",
    industry: "Internet",
    subIndustry: "E-commerce",
    specialties: ["E-commerce", "Cloud Computing", "Digital Streaming"],
    employeeNumber: "1,000,001+",
    annualRevenue: "$280B+",
    country: "United States",
    social: [
      {
        type: SOCIAL_TYPE.FACEBOOK,
        url: "#!",
      },
      {
        type: SOCIAL_TYPE.LINKED,
        url: "#!",
      },
    ],
  },
  {
    id: 6,
    thumbnail: MOCK_MEDIA[6],
    name: "Google LLC",
    url: "www.google.com",
    description:
      "Google is a multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.",
    industry: "Internet",
    subIndustry: "Technology",
    specialties: ["Search Engine", "Advertising", "Cloud Computing"],
    employeeNumber: "100,001+",
    annualRevenue: "$180B+",
    country: "United States",
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
  {
    id: 7,
    thumbnail: MOCK_MEDIA[7],
    name: "Microsoft Corporation",
    url: "www.microsoft.com",
    description:
      "Microsoft is a leading global vendor of computer software, hardware, and cloud-based services.",
    industry: "Technology",
    subIndustry: "Software",
    specialties: [
      "Operating Systems",
      "Productivity Software",
      "Cloud Computing",
    ],
    employeeNumber: "100,001+",
    annualRevenue: "$125B+",
    country: "United States",
    social: [
      {
        type: SOCIAL_TYPE.FACEBOOK,
        url: "#!",
      },
      {
        type: SOCIAL_TYPE.LINKED,
        url: "#!",
      },
    ],
  },
  {
    id: 8,
    thumbnail: MOCK_MEDIA[8],
    name: "Walmart Inc.",
    url: "www.walmart.com",
    description:
      "Walmart is a multinational retail corporation that operates a chain of hypermarkets, discount department stores, and grocery stores.",
    industry: "Retail",
    subIndustry: "Hypermarkets",
    specialties: ["Retail", "Grocery", "Hypermarket"],
    employeeNumber: "2,300,000+",
    annualRevenue: "$550B+",
    country: "United States",
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
  {
    id: 9,
    thumbnail: MOCK_MEDIA[9],
    name: "Apple Inc.",
    url: "www.apple.com",
    description:
      "Apple Inc. is an American multinational technology company that designs, develops, and sells consumer electronics, computer software, and online services.",
    industry: "Technology",
    subIndustry: "Consumer Electronics",
    specialties: ["Consumer Electronics", "Smartphones", "Computers"],
    employeeNumber: "147,000+",
    annualRevenue: "$275B+",
    country: "United States",
    social: [
      {
        type: SOCIAL_TYPE.FACEBOOK,
        url: "#!",
      },
      {
        type: SOCIAL_TYPE.LINKED,
        url: "#!",
      },
    ],
  },
];
