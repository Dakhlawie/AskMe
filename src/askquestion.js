import React, { useState } from 'react';
import axios from 'axios';
import footer from './footer';
import navbar from './navbar';

function AskQuestion() {
  const [message, setMessage] = useState('');

  const handleDetailsChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      message: message,
    };

    try {
      const response = await axios.post('http://localhost:8000/api/questions', JSON.stringify(data), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Question added successfully:', response.data);
      // Réinitialisez les champs du formulaire
      setMessage('');
    } catch (error) {
      console.error('Error adding question:', error);
    }
  };

  return (
    <div>
      <header>{navbar()}</header>
      <section className="hero-area bg-white shadow-sm overflow-hidden">
        <span className="stroke-shape stroke-shape-1"></span>
        <span className="stroke-shape stroke-shape-2"></span>
        <span className="stroke-shape stroke-shape-3"></span>
        <span className="stroke-shape stroke-shape-4"></span>
        <span className="stroke-shape stroke-shape-5"></span>
        <span className="stroke-shape stroke-shape-6"></span>
        <div className="container">
          <div className="hero-content pt-80px pb-80px">
            <h2 className="section-title">Ask a public question</h2>
            <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 550 125"></svg>
          </div>
        </div>
      </section>
      <section className="question-area pt-80px pb-40px">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="card card-item">
                <form method="post" className="card-body" onSubmit={handleSubmit}>
                  <div className="input-box">
                    <label className="fs-14 text-black fw-medium mb-0">your question</label>
                    <div className="form-group">
                      <textarea
                        className="form-control form--control user-text-editor"
                        rows="10"
                        cols="40"
                        value={message}
                        onChange={handleDetailsChange}
                      ></textarea>
                    </div>
                  </div>

                  <div className="input-box pt-2">
                    <div className="form-group"></div>
                    <div className="btn-box">
                      <button type="submit" className="btn theme-btn">
                        Publish your question
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>{footer()}</footer>
    </div>
  );
}

export default AskQuestion;
