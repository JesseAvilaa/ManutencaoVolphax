import React from 'react'
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:400,500,700"
            rel="stylesheet"
          />
          <link rel="icon" href="https://i.imgur.com/jNNqY4H.png" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Volphax" />
          <meta property="og:title" content="Volphax Group" />
          <meta
            property="og:description"
            content="Empresa de desenvolvimentos web e mobile."
          />
          <meta property="og:image" content="https://i.imgur.com/jNNqY4H.png" />{' '}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@volphax" />
          <meta name="twitter:creator" content="@volphax" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
