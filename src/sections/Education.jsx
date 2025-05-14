function Education() {
  return (
    <section id="education" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.heading}>Education</h2>
        <div style={styles.eduList}>
          <div style={styles.eduCard}>
            <h2 style={styles.subhead}>University of Arizona, USA</h2>
            <h4 style={styles.subheading}>Master of Science in Data Science</h4>
            <p style={styles.body}>Aug 2023 – Dec 2024 | GPA: 3.5 / 4.0</p>
            <p style={styles.body}><em>SQL/NoSQL, Data Mining, Data Visualization, Cloud Computing, Project Management</em></p>
          </div>
          <div style={styles.eduCard}>
            <h2 style={styles.subhead}>LNCT, Bhopal, India</h2>
            <h3 style={styles.subheading}>Bachelor of Technology in Computer Science</h3>
            <p style={styles.body}>Sept 2019 – May 2023 | CGPA: 8.25 / 10</p>
            <p style={styles.body}><em>DSA, DBMS, OOP, Operating Systems</em></p>
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
    gap: '1.1rem',
    marginTop: '2rem',
   
  },
  eduCard: {
    backgroundColor: '#1e293b',
    padding: '1.5rem',
    borderRadius: '8px',
    textAlign: 'left',
    boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
  },
    heading: {
    fontSize: '2rem',
    marginBottom: '80px',
  },

  subhead: {
     marginLeft : '1.2rem'
  },
  
  subheading: {
    marginLeft : '1.5rem',
    marginTop : '-1rem'
  },

  body:{
    fontSize: "0.9rem", 
    lineHeight: "1.5", 
    color: "#e2e8f0" ,
    marginLeft : '2.4rem'
  }
  
};

export default Education;
