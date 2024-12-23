import janeImage from "../images/avatarJane.png"
import allanImage from "../images/allanAvatar.png"

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
  userImage: string | any;
  revenueAmount: number;
};

export const leadList: leadProps[] = [
  {
    id: 1,
    name: "Jane Reyes",
    topic: "Improving cost per cup",
    statusReason: "New",
    createdOn: "4/02/2024 12:00 PM",
    aboutMe:
      "Jane has been working as COO at Northwind Traders for the last 5 years.",
    position: "COO - Northwind Traders",
    whyPick: "Jane is known for her innovative cost-saving strategies.",
    userInterest:
      "Jane may be interested in upgrading the espresso machine for her in-store coffee shop.",
    userImage: janeImage,
    revenueAmount: 200,
  },
  {
    id: 2,
    name: "Allan Munger",
    topic: "Reducing waste in packaging",
    statusReason: "New",
    createdOn: "5/02/2024 2:00 PM",
    aboutMe: "Allan is a supply chain manager with a focus on sustainability.",
    position: "Head of Real Estate development . Contoso Coffee",
    whyPick: "Allan's efforts have led to a 30% reduction in packaging waste.",
    userInterest: "Allan wants to explore eco-friendly packaging options.",
    userImage: allanImage,
    revenueAmount: 150,
  },
  {
    id: 3,
    name: "Emily White",
    topic: "Boosting online sales",
    statusReason: "Active",
    createdOn: "6/02/2024 10:30 AM",
    aboutMe:
      "Emily is a digital marketing specialist with a strong focus on e-commerce.",
    position: "Marketing Director - ShopEase",
    whyPick: "Emily's campaigns have driven a 50% increase in online sales.",
    userInterest:
      "Emily is interested in leveraging AI for personalized marketing.",
    userImage: "https://randomuser.me/api/portraits/women/3.jpg",
    revenueAmount: 220,
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
    userInterest:
      "David is exploring new ways to enhance employee satisfaction.",
    userImage: "https://randomuser.me/api/portraits/men/4.jpg",
    revenueAmount: 180,
  },
  {
    id: 5,
    name: "Sophia Lee",
    topic: "Innovating product design",
    statusReason: "New",
    createdOn: "8/02/2024 1:00 PM",
    aboutMe: "Sophia has a passion for creating user-friendly product designs.",
    position: "Product Designer - CreateX",
    whyPick:
      "Sophia's designs have consistently improved customer satisfaction.",
    userInterest: "Sophia wants to collaborate on ergonomic product solutions.",
    userImage: "https://randomuser.me/api/portraits/women/5.jpg",
    revenueAmount: 240,
  },
  {
    id: 6,
    name: "Michael Johnson",
    topic: "Optimizing logistics",
    statusReason: "New",
    createdOn: "9/02/2024 3:15 PM",
    aboutMe:
      "Michael is an expert in logistics optimization for global supply chains.",
    position: "Logistics Head - Global Freight",
    whyPick: "Michael's strategies have cut delivery times by 25%.",
    userInterest: "Michael is looking into AI-driven logistics solutions.",
    userImage: "https://randomuser.me/api/portraits/men/6.jpg",
    revenueAmount: 300,
  },
  {
    id: 7,
    name: "Lisa Green",
    topic: "Enhancing customer experience",
    statusReason: "Active",
    createdOn: "10/02/2024 4:00 PM",
    aboutMe:
      "Lisa focuses on creating seamless customer experiences in retail.",
    position: "Customer Success Lead - RetailX",
    whyPick: "Lisa's initiatives have improved customer retention by 40%.",
    userInterest:
      "Lisa is interested in adopting omnichannel customer support.",
    userImage: "https://randomuser.me/api/portraits/women/7.jpg",
    revenueAmount: 270,
  },
  {
    id: 8,
    name: "James Taylor",
    topic: "Streamlining manufacturing",
    statusReason: "New",
    createdOn: "11/02/2024 11:30 AM",
    aboutMe:
      "James has over 15 years of experience in manufacturing processes.",
    position: "Operations Manager - SteelWorks",
    whyPick: "James has implemented automation to improve efficiency.",
    userInterest: "James wants to explore advanced robotics in manufacturing.",
    userImage: "https://randomuser.me/api/portraits/men/8.jpg",
    revenueAmount: 310,
  },
  {
    id: 9,
    name: "Olivia Brown",
    topic: "Expanding market reach",
    statusReason: "Active",
    createdOn: "12/02/2024 10:45 AM",
    aboutMe:
      "Olivia is a marketing consultant specializing in emerging markets.",
    position: "Marketing Consultant - MarketExpansionCo",
    whyPick:
      "Olivia's strategies have successfully launched brands in new markets.",
    userInterest: "Olivia is looking for tools to analyze market data.",
    userImage: "https://randomuser.me/api/portraits/women/9.jpg",
    revenueAmount: 290,
  },
  {
    id: 10,
    name: "Andrew King",
    topic: "Improving energy efficiency",
    statusReason: "New",
    createdOn: "13/02/2024 8:30 AM",
    aboutMe: "Andrew is an energy consultant with a focus on renewable energy.",
    position: "Energy Consultant - GreenTech",
    whyPick: "Andrew has reduced energy costs by 35% for clients.",
    userInterest:
      "Andrew is exploring new technologies for energy optimization.",
    userImage: "https://randomuser.me/api/portraits/men/10.jpg",
    revenueAmount: 280,
  },
  {
    id: 11,
    name: "Sarah Adams",
    topic: "Reducing operational overhead",
    statusReason: "Active",
    createdOn: "14/02/2024 1:00 PM",
    aboutMe:
      "Sarah specializes in optimizing business processes and reducing costs.",
    position: "COO - EfficientSystems",
    whyPick:
      "Sarah has implemented systems that reduced operational costs by 20%.",
    userInterest:
      "Sarah is looking for new ways to automate business processes.",
    userImage: "https://randomuser.me/api/portraits/women/11.jpg",
    revenueAmount: 230,
  },
  {
    id: 12,
    name: "Robert Martin",
    topic: "Enhancing mobile app UX/UI",
    statusReason: "New",
    createdOn: "15/02/2024 2:30 PM",
    aboutMe: "Robert is a mobile app designer focused on user experience.",
    position: "Senior Designer - MobileX",
    whyPick: "Robert's designs have led to a 50% increase in app engagement.",
    userInterest: "Robert wants to collaborate on improving app usability.",
    userImage: "https://randomuser.me/api/portraits/men/12.jpg",
    revenueAmount: 260,
  },
  {
    id: 13,
    name: "Nancy Gray",
    topic: "Optimizing HR technology",
    statusReason: "Active",
    createdOn: "16/02/2024 10:00 AM",
    aboutMe:
      "Nancy is passionate about streamlining HR processes with technology.",
    position: "HR Director - PeopleTech",
    whyPick: "Nancy has improved HR efficiency with automation tools.",
    userInterest: "Nancy is interested in AI-driven HR solutions.",
    userImage: "https://randomuser.me/api/portraits/women/13.jpg",
    revenueAmount: 310,
  },
  {
    id: 14,
    name: "George Harris",
    topic: "Developing scalable infrastructure",
    statusReason: "New",
    createdOn: "17/02/2024 9:15 AM",
    aboutMe:
      "George is a senior infrastructure engineer with a focus on scalability.",
    position: "Lead Engineer - ScaleTech",
    whyPick: "George has helped scale infrastructure for large enterprises.",
    userInterest:
      "George is exploring cloud solutions for infrastructure management.",
    userImage: "https://randomuser.me/api/portraits/men/14.jpg",
    revenueAmount: 320,
  },
  {
    id: 15,
    name: "Mia Wilson",
    topic: "Increasing retail engagement",
    statusReason: "Active",
    createdOn: "18/02/2024 4:30 PM",
    aboutMe: "Mia focuses on driving engagement for retail brands.",
    position: "Retail Strategy Manager - EngageX",
    whyPick: "Mia's initiatives have boosted in-store engagement by 40%.",
    userInterest:
      "Mia wants to explore new strategies to connect with customers.",
    userImage: "https://randomuser.me/api/portraits/women/14.jpg",
    revenueAmount: 330,
  },
  {
    id: 16,
    name: "Liam Roberts",
    topic: "Enhancing cybersecurity measures",
    statusReason: "New",
    createdOn: "19/02/2024 7:00 AM",
    aboutMe:
      "Liam is a cybersecurity expert helping businesses stay protected.",
    position: "Cybersecurity Lead - SecureTech",
    whyPick: "Liam has led efforts that reduced cyberattacks by 60%.",
    userInterest:
      "Liam is interested in learning about next-gen cybersecurity tools.",
    userImage: "https://randomuser.me/api/portraits/men/15.jpg",
    revenueAmount: 340,
  },
  {
    id: 17,
    name: "Charlotte Foster",
    topic: "Building strong customer relationships",
    statusReason: "New",
    createdOn: "20/02/2024 2:15 PM",
    aboutMe: "Charlotte is an expert in CRM and relationship management.",
    position: "Customer Relations Lead - CarePlus",
    whyPick: "Charlotte's strategies have improved client retention by 50%.",
    userInterest: "Charlotte wants to integrate AI into CRM solutions.",
    userImage: "https://randomuser.me/api/portraits/women/15.jpg",
    revenueAmount: 350,
  },
  {
    id: 18,
    name: "Daniel Clark",
    topic: "Reducing manufacturing costs",
    statusReason: "Active",
    createdOn: "21/02/2024 5:00 PM",
    aboutMe:
      "Daniel specializes in optimizing manufacturing processes to cut costs.",
    position: "Cost Optimization Manager - IndustrialPro",
    whyPick: "Daniel's strategies have saved 30% in production costs.",
    userInterest: "Daniel is exploring AI-powered manufacturing tools.",
    userImage: "https://randomuser.me/api/portraits/men/16.jpg",
    revenueAmount: 360,
  },
  {
    id: 19,
    name: "Zoe Martinez",
    topic: "Improving retail supply chain",
    statusReason: "New",
    createdOn: "22/02/2024 11:45 AM",
    aboutMe:
      "Zoe is an expert in streamlining retail supply chains for efficiency.",
    position: "Supply Chain Director - RetailPro",
    whyPick: "Zoe has increased supply chain efficiency by 25%.",
    userInterest:
      "Zoe is interested in adopting blockchain for supply chain transparency.",
    userImage: "https://randomuser.me/api/portraits/women/16.jpg",
    revenueAmount: 380,
  },
  {
    id: 20,
    name: "Ethan Scott",
    topic: "Enhancing team collaboration",
    statusReason: "Active",
    createdOn: "23/02/2024 12:00 PM",
    aboutMe:
      "Ethan works to enhance team dynamics and collaboration through technology.",
    position: "Collaboration Lead - TeamSync",
    whyPick:
      "Ethan's strategies have led to a 20% improvement in team productivity.",
    userInterest:
      "Ethan is looking for tools to improve virtual team collaboration.",
    userImage: "https://randomuser.me/api/portraits/men/17.jpg",
    revenueAmount: 390,
  },
];

export const emailOptions = [
  { value: "purchasing@contoso.com", label: "purchasing@contoso.com" },
  { value: "sales@contoso.com", label: "sales@contoso.com" },
  { value: "support@contoso.com", label: "support@contoso.com" },
  { value: "hr@contoso.com", label: "hr@contoso.com" },
  { value: "it@contoso.com", label: "it@contoso.com" },
];

export const JaneData = {
  id: 1,
  name: "Jane Reyes",
  topic: "Improving cost per cup",
  statusReason: "New",
  createdOn: "4/02/2024 12:00 PM",
  aboutMe:
    "Jane has been working as COO at Northwind Traders for the last 5 years.",
  position: "COO - Northwind Traders",
  whyPick: "Jane is known for her innovative cost-saving strategies.",
  userInterest:
    "Jane may be interested in upgrading the espresso machine for her in-store coffee shop.",
    userImage: janeImage,
  revenueAmount: 200,
};

export const AllanData = {
  id: 2,
  name: "Allan Munger",
  topic: "Reducing waste in packaging",
  statusReason: "New",
  createdOn: "5/02/2024 2:00 PM",
  aboutMe: "Allan is a supply chain manager with a focus on sustainability.",
  position: "Head of Real Estate development . Contoso Coffee",
  whyPick: "Allan's efforts have led to a 30% reduction in packaging waste.",
  userInterest: "Allan wants to explore eco-friendly packaging options.",
  userImage: allanImage,
  revenueAmount: 150,
};
