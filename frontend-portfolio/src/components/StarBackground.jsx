// import { useEffect, useState } from "react";

// // id, size, x, y, opacity, animationDuration
// // id, size, x, y, delay, animationDuration

// export const StarBackground = () => {
//   const [stars, setStars] = useState([]);
//   const [meteors, setMeteors] = useState([]);

//   useEffect(() => {
//     generateStars();
//     generateMeteors();

//     const handleResize = () => {
//       generateStars();
//     };

//     window.addEventListener("resize", handleResize);

//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const generateStars = () => {
//     const numberOfStars = Math.floor(
//       (window.innerWidth * window.innerHeight) / 10000
//     );

//     const newStars = [];

//     for (let i = 0; i < numberOfStars; i++) {
//       newStars.push({
//         id: i,
//         size: Math.random() * 3 + 1,
//         x: Math.random() * 100,
//         y: Math.random() * 100,
//         opacity: Math.random() * 0.5 + 0.5,
//         animationDuration: Math.random() * 4 + 2,
//       });
//     }

//     setStars(newStars);
//   };

//   const generateMeteors = () => {
//     const numberOfMeteors = 4;
//     const newMeteors = [];

//     for (let i = 0; i < numberOfMeteors; i++) {
//       newMeteors.push({
//         id: i,
//         size: Math.random() * 2 + 1,
//         x: Math.random() * 100,
//         y: Math.random() * 20,
//         delay: Math.random() * 15,
//         animationDuration: Math.random() * 3 + 3,
//       });
//     }

//     setMeteors(newMeteors);
//   };

//   return (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//       {stars.map((star) => (
//         <div
//           key={star.id}
//           className="star animate-pulse-subtle"
//           style={{
//             width: star.size + "px",
//             height: star.size + "px",
//             left: star.x + "%",
//             top: star.y + "%",
//             opacity: star.opacity,
//             animationDuration: star.animationDuration + "s",
//           }}
//         />
//       ))}

//       {meteors.map((meteor) => (
//         <div
//           key={meteor.id}
//           className="meteor animate-meteor"
//           style={{
//             width: meteor.size * 50 + "px",
//             height: meteor.size * 2 + "px",
//             left: meteor.x + "%",
//             top: meteor.y + "%",
//             animationDelay: meteor.delay,
//             animationDuration: meteor.animationDuration + "s",
//           }}
//         />
//       ))}
//     </div>
//   );
// };


export const StarBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      
      <div className="absolute top-[-15%] left-[-10%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-purple-500/20 rounded-full blur-3xl animate-float" />

      <div
        className="absolute bottom-[-20%] right-[-10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] bg-purple-500/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div
        className="absolute top-[30%] right-[15%] w-[25vw] h-[25vw] max-w-[350px] max-h-[350px] bg-purple-500/15 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

    </div>
  );
};


// export const StarBackground = () => {
//   return (
//     <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
//       <div
//         className="absolute inset-0 opacity-40 dark:opacity-20 animate-grid-move"
//         style={{
//           backgroundImage:
//             "radial-gradient(hsl(var(--primary) / 0.4) 1px, transparent 1px)",
//           backgroundSize: "28px 28px",
//         }}
//       />

//       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background))_75%)]" />

//       <div className="absolute top-[-15%] left-[-10%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-primary/10 dark:bg-primary/20 rounded-full blur-3xl animate-float" />

//       <div
//         className="absolute bottom-[-20%] right-[-10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl animate-float"
//         style={{ animationDelay: "2s" }}
//       />
//     </div>
//   );
// };


