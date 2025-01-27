import { useState } from 'react';
import data from './data';
import Questions from './Questions';

function Accordion() {
  const [questions, setQuestions] = useState(data);
  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
}

export default Accordion;
