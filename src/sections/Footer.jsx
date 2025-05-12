function Footer() {
  return (
    <footer style={styles.footer}>
      <p>© {new Date().getFullYear()} Harshit Mehra. All rights reserved.</p>
      <div style={styles.links}>
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="mailto:youremail@example.com">Email</a>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#0f172a',
    color: '#94a3b8',
    padding: '30px 20px',
    textAlign: 'center',
    marginTop: '40px',
  },
  links: {
    marginTop: '10px',
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
    fontSize: '0.95rem',
  }
};

export default Footer;
