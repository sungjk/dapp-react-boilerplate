import { withRouter } from 'next/router';
import App, { Container } from 'next/app';
import Layout from 'src/components/Layout';

class ChatApp extends App {
    render() {
        const { Component, pageProps, router } = this.props;
        const { asPath, pathname, query } = router;
        const url = {
            asPath,
            pathname,
            query,
        };
        
        return (
            <Container>
                <Layout>
                    <Component {...pageProps} url={url} />
                </Layout>
            </Container>
        );
    }
}

export default withRouter(ChatApp);
