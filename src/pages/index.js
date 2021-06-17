//Main modules
import React from "react";
import Helmet from "react-helmet";

//components
import Main from "components/Main.js";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.contentfulSpaceID,
  environment: "master",
  accessToken: process.env.contentfulKey,
});

const IndexPage = props => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Siraj Ahmed</title>
        
      </Helmet>
      <Main {...props} />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    let projects = await client.getEntries({content_type: "projects", select: "fields", order: '-sys.createdAt'});
    let skills = await client.getEntries({content_type: "skills", select: "fields"});
    let services = await client.getEntries({content_type: "services", select: "fields"})
    let sectionContent = await client.getEntries({content_type: "sections", select: "fields"});

    return {
      props: {
        projects: projects.items,
        skills: skills.items,
        services: services.items,
        content: sectionContent.items[0], //it's a single type so we don't need additional entries even if there are any
      },
    };
  } catch (ex) {
    return {
      props: {
        error: JSON.stringify(ex),
      },
    };
  }
}

export default IndexPage;
