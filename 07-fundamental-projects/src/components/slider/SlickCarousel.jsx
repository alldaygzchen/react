import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import { FaQuoteRight } from 'react-icons/fa';
import useFetch from './useFetch';

const url = '../../../../slider.json';

const SlickCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // fade: true,
    autoplay: true,
    autoplaySpeed: 1000,
    // pauseOnHover: true,
  };

  const {
    isLoading: loading,
    isError: error,
    data: people,
  } = useFetch(url, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h2>There was an error...</h2>;
  }

  return (
    <section className="slick-container">
      <Slider {...settings}>
        {people.map((person) => {
          const { id, image, name, title, quote } = person;
          return (
            <article key={id}>
              <img src={image} alt={name} className="person-img" />
              <h5 className="name">{name}</h5>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
              <FaQuoteRight className="icon" />
            </article>
          );
        })}
      </Slider>
    </section>
  );
};

export default SlickCarousel;
