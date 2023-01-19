import type { DocumentContext, DocumentInitialProps } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';

import { getFacebookScript, getGoogleAnalyticsScript, getGoogleAnalyticsSrc, getGoogleOptimizeSrc, getLivechatScript, getOptInMonsterScript, getPardotScript, getUetScript } from 'lib/marketingScripts';

const googleAnalyticsId = process.env.GOOGLE_ANALYTICS_ID;
const googleAdsId = process.env.GOOGLE_ADS_ID;
const googleOptimizeId = process.env.GOOGLE_OPTIMIZE_ID;

const bingAnalyticsId = process.env.BING_ANALYTICS_ID;

const facebookAnalyticsId = process.env.FACEBOOK_ANALYTICS_ID;

const pardotDomain = process.env.PARDOT_DOMAIN;
const pardotAccountId = process.env.PARDOT_ACCOUNT_ID;
const pardotCampaignId = process.env.PARDOT_CAMPAIGN_ID;

const liveChatId = process.env.LIVE_CHAT_ID ? parseInt(process.env.LIVE_CHAT_ID, 10) : undefined;
const liveChatGroup = process.env.LIVE_CHAT_GROUP ? parseInt(process.env.LIVE_CHAT_GROUP, 10) : undefined;

const optInMonsterAccountId = process.env.OPT_IN_MONSTER_ACCOUNT_ID ? parseInt(process.env.OPT_IN_MONSTER_ACCOUNT_ID, 10) : undefined;
const optInMonsterUserId = process.env.OPT_IN_MONSTER_USER_ID ? parseInt(process.env.OPT_IN_MONSTER_USER_ID, 10) : undefined;

class MyDocument extends Document {
  public static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  public render(): JSX.Element {
    return (
      <Html lang="en" className="h-100" prefix="og: http://ogp.me/ns#">
        <Head>
          {googleOptimizeId && <script async src={getGoogleOptimizeSrc(googleOptimizeId)} />}
          {googleAnalyticsId && (
            <>
              <script async src={getGoogleAnalyticsSrc(googleAnalyticsId)} />
              <script dangerouslySetInnerHTML={{ __html: getGoogleAnalyticsScript(googleAnalyticsId, googleAdsId) }} />
            </>
          )}
          {bingAnalyticsId && <script dangerouslySetInnerHTML={{ __html: getUetScript(bingAnalyticsId) }} />}
          {facebookAnalyticsId && <script dangerouslySetInnerHTML={{ __html: getFacebookScript(facebookAnalyticsId) }} />}
          {pardotDomain && pardotAccountId && <script dangerouslySetInnerHTML={{ __html: getPardotScript(pardotDomain, pardotAccountId, pardotCampaignId) }} />}
          {liveChatId && <script dangerouslySetInnerHTML={{ __html: getLivechatScript(liveChatId, liveChatGroup) }} />}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=Playfair+Display:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Head>
        <body className="d-flex flex-column h-100">
          <noscript><img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=1725004270923176&ev=PageView&noscript=1" /></noscript>{ /* eslint-disable-line @next/next/no-img-element,jsx-a11y/alt-text */ }
          <noscript><a href="https://www.livechatinc.com/chat-with/1056788/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechatinc.com/?welcome" rel="noopener nofollow noreferrer" target="_blank">LiveChat</a></noscript>
          <Main />
          <NextScript />
          {optInMonsterAccountId && optInMonsterUserId && <script dangerouslySetInnerHTML={{ __html: getOptInMonsterScript(optInMonsterUserId, optInMonsterAccountId) }} />}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
