import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {
  FacebookShareButton,
  FacebookShareCount,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton
} from "react-share"

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
          <FacebookShareButton round
            url={opportunity.link}
            quote={clipboardStatement + opportunity.title + "\n"}
            hash="#innovation"
          >
            <FacebookIcon round ></FacebookIcon>
          </FacebookShareButton> {' '}
          <TwitterShareButton round
            url={opportunity.link}
            title={clipboardStatement + opportunity.title + "\n\n\n"}
            hashtags={["innovation", "opportunity", "workexp"]}
          >
            <TwitterIcon round ></TwitterIcon>
          </TwitterShareButton> {' '}
          <LinkedinShareButton round
            source={"Innovation Foundation"}
            url={opportunity.link}
            summary={clipboardStatement + opportunity.title + "\n\n" + "#InnovationFoundation"}
            title="Innovation Foundation"
          >
            <LinkedinIcon round ></LinkedinIcon>
          </LinkedinShareButton> {' '}
          <Button
            onClick={() => {
              setCopied(true);
              return navigator.clipboard.writeText(
                clipboardStatement + opportunity.link
              );
            }}
            variant={(copied) ?  "success" : "primary"}
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
