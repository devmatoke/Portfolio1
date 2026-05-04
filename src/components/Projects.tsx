import { useState } from 'react'
import './Projects.css'

interface Project {
  id: string
  title: string
  description: string
  category: 'software' | 'data'
  tags: string[]
  link?: string
  github?: string
}

const projects: Project[] = [
  {
    id: '1',
    title: 'Personal Portfolio',
    description: 'Fullstack web application showcasing Web3 and software projects. Built with React + TypeScript.',
    category: 'software',
    tags: ['React', 'TypeScript', 'Web3'],
    link: 'https://dancanoribu.dev',
    github: 'https://github.com/devmatoke'
  },
  {
    id: '2',
    title: 'ICP dApp Builds',
    description: 'Multiple decentralized applications built on the Internet Computer using Motoko canisters and React frontends during hackathons and incubation cycles.',
    category: 'software',
    tags: ['Motoko', 'React', 'ICP', 'Blockchain'],
    github: 'https://github.com/devmatoke'
  },
  {
    id: '3',
    title: 'Tableau Community Dashboards',
    description: 'Real-time dashboards tracking ICP Hub Kenya community metrics including grant applications, hackathon builds, and partnership outcomes.',
    category: 'data',
    tags: ['Tableau', 'Analytics', 'KPI Tracking'],
  },
  {
    id: '4',
    title: 'Court Analytics Dashboard',
    description: 'Power BI dashboard built during Judiciary internship to track case resolution metrics and surface backlog trends for senior leadership.',
    category: 'data',
    tags: ['Power BI', 'Analytics', 'Policy Decision Support'],
  },
  {
    id: '5',
    title: 'Hackathon Reports',
    description: 'Comprehensive reports analyzing participant data from hackathons and workshops using Python and Excel, identifying trends in developer engagement.',
    category: 'data',
    tags: ['Python', 'Excel', 'Data Analysis', 'Pandas'],
  },
  {
    id: '6',
    title: 'Blockchain Data Integration',
    description: 'SQL queries to aggregate and expose on-chain transaction data through application APIs, integrating blockchain metrics into strategic reports.',
    category: 'data',
    tags: ['SQL', 'PostgreSQL', 'Blockchain Analytics'],
  },
]

export default function Projects() {
  const [filter, setFilter] = useState<'all' | 'software' | 'data'>('all')

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter)

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects-header">
          <h2>Featured Projects</h2>
          <p>A selection of my work across software development and data analytics</p>
        </div>

        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All Projects
          </button>
          <button 
            className={`filter-btn ${filter === 'software' ? 'active' : ''}`}
            onClick={() => setFilter('software')}
          >
            Software Engineering
          </button>
          <button 
            className={`filter-btn ${filter === 'data' ? 'active' : ''}`}
            onClick={() => setFilter('data')}
          >
            Data Analytics
          </button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className={`category-badge ${project.category}`}>
                  {project.category === 'software' ? 'Software' : 'Data'}
                </span>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div className="project-links">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                    View Live
                  </a>
                )}
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
