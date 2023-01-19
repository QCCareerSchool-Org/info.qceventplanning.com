import Head from 'next/head';
import type { StaticImageData } from 'next/legacy/image';
import type { ReactElement } from 'react';
import { jsonLdScriptProps } from 'react-schemaorg';
import type { EducationalOrganization } from 'schema-dts';

import { qcEventSchoolEducationalOrganization } from 'qcEventSchoolEducationalOrganization';

type TwitterCardType = 'card' | 'summary_large_image';
type SchemaType = 'WebPage' | 'AboutPage' | 'CheckoutPage' | 'CollectionPage' | 'ContactPage' | 'FAQPage' | 'ItemPage' | 'MedicalWebPage' | 'ProfilePage' | 'QAPage' | 'RealEstateListing' | 'SearchResultsPage';

type Props = {
  title: string;
  description: string;
  canonical: string;
  image?: {
    data: StaticImageData;
    alt: string;
  };
  twitterCardType?: TwitterCardType;
  twitterCreator?: string;
  schemaType?: SchemaType;
  noIndex?: boolean;
};

type Schema = {
  '@content': string;
  '@type': SchemaType;
  'name': string;
  'url': string;
  'description': string;
};

export const SEO = ({ title, description, canonical, image, twitterCardType, twitterCreator, schemaType, noIndex }: Props): ReactElement => {
  const htmlTitle = title === 'QC Event School' ? title : `${title} - QC Event School`;
  const baseUrl = 'https://info.qceventplanning.com';
  const schema: Schema = {
    '@content': 'http://schema.org',
    '@type': schemaType ? schemaType : 'WebPage',
    'name': htmlTitle,
    'url': baseUrl + canonical,
    description,
  };

  return (
    <Head>
      <title>{htmlTitle}</title>
      {noIndex && <meta name="robots" content="noindex" />}
      <meta name="description" content={description} />
      <meta name="twitter:card" content={twitterCardType ?? 'summary'} />
      <meta name="twitter:site" content="@qccareerschool" />
      {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
      <meta property="og:url" content={baseUrl + canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={image?.data ? image.data.src : '/qcma-logo.svg'} />
      <meta property="og:image:alt" content={image?.alt ? image.alt : 'QC Event School logo'} />
      <link rel="canonical" href={baseUrl + canonical} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script {...jsonLdScriptProps<EducationalOrganization>(qcEventSchoolEducationalOrganization)} />
    </Head>
  );
};
