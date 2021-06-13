import styled from "styled-components";
import Select from "react-select";
import { filterOptions } from "./ModalElements";

const SortByContainer = styled.div`
  width: 200px;
  height: 100%;
  z-index: 12;
`;

export const SortBy = (props) => {
  return (
    <SortByContainer className="filterBtn-container">
      <Select
        onChange={props.onChangeSortBy}
        defaultValue={
          props.sortByValue
            ? { label: props.sortByValue }
            : props.optionsSortBy[0]
        }
        filterOptions={filterOptions(props.optionsSortBy)}
        options={props.optionsSortBy}
      />
    </SortByContainer>
  );
};
