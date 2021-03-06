import * as React from 'react';

import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="./favicon-96x96.png"
          />
          <meta charSet="UTF-8" />
          <meta
            property="og:title"
            content="Marley Spoon recipes"
            key="title"
          />
          <meta name="description" content="A recipe list" />
          <meta name="keywords" content="Marley Spoon, Delicious, Food" />
          <meta name="author" content="Marley Spoon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
