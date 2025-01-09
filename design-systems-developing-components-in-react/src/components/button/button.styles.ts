import styled, { css } from "styled-components";
import { ButtonProps } from "./button.types";
import { COLORS } from "../../utils/colors.util";

const getButtonSize = (size?: string) => {
  switch (size) {
    case "small":
      return css`
        padding: 8px 16px;
        font-size: 14px;
      `;
    case "large":
      return css`
        padding: 16px 24px;
        font-size: 18px;
      `;
    default:
      return css`
        padding: 12px 20px;
        font-size: 16px;
      `;
  }
};

const getButtonVariant = (variant?: string) => {
  switch (variant) {
    case "primary":
      return css`
        background: ${COLORS.blue[200]};
        color: ${COLORS.balanced[100]};
        border: none;

        &:hover {
          background: ${COLORS.blue[300]};
        }
      `;

    case "danger":
      return css`
        background: ${COLORS.red[200]};
        color: ${COLORS.balanced[100]};
        border: none;

        &:hover {
          background: ${COLORS.red[300]};
        }
      `;

    case "warning":
      return css`
        background: ${COLORS.yellow[200]};
        color: ${COLORS.balanced[100]};
        border: none;

        &:hover {
          background: ${COLORS.yellow[300]};
        }
      `;

    case "secondary":
      return css`
        background: ${COLORS.green[200]};
        color: ${COLORS.balanced[100]};
        border: none;

        &:hover {
          background: ${COLORS.green[300]};
        }
      `;
    case "outlined":
      return css`
        background: transparent;
        color: ${COLORS.blue[200]};
        border: 2px solid ${COLORS.blue[200]};

        &:hover {
          background: ${COLORS.blue[200]};
          color: ${COLORS.balanced[100]};
        }
      `;
    default:
      return css`
        background: ${COLORS.blue[200]};
        color: ${COLORS.balanced[100]};
        border: none;
      `;
  }
};

export const StyledButton = styled.button<ButtonProps>`
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-weight: 500;
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};

  ${({ size }) => getButtonSize(size)}
  ${({ variant }) => getButtonVariant(variant)}

  &:disabled {
    background: ${COLORS.balanced[300]};
    cursor: not-allowed;
    color: ${COLORS.balanced[400]};

    &:hover {
      background: ${COLORS.balanced[300]};
    }
  }

  &:focus {
    outline: 3px solid ${COLORS.blue[100]};
    outline-offset: 2px;
  }
`;
