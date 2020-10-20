import { keyframes } from "styled-components";


export const fadeInUp = keyframes`
  0% {
    transform: translateY(+100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const fadeOutUp = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(+100%);
  }
`;

export const fadeInDown = keyframes`
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const fadeOutDown = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
`;