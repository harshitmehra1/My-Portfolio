function Navbar() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li><a href="#hero" style={styles.link}>Home</a></li>
        <li><a href="#about" style={styles.link}>About</a></li>
        <li><a href="#projects" style={styles.link}>Projects</a></li>
        <li><a href="#education" style={styles.link}>Education</a></li>
        <li><a href="#skills" style={styles.link}>Skills</a></li>
        <li><a href="#contact" style={styles.link}>Contact</a></li>
      </ul>
    </nav>
  );
}

const styles = {
  nav: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: '#1e293b',
    padding: '0.7rem 0',
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
  },
  ul: {
    display: 'flex',
    justifyContent: 'right',
    alignItems: 'left',
    listStyle: 'none',
    gap: '1.8rem',
    margin: 0,
    padding: 0,
    marginRight: "33px",
  },
  link: {
    color: '#6366f1',
    textDecoration: 'none',
    fontWeight: 500,
    fontSize: '1rem',
    transition: 'color 0.3s',
  }
};

export default Navbar;
