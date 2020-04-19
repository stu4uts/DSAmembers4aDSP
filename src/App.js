import React from 'react'
import { Root, Routes, addPrefetchExcludes, Head } from 'react-static'
//
import { Link, Router } from 'components/Router'

import './app.css'

function App() {
  return (
    <Root>
      <Head>
        <title>DSAmembers4DSP</title>
      </Head>
      <nav>
        <img src="/images/demsocparty.png"/>
        <div className="links">
          <Link to="/">Petition</Link>
          <Link to="/about">About</Link>
          <Link to="/articles">Articles</Link>
        </div>
      </nav>
      <div className="content">
        <React.Suspense fallback={<em>Loading...</em>}>
          <Router>
            <Routes path="*" />
          </Router>
        </React.Suspense>
      </div>
    </Root>
  )
}

export default App
