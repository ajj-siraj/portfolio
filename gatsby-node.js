/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

//fix webpack build error for quill.js
exports.onCreateWebpackConfig = ({ stage, actions, loaders }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /quill.js/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}