import React, { useState, useEffect } from 'react';
import footer from './footer';
import navbar from './navbar';

function Contacts() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/contacts')
      .then(response => response.json())
      .then(data => {
        setContacts(data["hydra:member"]);
      })
      .catch(error => console.log(error));
  }, []);
  
  function handleRemoveContact(id) {
    fetch(`http://localhost:8000/api/contacts/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to delete contact');
        }
      })
      .then(() => {
        // Effectuer une nouvelle requête pour obtenir la liste mise à jour des contacts
        fetch('http://localhost:8000/api/contacts')
          .then(response => response.json())
          .then(data => {
            setContacts(data["hydra:member"]);
          })
          .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
  }
  

  return (
    <div>
      <header>{navbar()}</header>
      <section className="hero-area bg-white shadow-sm pt-80px pb-80px">
        <span className="icon-shape icon-shape-1"></span>
        <span className="icon-shape icon-shape-2"></span>
        <span className="icon-shape icon-shape-3"></span>
        <span className="icon-shape icon-shape-4"></span>
        <span className="icon-shape icon-shape-5"></span>
        <span className="icon-shape icon-shape-6"></span>
        <span className="icon-shape icon-shape-7"></span>
        <div className="container">
          <div className="hero-content text-center">
            <h2 className="section-title pb-3">List of Contacts</h2>
            <ul className="breadcrumb-list">
              <li>
                <a href="#">Home</a>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="19px"
                    viewBox="0 0 24 24"
                    width="19px"
                    fill="#000000"
                  >
                    <path d="M0 0h24v24H0V0z" fill="none" />
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6-6-6z" />
                  </svg>
                </span>
              </li>
              <li>List of Contacts</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="wishlist-area pt-80px pb-80px position-relative">
        <div className="container">
          <form action="#" className="cart-form table-responsive px-2">
            <h3 className="fs-22 pb-4 fw-bold">List</h3>
            <table className="table generic-table">
              <thead>
                <tr>
                    <th scope="col">ID</th>
                  <th scope="col">Username</th>
                  <th scope="col">Email</th>
                  <th scope="col">Message</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody>
  {Array.isArray(contacts) && contacts.map(contact => (
    <tr key={contact.id}>
      <td>{contact.id}</td>
      <td>{contact.username}</td>
      <td>{contact.email}</td>
      <td>{contact.message}</td>
      <td>
        <a
          
          className="icon-element icon-element-xs shadow-sm"
          data-toggle="tooltip"
          data-placement="top"
          title="Remove item"
          onClick={() => handleRemoveContact(contact.id)}
        >
          <i className="la la-times"></i>
        </a>
      </td>
    </tr>
  ))}
</tbody>
            </table>
          </form>
        </div>
      </section>
      <footer>{footer()}</footer>
    </div>
  );
}

export default Contacts;

