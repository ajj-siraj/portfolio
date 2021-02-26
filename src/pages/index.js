//Main modules
import React from "react";
import Helmet from "react-helmet";

//components
import Main from "components/Main";
import { createClient } from "contentful";

const client = createClient({
  space: process.env.contentfulSpaceID,
  environment: "master",
  accessToken: process.env.contentfulKey,
});

const IndexPage = props => {
  console.log("ALL ENTRIES: ", props);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Siraj - A Portfolio</title>
        
      </Helmet>
      <Main {...props} />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    let projects = await client.getEntries({content_type: "projects", select: "fields"});
    let skills = await client.getEntries({content_type: "skills", select: "fields"});
    let sectionContent = await client.getEntries({content_type: "sections", select: "fields"});

    return {
      props: {
        projects: projects.items,
        skills: skills.items,
        content: sectionContent.items[0], //it's a single type so we don't need additional entries even if there are any
      },
    };
  } catch (ex) {
    return {
      props: {
        error: ex,
      },
    };
  }
}

export default IndexPage;
