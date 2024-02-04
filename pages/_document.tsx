import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Generate your next SOP in seconds."
          />
          <meta property="og:site_name" content="SOP Generator" />
          <meta
            property="og:description"
            content="Generate your next SOP in seconds."
          />
          <meta property="og:title" content="SOP Generator" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="SOP Generator" />
          <meta
            name="twitter:description"
            content="Generate your next SOP in seconds."
          />
          <meta
            property="og:image"
            content="https://SOP Generator/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://SOP Generator/og-image.png"
          />
          {/* Add the Google AdSense script here */}
          <script
            data-ad-client="ca-pub-1126540952570363"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          />
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
