import Document, { Head, Main, NextScript } from 'next/document';
import Helmet from 'react-helmet';

export default class extends Document {
    static async getInitialProps(...args) {
        const documentProps = await super.getInitialProps(...args);
        // see https://github.com/nfl/react-helmet#server-usage for more information
        // 'head' was occupied by 'renderPage().head', we cannot use it
        return { ...documentProps, helmet: Helmet.renderStatic() };
    }
    
    get helmetHtmlAttrComponents() {
        return this.props.helmet.htmlAttributes.toComponent();
    }
    
    get helmetBodyAttrComponents() {
        return this.props.helmet.bodyAttributes.toComponent();
    }
    
    get helmetHeadComponents() {
        return Object.keys(this.props.helmet)
        .filter(el => el !== 'htmlAttributes' && el !== 'bodyAttributes')
        .map(el => this.props.helmet[el].toComponent());
    }
    
    get helmetJsx() {
        let title = 'dapp-react-boilerplate';
        return (
            <Helmet>
                <title>{title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content={title} />
            </Helmet>
        );
    }
    
    render() {
        return (
            <html {...this.helmetHtmlAttrComponents}>
            <Head>
                <style>{'body { margin: 0 } html { font-family: Roboto, sans-serif; -webkit-font-smoothing: antialiased; }'}</style>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link href="//fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
                <link href="//cdnjs.cloudflare.com/ajax/libs/tachyons/4.8.1/tachyons.min.css" rel="stylesheet" />
                <link href="//cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" rel="stylesheet" />
                <script src="/static/js/web3.min.js"></script>
                {this.helmetJsx}
                {this.helmetHeadComponents}
            </Head>
            <body {...this.helmetBodyAttrComponents}>
            <Main />
            <NextScript />
            </body>
            </html>
        );
    }
}