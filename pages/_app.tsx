import App, { Container } from "next/app"
import React from "react"

class MyApp extends App {
  public static async getInitialProps({
    Component,
    ctx
  }: {
    Component: any
    ctx: any
  }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {}

    return { pageProps }
  }

  public render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp
