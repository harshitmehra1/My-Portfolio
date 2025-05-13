function Skills() {
  const base = import.meta.env.BASE_URL;

  const skills = [
    { name: "Python", icon: `${base}icons/python.png` },
    { name: "SQL", icon: `${base}icons/sql.png` },
    { name: "React", icon: `${base}icons/react.png` },
    { name: "JavaScript", icon: `${base}icons/js.png` },
    { name: "HTML", icon: `${base}icons/html.png` },
    { name: "CSS", icon: `${base}icons/css.png` },
    { name: "Git", icon: `${base}icons/git.png` },
    { name: "Tableau", icon: `${base}icons/tableau.png` },
    { name: "PostgreSQL", icon: `${base}icons/post.png` },
    { name: "Power BI", icon: `${base}icons/powerbi.png` },
    { name: "Excel", icon: `${base}icons/excel.png` },
    { name: "MySQL", icon: `${base}icons/mysql.png` },
    
  ];

  return (
    <section id="skills" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>My Skills</h2>
        <div style={styles.grid}>
          {skills.map((skill, index) => (
            <div key={index} style={styles.skillCard}>
              <img src={skill.icon} alt={skill.name} style={styles.icon} />
              <p style={styles.label}>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#0f172a',
    color: '#e2e8f0',
    padding: '60px 20px',
    textAlign: 'center',
    minHeight: '100vh',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '90px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))',  // 4x3 on large screens, responsive on smaller screens
    gap: '30px',
  },
  skillCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  icon: {
    width: '90px',  // Increased icon size
    height: '90px', // Increased icon size
    objectFit: 'contain',
    marginBottom: '10px',
  },
  label: {
    fontSize: '1rem',
    margin: 0,
  },
};

export default Skills;
