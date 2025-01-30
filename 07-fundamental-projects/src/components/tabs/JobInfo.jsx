import Duties from './Duties';

const JobInfo = ({ jobs, currentItem }) => {
  // alternatives
  let job = jobs.find((job) => {
    return job.id === currentItem;
  });

  if (!job) {
    return null;
  }

  const { company, dates, duties, title } = job;

  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{dates}</p>
      <Duties duties={duties} />
    </article>
  );
};
export default JobInfo;
