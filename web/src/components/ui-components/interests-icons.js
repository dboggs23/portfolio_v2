import React from "react";
import styled from "styled-components";
import bike from "../../assets/bike.svg";
import books from "../../assets/books.svg";
import coffee from "../..//assets/coffee.svg";
import airplane from "../../assets/airplane.svg";
import mountains from "../../assets/mountains.svg";
import fleur from "../../assets/Fleur-de-lis-fill.svg";
import { myContext } from "../../../provider";
import { SocialIcon } from "react-social-icons";

const IconsContainer = styled.div`
  .interests-container {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin: 10px 0;

    .bike,
    .coffee,
    .plane,
    .mountains {
      position: relative;
    }
    .bike {
      top: 9px;
    }
    .coffee {
      bottom: 2px;
    }
    .plane {
      top: 1px;
    }
    .mountains {
      top: 2px;
    }
  }
  .interests {
    width: 50px;
    filter: ${(props) =>
      props.checked
        ? "invert(100%) sepia(1%) saturate(0%) hue-rotate(233deg) brightness(106%) contrast(101%)"
        : ""};
  }
  .icons {
    display: flex;
    justify-content: space-between;
  }

  @media only screen and (max-width: 600px) {
    .interests-container {
      padding: 3px;
    }
    .interests {
      width: 30px;
    }
  }
`;

const Flower = styled.img`
  width: 50px;
  filter: ${(props) =>
    props.checked
      ? "invert(100%) sepia(1%) saturate(0%) hue-rotate(233deg) brightness(106%) contrast(101%)"
      : ""};
`;

function InterestsIcons() {
  return (
    <myContext.Consumer>
      {(context) => (
        <IconsContainer checked={context.checked}>
          <h5>Minimalist clip art that represent my interests:</h5>
          <div className="interests-container">
            <img className="interests books" src={books} alt="A bookshelf." />
            <img className="interests bike" src={bike} alt="A neat bicycle" />
            <img
              className="interests coffee"
              src={coffee}
              alt="A piping cup of joe"
            />
            <img
              className="interests plane"
              src={airplane}
              alt="A jet airliner"
            />
            <img
              className="interests mountains"
              src={mountains}
              alt="Idyllic mountains that remind me of those in Colorado. "
            />
          </div>
        </IconsContainer>
      )}
    </myContext.Consumer>
  );
}

function FleurDeLis() {
  return (
    <myContext.Consumer>
      {(context) => (
        <Flower
          checked={context.checked}
          className="interests"
          src={fleur}
          alt="A fleur de lis, which symbolizes the confluence of the Missouri and Mississippi rivers north of St. Louis, Missouri."
        />
      )}
    </myContext.Consumer>
  );
}

function Links() {
  return (
    <myContext.Consumer>
      {(context) => (
        <div className="contacts">
          <SocialIcon
            url="https://www.linkedin.com/in/dalton-boggs/"
            bgColor={context.checked ? "white" : "black"}
          />
          <SocialIcon
            url="https://github.com/dboggs23"
            bgColor={context.checked ? "white" : "black"}
          />
        </div>
      )}
    </myContext.Consumer>
  );
}

export { InterestsIcons, FleurDeLis, Links };
