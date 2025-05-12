function Hero() {
  return (
    <section id="hero" style={styles.section}>
      <div style={styles.content}>
        <div style={styles.text}>
          <h1 style={styles.heading}>Hi, I'm Harshit Mehra</h1>
          <p style={styles.subheading}>
            Data Science Graduate | Full Stack Enthusiast | Problem Solver
          </p>
        </div>
        <div style={styles.imageContainer}>
          <img
            src="/Harsh_img.png"
            alt="Harshit Mehra"
            className="hero-image"
            style={styles.image}
          />
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    height: '100vh',
    backgroundColor: '#0f172a',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0 20px',
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    maxWidth: '1120px',
    width: '100%',
    flexWrap: 'wrap',
    gap: '2rem',
  },
  text: {
    flex: '1 1 300px',
    color: '#f8fafc',
    textAlign: 'left',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '1rem',
  },
  subheading: {
    fontSize: '1.2rem',
  },
  imageContainer: {
    flex: '1 1 300px',
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    width: '250px',
    height: '250px',
    borderRadius: '80%',
    objectFit: 'cover',
    border: '4px solid #0f172a',
    position: 'sticky',
    top: 'calc(50vh - 125px)',
  },
};

export default Hero;
