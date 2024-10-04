import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import "./people.css";

const teamMembers = [
  {
    name: "Bubble Boi",
    title: "Founder & Chief Executive Officer",
    photo: "/img/bubble-boi.jpg",
    position: { right: "100px", top: "20%" },
  },
  {
    name: "Dr. Kim Yuen",
    title: "Chief Technology Officer",
    photo: "/img/dr-kim.jpg",
    position: { left: "100px", top: "20%" },
  },
  {
    name: "Dr. Matt Randy",
    title: "Head of Research",
    photo: "/img/matt.jpg",
    position: { right: "100px", bottom: "20%" },
  },
  {
    name: "Liam Neeson",
    title: "Lead Software Architect",
    photo: "/img/liam.png",
    position: { left: "100px", bottom: "20%" },
  },
  {
    name: "Rami Malek",
    title: "Machine Learning Engineer",
    photo: "/img/rami.jpg",
    position: { right: "100px", bottom: "20%" },
  },
];

const People = () => {
  const [hoveredPerson, setHoveredPerson] = useState(null);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle name click on small screens
  const handleNameClick = (member) => {
    if (isSmallScreen) {
      setHoveredPerson(member);
    }
  };

  // Handle image click to close popup on small screens
  const handleImageClick = () => {
    if (isSmallScreen) {
      setHoveredPerson(null);
    }
  };

  // Handle mouse enter on large screens
  const handleMouseEnter = (member) => {
    if (!isSmallScreen) {
      setHoveredPerson(member);
    }
  };

  // Handle mouse leave on large screens
  const handleMouseLeave = () => {
    if (!isSmallScreen) {
      setHoveredPerson(null);
    }
  };

  return (
    <main className="wrapper">
      <div
        className="textContainer"
        onClick={hoveredPerson != null && handleImageClick}
      >
        <Navbar />
        <div className="customWrapper">
          <h2>Our Team</h2>
          <p>Meet the brilliant minds behind Bubble Computing:</p>
          <div className="containerStyle">
            <div className="teamList">
              <table
                style={{
                  borderSpacing: "0 1rem",
                  borderCollapse: "separate",
                }}
              >
                <tbody>
                  {teamMembers.map((member, index) => (
                    <tr
                      key={index}
                      onClick={() => handleNameClick(member)}
                      onMouseEnter={() => handleMouseEnter(member)}
                      onMouseLeave={handleMouseLeave}
                      style={{ cursor: "pointer" }}
                    >
                      <td style={{ paddingRight: "2rem" }}>{member.name}</td>
                      <td>{member.title}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {hoveredPerson &&
              (isSmallScreen ? (
                // Popup Modal for Small Screens
                <div className="popup">
                  <div className="popupContent">
                    <img
                      src={hoveredPerson.photo}
                      alt={hoveredPerson.name}
                      style={{ maxWidth: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              ) : (
                // Original Behavior for Larger Screens
                <div
                  className="photo"
                  style={{
                    ...hoveredPerson.position,
                    backgroundImage: `url(${hoveredPerson.photo})`,
                  }}
                />
              ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default People;
