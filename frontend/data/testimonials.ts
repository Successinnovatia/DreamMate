//Testimonial data


export type Testimonial = {
    text: string;
    name: string;
    avatar: string;
    role: string;
    rating: number;
    imageSrc: string;
}


export const testimonials: Testimonial[] = [
    {
        text: "Mixed feelings but adequate results. Pros: technical skills & Intuition about colors, fonts, & layout styles. Cons: Communication, English, Detail Orientation, Creativity, Following the Brief (Style guide, sample website, text requested). Off the mark 2 day delivery, and 5-days of revision for one landing (good) page.",
        name: "Arlene McCoy",
        avatar: "/images/testimonials/avatar-1.png",
        role: 'Golio',
        rating: 5,
        imageSrc: "/images/testimonials/testimonial-img-1.jpg"
    },
    {
        text: "General feelings but adequate results. Pros: technical skills & Intuition about colors, fonts, & layout styles. Cons: Communication, English, Detail Orientation, Creativity, Following the Brief (Style guide, sample website, text requested). Off the mark 2 day delivery, and 5-days of revision for one landing (good) page.",
        name: "Jason Mamoa",
        avatar: "/images/testimonials/avatar-1.png",
        role: 'Dev',
        rating: 4,
        imageSrc: "/images/testimonials/testimonial-img-2.jpg"
    },
    {
        text: "Good feelings but adequate results. Pros: technical skills & Intuition about colors, fonts, & layout styles. Cons: Business, English, Detail Orientation, Creativity, Following the Brief (Style guide, sample website, text requested). Off the mark 2 day delivery, and 5-days of revision for one landing (good) page.",
        name: "Katty Perry",
        avatar: "/images/testimonials/avatar-1.png",
        role: 'Consultant',
        rating: 4,
        imageSrc: "/images/testimonials/testimonial-img-3.jpg"
    },

]