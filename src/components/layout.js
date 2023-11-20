import * as React from "react"
// import { Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {
  const siteTitle = title
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header
  let description

  if (isRootPath) {
      header = (
          <Header />
      )
      description = (
          <div>
              <h2>{siteTitle}</h2>
              {/* 社会情報学会シビックテック・デザイン研究部会<br/> */}
              <hr/>
          </div>
      )
  } else {
    header = (
        <Header />
    )
      description = (<div></div>)
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
        {description}
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
