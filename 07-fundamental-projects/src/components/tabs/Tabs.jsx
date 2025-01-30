import { useState, useEffect } from 'react';
import BtnContainer from './BtnContainer';
import JobInfo from './JobInfo';
import useFetch from './useFetch';

const url = 'https://www.course-api.com/react-tabs-project';

function Tabs() {
  // const [loading, setLoading] = useState(true);
  // const [jobs, setJobs] = useState([]);
  const { isLoading: loading, isError: error, data: jobs } = useFetch(url, []);
  const [currentItem, setCurrentItem] = useState(null);
  console.log('render Tabs component');

  // const fetchJobs = async () => {
  //   const response = await fetch(url);
  //   const newJobs = await response.json();

  //   setCurrentItem(newJobs[0]?.id || null);
  //   setJobs(newJobs);
  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchJobs();
  // }, []);

  useEffect(() => {
    console.log('although dependency but will only one run time');
    if (jobs && jobs.length > 0) {
      setCurrentItem(jobs[0]?.id || null);
    }
  }, [jobs]);

  const selectJobItem = (id) => setCurrentItem(id);

  if (loading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }
  if (error) {
    return <h2>There was an error...</h2>;
  }

  return (
    <section className="jobs-center">
      {/* btn container */}
      <BtnContainer
        jobs={jobs}
        currentItem={currentItem}
        selectJobItem={selectJobItem}
      />
      {/* job info */}
      <JobInfo jobs={jobs} currentItem={currentItem} />
    </section>
  );
}

export default Tabs;
