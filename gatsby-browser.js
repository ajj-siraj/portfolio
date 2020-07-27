/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import "./src/css/global.css";
import wrapWithProvider from "./wrap-with-provider"
import "firebase/auth"
import "firebase/database"

export const wrapRootElement = wrapWithProvider