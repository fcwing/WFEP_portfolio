export const site = {
  name: "Daisy Fong",
  heroTitle: "Hello, I'm Daisy",
  tagline:
    "Results-driven Marketing student at HKUST with hands-on experience in business development, sales, accounting operations, and brand management. Proven ability to pitch 400+ KOLs achieving 300,000 reach. Award-winning case competitor (CGMA 1st Runner-up, Best AI Application Award). Two-time JA Company CEO with cross-functional leadership experience. Combines analytical thinking with financial literacy (IIQE Papers 1 & 3) and a passion for measurable business impact.",
  major: "BBA in Marketing · HKUST",
  email: "daisy.fong@example.com",
  phone: "+852 9123 4567",
  linkedin: "https://www.linkedin.com/in/daisyfong",
  github: "https://github.com/daisyfong",
  instagram: "https://www.instagram.com/daisyfong",
  cvFileName: "Daisy_Fong_CV.pdf",
};

export type TimelineItem = {
  id: string;
  period: string;
  title: string;
  subtitle?: string;
  bullets: string[];
};

export const education: TimelineItem[] = [
  {
    id: "edu-hkust",
    period: "Sep 2025 – Now",
    title: "Hong Kong University of Science and Technology",
    subtitle: "BBA in Marketing",
    bullets: [
      "Elected Marketing Secretary, 35th Accounting Students' Society, HKUSTSU",
    ],
  },
  {
    id: "edu-secondary",
    period: "Sep 2019 – May 2025",
    title: "TWGHs Wong Fut Nam College",
    subtitle: "Secondary 1 to 6",
    bullets: [
      "Student Union Treasurer",
      "Student Ambassador",
      "Economics Club Chairlady",
      "Career Prefect",
      "Peer Counsellor Vice Leader",
    ],
  },
];

export const workExperience: TimelineItem[] = [
  {
    id: "work-bd",
    period: "May 2025 – May 2026",
    title: "Smooth Inc. Limited",
    subtitle: "Business Development",
    bullets: [
      "Pitched 400+ KOLs, generated 300,000 reach",
    ],
  },
  {
    id: "work-accounting",
    period: "Smooth Inc. Limited",
    title: "Accounting Assistant",
    bullets: [
      "Assisted annual returns and share consideration for 30+ companies",
    ],
  },
  {
    id: "work-operating",
    period: "Smooth Inc. Limited",
    title: "Operating Assistant",
    bullets: [
      "Recorded sales & purchases for 4 brands using Microsoft Excel",
    ],
  },
  {
    id: "work-sales",
    period: "Smooth Inc. Limited",
    title: "Sales Assistant",
    bullets: [
      "Achieved $12,000 daily sales revenue at pop-up store",
      "Designed quarterly seasonal displays",
    ],
  },
];

export const internships: TimelineItem[] = [
  {
    id: "int-prozparity",
    period: "Summer 2026",
    title: "Prozparity International Energy Group Ltd.",
    subtitle: "Business Development & FinTech Intern",
    bullets: [
      "Completed tax returns, financial analysis, operating expense budgeting",
    ],
  },
  {
    id: "int-equation",
    period: "Summer 2026",
    title: "Equation Capital Management",
    subtitle: "Wealth Management Intern",
    bullets: [
      "Completed tax returns, financial analysis, operating expense budgeting",
    ],
  },
  {
    id: "int-grandtech",
    period: "Summer 2024",
    title: "GrandTech",
    subtitle: "Marketing Associate Intern",
    bullets: [
      "Designed Instagram product posts, reached 1,000+ views",
    ],
  },
  {
    id: "int-cr",
    period: "Jul 2024",
    title: "China Resources",
    subtitle: "Accounting Associate Intern",
    bullets: [
      "Completed tax return, financial analysis, operating expense budgeting tasks",
    ],
  },
];

export const skills = {
  software: [
    "Microsoft Office (Excel, PowerPoint)",
    "Microsoft Word",
    "Figma",
    "Adobe Photoshop",
    "Procreate",
    "Canva",
  ],
  languages: [
    "Fluent English",
    "Native Cantonese",
    "Fluent Mandarin",
  ],
};

export type AwardItem = {
  id: string;
  year: string;
  title: string;
  organizer: string;
  details?: string[];
};

export const awards: AwardItem[] = [
  {
    id: "award-cgma",
    year: "2026",
    title: "CGMA Global Business Challenge",
    organizer: "Hong Kong Region Final",
    details: ["1st Runner-up", "Best AI Application Award"],
  },
  {
    id: "award-peak",
    year: "Certificate",
    title: "PEAK IIQE Papers 1 & 3",
    organizer: "Insurance Intermediaries Qualifying Examination",
  },
  {
    id: "award-finlit",
    year: "2024",
    title: "Most Promising Award",
    organizer:
      "Hong Kong Financial Literacy Championship – Young Financial Talent Runway (May – Jul 2024)",
  },
  {
    id: "award-ja-2024",
    year: "2023/24",
    title: "HSBC × JA Company Program",
    organizer: "Chief Executive Officer",
    details: ["Most Valuable Team Player", "Social Buzz Award"],
  },
  {
    id: "award-ja-2023",
    year: "2022/23",
    title: "JA Company Program",
    organizer: "Chief Executive Officer",
    details: ["Social Buzz Award"],
  },
];

export type ProjectItem = {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  techStack: string[];
  challenges: string;
  outcomes: string;
  link: string;
  linkLabel: string;
};

export const projects: ProjectItem[] = [
  {
    id: "project-schedule-bro",
    title: "Schedule Bro",
    shortDescription:
      "GONG2WAAN4BRO planners and junk-journal stationery celebrating Hong Kong culture.",
    image: "/projects/schedule-bro.png",
    techStack: ["Procreate", "Canva", "Print design"],
    challenges:
      "Balancing collage textures, bilingual branding, and practical daily planning layouts.",
    outcomes:
      "Cohesive planner series with branded covers, stickers, and nostalgic Hong Kong motifs.",
    link: "#",
    linkLabel: "View project",
  },
  {
    id: "project-sticker-set",
    title: "Hong Kong Culture Sticker Set",
    shortDescription:
      "Die-cut sticker collection featuring iconic local symbols — ferry, tram, dim sum, and more.",
    image: "/projects/sticker-set.png",
    techStack: ["Procreate", "Adobe Photoshop", "Figma"],
    challenges:
      "Creating a varied sticker lineup that feels authentic, playful, and visually consistent.",
    outcomes:
      "Retail-ready sticker display with strong cultural recognition and artisan presentation.",
    link: "#",
    linkLabel: "View project",
  },
  {
    id: "project-postcard-set",
    title: "Postcard Set",
    shortDescription:
      "Vintage-inspired postcard series highlighting Hong Kong street culture and local flavour.",
    image: "/projects/postcard-set.png",
    techStack: ["Adobe Photoshop", "Illustration", "Typography"],
    challenges:
      "Merging retro poster aesthetics with readable layouts for bilingual audiences.",
    outcomes:
      "Multi-design postcard set suitable for pop-up sales and brand storytelling.",
    link: "#",
    linkLabel: "View project",
  },
  {
    id: "project-tote-bag",
    title: "Tote Bag",
    shortDescription:
      "Canvas tote designs for HOME KONG — skyline graphics and Hong Kong cultural wordmarks.",
    image: "/projects/tote-bag.png",
    techStack: ["Figma", "Print mockups", "Brand application"],
    challenges:
      "Adapting dense typography and illustration for wearable, large-format canvas prints.",
    outcomes:
      "Lifestyle-ready tote line with two distinct design directions for market testing.",
    link: "#",
    linkLabel: "View project",
  },
];
