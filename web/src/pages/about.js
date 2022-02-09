import React from "react";
import Layout from "../containers/layout";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";
import styled from "styled-components";
//import { SocialIcon } from "react-social-icons";
import {
  InterestsIcons,
  FleurDeLis,
} from "../components/ui-components/interests-icons";

const HomeStyled = styled.div`
  animation: FadeIn 0.9s 1;
  width: 500px;
  margin: 0 auto;
  font-family: "EB Garamond";

  @keyframes FadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media only screen and (max-width: 600px) {
    width: 250px;
    margin: 0 auto;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

  h1 {
    margin: 10px 0;
    text-decoration: underline;
    text-decoration-thickness: 2px;
    text-decoration-line: solid;
    text-decoration-color: var(--light-green);
  }
  h3 {
    margin-top: 30px;
    align-self: baseline;
  }
  h5 {
    margin: 30px 0;
  }
  img {
    margin-left: 5px;
    margin-bottom: 2.5px;
    width: 30px;
    height: auto;
  }
  .archHolder {
    display: flex;
    align-items: flex-end;
  }
`;

export const query = graphql`
  query AboutPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

function Home({ data, errors }) {
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const site = (data || {}).site;

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO
        title={site.title}
        description={site.description}
        keywords={site.keywords}
      />
      <HomeStyled>
        <StyledContainer>
          <h1>I'm Dalton.</h1>
          <div className="archHolder">
            <h3>I'm a developer who lives in St. Louis.</h3>
            <FleurDeLis />
          </div>
          <h5>
            I don't make computers go beep-boop. They already do that. I build
            things that make interacting with them nicer.
          </h5>

          <InterestsIcons />
          <div className="icons-container">
            <h5>Some professional sort of links:</h5>
            <div className="icons">
              {/*<SocialIcon
              url="https://www.linkedin.com/in/dalton-boggs/"
              bgColor="black"
            />
            <SocialIcon url="https://github.com/dboggs23" bgColor="black" />*/}
            </div>
          </div>
        </StyledContainer>
      </HomeStyled>
    </Layout>
  );
}

export default Home;
