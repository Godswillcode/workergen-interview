export type leadProps = {
  id: number;
  name: string;
  topic: string;
  statusReason: string;
  createdOn: string;
  aboutMe: string;
  position: string;
  whyPick: string;
  userInterest: string;
  userImage: string;
};

export const leadList: leadProps[] = [
  {
    id: 1,
    name: "Jane Reyes",
    topic: "Improving cost per cup",
    statusReason: "New",
    createdOn: "4/02/2024 12:00 PM",
    aboutMe: "Jane has been working as COO at Northwind Traders for the last 5 years.",
    position: "COO - Northwind Traders",
    whyPick: "Jane is known for her innovative cost-saving strategies.",
    userInterest: "Jane may be interested in upgrading the espresso machine for her in-store coffee shop.",
    userImage: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "John Smith",
    topic: "Reducing waste in packaging",
    statusReason: "New",
    createdOn: "5/02/2024 2:00 PM",
    aboutMe: "John is a supply chain manager with a focus on sustainability.",
    position: "Supply Chain Manager - ABC Corp",
    whyPick: "John's efforts have led to a 30% reduction in packaging waste.",
    userInterest: "John wants to explore eco-friendly packaging options.",
    userImage: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    id: 3,
    name: "Emily White",
    topic: "Boosting online sales",
    statusReason: "Active",
    createdOn: "6/02/2024 10:30 AM",
    aboutMe: "Emily is a digital marketing specialist with a strong focus on e-commerce.",
    position: "Marketing Director - ShopEase",
    whyPick: "Emily's campaigns have driven a 50% increase in online sales.",
    userInterest: "Emily is interested in leveraging AI for personalized marketing.",
    userImage: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "David Brown",
    topic: "Improving employee retention",
    statusReason: "New",
    createdOn: "7/02/2024 9:00 AM",
    aboutMe: "David specializes in HR solutions and team-building strategies.",
    position: "HR Manager - TalentFlow",
    whyPick: "David has implemented successful employee retention programs.",
    userInterest: "David is exploring new ways to enhance employee satisfaction.",
    userImage: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Sophia Lee",
    topic: "Innovating product design",
    statusReason: "New",
    createdOn: "8/02/2024 1:00 PM",
    aboutMe: "Sophia has a passion for creating user-friendly product designs.",
    position: "Product Designer - CreateX",
    whyPick: "Sophia's designs have consistently improved customer satisfaction.",
    userInterest: "Sophia wants to collaborate on ergonomic product solutions.",
    userImage: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 6,
    name: "Michael Green",
    topic: "Expanding market reach",
    statusReason: "Active",
    createdOn: "9/02/2024 11:00 AM",
    aboutMe: "Michael is an expert in market analysis and expansion strategies.",
    position: "Business Development Manager - Global Ventures",
    whyPick: "Michael's strategies have opened new markets in Asia and Europe.",
    userInterest: "Michael is interested in exploring partnerships for growth.",
    userImage: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: 7,
    name: "Olivia Adams",
    topic: "Streamlining operations",
    statusReason: "New",
    createdOn: "10/02/2024 3:00 PM",
    aboutMe: "Olivia excels in optimizing operational workflows.",
    position: "Operations Manager - EfficiencyPro",
    whyPick: "Olivia's improvements have saved the company millions annually.",
    userInterest: "Olivia is evaluating new tools to streamline processes.",
    userImage: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    id: 8,
    name: "Chris Johnson",
    topic: "Enhancing customer experience",
    statusReason: "New",
    createdOn: "11/02/2024 4:30 PM",
    aboutMe: "Chris is passionate about delivering exceptional customer service.",
    position: "Customer Success Manager - ClientFirst",
    whyPick: "Chris's initiatives have increased customer retention by 20%.",
    userInterest: "Chris is exploring chatbots for improved customer support.",
    userImage: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 9,
    name: "Amelia Clarke",
    topic: "Leveraging data analytics",
    statusReason: "New",
    createdOn: "12/02/2024 12:15 PM",
    aboutMe: "Amelia is a data scientist specializing in business intelligence.",
    position: "Data Scientist - InsightHub",
    whyPick: "Amelia has uncovered trends that significantly boosted revenue.",
    userInterest: "Amelia wants to explore predictive analytics for forecasting.",
    userImage: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    id: 10,
    name: "Daniel Martinez",
    topic: "Implementing new technology",
    statusReason: "New",
    createdOn: "13/02/2024 10:45 AM",
    aboutMe: "Daniel is a tech enthusiast focused on digital transformation.",
    position: "IT Director - TechWave",
    whyPick: "Daniel has led successful tech rollouts across the organization.",
    userInterest: "Daniel is researching AI applications for business.",
    userImage: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    id: 11,
    name: "Lily Thompson",
    topic: "Improving team collaboration",
    statusReason: "New",
    createdOn: "14/02/2024 11:30 AM",
    aboutMe: "Lily is dedicated to fostering teamwork and collaboration.",
    position: "Team Leader - InnovateTech",
    whyPick: "Lily's strategies have reduced internal communication breakdowns.",
    userInterest: "Lily is interested in tools that enhance team productivity.",
    userImage: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    id: 12,
    name: "George Harris",
    topic: "Expanding global supply chains",
    statusReason: "Active",
    createdOn: "15/02/2024 2:30 PM",
    aboutMe: "George is a logistics expert with a global focus.",
    position: "Supply Chain Director - WorldConnect",
    whyPick: "George has expanded operations to over 10 countries.",
    userInterest: "George is researching blockchain for supply chain transparency.",
    userImage: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 13,
    name: "Isabella Robinson",
    topic: "Sustainability in manufacturing",
    statusReason: "New",
    createdOn: "16/02/2024 9:00 AM",
    aboutMe: "Isabella is an environmental advocate in the manufacturing sector.",
    position: "Sustainability Officer - GreenWorks",
    whyPick: "Isabella has reduced carbon emissions by 15% in her company.",
    userInterest: "Isabella is interested in sustainable energy solutions for factories.",
    userImage: "https://randomuser.me/api/portraits/women/12.jpg",
  },
  {
    id: 14,
    name: "Lucas Hall",
    topic: "Optimizing customer service",
    statusReason: "Active",
    createdOn: "17/02/2024 4:00 PM",
    aboutMe: "Lucas works on improving service standards in call centers.",
    position: "Customer Service Manager - CallFlow",
    whyPick: "Lucas has improved first-call resolution by 25%.",
    userInterest: "Lucas is exploring AI-driven customer service tools.",
    userImage: "https://randomuser.me/api/portraits/men/13.jpg",
  },
  {
    id: 15,
    name: "Madison King",
    topic: "Exploring new business models",
    statusReason: "New",
    createdOn: "18/02/2024 1:00 PM",
    aboutMe: "Madison is always looking for the next big opportunity.",
    position: "Business Strategist - FutureStart",
    whyPick: "Madison identified a profitable new business model last year.",
    userInterest: "Madison is exploring subscription-based models.",
    userImage: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    id: 16,
    name: "Henry Wilson",
    topic: "Building corporate culture",
    statusReason: "New",
    createdOn: "19/02/2024 5:00 PM",
    aboutMe: "Henry is passionate about creating strong company cultures.",
    position: "HR Director - CultureBoost",
    whyPick: "Henry has significantly reduced employee turnover rates.",
    userInterest: "Henry is researching remote work culture strategies.",
    userImage: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    id: 17,
    name: "Ella Perez",
    topic: "Digital marketing trends",
    statusReason: "Active",
    createdOn: "20/02/2024 6:30 PM",
    aboutMe: "Ella keeps up with the latest digital marketing trends.",
    position: "Marketing Lead - BrandUp",
    whyPick: "Ella's SEO strategies have boosted web traffic by 40%.",
    userInterest: "Ella is interested in influencer marketing for brand growth.",
    userImage: "https://randomuser.me/api/portraits/women/14.jpg",
  },
  {
    id: 18,
    name: "Jack Carter",
    topic: "Enhancing employee productivity",
    statusReason: "New",
    createdOn: "21/02/2024 8:00 AM",
    aboutMe: "Jack is an expert in employee performance optimization.",
    position: "Productivity Specialist - OptimizeInc",
    whyPick: "Jack's strategies have increased team output by 35%.",
    userInterest: "Jack is looking into productivity-enhancing software.",
    userImage: "https://randomuser.me/api/portraits/men/15.jpg",
  },
  {
    id: 19,
    name: "Grace Turner",
    topic: "Leveraging automation",
    statusReason: "New",
    createdOn: "22/02/2024 7:15 AM",
    aboutMe: "Grace has led automation initiatives in various industries.",
    position: "Automation Expert - AutoFlow",
    whyPick: "Grace's automation efforts saved over $1 million last year.",
    userInterest: "Grace is interested in robotic process automation (RPA).",
    userImage: "https://randomuser.me/api/portraits/women/15.jpg",
  },
];
