import React, { useEffect } from "react";
import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Problem2 = () => {
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);

  const [check, setCheck] = useState(true);

  const handleCloseA = () => setShowA(false);
  const handleShowA = () => setShowA(true);

  const handleCloseB = () => setShowB(false);
  const handleShowB = () => setShowB(true);

  const [allContact, setAllContact] = useState([]);

  useEffect(() => {
    const options = { method: "GET" };

    fetch("https://jsonplaceholder.typicode.com/users", options)
      .then((res) => res.json())
      .then((data) => setAllContact(data))
      .catch((err) => console.error(err));
  }, []);

  const handleEven = () => {
    setCheck(!check);
    if(check){
        const even = allContact.filter(contact => contact.id % 2 === 0);
        setAllContact(even)
    }
    else{
        setAllContact()
    }

};

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5 ">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex align-items-center justify-content-center gap-3">
            <button
              variant="primary"
              onClick={handleShowA}
              className="btn btn-lg btn-outline-primary bg-[#46139f]"
              type="button"
            >
              All Contacts
            </button>
            <button
              variant="primary"
              onClick={handleShowB}
              className="btn btn-lg btn-outline-warning"
              type="button"
            >
              US Contacts
            </button>
          </div>
        </div>
      </div>

      <Modal
        show={showA}
        onHide={handleCloseA}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>All Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <table className="table table-striped ">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Phone</th>
                </tr>
              </thead>
              <tbody>
                {allContact.map((contact, index) => (
                  <tr key={index}>
                    <td>{contact.name}</td>
                    <td>{contact.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <div>
            <Form>
              <Form.Check
                onClick={handleEven}
                type="switch"
                id="custom-switch"
                label="Only even"
              />
            </Form>
          </div>
          <div className="d-flex gap-2">
            <Button variant="secondary" onClick={handleCloseA}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleShowB();
                handleCloseA();
              }}
            >
              US Contact
            </Button>
          </div>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showB}
        onHide={handleCloseB}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>US Contact</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          I will not close if you click outside me. Don not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <div>
            <Form>
              <Form.Check type="switch" id="custom-switch" label="Only even" />
            </Form>
          </div>
          <div className="d-flex gap-2">
            <Button variant="secondary" onClick={handleCloseB}>
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                handleShowA();
                handleCloseB();
              }}
            >
              All Contact
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Problem2;
