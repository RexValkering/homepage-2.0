interface ProjectPeriod {
  start: string;
  end?: string;
}

interface ProjectLink {
  url: string;
  text: string;
}

interface WebsiteEntry {
  name: string;
  type: string;
  links?: ProjectLink[];
  techniques: string[];
  description: string;
}

interface Project extends WebsiteEntry {
  year: number;
  tags: string[];
}

interface Experience extends WebsiteEntry {
  position: string;
  period?: ProjectPeriod;
  organisation?: string;
}

export const projects: Project[] = [
  {
    name: "ESME",
    type: "project",
    year: 2019,
    description:
      "Solving combined clustering and scheduling problem with evolutionary algorithms.",
    techniques: ["Python", "python-deap", "python-flask", "python-celery"],
    links: [
      {
        url: "https://github.com/RexValkering/esme",
        text: "Link to GitHub",
      },
    ],
    tags: ["open-source", "voluntary", "highlight"],
  },
  {
    name: "RAMBAM",
    type: "project",
    year: 2016,
    description:
      "RAMBAM is an automated shift scheduling system, designed for situations where an association has to manage voluntary and mandatory shifts of its members. RAMBAM allows members to change or trade shifts and helps administrators with assigning shifts, sending mail and registering presence. Additionally, users can opt to see RAMBAM shifts appear in their calendar.",
    techniques: ["Wordpress plugins", "Bootstrap", "PHP", "jQuery"],
    tags: ["voluntary", "highlight"],
  },
  {
    name: "BirthdayReminderBot",
    type: "project",
    year: 2018,
    description:
      "Telegram bot which allows for adding birthdays and receiving reminders. I wrote this as a solution to my inability to remember birthdays and as an alternative to cluttering my calendar.",
    techniques: ["Python", "Telegram"],
    links: [
      {
        url: "https://github.com/RexValkering/BirthdayReminderBot",
        text: "Link to GitHub",
      },
    ],
    tags: ["open-source", "voluntary"],
  },
  {
    name: "Social Force Model",
    type: "project",
    year: 2016,
    description:
      "An open-source Python implementation of the agent-based model for simulating pedestrian movement.",
    techniques: ["Python"],
    links: [
      {
        url: "https://github.com/RexValkering/socialforcemodel",
        text: "Link to GitHub",
      },
    ],
    tags: ["open-source", "voluntary", "highlight"],
  },
  {
    name: "Afschrijfboek",
    type: "project",
    year: 2013,
    description:
      "The Skøll Afschrijfboek is a page where members can view and manage boat reservations. Afschrijfboek is fully integrated with the member administration, allowing extra functionality regarding teams and committees.",
    techniques: ["Wordpress plugins", "PHP", "jQuery"],
    tags: ["voluntary"],
  },
  {
    name: "Saxo",
    type: "project",
    year: 2015,
    description:
      "Saxo is a Membership Management System in Wordpress. It contains functionality to navigate through members, request data using queries, create phone lists and allow members to submit updates about their own information. Saxo is connected to other software (such as MailChimp and WordPress) and automatically propagates updates.",
    techniques: ["Wordpress plugins", "PHP", "jQuery"],
    tags: ["voluntary"],
  },
  {
    name: "ECG Profiler",
    type: "project",
    year: 2018,
    description:
      "For an study at the Amsterdam UMC, I developed a Python UI that would allow the user to combine ECG data from various sources into a single comprehensive Excelsheet, to be used for further analysis.",
    techniques: ["python", "tkinter", "xlsxwriter"],
    tags: ["vocational"],
  },
  {
    name: "Teaching module",
    type: "project",
    year: 2016,
    description:
      "I built a Wordpress Plugin for a local Study Association, allowing them to use the Standard Dashboard Interface to define classes and assignments, and giving students the opportunity to submit their work and track results.",
    techniques: ["Wordpress plugins", "PHP"],
    tags: ["vocational"],
  },
  {
    name: "Skoll.nl",
    type: "project",
    year: 2019,
    description:
      "Led development of over 25+ large and small projects in PHP/webdev, such as releasing a new web platform, developing administration systems and interfaces, and maintaining financial systems.",
    techniques: ["Wordpress", "Wordpress plugins", "PHP", "Bootstrap"],
    tags: ["highlight"],
  },
  {
    name: "Change My Vue",
    type: "project",
    year: 2020,
    description:
      "In March of 2020 I held a workshop on possible XSS-vulnerabilities in Vue.js. The workshop contains an educational website and three exercises of varying difficulty.",
    techniques: ["Vue.js", "XSS", "Python", "Selenium"],
    links: [
      {
        url: "https://github.com/RexValkering/insecure-vue-apps",
        text: "Link to GitHub",
      },
    ],
    tags: ["voluntary", "open-source", "highlight"],
  },
];

export const experience: Experience[] = [
  {
    name: "Dutch International Assistance System",
    organisation: "Justitiële ICT Organisatie",
    position: "Senior DevOps developer",
    type: "project",
    period: {
      start: "October 2020",
    },
    description: `Being involved from the start, I was able to help put together a strong DevOps team that was able to consistently deliver high quality software.
      During this project, I was involved with both front- and backend development as well as test automation, and had a leading role in designing the microservice
      architecture that kept our team working efficiëntly. I have also created various scripts and Jenkins pipelines to optimize our communication and workflow.`,
    techniques: [
      "Angular",
      "Typescript",
      "Java",
      "Spring Boot",
      "JPA",
      "Hibernate",
      "Jenkins",
      "Kubernetes",
      "Robot Framework",
      "Python",
      "Oracle SQL",
    ],
  },
  {
    name: "Rex Valkering ICT Services",
    position: "Software Engineer / Owner",
    type: "position",
    period: {
      start: "September 2016",
    },
    description:
      "I've registered my own company in 2016 and have services a handful of clients since. Since 2019 I work part-time as an independent contractor for a sports company in Amsterdam.",
    techniques: ["Wordpress", "PHP", "Python", "Javascript"],
  },
  {
    name: "AppFactory",
    organisation: "Justitiële ICT Organisatie",
    position: "Frontend lead developer",
    type: "position",
    period: {
      start: "November 2019",
      end: "August 2020",
    },
    description:
      "As a Technical lead, I was involved in creating several Proof-of-Concept mobile applications, as well as increasing team output, communication and reliability.",
    techniques: ["Vue.js", "Java", "Spring Boot", "Flyway", "PostgreSQL"],
  },
];
