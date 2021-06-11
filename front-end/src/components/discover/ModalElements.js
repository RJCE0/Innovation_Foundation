import React, { useEffect, useCallback, useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

import { MdClose } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import createFilterOptions from "react-select-fast-filter-options";
import Select from "react-select";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import { Button } from "react-bootstrap";

const ModalBackground = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  font-family: "Nunito", sans-serif;
`;

const ModalWrapper = styled.div`
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 110;
  border-radius: 10px;
  padding: 20px 30px 60px 30px;
`;

const CloseModalDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  width: 35px;
  height: 35px;
  z-index: 110;

  &:active {
    border: 3px rgba(27, 119, 223, 0.4) solid;
    border-radius: 10px;
  }
`;

const FilterItem = styled.div`
  padding: 20px 20px 20px 20px;
  margin: 0;
`;

const FilterH2 = styled.h3`
  text-align: center;
`;

const FilterLabel = styled.label`
  font-size: 1.2rem;
`;

const Extras = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1.5fr;
  grid-row-gap: 50px;
  grid-column-gap: 70px;
  margin-left: 50px;
  margin-right: 50px;

  @media screen and (max-width: 700px) {
    grid-template-columns: 1.5fr;
  }
`;

const FilterRadioButton = styled.input``;

const FilterLabels = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 0 10px 0 10px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const Slide = withStyles({
  root: {
    color: "#3b86e7",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const optionsLocation = [
  { label: "None", value: 0 },
  { label: "London", value: 1 },
  { label: "Amsterdam", value: 2 },
];

const optionsDatePosted = [
  { label: "None", value: 0 },
  { label: "Today", value: 1 },
  { label: "This Week", value: 2 },
  { label: "This Month", value: 3 },
  { label: "This Year", value: 4 },
];

const filterOptions = (options) => {
  createFilterOptions({
    options,
  });
};

const marks = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 10,
    label: "10",
  },
  {
    value: 20,
    label: "20",
  },
  {
    value: 30,
    label: "30+",
  },
];

const marksPay = [
  {
    value: 0,
    label: "0",
  },
  {
    value: 200,
    label: "200",
  },
  {
    value: 400,
    label: "400",
  },
  {
    value: 600,
    label: "600",
  },
  {
    value: 800,
    label: "800",
  },
  {
    value: 1000,
    label: "1000+",
  },
];

export const FilterModal = ({
  show,
  showModal,
  handleSelectChange,
  onChangeLocation,
  onChangeDatePosted,
  startDate,
  endDate,
  onChangeStartDate,
  onChangeEndDate,
  handleSubmit,
  selectOption,
  selectLocation,
  selectPostedDate,
  onChangeDistance,
  onChangeMinPay,
  distance,
  minPay,
}) => {
  const classes = useStyles();

  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: show ? 1 : 0,
    transform: show ? `translateY(0%)` : `translateY(-100%)`,
  });

  const escapePress = useCallback(
    (e) => {
      if (show && e.key === "Escape") {
        showModal();
      }
    },
    [showModal, show]
  );

  useEffect(() => {
    document.addEventListener("keydown", escapePress);
    return () => document.removeEventListener("keydown", escapePress);
  }, [escapePress]);

  return (
    <>
      {show ? (
        <ModalBackground>
          <animated.div style={animation}>
            <ModalWrapper show={show}>
              <CloseModalDiv>
                <CloseModalButton onClick={() => showModal()} />
              </CloseModalDiv>
              <FilterItem>
                <FilterH2>Remote?</FilterH2>
                <FilterLabels>
                  <FilterLabel htmlFor="in-person">
                    <FilterRadioButton
                      type="checkbox"
                      value="inPerson"
                      id="in-persons"
                      onChange={handleSelectChange}
                      checked={selectOption.inPerson}
                    />{" "}
                    In Person
                  </FilterLabel>
                  <FilterLabel htmlFor="temp-remote">
                    <FilterRadioButton
                      type="checkbox"
                      value="tempRemote"
                      id="temp-remote"
                      onChange={handleSelectChange}
                      checked={selectOption.tempRemote}
                    />{" "}
                    Temporarily Remote
                  </FilterLabel>
                  <FilterLabel htmlFor="full-remote">
                    <FilterRadioButton
                      type="checkbox"
                      value="fullRemote"
                      id="full-remote"
                      onChange={handleSelectChange}
                      checked={selectOption.fullRemote}
                    />{" "}
                    Remote
                  </FilterLabel>
                </FilterLabels>
              </FilterItem>
              <Extras>
                <div>
                  <h3 style={{ textAlign: "center" }}>Location</h3>
                  <Select
                    onChange={onChangeLocation}
                    defaultValue={
                      selectLocation
                        ? { label: selectLocation }
                        : optionsLocation[0]
                    }
                    filterOptions={filterOptions(optionsLocation)}
                    options={optionsLocation}
                  />
                </div>
                <div>
                  <h3 style={{ textAlign: "center" }}>Date Posted</h3>
                  <Select
                    onChange={onChangeDatePosted}
                    defaultValue={
                      selectPostedDate
                        ? { label: selectPostedDate }
                        : optionsDatePosted[0]
                    }
                    filterOptions={filterOptions(optionsDatePosted)}
                    options={optionsDatePosted}
                  />
                </div>
                <div>
                  <h3 style={{ textAlign: "center" }}>Starts After</h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => onChangeStartDate(date)}
                      selectsStart
                      startDate={startDate}
                      endDate={endDate}
                      showYearDropdown
                      scrollableYearDropdown
                      todayButton="Today"
                      placeholderText=" Select starting date"
                      dateFormat="dd/MM/yyyy"
                    />
                  </div>
                </div>
                <div>
                  <h3 style={{ textAlign: "center" }}>Ends Before</h3>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "100%",
                    }}
                  >
                    <DatePicker
                      selected={endDate}
                      onChange={(date) => onChangeEndDate(date)}
                      selectsEnd
                      startDate={startDate}
                      endDate={endDate}
                      showYearDropdown
                      scrollableYearDropdown
                      todayButton="Today"
                      placeholderText=" Select ending date"
                      dateFormat="dd/MM/yyyy"
                    />
                  </div>
                </div>
                <div>
                  <h3 style={{ textAlign: "center" }}>Minimum Pay (£)</h3>
                  <Slide
                    defaultValue={minPay ? minPay : 0}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={100}
                    marks={marksPay}
                    min={0}
                    max={1000}
                    onChangeCommitted={onChangeMinPay}
                  />
                </div>
                <div>
                  <h3 style={{ textAlign: "center" }}>Distance (miles)</h3>
                  <Slide
                    defaultValue={distance ? distance : 0}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={10}
                    marks={marks}
                    min={0}
                    max={30}
                    onChangeCommitted={onChangeDistance}
                  />
                </div>
              </Extras>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Button onClick={handleSubmit} variant="primary">
                  {" "}
                  Apply Filters{" "}
                </Button>
              </div>
            </ModalWrapper>
          </animated.div>
        </ModalBackground>
      ) : null}
    </>
  );
};
