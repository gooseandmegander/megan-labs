import React from 'react'
import Helmet from 'react-helmet'

import Navbar from '../components/Navbar'
import './all.sass'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet title="Megan Williamson" />
    <Navbar />
    <>{children}</>
  </div>
)

export default TemplateWrapper
