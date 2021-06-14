import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const clipboardStatement =
  "Take a look at this opportunity I found on the Innovation website!\n";

const ShareModal = ({ handleShareClose, showShare, opportunity }) => {
  const [copied, setCopied] = useState(false);
  const status = copied ? "Link copied to clipboard!" : "Copy Link";
  return (
    <>
      <Modal
        show={showShare}
        onHide={handleShareClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title> Sharing options for {opportunity.title}: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Button> Share Link on Facebook </Button>
          <Button> Share Link on Twitter </Button>
          <Button> Share Link on LinkedIn </Button>
          <Button
            onClick={() => {
              setCopied(true);
              return navigator.clipboard.writeText(
                clipboardStatement + opportunity.link
              );
            }}
          >
            {" "}
            {status}{" "}
          </Button>
        </Modal.Body>
        <Modal.Footer> </Modal.Footer>
      </Modal>
    </>
  );
};

export default ShareModal;
