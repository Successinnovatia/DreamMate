export interface Currency {
    code: string;
    symbol: string;
    flag: string;
    rate: number;
}

export interface Plan {
    name: string;
    priceUSD: number;
    description: string;
    features: string[];
}

export interface Plans {
    monthly: Plan[];
    annually: Plan[];
}

export const plans: Plans = {
    monthly: [
        {
            name: "Freemium",
            priceUSD: 0,
            description:
                "Show social proof notifications to increase leads and sales.",
            features: [
                "Free to sign up",
                "Basic Profile creation",
                "Explore Potential Matches",
                "Limited Messaging",
            ],
        },
        {
            name: "Premium",
            priceUSD: 50,
            description:
                "Show social proof notifications to increase leads and sales.",
            features: [
                "Unlimited messaging",
                "Access to elite profiles",
                "Priority customer support",
                "Profile boost for better visibility",
            ],
        },
    ],
    annually: [
        {
            name: "Freemium",
            priceUSD: 0,
            description:
                "Show social proof notifications to increase leads and sales.",
            features: [
                "Free to sign up",
                "Basic Profile creation",
                "Explore Potential Matches",
                "Limited Messaging",
            ],
        },
        {
            name: "Premium",
            priceUSD: 500,
            description:
                "Show social proof notifications to increase leads and sales.",
            features: [
                "Unlimited messaging",
                "Access to elite profiles with-level connections",
                "Priority customer support",
                "Profile boost for better visibility in search results",
                "Access to premium match making services with personalized introductions",
            ],
        },
    ],
};

export const currencies: Currency[] = [
    { code: "USD", symbol: "$", flag: "/images/pricing/usd-icon.png", rate: 1 },
    {
        code: "EUR",
        symbol: "€",
        flag: "/images/pricing/eur-icon.png",
        rate: 0.92,
    },
    {
        code: "GBP",
        symbol: "£",
        flag: "/images/pricing/gbp-icon.png",
        rate: 0.79,
    },
];