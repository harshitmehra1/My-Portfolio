function Education() {
  return (
    <section id="education" style={styles.section}>
      <div style={styles.container}>
        <h2>Education</h2>
        <div style={styles.eduList}>
          <div style={styles.eduCard}>
            <h3>University of Arizona, USA</h3>
            <p><strong>Master of Science in Data Science</strong></p>
            <p>Aug 2023 – Dec 2024 | GPA: 3.5 / 4.0</p>
            <p><em>SQL/NoSQL, Data Mining, Data Visualization, Cloud Computing, Project Management</em></p>
          </div>
          <div style={styles.eduCard}>
            <h3>LNCT, Bhopal, India</h3>
            <p><strong>Bachelor of Technology in Computer Science</strong></p>
            <p>Sept 2019 – May 2023 | CGPA: 8.25 / 10</p>
            <p><em>DSA, DBMS, OOP, Operating Systems</em></p>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    backgroundColor: '#0f172a',
    color: '#e2e8f0',
    padding: '80px 20px',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
  },
  eduList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem',
  },
  eduCard: {
    backgroundColor: '#1e293b',
    padding: '1.5rem',
    borderRadius: '8px',
    textAlign: 'left',
    boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
  }
};

export default Education;
