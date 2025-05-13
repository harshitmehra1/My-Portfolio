function Contact() {
  const base = import.meta.env.BASE_URL;

  return (
    <section id="contact" style={styles.section}>
      <h2>Let's Connect</h2>
      <p>Feel free to reach out through the platforms below or download my resume!</p>
      
      <div style={styles.iconContainer}>
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/harshitmehra1/" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          <img src={`${base}icons/linkedin.png`} alt="LinkedIn" style={styles.icon} />
        </a>
        
        {/* Instagram */}
        <a href="https://www.instagram.com/your-instagram" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          <img src={`${base}icons/insta.png`} alt="Instagram" style={styles.icon} />
        </a>

        {/* Email */}
        <a href="mailto:harshitmehra122@gmail.com" style={styles.iconLink}>
          <img src={`${base}icons/gmail.png`} alt="Email" style={styles.icon} />
        </a>

        {/* GitHub */}
        <a href="https://github.com/harshitmehra1" target="_blank" rel="noopener noreferrer" style={styles.iconLink}>
          <img src={`${base}icons/github.png`} alt="GitHub" style={styles.icon} />
        </a>
        
        {/* Resume Download */}
        <a href={`${base}resume/your-resume.pdf`} download="Your_Resume" style={styles.iconLink}>
          <img src={`${base}icons/cv.png`} alt="Resume" style={styles.icon} />
        </a>
      </div>
    </section>
  );
}

const styles = {
  section: {
    padding: '100px 20px',
    backgroundColor: '#1e293b',
    color: '#f8fafc',
    textAlign: 'center',
  },
  iconContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '2rem',
    flexWrap: 'wrap',
    marginTop: '2rem',
  },
  iconLink: {
    display: 'inline-block',
    textDecoration: 'none',
  },
  icon: {
    width: '50px',
    height: '50px',
    objectFit: 'contain',
  },
};

export default Contact;
