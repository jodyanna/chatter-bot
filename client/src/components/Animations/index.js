import { keyframes } from "styled-components";


export const fadeIn = keyframes`
  0% {
    transform: translateY(+100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const fadeOut = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(+100%);
  }
`;