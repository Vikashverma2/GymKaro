
import React from "react";


const classesData = [
  {
    id: 1,
    title: "Strength Training",
    desc: "Build muscle and improve your strength with this guided workout.",
    videoUrl: "https://www.youtube.com/embed/U0bhE67HuDY",
  },
  {
    id: 2,
    title: "Cardio Burn",
    desc: "High intensity cardio class to burn calories fast.",
    videoUrl: "https://www.youtube.com/embed/ml6cT4AZdqI",
  },
  {
    id: 3,
    title: "Yoga Flex",
    desc: "Improve flexibility and mindfulness with our relaxing yoga sessions.",
    videoUrl: "https://www.youtube.com/embed/v7AYKMP6rOE",
  },
];

const Classes = () => {
  return (
    <div className="classes-section">
      <h2 className="section-title">THE CLASS YOU WILL GET HERE</h2>
      <div className="class-cards">
        {classesData.map((cls) => (
          <div key={cls.id} className="class-card">
            <div className="video-container">
              <iframe
                src={cls.videoUrl}
                title={cls.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <h3>{cls.title}</h3>
            <p>{cls.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
