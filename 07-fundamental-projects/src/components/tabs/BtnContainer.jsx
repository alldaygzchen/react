const BtnContainer = ({ jobs, currentItem, selectJobItem }) => {
  return (
    <div className="btn-container">
      {jobs.map(({ id, company }) => {
        return (
          <button
            key={id}
            onClick={() => selectJobItem(id)}
            className={id === currentItem ? 'job-btn active-btn' : 'job-btn'}
          >
            {company}
          </button>
        );
      })}
    </div>
  );
};
export default BtnContainer;
