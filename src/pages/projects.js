import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export default class Blog extends React.Component {
  render() {

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1>Projects</h1>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}