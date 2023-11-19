// src/pages/about.js
import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import "../styles/about.css"
import Seo from "../components/seo"

export default function About({ data, location }) {
    // const siteTitle = data.site.siteMetadata.title
    const siteTitle = "RG-CIVICTECH"
    return (
        <Layout location={location} title={siteTitle}>
            <h3>社会情報学会 シビックテック・デザイン研究会について</h3>
            <section>
            <h4>研究会名</h4>
            <p>
                日本語名：社会情報学会 シビックテック・デザイン研究会<br/>
                英語名：Research Group on Designing Civic Tech<br/>
                英語略称：RG-CIVICTECH<br/>
            </p>
            </section>

            <section>
                <h4>研究会概要</h4>
                <p>
                    概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要<br/>
                    概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要<br/>
                    概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要<br/>
                    概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要<br/>
                    概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要<br/>
                    概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要<br/>
                    概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要<br/>
                    概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要<br/>
                    概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要概要<br/>
                </p>
            </section>

            <section>
                <h4>メンバー</h4>
                <table>
                    <thead>
                    <tr>
                        <th colSpan="4">メンバー</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th>主査</th>
                        <td>○○　○○</td>
                        <td>○○大学</td>
                        <td>正会員</td>
                    </tr>
                    <tr>
                        <th></th>
                        <td>○○　○○</td>
                        <td>○○大学</td>
                        <td>正会員</td>
                    </tr>
                    <tr>
                        <th></th>
                        <td>○○　○○</td>
                        <td>○○大学</td>
                        <td>正会員</td>
                    </tr>
                    <tr>
                        <th></th>
                        <td>○○　○○</td>
                        <td>○○大学</td>
                        <td>正会員</td>
                    </tr>
                    </tbody>
                </table>
            </section>

            <section>
                <h4>リンク</h4>
                <ul>
                    <li><Link to="http://www.ssi.or.jp/">一般社団法人社会情報学会</Link></li>
                </ul>
            </section>
        </Layout>
    )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="about" />
