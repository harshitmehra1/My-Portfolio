function Contact() {
  return (
    <section id="contact" style={styles.section}>
      <h2>Contact Me</h2>
      <p>Have a question or want to work together? Let’s connect!</p>
      
      <form style={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input type="text" placeholder="Your Name" style={styles.input} required />
        <input type="email" placeholder="Your Email" style={styles.input} required />
        <textarea placeholder="Your Message" style={styles.textarea} required />
        <button type="submit" style={styles.button}>Send Message</button>
      </form>
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
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    maxWidth: '500px',
    margin: '2rem auto 0',
  },
  input: {
    padding: '0.75rem',
    borderRadius: '6px',
    border: '1px solid #334155',
    fontSize: '1rem',
  },
  textarea: {
    padding: '0.75rem',
    borderRadius: '6px',
    border: '1px solid #334155',
    fontSize: '1rem',
    minHeight: '120px',
    resize: 'vertical',
  },
  button: {
    padding: '0.75rem',
    borderRadius: '6px',
    border: 'none',
    backgroundColor: '#3b82f6',
    color: '#fff',
    fontSize: '1rem',
    cursor: 'pointer',
  }
};

export default Contact;
