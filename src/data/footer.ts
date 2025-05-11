import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    socials: ISocials;
} = {
    subheading: "Simplifying CAD-to-mesh workflows with powerful, lightweight engineering software.",
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        {
            text: "Pricing",
            url: "#pricing"
        },
        {
            text: "FAQ",
            url: "#faq"
        }
    ],
    email: 'info@femesh.com',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        //twitter: 'https://twitter.com/Twitter',
        //facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com/in/damjangnjidic',
        // threads: 'https://www.threads.net',
        //instagram: 'https://www.instagram.com',
    }
}