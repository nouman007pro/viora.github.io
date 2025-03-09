import React, { useState } from "react";

const sections = ["Home", "Viral", "Fashion", "Opinion", "World Update", "Videos"];

const Navbar = ({ activePage, onNavClick, onSearch }) => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Viora</div>
      <ul style={styles.navLinks}>
        {sections.map((page, index) => (
          <li key={page}>
            <a 
              href="#" 
              onClick={() => onNavClick(index)}
              style={activePage === index ? { ...styles.navLink, ...styles.activeLink } : styles.navLink} 
            >
              {page}
            </a>
          </li>
        ))}
      </ul>
      <div style={styles.searchBar}>
        <input type="text" placeholder="Search..." style={styles.searchInput} onChange={onSearch} />
      </div>
    </nav>
  );
};

const PageContent = ({ currentPage, filteredSections }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const recentPosts = [
    { id: 1, title: "Halloween", description: "Spooky fun for everyone!", image: "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg" },
    { id: 2, title: "10 Things I Love", description: "A list of my favorite things.", image: "https://images.pexels.com/photos/2345678/pexels-photo-2345678.jpeg" },
    { id: 3, title: "Favorites", description: "My top picks this week.", image: "https://images.pexels.com/photos/3456789/pexels-photo-3456789.jpeg" },
    { id: 4, title: "Sunday", description: "Relaxing and recharging.", image: "https://images.pexels.com/photos/4567890/pexels-photo-4567890.jpeg" },
  ];
  const images = [
    { id: 1, src: "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg", title: "Image 1", description: "Description for Image 1" },
    { id: 2, src: "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg", title: "Image 2", description: "Description for Image 2" },
    { id: 3, src: "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg", title: "Image 3", description: "Description for Image 3" },
    { id: 4, src: "https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg", title: "Image 4", description: "Description for Image 4" },
  ];

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    
    
    
    <div style={styles.cardsSection}>
    
        {currentPage === "Home" ? (
          <>
            {/* Welcome Section */}
            <div style={styles.welcomeSection}>
              <h1 style={styles.welcomeTitle}>Stay home and make something.</h1>
              <p style={styles.welcomeText}>
                Welcome! The Viora blog was founded in 2025. Since then, we've published over 4,500 posts. You can expect all kinds of recipes, craft projects, room tours, and more.
              </p>
            </div>
            <div style={styles.imageGrid}>
  {[
    
    {
  id: 7,
  title: "US-China Trade War Escalates with New Tariffs",
  imageUrl: "https://images.pexels.com/photos/7890123/pexels-photo-7890123.jpeg?text=Image+7",
  description: "The US has imposed additional tariffs on Chinese goods, prompting retaliatory measures from China, further straining global trade relations."
},
{
  id: 8,
  title: "Europe Faces Energy Crisis Amid Russian Supply Cuts",
  imageUrl: "https://images.pexels.com/photos/8901234/pexels-photo-8901234.jpeg?text=Image+8",
  description: "Several European nations are struggling with energy shortages after Russia announced further reductions in natural gas exports."
},
{
  id: 9,
  title: "Tech Giants Face Antitrust Investigations in the EU",
  imageUrl: "https://images.pexels.com/photos/9012345/pexels-photo-9012345.jpeg?text=Image+9",
  description: "Leading technology firms, including Apple and Google, are under scrutiny by European regulators for alleged monopolistic practices."
},
{
  id: 10,
  title: "AI Revolution: How Artificial Intelligence is Reshaping Industries",
  imageUrl: "https://images.pexels.com/photos/9123456/pexels-photo-9123456.jpeg?text=Image+10",
  description: "AI-driven advancements are transforming sectors from healthcare to finance, raising ethical and regulatory challenges worldwide."
},
{
  id: 11,
  title: "Severe Weather Wreaks Havoc Across the US",
  imageUrl: "https://images.pexels.com/photos/9234567/pexels-photo-9234567.jpeg?text=Image+11",
  description: "A series of powerful storms have caused widespread damage and disruptions, affecting millions across the United States."
},
{
  id: 12,
  title: "NASA’s New Space Mission Aims for Mars",
  imageUrl: "https://images.pexels.com/photos/9345678/pexels-photo-9345678.jpeg?text=Image+12",
  description: "NASA has announced an ambitious new Mars exploration mission, aiming to push the boundaries of human space travel."
}
,
  ].map((item) => (
    <div key={item.id} style={styles.imageCard}>
      <img src={item.imageUrl} alt={`Image ${item.id}`} style={styles.gridImage} />
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <a href="https://www.youtube.com/results?search_query=KINK+TO+BUTTON+IN+REACT">
        <button style={styles.button}>READ MORE</button>
      </a>
    </div>
  ))}
</div>

          
           <div style={styles.blogCard}>
  <img src="https://images.pexels.com/photos/4567890/pexels-photo-4567890.jpeg?text=Tech+Regulations" alt="Tech Antitrust" style={styles.blogImage} />
  <h3>Tech Giants Face Antitrust Investigations in the EU</h3>
  <p>Leading technology firms, including Apple and Google, are under scrutiny by European regulators for alleged monopolistic practices.</p>
  <p>Upload Date: 12.3.2025</p>
</div>

<div style={styles.blogCard}>
  <img src="https://images.pexels.com/photos/5678901/pexels-photo-5678901.jpeg?text=AI+Revolution" alt="Artificial Intelligence" style={styles.blogImage} />
  <h3>AI Revolution: How Artificial Intelligence is Reshaping Industries</h3>
  <p>AI-driven advancements are transforming sectors from healthcare to finance, raising ethical and regulatory challenges worldwide.</p>
  <p>Upload Date: 12.3.2025</p>
</div>
          

<div style={styles.homeGrid}>
  

  <div style={styles.gridItem}>
    <img src="https://images.pexels.com/photos/2345678/pexels-photo-2345678.jpeg?text=Stock+Market" alt="Stock Market Crash" style={styles.gridImage} />
    <h3>Global Stock Markets Plummet Amid Economic Concerns</h3>
    <p>Stock markets worldwide faced a major downturn following the announcement of new trade restrictions and interest rate hikes.</p>
    <p>Upload Date: 12.3.2025</p>
  </div>

  <div style={styles.gridItem}>
    <img src="https://images.pexels.com/photos/3456789/pexels-photo-3456789.jpeg?text=Sports+News" alt="Champions League" style={styles.gridImage} />
    <h3>Champions League: Dramatic Upsets in the Quarterfinals</h3>
    <p>The UEFA Champions League quarterfinals saw shocking results as underdogs knocked out top contenders, setting up an exciting semifinal lineup.</p>
    <p>Upload Date: 12.3.2025</p>
  </div>

  <div style={styles.gridItem}>
    <img src="https://images.pexels.com/photos/4567890/pexels-photo-4567890.jpeg?text=AI+Breakthrough" alt="AI Breakthrough" style={styles.gridImage} />
    <h3>AI Breakthrough: New Technology Rivals Human Intelligence</h3>
    <p>Researchers have developed an AI system that demonstrates near-human reasoning abilities, raising questions about the future of artificial intelligence.</p>
    <p>Upload Date: 12.3.2025</p>
  </div>

  <div style={styles.gridItem}>
    <img src="https://images.pexels.com/photos/5678901/pexels-photo-5678901.jpeg?text=Weather+Update" alt="Extreme Weather" style={styles.gridImage} />
    <h3>Extreme Weather Alert: Tornadoes and Hurricanes Expected</h3>
    <p>Several regions across the world are preparing for extreme weather conditions, with meteorologists warning of severe tornadoes and hurricanes.</p>
    <p>Upload Date: 12.3.2025</p>
  </div>
</div>

          {/* Swipeable Image Section */}
          <div style={styles.swipeContainer}>
            <div style={styles.circleArrow} onClick={handlePrev}>
              &larr;
            </div>
            <div style={styles.imageContainer}>
              <img src={images[currentImageIndex].src} alt={images[currentImageIndex].title} style={styles.swipeImage} />
              <h3>{images[currentImageIndex].title}</h3>
              <p>{images[currentImageIndex].description}</p>
              <p>Upload Date: 12.3.2025</p>
            </div>
            <div style={styles.circleArrow} onClick={handleNext}>
              &rarr;
            </div>
          </div>
        </>
      ) : currentPage === "Viral" ? (
        <>
          <div id="Viral" style={styles.blogLayout}>
            <div id="Viral" style={styles.blogCard}>
              <img src="https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?text=Top+Viral+Story" alt="Viral Story" style={styles.blogImage} />
              <h3>"Govinda and his wife, Sunita Ahuja, are reportedly heading towards a divorce after 37 years of marriage."
              </h3>
              <p>Reports suggest that ’90s star Govinda and his wife Sunita Ahuja may be heading for divorce after 37 years of marriage. While the couple has not confirmed or denied the news, it looks like they’ve been facing challenges in their relationship.</p>
              <p>Upload Date: 12.3.2025</p>
            </div>
            <div style={styles.blogCard}>
              <img src="https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?text=Top+Viral+Story" alt="Trending" style={styles.blogImage} />
              <h3>Zelenskyy-Trump clash at White House</h3>
              <p>Zelenskyy, whose relationship with the U.S. shifted dramatically after Trump defeated President Joe Biden in November, has pushed for any ceasefire deal with Russia to include robust security guarantees.</p>
              <p>Upload Date: 12.3.2025</p>
            </div>
            <div style={styles.blogCard}>
              <img src="https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?text=Top+Viral+Story" alt="Most Shared" style={styles.blogImage} />
              <h3>“Far-right AfD and socialist left win over young Germans, election reveals”…</h3>
              <p></p>
              <p>Upload Date: 12.3.2025</p>
            </div>
          </div>
        </>
      ) : currentPage === "World Update" ? (
        <div style={styles.videoGrid}>
          <div style={styles.videoCard}>
            <video width="100%" controls>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>World Update Video 1</h3>
            <p>Upload Date: 12.3.2025</p>
          </div>
          <div style={styles.videoCard}>
            <video width="100%" controls>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>World Update Video 2</h3>
            <p>Upload Date: 12.3.2025</p>
          </div>
          <div style={styles.videoCard}>
            <video width="100%" controls>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>World Update Video 3</h3>
            <p>Upload Date: 12.3.2025</p>
          </div>
          <div style={styles.videoCard}>
            <video width="100%" controls>
              <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <h3>World Update Video 4</h3>
            <p>Upload Date: 12.3.2025</p>
          </div>
        </div>
      ) : currentPage === "Fashion" ? (
        <div style={styles.imageGrid}>
          {[1, 2, 3, 4, 5, 6].map((id) => (
            <div key={id} style={styles.imageCard}>
              <img src={`https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?text=Image+${id}`} alt={`Image ${id}`} style={styles.gridImage} />
              <h3>Image {id} Title</h3>
              <p>This is the description for Image {id}.</p>
              <p>Upload Date: 12.3.2025</p>
            </div>
          ))}
        </div>
      ) : currentPage === "Videos" ? (
        <div style={styles.videosLayout}>
          {/* 4 Images in a Horizontal Grid */}
          <div style={styles.horizontalGrid}>
            {[1, 2, 3, 4].map((id) => (
              <div key={id} style={styles.horizontalGridItem}>
                <img src={`https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?text=Video+${id}`} alt={`Video ${id}`} style={styles.gridImage} />
                <h3>Video {id} Title</h3>
                <p>This is the description for Video {id}.</p>
                <p>Upload Date: 12.3.2025</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        filteredSections.map((item, i) => (
          <div key={i} style={styles.card}>
            <img src={`https://images.pexels.com/photos/1234567/pexels-photo-1234567.jpeg?text=${item}`} alt="News" style={styles.cardImage} />
            <h4>{item}</h4>
            <p>Upload Date: 12.3.2025</p>
            <p>Image sourced from Pexels.com</p>
          </div>
        ))
      )}
    </div>
  );
};

const App = () => {
  const [activeDot, setActiveDot] = useState(0);
  const [currentPage, setCurrentPage] = useState("Home");
  const [searchTerm, setSearchTerm] = useState("");

  const handleChangePage = (index) => {
    setActiveDot(index);
    setCurrentPage(sections[index]);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredSections = sections.filter(section => section.toLowerCase().includes(searchTerm));

  return (
    <div style={styles.body}>
      <Navbar activePage={activeDot} onNavClick={handleChangePage} onSearch={handleSearch} />
      <div style={styles.container}>
        <PageContent currentPage={currentPage} filteredSections={filteredSections} />
        <div style={styles.dotsContainer}>
          {sections.map((_, index) => (
            <span 
              key={index} 
              style={index === activeDot ? styles.activeDot : styles.dot} 
              onClick={() => handleChangePage(index)}
            ></span>
          ))}
        </div>
      </div>
      <footer style={styles.footer}>
        <div style={styles.footerLeft}>@All Rights Reserved</div>
        <div style={styles.footerCenter}>
          <img src="https://via.placeholder.com/100x50.png?text=Logo" alt="Logo" style={styles.logoImage} />
        </div>
        <div style={styles.footerRight}>mindmentor2025@gmail.com</div>
      </footer>
    </div>
  );
};

const styles = {
  body: { fontFamily: "Arial, sans-serif", margin: 0, padding: 0, background: "#F3F4F6", color: "#333" },
  navbar: { 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "center", 
    background: "#1E3A8A", 
    padding: "10px 20px", 
    color: "white", 
    flexWrap: "wrap",
  },
  container: {
    textAlign: "center",
    padding: "20px",
  },
  button: {
    padding: "10px 20px",
    background: "#1E3A8A",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "10px",
  },
  logo: { fontSize: "20px", fontWeight: "bold" },
  navLinks: { 
    listStyle: "none", 
    display: "flex", 
    gap: "15px", 
    padding: 0, 
    margin: 0, 
    flexWrap: "wrap",
  },
  navLink: { color: "white", textDecoration: "none", cursor: "pointer" },
  activeLink: { borderBottom: "2px solid white" },
  searchBar: { 
    flex: 1, 
    display: "flex", 
    justifyContent: "flex-end",
  },
  searchInput: { 
    padding: "5px", 
    color: "black",
    width: "200px",
  },
  container: { padding: "20px" },
  cardsSection: { display: "flex", flexDirection: "column", alignItems: "center", gap: "15px" },
  homeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gridTemplateRows: "repeat(2, 1fr)",
    gap: "20px",
    width: "100%",
    maxWidth: "1200px",
  },
  swipeContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  },
  circleArrow: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#1E3A8A",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  imageContainer: {
    textAlign: "center",
  },
  swipeImage: {
    width: "100%",
    maxWidth: "600px",
    borderRadius: "10px",
  },
  gridItem: { background: "white", padding: "10px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", textAlign: "center" },
  gridImage: { width: "100%", borderRadius: "10px" },
  videoSection: { textAlign: "center", marginBottom: "20px" },
  blogLayout: { 
    display: "flex", 
    flexWrap: "wrap", 
    gap: "20px", 
    justifyContent: "center",
  },
  blogCard: { width: "90%", maxWidth: "600px", padding: "10px", border: "1px solid #ddd", textAlign: "center", background: "white", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" },
  blogImage: { width: "100%", borderRadius: "10px" },
  videoGrid: { 
    display: "grid", 
    gridTemplateColumns: "repeat(2, 1fr)", 
    gap: "20px", 
    width: "100%", 
    maxWidth: "1200px",
  },
  videoCard: { background: "white", padding: "10px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", textAlign: "center" },
  imageGrid: { 
    display: "grid", 
    gridTemplateColumns: "repeat(3, 1fr)", 
    gap: "20px", 
    width: "100%", 
    maxWidth: "1200px",
  },
  imageCard: { background: "white", padding: "10px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", textAlign: "center" },
  videosLayout: { 
    display: "flex", 
    justifyContent: "space-between", 
    alignItems: "flex-start", 
    gap: "20px", 
    width: "100%", 
    maxWidth: "1200px",
  },
  horizontalGrid: {
    display: "flex",
    gap: "20px",
    width: "100%",
    maxWidth: "1200px",
    overflowX: "auto",
  },
  horizontalGridItem: {
    background: "white",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    minWidth: "250px",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#1E3A8A",
    color: "white",
    padding: "10px 20px",
    marginTop: "20px",
  },
  footerLeft: { flex: 1, textAlign: "left" },
  footerCenter: { flex: 1, textAlign: "center" },
  footerRight: { flex: 1, textAlign: "right" },
  logoImage: { width: "100px", height: "50px" },
  dotsContainer: { display: "flex", justifyContent: "center", marginTop: "20px", flexWrap: "wrap" },
  dot: { width: "12px", height: "12px", margin: "5px", background: "#aaa", borderRadius: "50%", cursor: "pointer", transition: "background 0.3s ease" },
  activeDot: { width: "12px", height: "12px", margin: "5px", background: "#1E3A8A", borderRadius: "50%", cursor: "pointer" },
};

export default App;
