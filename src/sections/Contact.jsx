function Contact() {
  const base = import.meta.env.BASE_URL;

  const links = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/harshitmehra1/",
      icon: "linkedin.png",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/your-instagram",
      icon: "insta.png",
    },
    {
      name: "Email",
      url: "mailto:harshitmehra122@gmail.com",
      icon: "gmail.png",
    },
    {
      name: "GitHub",
      url: "https://github.com/harshitmehra1",
      icon: "github.png",
    },
    {
      name: "Resume",
      url: `${base}resume/your-resume.pdf`,
      icon: "cv.png",
      download: true,
    },
  ];

  return (
    <section id="contact" style={styles.section}>
      <h2>Let's Connect</h2>
      <p>Feel free to reach out through the platforms below or download my resume!</p>

      <div style={styles.iconContainer}>
        {links.map((link, index) => (
          <div className="icon-wrapper" key={index}>
            <a
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : "_self"}
              rel="noopener noreferrer"
              download={link.download || false}
              className="icon-link"
            >
              <img
                src={`${base}icons/${link.icon}`}
                alt={link.name}
                className="icon-image"
              />
              <span className="tooltip">{link.name}</span>
            </a>
          </div>
        ))}
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
};

export default Contact;
