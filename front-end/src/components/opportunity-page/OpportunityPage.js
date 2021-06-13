import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import EmptyHeartImg from "../../img/empty-heart.svg";
import FilledInHeartImg from "../../img/filled-heart.svg";
import ShareImg from "../../img/share.svg";

const OpportunityPage = (opp) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const payStatement =
    opp.pay == 0 ? "Unpaid opportunity!" : "£" + opp.pay + "p/w";
  const [favClicked, setFavClicked] = useState(false);
  const handleFavClicked = () => setFavClicked((favClicked) => !favClicked);
  return (
    <>
      <div className="content-item" data-id={opp.id}>
        <a onClick={handleShow}>
          <div className="cardContainer contentBox lght-shad">
            <div className="content-type-placeholder-img">
              <img className="content-type-img" src={opp.image_url} />
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 160">
                <g id="Layer_2" data-name="Layer 2">
                  <path
                    id="Layer_3"
                    fill="#f3f3f3"
                    d="M0 0h280v160H0z"
                    data-name="Layer 3"
                  />
                  <g id="Layer_4" data-name="Layer 4">
                    <path
                      fill="#999"
                      d="M181.3 53.1v66.68c-4.49.35-9 .45-13.46 1.13s-4.72.82-4.72-3.79V80.76c0-1.31.78-3.22-1.76-3.4-2.74-.19-5.48-.44-8.21-.79-3.31-.42-4.57.6-4.49 4.24.25 11.74.09 23.48.09 35.22 0 5.88 0 5.88-5.57 7-.19 0-.33.35-.49.53h-12.92V48.49c1.4-1.28 3.08-.73 4.62-.57 9.13.91 18.25 1.9 27.36 2.9 6.52.73 13.03 1.52 19.55 2.28z"
                      opacity=".12"
                    />
                    <path
                      style={{ fill: "#7a7a7a", opacity: 0.05 }}
                      d="M128.25 123.57c-3-1.94-6.7-2-10-3.42-1.39-.58-2.22-.89-2.21-2.72q.12-31 0-62a2.75 2.75 0 0 1 2.15-3c3.83-1.36 7.69-2.63 11.53-3.93v75.07zM98.7 59.16c5-.61 9.3-3.29 14.4-4.13v61c0 1.81-.2 2.33-2.28 1.64-4-1.32-8.08-2.14-12.14-3.17zM113.1 36.43c-.06 3.87-.19 7.75-.16 11.62 0 2.09-.23 3.35-2.9 3.7-3.84.52-7.41 2.46-11.34 2.86V41c3.32-2 7.55-1.92 10.61-4.54z"
                      className="cls-3"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="content-type-overlay">
              <div className="content-bottom-gradient" />
              {opp.exclusive && (
                <span className="content-special excl">Exclusive</span>
              )}

              <span className="content-view">{opp.views} Views</span>
            </div>
          </div>
        </a>
        <div className="content-top-leftContainer">
          <button onClick={handleFavClicked} className="content-btn">
            <img
              width="25px"
              height="25px"
              src={favClicked ? FilledInHeartImg : EmptyHeartImg}
            />
          </button>
          <button className="content-btn">
            <img width="25px" height="25px" src={ShareImg} />
          </button>
        </div>
        <div className="content-info">
          <a className="title" onClick={handleShow}>
            {opp.title}
          </a>
          <span className="additional-info">
            {new Date(opp.date).toDateString()}
          </span>
        </div>
      </div>
      <Modal
        className="opportunity-page-modal"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            <div>
              <h3>{opp.title}</h3>
              {opp.exclusive && <h4 style={{ color: "#256de1" }}>Exclusive</h4>}
            </div>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <p>{opp.description}</p>
          <h5>{opp.views} views </h5>
          <h5> Pay: {payStatement} </h5>
          <h5>
            Date Posted: {new Date(opp.date_posted).toLocaleDateString("en-GB")}
          </h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" href={opp.link} target="_blank">
            {" "}
            Apply!{" "}
          </Button>
          <Button variant="warning" onClick={handleFavClicked}> Add to Favourites</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default OpportunityPage;
