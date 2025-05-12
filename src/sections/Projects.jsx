function Projects() {
  const projects = [
    {
      title: "YouTube Tag Recommender",
      description:
        "AI-powered system that analyzes YouTube video titles and descriptions to suggest 3–5 relevant tags using TF-IDF and zero-shot classification. Includes an interactive Streamlit interface for searching.",
      image: "/yt_tag.jpg",
    },
    {
      title: "Semantic Search System",
      description:
        "Smart search engine for 1.3M+ online retail products using Elasticsearch and Sentence Transformers. Supports natural language queries and is evaluated with Precision@K and Recall@K.",
      image: "/sem_search.jpg",
    },
    {
      title: "AI Snake Game",
      description:
        "Playable Snake game where the snake is controlled by AI agents using BFS, A*, and Q-learning. Visualizes how agents make real-time decisions for pathfinding and survival.",
      image: "/ai_snake_2.jpg",
    },
    {
      title: "Spotify Music Data Mining",
      description:
        "Built a machine learning pipeline to classify music genres using 30K Spotify tracks. Applied KNN, Naive Bayes, and Random Forest after feature engineering for accuracy improvement.",
      image: "/spotify.jpg",
    },
  ];

  return (
    <section style={styles.section}>
      <h1 style={styles.heading}>My Projects</h1>
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;
        return (
          <div
            key={index}
            style={{
              ...styles.projectRow,
              flexDirection: isEven ? "row" : "row-reverse",
            }}
          >
            <div style={styles.projectText}>
              <h2 style={styles.projectTitle}>{project.title}</h2>
              <p style={styles.projectDescription}>{project.description}</p>
            </div>
            <div style={styles.projectImageContainer}>
              <img
                src={project.image}
                alt={project.title}
                style={styles.projectImage}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}

const styles = {
  section: {
    width: "100%",
    backgroundColor: "#0f172a",
  },
  heading: {
    textAlign: "center",
    paddingTop: "50px",
    fontSize: "3.5rem",
    color: "#f8fafc",
    marginBottom: "50px",
  },
  projectRow: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 5%",
    borderBottom: "1px solid #334155",
  },
  projectText: {
    flex: 1,
    padding: "20px",
    color: "#f1f5f9",
    textAlign: "left", // 👈 force text to always align left
  },
  projectTitle: {
    fontSize: "2.6rem",
    marginBottom: "20px",
  },
  projectDescription: {
    fontSize: "1.1rem",
    lineHeight: "1.6",
  },
  projectImageContainer: {
    flex: 1,
    textAlign: "center",
    padding: "20px",
  },
  projectImage: {
    maxWidth: "100%",
    maxHeight: "80vh",
    borderRadius: "12px",
    boxShadow: "0 0 20px rgba(0,0,0,0.3)",
  },
};

export default Projects;
