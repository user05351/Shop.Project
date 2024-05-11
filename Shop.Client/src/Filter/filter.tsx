import React, { useState } from "react";
import { useAppDispatch } from "../main";
import { setFilter } from "../redux/slices";
import styled from "styled-components";

const StyledFilter = styled.div`
  margin-bottom: 10px;
  
  & > label {
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.9);
  }
  
  & > button {
    width: 110px;
    height: 40px;
    border-radius: 50px;
    text-decoration: none;
    color: #3b3c3d;
    outline: none;
    border: 0.5px solid black;
    cursor: pointer;
    font-size: 1rem;
    background-color: lightcyan;
  }

  & > span {
    font-weight: bold;
  }
`

const StyledInput = styled.input`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  border: 0.5px solid rgb(114, 115, 117);
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.9);
  outline: none;
`

const StyledInputTitle = styled.input`
  width: 120px;
  height: 40px;
  border-radius: 5px;
  border: 0.5px solid rgb(114, 115, 117);
  font-size: 1rem;
  color: rgba(0, 0, 0, 0.9);
  outline: none;
`

interface FilterProps {}

const Filter: React.FC<FilterProps> = () => {
  const [title, setTitle] = useState("");
  const [from, setFrom] = useState<number>(0);
  const [to, setTo] = useState<number>(0);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(
      setFilter({
        title: title,
        priceFrom: from,
        priceTo: to,
      })
    );
  };

  return (
    <StyledFilter>
      <label>
        <b>Title:</b>
      </label>
      &nbsp;&nbsp;
      <StyledInputTitle
        name="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      &nbsp;&nbsp;
      <span>Price:</span>
      <label>
        <b></b>
      </label>
      &nbsp;&nbsp;
      <StyledInput
        name="from"
        type="number"
        value={from}
        min="0"
        onChange={(e) => setFrom(Number(e.target.value))}
      />
      &nbsp;&nbsp;
      <label>
        <b>-</b>
      </label>
      &nbsp;&nbsp;
      <StyledInput
        name="from"
        type="number"
        value={to}
        min="0"
        onChange={(e) => setTo(Number(e.target.value))}
      />
      &nbsp;&nbsp;
      <button type="button" onClick={handleClick}>
        Search
      </button>
    </StyledFilter>
  );
};

export default Filter;
