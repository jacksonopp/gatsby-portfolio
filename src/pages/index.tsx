import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/layout'

interface Props {
  
}

const IndexPage = (props: Props) => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the gatsby tutorial.</p>
    </Layout>
  )
}

export default IndexPage
