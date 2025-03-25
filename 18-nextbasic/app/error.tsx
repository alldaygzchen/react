"use client";

function Error({ error }: { error: Error }) {
  console.log(error);

  return (
    <div>
      <h1>Oops! There was an error...</h1>
    </div>
  );
}
export default Error;
