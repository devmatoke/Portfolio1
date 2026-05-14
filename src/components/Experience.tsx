import './Experience.css'

interface ExperienceItem {
  id: string
  role: string
  company: string
  period: string
  description: string
  highlights: string[]
  type: 'software' | 'data' | 'community'
}

const experiences: ExperienceItem[] = [
  {
    id: '1',
    role: 'Software Developer',
    company: 'Freelance / Open Source',
    period: '2023 - Present',
    description: 'Building decentralized applications and full-stack web solutions with focus on Web3 technologies and blockchain integration.',
    highlights: [
      'Developed multiple dApps on Internet Computer Protocol',
      'Built responsive web applications using React and TypeScript',
      'Integrated blockchain analytics into web applications',
      'Collaborated on open-source projects'
    ],
    type: 'software'
  },
  {
    id: '2',
    role: 'Data Analyst & Business Intelligence',
    company: 'Multiple Organizations',
    period: '2022 - Present',
    description: 'Created dashboards and analytics solutions to drive data-informed decision making across various sectors.',
    highlights: [
      'Built Power BI dashboards for Judiciary analytics',
      'Developed Tableau community dashboards for ICP Hub Kenya',
      'Analyzed hackathon participant trends using Python and pandas',
      'Created SQL queries for blockchain data integration'
    ],
    type: 'data'
  },
  {
    id: '3',
    role: 'Community Developer',
    company: 'ICP Hub Kenya',
    period: '2022 - Present',
    description: 'Contributing to blockchain developer ecosystem through education, mentorship, and community building initiatives.',
    highlights: [
      'Mentored developers in Web3 technologies',
      'Organized and facilitated hackathons',
      'Created technical resources and documentation',
      'Built analytics dashboards for community metrics'
    ],
    type: 'community'
  },
  {
    id: '4',
    role: 'Judicial Systems Intern',
    company: 'Judiciary of Kenya',
    period: '2022 - 2023',
    description: 'Supported the court system with data analysis and analytics solutions to improve case management and reporting.',
    highlights: [
      'Designed Power BI dashboard for case resolution tracking',
      'Analyzed court backlog and performance metrics',
      'Provided data-driven insights to senior leadership',
      'Documented analytics processes and best practices'
    ],
    type: 'data'
  }
]

function ExperienceCard({ experience }: { experience: ExperienceItem }) {
  return (
    <div className={`experience-card ${experience.type}`}>
      <div className="experience-header">
        <div className="experience-title">
          <h3>{experience.role}</h3>
          <p className="company">{experience.company}</p>
        </div>
        <span className={`exp-badge ${experience.type}`}>
          {experience.type === 'software' ? '💻' : experience.type === 'data' ? '📊' : '🤝'}
          {experience.type.charAt(0).toUpperCase() + experience.type.slice(1)}
        </span>
      </div>
      
      <p className="period">{experience.period}</p>
      <p className="description">{experience.description}</p>
      
      <ul className="highlights">
        {experience.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>
    </div>
  )
}

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="experience-header-section">
          <h2>Experience</h2>
          <p>My professional journey in software development, data analytics, and community building</p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  )
}
