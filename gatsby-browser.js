/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "./src/css/global.css";
import wrapWithProvider from "./wrap-with-provider"

export const wrapRootElement = wrapWithProvider
//I was trying to figure out redux with gatsby WHY IS THE DOCUMENTATION SO BAD ON THIS