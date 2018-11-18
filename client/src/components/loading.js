import React from "react";
import styled from "styled-components";

const Loading = props => (
  <KitLoading>
    <div className={"loading-block zero"} />
    <div className={"loading-block one"} />
    <div className={"loading-block two"} />
    <div className={"loading-block three"} />
    <div className={"loading-block four"} />
    <div className={"loading-block five"} />
    <div className={"loading-block six"} />
    <div className={"loading-block seven"} />
    <div className={"loading-block eight"} />
  </KitLoading>
);

export default Loading;

const KitLoading = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  > .loading-block {
    border-radius: 1px;
    box-shadow: 0 0 5px ${e => e.theme.color.kit};
    background-color: ${e => e.theme.color.kit};
    width: 10px;
    height: 8px;
    margin-right: 1px;
    animation-direction: normal;
    animation-iteration-count: infinite;
    animation-duration: 1.7s;
    animation-timing-function: ease-in-out;
  }
  .zero {
    animation-name: zeroth;
  }
  .one {
    animation-name: first;
  }
  .two {
    animation-name: second;
  }
  .three {
    animation-name: third;
  }
  .four {
    animation-name: fourth;
  }
  .five {
    animation-name: fifth;
  }
  .six {
    animation-name: sixth;
  }
  .seven {
    animation-name: seventh;
  }
  .eight {
    animation-name: eighth;
  }

  @keyframes zeroth {
    0% {
      opacity: 1;
    }
    6.25% {
      opacity: 0.8;
    }
    12.5% {
      opacity: 0.6;
    }
    18.75% {
      opacity: 0.4;
    }
    25% {
      opacity: 0.2;
    }
    31.25% {
      opacity: 0;
    }
    37.5% {
      opacity: 0;
    }
    43.75% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    56.25% {
      opacity: 0;
    }
    62.5% {
      opacity: 0;
    }
    68.75% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
    81.25% {
      opacity: 0;
    }
    87.5% {
      opacity: 0;
    }
    93.75% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes first {
    0% {
      opacity: 0.8;
    }
    6.25% {
      opacity: 1;
    }
    12.5% {
      opacity: 0.8;
    }
    18.75% {
      opacity: 0.6;
    }
    25% {
      opacity: 0.4;
    }
    31.25% {
      opacity: 0.2;
    }
    37.5% {
      opacity: 0;
    }
    43.75% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    56.25% {
      opacity: 0;
    }
    62.5% {
      opacity: 0;
    }
    68.75% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
    81.25% {
      opacity: 0;
    }
    87.5% {
      opacity: 0;
    }
    93.75% {
      opacity: 1;
    }
    100% {
      opacity: 0.8;
    }
  }

  @keyframes second {
    0% {
      opacity: 0.6;
    }
    6.25% {
      opacity: 0.4;
    }
    12.5% {
      opacity: 1;
    }
    18.75% {
      opacity: 0.8;
    }
    25% {
      opacity: 0.6;
    }
    31.25% {
      opacity: 0.4;
    }
    37.5% {
      opacity: 0.2;
    }
    43.75% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    56.25% {
      opacity: 0;
    }
    62.5% {
      opacity: 0;
    }
    68.75% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
    81.25% {
      opacity: 0;
    }
    87.5% {
      opacity: 1;
    }
    93.75% {
      opacity: 0.8;
    }
    100% {
      opacity: 0.6;
    }
  }
  @keyframes third {
    0% {
      opacity: 0.4;
    }
    6.25% {
      opacity: 0.2;
    }
    12.5% {
      opacity: 0;
    }
    18.75% {
      opacity: 1;
    }
    25% {
      opacity: 0.8;
    }
    31.25% {
      opacity: 0.6;
    }
    37.5% {
      opacity: 0.4;
    }
    43.75% {
      opacity: 0.2;
    }
    50% {
      opacity: 0;
    }
    56.25% {
      opacity: 0;
    }
    62.5% {
      opacity: 0;
    }
    68.75% {
      opacity: 0;
    }
    75% {
      opacity: 0;
    }
    81.25% {
      opacity: 1;
    }
    87.5% {
      opacity: 0.8;
    }
    93.75% {
      opacity: 0.6;
    }
    100% {
      opacity: 0.4;
    }
  }
  @keyframes fourth {
    0% {
      opacity: 0.2;
    }
    6.25% {
      opacity: 0;
    }
    12.5% {
      opacity: 0;
    }
    18.75% {
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    31.25% {
      opacity: 0.8;
    }
    37.5% {
      opacity: 0.6;
    }
    43.75% {
      opacity: 0.4;
    }
    50% {
      opacity: 0.2;
    }
    56.25% {
      opacity: 0;
    }
    62.5% {
      opacity: 0;
    }
    68.75% {
      opacity: 0;
    }
    75% {
      opacity: 1;
    }
    81.25% {
      opacity: 0.8;
    }
    87.5% {
      opacity: 0.6;
    }
    93.75% {
      opacity: 0.4;
    }
    100% {
      opacity: 0.2;
    }
  }
  @keyframes fifth {
    0% {
      opacity: 0;
    }
    6.25% {
      opacity: 0;
    }
    12.5% {
      opacity: 0;
    }
    18.75% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    31.25% {
      opacity: 1;
    }
    37.5% {
      opacity: 0.8;
    }
    43.75% {
      opacity: 0.6;
    }
    50% {
      opacity: 0.4;
    }
    56.25% {
      opacity: 0.2;
    }
    62.5% {
      opacity: 0;
    }
    68.75% {
      opacity: 1;
    }
    75% {
      opacity: 0.8;
    }
    81.25% {
      opacity: 0.6;
    }
    87.5% {
      opacity: 0.4;
    }
    93.75% {
      opacity: 0.2;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes sixth {
    0% {
      opacity: 0;
    }
    6.25% {
      opacity: 0;
    }
    12.5% {
      opacity: 0;
    }
    18.75% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    31.25% {
      opacity: 0;
    }
    37.5% {
      opacity: 1;
    }
    43.75% {
      opacity: 0.8;
    }
    50% {
      opacity: 0.6;
    }
    56.25% {
      opacity: 0.4;
    }
    62.5% {
      opacity: 1;
    }
    68.75% {
      opacity: 0.8;
    }
    75% {
      opacity: 0.6;
    }
    81.25% {
      opacity: 0.4;
    }
    87.5% {
      opacity: 0.2;
    }
    93.75% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes seventh {
    0% {
      opacity: 0;
    }
    6.25% {
      opacity: 0;
    }
    12.5% {
      opacity: 0;
    }
    18.75% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    31.25% {
      opacity: 0;
    }
    37.5% {
      opacity: 0;
    }
    43.75% {
      opacity: 1;
    }
    50% {
      opacity: 0.8;
    }
    56.25% {
      opacity: 1;
    }
    62.5% {
      opacity: 0.8;
    }
    68.75% {
      opacity: 0.6;
    }
    75% {
      opacity: 0.4;
    }
    81.25% {
      opacity: 0.2;
    }
    87.5% {
      opacity: 0;
    }
    93.75% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes eighth {
    0% {
      opacity: 0;
    }
    6.25% {
      opacity: 0;
    }
    12.5% {
      opacity: 0;
    }
    18.75% {
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    31.25% {
      opacity: 0;
    }
    37.5% {
      opacity: 0;
    }
    43.75% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    56.25% {
      opacity: 0.8;
    }
    62.5% {
      opacity: 0.6;
    }
    68.75% {
      opacity: 0.4;
    }
    75% {
      opacity: 0.2;
    }
    81.25% {
      opacity: 0;
    }
    87.5% {
      opacity: 0;
    }
    93.75% {
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;
