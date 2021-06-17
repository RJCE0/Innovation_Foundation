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
  LinkedinShareButton,
} from "react-share";
import CopyImg from "../../img/copy_icon.png";
import TickGif from "../../img/tick.png";

const clipboardStatement =
  "Take a look at this opportunity I found on the Innovation website!\n";

const ShareModal = ({
  handleShareClose,
  showShare,
  opportunity,
  copy,
  setCopy,
}) => {
  const status = copy ? "Link copied to clipboard!" : "Copy Link";
  const innovationHashtag = "#InnovationFoundation";
  return (
    <>
      <Modal show={showShare} onHide={handleShareClose} keyboard={false}>
        <Modal.Header>
          <Modal.Title> Sharing options for {opportunity.title}: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FacebookShareButton
            round
            url={opportunity.link}
            quote={clipboardStatement + opportunity.title + "\n"}
            hash="#innovation"
          >
            <FacebookIcon round></FacebookIcon>
          </FacebookShareButton>{" "}
          <TwitterShareButton
            round
            url={opportunity.link}
            title={clipboardStatement + opportunity.title + "\n\n\n"}
            hashtags={["innovation", "opportunity", "workexp"]}
          >
            <TwitterIcon round></TwitterIcon>
          </TwitterShareButton>{" "}
          <LinkedinShareButton
            round
            source={"Innovation Foundation"}
            url={opportunity.link}
            summary={
              clipboardStatement +
              opportunity.title +
              "\n\n" +
              innovationHashtag
            }
            title="Innovation Foundation"
          >
            <LinkedinIcon round></LinkedinIcon>
          </LinkedinShareButton>{" "}
          <Button
            onClick={() => {
              setCopy(true);
              return navigator.clipboard.writeText(
                clipboardStatement + opportunity.link
              );
            }}
            variant={copy ? "success" : "primary"}
          >
            <img
              width="35px"
              height="35px"
              src={copy ? TickGif : CopyImg}
              alt="Share Link"
            />
          </Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ShareModal;
