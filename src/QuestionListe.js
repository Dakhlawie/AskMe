import React, { useState, useEffect } from 'react';
import axios from 'axios';
import footer from './footer';
import navbar from './navbar';
import { Link } from 'react-router-dom';

function ListeQ() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/questions');
        console.log(response.data["hydra:member"]); // Vérifier la réponse de l'API
        setQuestions(response.data["hydra:member"]); // Assurez-vous que la réponse de l'API renvoie un tableau de questions dans la propriété "questions"
      } catch (error) {
        console.error('Error fetching questions:', error);
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div>
      <header>{navbar()}</header>
      <section className="question-area">
        <div className="container">
          <div className="question-main-bar pt-40px pb-40px">
            <div className="filters pb-4">
              <div className="d-flex flex-wrap align-items-center justify-content-between pb-3">
                <h3 className="fs-22 fw-medium">All Questions</h3>
                <Link to="/ask" className="btn theme-btn theme-btn-sm">
                  Ask Question
                </Link>
              </div>
            </div>
            <div className="questions-snippet border-top border-top-gray">
            {Array.isArray(questions) ? (
    questions.map((question) => (
                <div
                  key={question.id}
                  className="media media-card rounded-0 shadow-none mb-0 bg-transparent p-3 border-bottom border-bottom-gray"
                >
                  <div className="votes text-center votes-2">
                    <div className="answer-block answered my-2">
                      <span className="answer-counts d-block lh-20 fw-medium">
                      {questions.responses}
                      </span>
                      <span className="answer-text d-block fs-13 lh-18">answers</span>
                    </div>
                  </div>
                  <div className="media-body">
                    <Link to={`/question/${question.id}`} className="question-link">
                      <p className="fs-10" style={{ cursor: "pointer" }}>{question.message}</p>
                    </Link>
                  </div>
                </div>
                 ))
                 ) : (
                   <p>No questions found.</p>
                 )}
          
            </div>
          </div>
        </div>
      </section>
      <footer>{footer()}</footer>
    </div>
  );
}

export default ListeQ;
