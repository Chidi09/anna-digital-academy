// SEO Configuration for Anna Digital Academy
export const siteConfig = {
    name: "Anna Digital Academy",
    shortName: "ADA",
    description: "Transform your business idea into reality in 6 weeks. Practical business education for entrepreneurs and founders. Learn validation, market research, finance, operations, sales, and launch strategy.",
    url: "https://annadigitalacademy.com",
    ogImage: "/og-image.jpg",
    keywords: [
        "business academy",
        "entrepreneur training",
        "digital business",
        "startup academy",
        "business education Nigeria",
        "entrepreneur program",
        "business launch",
        "startup training",
        "business validation",
        "market research course",
        "business finance",
        "sales training",
        "founder training",
        "6-week business program",
        "practical business education",
        "anna digital academy",
        "business school",
        "entrepreneurship course",
        "startup incubator",
        "business accelerator"
    ],
    authors: [
        {
            name: "Anna Digital Academy",
            url: "https://annadigitalacademy.com"
        }
    ],
    creator: "Anna Digital Academy",
    themeColor: "#E1A21A", // ADA Gold
    backgroundColor: "#020200", // ADA Black
    locale: "en_US",
    type: "website",
    email: "Annadigitalacademy@gmail.com",
    phoneNumber: "+234 704 417 3871",
    address: {
        city: "Lagos",
        country: "Nigeria"
    },
    social: {
        instagram: "https://instagram.com/annadigitalacademy",
        email: "mailto:Annadigitalacademy@gmail.com",
        whatsapp: "https://wa.me/2347044173871"
    }
};

export const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": siteConfig.name,
    "description": siteConfig.description,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logo.svg`,
    "image": `${siteConfig.url}/og-image.jpg`,
    "email": siteConfig.email,
    "telephone": siteConfig.phoneNumber,
    "address": {
        "@type": "PostalAddress",
        "addressLocality": siteConfig.address.city,
        "addressCountry": siteConfig.address.country
    },
    "sameAs": [
        siteConfig.social.instagram
    ],
    "foundingDate": "2026",
    "slogan": "Creating Opportunities, Not Waiting for Them"
};

export const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "6-Week Business Accelerator Program",
    "description": "Transform your business idea into reality. Complete curriculum covering idea validation, market research, finance, operations, sales, and launch strategy.",
    "provider": {
        "@type": "EducationalOrganization",
        "name": siteConfig.name,
        "sameAs": siteConfig.url
    },
    "hasCourseInstance": {
        "@type": "CourseInstance",
        "courseMode": "online",
        "courseWorkload": "PT6W", // 6 weeks
        "startDate": "2026-05",
        "offers": {
            "@type": "Offer",
            "price": "85000",
            "priceCurrency": "NGN",
            "availability": "https://schema.org/InStock"
        }
    },
    "educationalCredentialAwarded": "Certificate of Completion",
    "numberOfCredits": 6,
    "timeRequired": "PT6W",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "1"
    }
};
