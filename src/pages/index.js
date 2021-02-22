//Main modules
import React from "react";
import Helmet from "react-helmet";

//components
import Main from "components/Main";
import { createClient } from "contentful";

const client = createClient({
  space: "93msxqtlvfce",
  environment: "master",
  accessToken: "O_FHujCXi8lXy0S06DkmLyMIe_Gx6iYReTMs3a7XMag",
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
    let projects = await client.getEntries("projects");
    let skills = await client.getEntries("skills");
    let sectionContent = await client.getEntries("sections");

    return {
      props: {
        projects: projects.items,
        skills: skills.items,
        content: sectionContent.items[0],
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
