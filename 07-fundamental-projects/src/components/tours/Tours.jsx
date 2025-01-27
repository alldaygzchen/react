import React, { useState, useEffect, useCallback } from 'react';
import Loading from './Loading';
import TourList from './TourList';

const url = 'https://www.course-api.com/react-tours-project';

function Tours() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);
  //   console.log('Tours component');

  const resetTours = useCallback(() => {
    fetchTours();
  }, []);

  const removeTour = useCallback(
    (id) => {
      const newTours = tours.filter((tour) => tour.id !== id);
      setTours(newTours);
    },
    [tours]
  );

  const fetchTours = useCallback(async () => {
    // will use later
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }, []);
  useEffect(() => {
    // console.log('useEffect');
    fetchTours();
  }, [fetchTours]);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={resetTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <TourList tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default Tours;
