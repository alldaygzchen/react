import { useEffect, useState } from 'react';
import { shortList, list, longList } from './data';
import { FaQuoteRight } from 'react-icons/fa';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import useFetch from './useFetch';

const url = '../../../../slider.json';

const Carousel = () => {
  // const [people, setPeople] = useState(longList);
  const {
    isLoading: loading,
    isError: error,
    data: people,
  } = useFetch(url, []);
  const [currentPerson, setCurrentPerson] = useState(0);

  const prevSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson - 1 + people.length) % people.length;
      return result;
    });
  };
  const nextSlide = () => {
    setCurrentPerson((oldPerson) => {
      const result = (oldPerson + 1) % people.length;
      return result;
    });
  };

  useEffect(() => {
    console.log('useEffect start'); // initial , render
    let sliderId = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => {
      console.log('useEffect cleanup'); //render
      clearInterval(sliderId);
    };
  }, [currentPerson]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h2>There was an error...</h2>;
  }

  return (
    <section className="slider-container">
      {people.map((person, personIndex) => {
        const { id, image, name, title, quote } = person;
        return (
          <article
            className="slide"
            style={{
              // transform: `translateX(${100 * (personIndex - currentPerson)}%)`,
              opacity: personIndex === currentPerson ? 1 : 0,
              visibility: personIndex === currentPerson ? 'visible' : 'hidden',
            }}
            key={id}
          >
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}
      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  );
};
export default Carousel;

// const Carousel = () => {
//   const [people, setPeople] = useState(longList);
//   const [currentPerson, setCurrentPerson] = useState(0);
//   console.log('Carousel render');

//   const prevSlide = () => {
//     setCurrentPerson((oldPerson) => {
//       const result = (oldPerson - 1 + people.length) % people.length;
//       return result;
//     });
//   };
//   const nextSlide = () => {
//     setCurrentPerson((oldPerson) => {
//       const result = (oldPerson + 1) % people.length;
//       return result;
//     });
//   };

//   useEffect(() => {
//     console.log('useeffect mount');
//     let sliderId = setInterval(() => {
//       nextSlide();
//     }, 10000);
//     return () => {
//       console.log('useeffect clean up');
//       clearInterval(sliderId);
//     };
//   }, [currentPerson]);

//   let person = people.find((p, index) => {
//     return index === currentPerson;
//   });

//   if (!person) {
//     return null;
//   }

//   const { id: personIndex, image, name, title, quote } = person;

//   return (
//     <section className="slider-container">

//       <article
//         className="slide"
//       >
//         <img src={image} alt={name} className="person-img" />
//         <h5 className="name">{name}</h5>
//         <p className="title">{title}</p>
//         <p className="text">{quote}</p>
//         <FaQuoteRight className="icon" />
//       </article>

//       <button type="button" className="prev" onClick={prevSlide}>
//         <FiChevronLeft />
//       </button>
//       <button type="button" className="next" onClick={nextSlide}>
//         <FiChevronRight />
//       </button>
//     </section>
//   );
// };
// export default Carousel;
