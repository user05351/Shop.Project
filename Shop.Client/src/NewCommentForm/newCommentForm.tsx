import React, { useState } from "react";
import styled from "styled-components";
import { IComment, IProduct } from "../redux/types";
import { useAppDispatch } from "../main";
import { setComents } from "../redux/slices";
import { setNewComment } from "../queries";

const StyledNewCommentForm = styled.div`
  align-items: start;
  border: 0.2px solid rgba(114, 115, 117, 0.5);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  padding: 10px;

  & > button {
    background-color: lightcyan;
    border: 0.5px solid black;
    border-radius: 50px;
    color: #3b3c3d;
    cursor: pointer;
    font-size: 1rem;
    margin-top: 15px;
    outline: none;
    text-decoration: none;
    padding: 0.7rem 0.7rem;
  }
`

const StyledLabel = styled.label`
  color: rgba(0, 0, 0, 0.9);
  font-size: 1rem;
  font-weight: bold;
  flex-direction: row;
  width: 60px;

  & input:nth-child(1) {
      border: 0.5px solid rgb(114, 115, 117);
      border-radius: 5px;
      color: rgba(0, 0, 0, 0.9);
      font-size: 1rem;
      height: 40px;
      outline: none;
      width: 220px;
  }

  & input:nth-child(2) {
    border: 0.5px solid rgb(114, 115, 117);
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.9);
    font-size: 1rem;
    height: 40px;
    outline: none;
    width: 220px;
  }

  & > textarea {
    height: 100px;
    width: 580px;
    border: 0.5px solid rgb(114, 115, 117);
    border-radius: 5px;
    color: rgba(0, 0, 0, 0.9);
    font-size: 1rem;
    outline: none;
  }
`

export const StyledTitle = styled.div`
  font-size: 1.2rem;
  color: rgba(0, 0, 0, 0.9);
  font-weight: bold;
  margin: 10px;
`

const StyledError = styled.div`
  color: #da4518;
  padding: 5px;
`

interface NewCommentFormProps {
  product: IProduct;
  productComments: IComment[];
}

const NewCommentForm: React.FC<NewCommentFormProps> = ({
  product,
  productComments,
}) => {
  const dispatch = useAppDispatch();
  const [body, setBody] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleClick = () => {
    if (!body.trim()) {
      setError("Error >>> Empty text field");
      return;
    } else if (!name.trim()) {
      setError("Error >>> Empty title field");
      return;
    } else if (!email.trim()) {
      setError("Error >>> Empty email field");
      return;
    }
    if (!email.includes("@")) {
      setError("Error >>> Invalid email format");
      return;
    } else setError("");

    const doSuccessNewComment = (id: string) => {
      const comments = [
        ...productComments,
        {
          id: id,
          name: name,
          email: email,
          body: body,
          productId: product.id,
        },
      ];
      dispatch(setComents(comments));
    };

    const doErrorNewComment = () => {
      setError("Error >>> failed to upload on the server");
    };

    setNewComment(
      product.id,
      name,
      email,
      body,
      doSuccessNewComment,
      doErrorNewComment
    );
    setBody("");
    setName("");
    setEmail("");
  };

  return (
    <StyledNewCommentForm>
      <StyledTitle> New Comment </StyledTitle>

      <StyledLabel>
        Title:{" "}
        <input
          name="title"
          type="text"
          value={name}
          maxLength={50}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        E-mail:{" "}
        <input
          name="mail"
          type="text"
          value={email}
          maxLength={30}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        Text:&nbsp;&nbsp;{" "}
        <textarea
          name="text"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        ></textarea>
      </StyledLabel>
      <StyledError> {error} </StyledError>
      <button type="button" onClick={handleClick}>
        Save New Comment
      </button>
    </StyledNewCommentForm>
  );
};

export default NewCommentForm;
