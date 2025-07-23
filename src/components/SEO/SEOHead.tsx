import React from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export default function SEOHead({
  title,
  description,
  keywords = [],
  image = '/ogp/thumbnail.png',
  url,
  type = 'website'
}: SEOHeadProps) {
  const siteTitle = title ? `${title} | KickBackStyles` : 'KickBackStyles';
  const siteDescription = description || 'KickBackStyles公式サイト | ファッションブランド';
  const siteUrl = url || 'https://kickbackstyles.com';

  return (
    <>
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(', ')} />
      )}
      
      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="KickBackStyles" />
      <meta property="og:locale" content="ja_JP" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={siteUrl} />
    </>
  );
} 