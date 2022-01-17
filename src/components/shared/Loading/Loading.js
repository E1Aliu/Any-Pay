import React from 'react';
import styled, { keyframes } from 'styled-components';

const commonStyle = {
  margin: 'auto',
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0
};

const sizeItem = {
  small: '20px',
  default: '27px',
  large: '32.5px'
}

const bouncedelay = keyframes`
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
`

const LoadingContainer = styled.div`
  width: 200px;
  height: 200px;
  text-align: center;
`;

const load = styled.div`
  width: ${props => sizeItem[props.size] || sizeItem['default'] };
  height: ${props => sizeItem[props.size] || sizeItem['default'] };
  margin-top: calc(50% -  ${props => sizeItem[props.size] || sizeItem['default'] } / 2);
  background-color: ${props => props.color || '#C92E34'};
  border-radius: 100%;
  display: inline-block;
  animation: ${bouncedelay} ${props => props.speed || 1.4}s infinite ease-in-out;
  animation-fill-mode: both;
  margin-left: 7px;
  margin-right:7px;

`

const LoadFirst = styled(load)`
  animation-delay: -0.48s;
`

const LoadTwo = styled(load)`
  animation-delay: -0.32s;
`

const LoadThree = styled(load)`
  animation-delay: -0.16s;
`

const Loading = ({ style = commonStyle, color, speed, size="default" }) => {
  return (
    <LoadingContainer style={style}>
        <LoadFirst color={color} size={size} speed={speed} />
        <LoadTwo color={color} size={size} speed={speed} />
        <LoadThree color={color} size={size} speed={speed} />
    </LoadingContainer>
  );
};

export default Loading;