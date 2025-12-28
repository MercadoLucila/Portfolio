import { useEffect, useState } from "react";

export default function Stars() {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generatedStars = [];
    const starCount = 800;
    const colors = ["star-white", "star-violet", "star-cyan"];
    const colorClass = colors[Math.floor(Math.random()*colors.length)];

    for (let i = 0; i < starCount; i++) {
      generatedStars.push(
        <div
        key={i}
        className={`absolute ${colorClass} rounded-full animate-twinkle`}
        style={{
            width: Math.random() * 3 + "px",
            height: Math.random() * 3 + "px",
            top: Math.random() * 100 + "vh",
            left: Math.random() * 100 + "vw",
            opacity: Math.random() * 0.8 + 0.2,

            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 5}s`,
        }}
        />

      );
    }

    setStars(generatedStars);
  }, []);

  return <div className="absolute inset-0">{stars}</div>;
}
