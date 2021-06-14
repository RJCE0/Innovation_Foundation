import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import EmptyHeartImg from "../../img/empty-heart.svg";
import FilledInHeartImg from "../../img/filled-heart.svg";
import ShareImg from "../../img/share.svg";

function copyLinkToClipboard(link) {
  const clipboardStatement =
    "Take a look at this opportunity I found on the Innovation website!\n";
  console.log("The link is: " + link);
  return navigator.clipboard.writeText(clipboardStatement + link);
}

const ShareModal = ({ handleShareClose, showShare, opportunity }) => {
  var copied = false;
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
          <Button onClick={copyLinkToClipboard(opportunity.link)}>
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
