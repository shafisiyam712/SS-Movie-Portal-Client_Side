// import React, { useEffect, useState } from 'react';

// const Banner = () => {
//   const slides = [
//     {
//       id: "slide1",
//       title: "Inception",
//       image: "https://i.ibb.co/Gdr6WZ5/Feature-3-1.png",
//       next: "slide2",
//       prev: "slide4",
//     },
//     {
//       id: "slide2",
//       title: "The Dark Knight",
//       image: "https://i.ibb.co/Q6jRzqz/tdk-poster-1.webp",
//       next: "slide3",
//       prev: "slide1",
//     },
//     {
//       id: "slide3",
//       title: "Mission: Impossible 8",
//       image: "https://i.ibb.co/K0bZdr1/mission-impossible-web-poster-e1689560939874.jpg",
//       next: "slide4",
//       prev: "slide2",
//     },
//     {
//       id: "slide4",
//       title: "Interstellar",
//       image: "https://i.ibb.co/bQYwtZp/71lj-C3i-8u-L-AC-UF894-1000-QL80.jpg",
//       next: "slide1",
//       prev: "slide3",
//     },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % slides.length);
//       window.location.hash = slides[(currentIndex + 1) % slides.length].id;
//     }, 4000); // 4 seconds

//     return () => clearInterval(interval);
//   }, [currentIndex]);

//   return (
//     <div className="shadow-xl">
//       <div className="carousel w-full">
//         {slides.map(({ id, title, image, next, prev }) => (
//           <div key={id} id={id} className="carousel-item relative w-full">
//             <img
//               src={image}
//               alt={title}
//               className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
//             />
//             <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
//               <h2 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg">
//                 {title}
//               </h2>
//               <p className="text-gray-200 text-sm md:text-lg mt-2 max-w-md drop-shadow-sm">
//                 Experience the thrill, drama, and action like never before.
//               </p>
//               <button className="mt-4 px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300 shadow-lg">
//                 Watch Now
//               </button>
//             </div>
//             <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
//               <a href={`#${prev}`} className="btn btn-circle bg-black bg-opacity-50 text-white border-none hover:bg-opacity-80">❮</a>
//               <a href={`#${next}`} className="btn btn-circle bg-black bg-opacity-50 text-white border-none hover:bg-opacity-80">❯</a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Banner;
import React, { useEffect, useState } from 'react';

const Banner = () => {
  const slides = [
    {
      title: "Inception",
      image: "https://i.ibb.co/Gdr6WZ5/Feature-3-1.png",
    },
    {
      title: "The Dark Knight",
      image: "https://i.ibb.co/Q6jRzqz/tdk-poster-1.webp",
    },
    {
      title: "Mission: Impossible 8",
      image: "https://i.ibb.co/K0bZdr1/mission-impossible-web-poster-e1689560939874.jpg",
    },
    {
      title: "Interstellar",
      image: "https://i.ibb.co/bQYwtZp/71lj-C3i-8u-L-AC-UF894-1000-QL80.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const { title, image } = slides[currentIndex];

  return (
    <div className="shadow-xl">
      <div className="relative w-full">
        <img
          src={image}
          alt={title}
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-white text-3xl md:text-5xl font-extrabold drop-shadow-lg">
            {title}
          </h2>
          <p className="text-gray-200 text-sm md:text-lg mt-2 max-w-md drop-shadow-sm">
            Experience the thrill, drama, and action like never before.
          </p>
          <button className="mt-4 px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition duration-300 shadow-lg">
            Watch Now
          </button>
        </div>
        <div className="absolute left-5 right-5 top-1/2 transform -translate-y-1/2 flex justify-between">
          <button
            onClick={goToPrev}
            className="btn btn-circle bg-black bg-opacity-50 text-white border-none hover:bg-opacity-80"
          >
            ❮
          </button>
          <button
            onClick={goToNext}
            className="btn btn-circle bg-black bg-opacity-50 text-white border-none hover:bg-opacity-80"
          >
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
