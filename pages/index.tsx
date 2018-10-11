import React from "react"

class Index extends React.Component {
  public static getInitialProps() {
    return {}
  }

  public render() {
    return (
      <div>
        <h1>Hello, Next.js + TypeScript!</h1>
        <style jsx>
          {`
            h1 {
              color: blue;
            }
          `}
        </style>
      </div>
    )
  }
}

export default Index
