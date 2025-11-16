import Script from "next/script";
import {
  COMPANY_LEGAL_NAME,
  COMPANY_NAME,
  CONTACT_EMAIL,
  DESCRIPTION,
  INSTAGRAM_URL,
  SITE_NAME,
  SITE_URL,
} from "@/lib/constants";

const structuredData = [
  {
    id: "structured-data-local-business",
    data: {
      "@context": "https://schema.org",
      "@type": ["LocalBusiness", "TechnologyCompany"],
      name: COMPANY_NAME,
      legalName: COMPANY_LEGAL_NAME,
      alternateName: SITE_NAME,
      description: DESCRIPTION,
      url: SITE_URL,
      email: CONTACT_EMAIL,
      foundingDate: "2024",
      founder: {
        "@type": "Person",
        name: "김현승",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "예술길 31-11, 4층 401-38호",
        addressLocality: "동구",
        addressRegion: "광주광역시",
        addressCountry: "KR",
        postalCode: "61475",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "35.1379",
        longitude: "126.9084",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          email: CONTACT_EMAIL,
          contactType: "customer support",
          areaServed: "KR",
          availableLanguage: "Korean",
        },
      ],
      openingHours: "Mo-Fr 09:00-18:00",
      currenciesAccepted: "KRW",
      paymentAccepted: "Credit Card, Mobile Payment",
      priceRange: "Free - Premium",
      applicationCategory: "Dating & Relationships",
      operatingSystem: ["iOS", "Android"],
      serviceType: "Mobile Application Development",
      areaServed: {
        "@type": "Country",
        name: "South Korea",
      },
      knowsAbout: [
        "Dating Apps",
        "Mobile App Development",
        "Relationship Matching",
        "Value-based Compatibility",
        "AI Matching Algorithms",
      ],
      sameAs: [
        INSTAGRAM_URL,
        "https://apps.apple.com/kr/app/pollit-%ED%8F%B4%EC%9E%87-%EA%B0%80%EC%B9%98%EA%B4%80-%EB%B0%8F-%EC%84%B1%ED%96%A5-%EA%B8%B0%EB%B0%98-%EC%86%8C%EA%B0%9C%ED%8C%85%EC%95%B1/id6478050884",
        "https://play.google.com/store/apps/details?id=com.pollitapp",
      ],
    },
  },
  {
    id: "structured-data-website",
    data: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE_NAME,
      alternateName: "Pollit",
      url: SITE_URL,
      description: "직장인&전문직 블라인드 소개팅앱-폴잇",
      publisher: {
        "@type": "Organization",
        name: COMPANY_LEGAL_NAME,
      },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: SITE_URL,
        },
        "query-input": "required name=search_term_string",
      },
    },
  },
  {
    id: "structured-data-mobile-app",
    data: {
      "@context": "https://schema.org",
      "@type": "MobileApplication",
      name: SITE_NAME,
      alternateName: "Pollit",
      description: "직장인&전문직 블라인드 소개팅앱-폴잇",
      applicationCategory: "Dating",
      operatingSystem: ["iOS", "Android"],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "KRW",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5.0",
        reviewCount: "3",
        bestRating: "5",
        worstRating: "1",
      },
      author: {
        "@type": "Organization",
        name: COMPANY_LEGAL_NAME,
      },
      downloadUrl: [
        "https://apps.apple.com/kr/app/pollit-%ED%8F%B4%EC%9E%87-%EA%B0%80%EC%B9%98%EA%B4%80-%EB%B0%8F-%EC%84%B1%ED%96%A5-%EA%B8%B0%EB%B0%98-%EC%86%8C%EA%B0%9C%ED%8C%85%EC%95%B1/id6478050884",
        "https://play.google.com/store/apps/details?id=com.pollitapp",
      ],
      installUrl: [
        "https://apps.apple.com/kr/app/pollit-%ED%8F%B4%EC%9E%87-%EA%B0%80%EC%B9%98%EA%B4%80-%EB%B0%8F-%EC%84%B1%ED%96%A5-%EA%B8%B0%EB%B0%98-%EC%86%8C%EA%B0%9C%ED%8C%85%EC%95%B1/id6478050884",
        "https://play.google.com/store/apps/details?id=com.pollitapp",
      ],
    },
  },
  {
    id: "structured-data-reviews",
    data: {
      "@context": "https://schema.org",
      "@type": "ItemList",
      itemListElement: [
        {
          "@type": "Review",
          position: 1,
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "김○○",
          },
          reviewBody:
            "직장인증을 한 분들만 만날 수 있어서 정말 좋아요. 매일 쓰다보면 곧 제 인연을 찾을 수 있을 것 같아요.",
          itemReviewed: {
            "@type": "MobileApplication",
            name: SITE_NAME,
          },
        },
        {
          "@type": "Review",
          position: 2,
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "이○○",
          },
          reviewBody:
            "부담없이 매일 다양한 직장인 또는 전문직 이성들을 소개받을 수 있어요. 저만 알고 싶은 서비스예요. ㅎㅎ",
          itemReviewed: {
            "@type": "MobileApplication",
            name: SITE_NAME,
          },
        },
        {
          "@type": "Review",
          position: 3,
          reviewRating: {
            "@type": "Rating",
            ratingValue: "5",
            bestRating: "5",
          },
          author: {
            "@type": "Person",
            name: "박○○",
          },
          reviewBody:
            "상대방의 가치관과 성향 설문조사 응답을 보여주니까 좋아요. 서로 잘 통할지도 폴잇AI가 솔직하게 알려주니까 도움이 돼요.",
          itemReviewed: {
            "@type": "MobileApplication",
            name: SITE_NAME,
          },
        },
      ],
    },
  },
  {
    id: "structured-data-webpage",
    data: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "직장인&전문직 블라인드 소개팅앱-폴잇",
      description: "결정사 대신 폴잇하세요!",
      url: SITE_URL,
      mainEntity: {
        "@type": "MobileApplication",
        name: SITE_NAME,
      },
      breadcrumb: {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "홈",
            item: SITE_URL,
          },
        ],
      },
    },
  },
];

export function StructuredDataScripts() {
  return structuredData.map(({ id, data }) => (
    <Script
      key={id}
      id={id}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  ));
}

