import styled from "styled-components";
import { useState } from "react";
import React from "react";

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
`;

export const ControlledModal = ({ isOpen, onClose, children }) => {
  return (
    <React.Fragment>
      {isOpen && (
        <ModalContainer onClick={onClose}>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            <div>{children}</div>
            <button onClick={onClose}>Close Modal</button>
          </ModalContent>
        </ModalContainer>
      )}
    </React.Fragment>
  );
};
