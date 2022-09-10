import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <h1>Hillbilly Radio</h1>
    </div>
    <div>
      <p>
        The music feed shuts down. Nobody is listening lately, not even me. I
        can save a few dollars and just run this locally at home. Or not.
      </p>
      <p>
        I'm using this opportunity to learn some more modern web development.
        It's a struggle. Anyways, if I pull it off, this page will look as the
        old page. Except, it&apos;s been built quite differently.
      </p>
      <p>Building the modern way:</p>
      <ul>
        <li>React is a javaScript library</li>
        <li>Gatsby is a javaScript framework wraped around React</li>
        <li>Netlify serves it all from the cloud</li>
      </ul>
      <p>
        In short, we dont write the html anymore, we write the code that writes
        the html. This code is available on
        <a href="https://github.com/caldwmark/hr-gatsby"> Github</a>.
      </p>
      <p>
        More active web development is going on at{" "}
        <a href="https://www.bearcountrypublishing.com">
          Bear Country Publishing
        </a>{" "}
        be sure and check it out!
      </p>
    </div>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
