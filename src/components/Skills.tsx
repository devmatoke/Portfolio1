import './Skills.css'

interface SkillCategory {
  title: string
  skills: string[]
}

const softwareSkills: SkillCategory[] = [
  {
    title: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Motoko', 'Python', 'SQL', 'HTML', 'CSS']
  },
  {
    title: 'Frontend',
    skills: ['React', 'Tailwind CSS', 'Responsive UI Design']
  },
  {
    title: 'Backend & Blockchain',
    skills: ['Node.js', 'PostgreSQL', 'REST APIs', 'ICP Canisters', 'Smart Contracts']
  },
  {
    title: 'Web3',
    skills: ['Internet Computer Protocol (ICP)', 'dApp Architecture', 'Blockchain Analytics']
  },
  {
    title: 'Tools & Practices',
    skills: ['Git', 'GitHub', 'Agile Workflows']
  }
]

const dataSkills: SkillCategory[] = [
  {
    title: 'Programming',
    skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'Excel (Advanced)']
  },
  {
    title: 'Data Visualization',
    skills: ['Tableau', 'Power BI', 'Dashboard Development']
  },
  {
    title: 'Analytical Methods',
    skills: ['Statistical Modeling', 'A/B Testing', 'Trend Analysis', 'Predictive Modeling']
  },
  {
    title: 'Databases',
    skills: ['PostgreSQL', 'Query Optimization', 'Data Modeling']
  },
  {
    title: 'Specializations',
    skills: ['Blockchain Analytics', 'OCR Tools', 'Data Mining', 'Machine Learning Basics']
  }
]

function SkillColumn({ title, skills }: { title: string; skills: SkillCategory[] }) {
  return (
    <div className="skill-column">
      <h3>{title}</h3>
      <div className="categories">
        {skills.map((category) => (
          <div key={category.title} className="skill-category">
            <h4>{category.title}</h4>
            <div className="skills-list">
              {category.skills.map((skill) => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="skills-header">
          <h2>Skills & Technologies</h2>
          <p>My technical expertise across software development and data analytics</p>
        </div>

        <div className="skills-content">
          <SkillColumn title="Software Development" skills={softwareSkills} />
          <SkillColumn title="Data Science & Analytics" skills={dataSkills} />
        </div>
      </div>
    </section>
  )
}
