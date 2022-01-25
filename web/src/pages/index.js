import React from "react";
import Layout from "../containers/layout";
import Container from "../components/container";
import SEO from "../components/seo";
import { graphql } from "gatsby";
import GraphQLErrorList from "../components/graphql-error-list";

export const query = graphql`
  query MainPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
  }
`;

function index({ data, errors }) {
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
      <Container>I'm home!</Container>
    </Layout>
  );
}

export default index;
