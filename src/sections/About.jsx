function About() {
  return (
    <section id="about" style={styles.container}>
      <div style={styles.contentWrapper}>
        <div style={styles.text}>
          <h2 style={styles.heading}>About Me</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#e2e8f0" }}>
            I'm a Data Science graduate from the University of Arizona with a strong foundation in Python, SQL, and data analytics. I enjoy building intelligent systems—from smart search engines to AI-powered games—and have hands-on experience with full-stack development tools like Streamlit and Pygame.  
            <br /><br />
            During my time as a Data Analyst Intern at Landmark Ventures, I created impactful dashboards, performed statistical analyses, and worked with real-world data using SQL, Tableau, and Excel. I'm always eager to solve real problems through code, whether it's recommending YouTube tags with AI or mining music data for insights.  
            <br /><br />
            Currently, I'm seeking full-time opportunities where I can combine my data science knowledge with a growing interest in full-stack development to build user-focused, scalable solutions.
          </p>
        </div>
        <div style={styles.imageWrapper}>
          <img
            src= {`${import.meta.env.BASE_URL}DA_img.png`}
            alt="About me"
            style={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

const styles = {
  container: {
    // height: '100vh',
    padding: '100px 40px',
    color: '#e2e8f0',
  },
  contentWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1100px',
    margin: '0 auto',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  text: {
    flex: 1,
    minWidth: '300px',
    textAlign: 'left',
  },
  heading: {
    fontSize: '2.2rem',
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1.1rem',
    lineHeight: '1.8',
    color: '#e2e8f0',
  },
  imageWrapper: {
    flex: 1,
    minWidth: '250px',
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '400px',
    maxWidth: '90%',
    height: 'auto',
    borderRadius: '30px',
    objectFit: 'cover',
    marginTop: '25px',
  },
};

export default About;
