const projectCards = [
  {
    title: "Money Kiwi",
    subtitle: "Personal finance tracker",
    category: "Personal project · Ongoing",
    imgSrc: "/thumbnails/MoneyKiwiThumbnail.png",
    description:
      "I built Money Kiwi for myself. Most budgeting apps want you to link your bank, and I didn't want mine connected to anything, so I made my own. It's an ongoing hobby project, and next on my list are a CSV importer to cut down on manual entry and contribution tracking for TFSA and FHSA accounts.",
    built: [
      "Recurring transactions for known costs like rent and paycheques, which you can pause or adjust anytime",
      "Accounts grouped by type, such as chequing, savings, credit and TFSA, so related accounts show up together",
      "Categories with subcategories, for finer organization and clearer charts",
      "An overview page that gives you a quick snapshot of your last 30 days",
      "A dashboard with cash flow and investment analytics over any time range you choose",
    ],
    githubUrl: "https://github.com/Jenna-Deamer/money-kiwi",
    demoUrl: "https://moneykiwi.com/login",
    skills: ["React", "TanStack Query", "Zod", "Express", "PostgreSQL", "Prisma"],
  },

  {
    title: "Tempo Analytics",
    subtitle: "NASA Space Apps 2025",
    category: "Hackathon · Honourable mention",
    imgSrc: "/thumbnails/SpaceApps2025Thumbnail.webp",
    description:
      "NASA's TEMPO satellite collects huge amounts of air quality data, but it's hard for most people to make sense of. For NASA Space Apps 2025, our team of three turned it into a map that tells you when it's safe to go outside, when you might want to limit your time outdoors or take other precautions, and whether conditions are safe for people with health risks.",
    built: [
      "A results sidebar that turns the backend's satellite, ground-station and forecast data into one simple readout",
      "A traffic-light colour system you can read at a glance: green is safe for everyone, yellow is a caution for at-risk people, and red means unsafe",
      "A satellite timelapse with playback controls, so you can watch pollution move across the map",
    ],
    note: "The demo is an archived snapshot. The satellite overlay is real NO₂ data from August 2025; the other readings are sample data.",
    githubUrl: "https://github.com/Jenna-Deamer/2025-space-apps-frontend",
    demoUrl: "https://tempo-analytics.vercel.app/",
    skills: ["Vue.js", "Ionic", "Leaflet"],
  },
];

export default projectCards;
