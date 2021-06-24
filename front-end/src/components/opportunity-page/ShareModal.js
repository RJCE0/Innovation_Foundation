import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share";
import CopyImg from "../../img/copy_icon.png";
import TickGif from "../../img/tick.png";
import styled from "styled-components";

const clipboardStatement =
  "Take a look at this opportunity I found on the Innovation website!\n";

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const ShareModal = ({
  handleShareClose,
  showShare,
  opportunity,
  copy,
  setCopy,
}) => {
  const innovationHashtag = "#InnovationFoundation";
  return (
    <>
      <Modal show={showShare} onHide={handleShareClose} keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title> Sharing options for {opportunity.title}: </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ButtonsWrapper>
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
              id="copy-button"
              onClick={() => {
                setCopy(true);
                return navigator.clipboard.writeText(
                  clipboardStatement +
                    (opportunity.exclusive
                      ? `https://innovation-drp.herokuapp.com/discover/${opportunity.title
                          .trim()
                          .replace(/\s+/g, "-")
                          .toLowerCase()}&id=${opportunity.id}`
                      : opportunity.link)
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
          </ButtonsWrapper>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ShareModal;
