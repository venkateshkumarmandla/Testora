// components/PageLoader.tsx
import React from "react"
import "./PageLoader.css" // or use Tailwind if you prefer

const PageLoader = () => {
  return (
    <div id="preloader">
      <div className="book">
        <div className="inner">
          <div className="left"></div>
          <div className="middle"></div>
          <div className="right"></div>
        </div>
        <ul>
          {Array.from({ length: 18 }).map((_, i) => (
            <li key={i}></li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default PageLoader
