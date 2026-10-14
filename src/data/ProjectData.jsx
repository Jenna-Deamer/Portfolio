const projectCards = [
  {
    title: "Money Kiwi",
    subtitle: "Budgeting App",
    category: "Personal Project",
    imgSrc: "/thumbnails/MoneyKiwiThumbnail.png",
    imgAlt: "Money Kiwi budgeting dashboard",
    description:
      "A full-stack personal budgeting application built for real-world use. Money Kiwi lets users manage accounts, income, expenses, transfers, recurring transactions, and investment activity without connecting directly to financial institutions. I built the frontend, API, database structure, authentication flow, email verification, recurring transaction logic, demo sessions, and financial dashboards. The app is designed around clear financial data, privacy, and practical day-to-day budgeting.",
    githubUrl: "https://github.com/Jenna-Deamer/money-kiwi",
    demoUrl: "https://moneykiwi.com/login",
    AriaLabel: "Visit the live Money Kiwi demo",
    skills: ["React", "Express", "PostgreSQL", "Prisma", "Node.js"],
  },

  {
    title: "NASA Space Apps 2025",
    subtitle: "Air Quality Forecasting",
    category: "Hackathon Project",
    imgSrc: "/thumbnails/SpaceApps2025Thumbnail.webp",
    imgAlt: "NASA Space Apps air quality forecasting application",
    description:
      "Honorable Mention at Lakehead University's NASA Space Apps 2025 challenge. This web app integrates hourly TEMPO satellite data with ground-based air quality measurements to provide real-time local forecasts. I designed the results sidebar, timelapse preview, and forecast visualizations to make complex environmental data easier to understand.",
    githubUrl: "https://github.com/Jenna-Deamer/2025-space-apps-frontend",
    // demoUrl: "https://tempo-analytics.vercel.app/",
    AriaLabel: "Visit live demo of NASA Space Apps project",
    skills: ["Vue.js", "Ionic", "Leaflet"],
  },
];

export default projectCards;
