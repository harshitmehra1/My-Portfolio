function Skills() {
  return (
    <section id="skills" style={styles.section}>
      <div style={styles.container}>
        <h2>My Skills</h2>
        <ul style={styles.skillList}>
          <li>Python / R</li>
          <li>JavaScript / React</li>
          <li>HTML / CSS</li>
          <li>SQL / PostgreSQL / MySQL / SQL Server</li>
          <li>Data Mining / Statistical Analysis / ETL</li>
          <li>Seaborn / Tableau / Power BI / Excel</li>
          <li>Git / GitHub</li>
        </ul>
      </div>
    </section>
  );
}

const styles = {
  section: {
    height: '100vh',
    backgroundColor: '#0f172a',
    color: '#e2e8f0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1000px',
    width: '100%',
  },
  skillList: {
    listStyle: 'none',
    padding: 0,
    marginTop: '2rem',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1rem',
    fontSize: '1.1rem',
  }
};

export default Skills;
