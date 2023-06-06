import React from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Problem2 = () => {
  const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);

  const handleCloseA = () => setShowA(false);
  const handleShowA = () => setShowA(true);

  const handleCloseB = () => setShowB(false);
  const handleShowB = () => setShowB(true);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5 ">
          <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

          <div className="d-flex align-items-center justify-content-center gap-3">
            <button
              variant="primary"
              onClick={handleShowA}
              className="btn btn-lg btn-outline-primary"
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
          I will not close if you click outside me. Don not even try to press
          escape key.
        </Modal.Body>
        <Modal.Footer>
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
        <Modal.Footer>
            <div>
                
            </div>
          <div>
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
