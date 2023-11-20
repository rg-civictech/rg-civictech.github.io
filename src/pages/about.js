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
            <h3>社会情報学会 シビックテック・デザイン研究部会について</h3>
            <section>
            <h4>研究部会名</h4>
            <p>
                日本語名：社会情報学会 シビックテック・デザイン研究部会<br/>
                英語名：Research Group on Designing Civic Tech<br/>
                英語略称：RG-CIVICTECH<br/>
            </p>
            </section>

            <section>
                <h4>研究会概要</h4>
                <p>
                    シビックテック・デザイン研究部会は、社会情報学会の研究部会として2023年9月に設置されました。<br/>
                    本研究部会では、広い意味でのシビックテックに関する対話や議論の場を設け、社会情報学的な観点からシビックテックを捉えたり、これまでのさまざまなシビックテック関連の活動を振り返ったり俯瞰したりすることで、今後のシビックテックの展開を検討します。<br/>
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
                        <td>澁谷　遊野</td>
                        <td>東京大学</td>
                        <td>正会員</td>
                    </tr>
                    <tr>
                        <th></th>
                        <td>小俣　博司</td>
                        <td>東京大学</td>
                        <td>正会員</td>
                    </tr>
                    <tr>
                        <th></th>
                        <td>庄司　昌彦</td>
                        <td>武蔵大学</td>
                        <td>正会員</td>
                    </tr>
                    <tr>
                        <th></th>
                        <td>中俣　保志</td>
                        <td>香川短期大学</td>
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
