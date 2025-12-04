// mock database

// src/data.js

export const blogPosts = [
    {
        id: 1,
        title: "Is VR the future?",
        category: "Technology",
        imageUrl: "/images/VR.jpg",
        publishDate: "Aug 4 2023",
        readTime: "7 min read",
        type: "featured",
        layout: 1
    },
    {
        id: 2,
        title: "Land Rover Defender",
        category: "Travel",
        imageUrl: "/images/1.jpg",
        publishDate: "Aug 4 2023",
        readTime: "10 min read",
        type: "featured",
        layout: 2
    },
    {
        id: 3,
        title: "Germany FIBA World Cup Champions!",
        category: "Basketball",
        imageUrl: "", // Assuming empty image for this example
        publishDate: "Aug 4 2023",
        readTime: "5 min read",
        type: "featured",
        layout: 3
    },
    {
        id: 4,
        title: "Community Shield",
        category: "Sports",
        imageUrl: "/images/who-s-denilo.jpg",
        publishDate: "Aug 4 2023",
        readTime: "6 min read",
        type: "trending",
    },
    {
        id: 5,
        title: "The Joker Delivers!",
        category: "Basketball",
        imageUrl: "/images/basketball michael jordan chicago bulls.jpg",
        publishDate: "July 15th 2023",
        readTime: "7 min read",
        type: "trending",
    },
    // ... add more posts here
];

// src/data.js (append this to the file)

// ... existing blogPosts export ...

export const categories = [
    { name: "Travel", imageUrl: "/images/1.jpg", slug: "travel" },
    { name: "Technology", imageUrl: "/images/VR.jpg", slug: "tech" },
    { name: "Basketball", imageUrl: "/images/basketball michael jordan chicago bulls.jpg", slug: "basketball" },
    { name: "Movies", imageUrl: "/images/logan-weaver.jpg", slug: "movies" },
    { name: "Football", imageUrl: "/images/logan-weaver.jpg", slug: "football" },
    { name: "Fitness", imageUrl: "/images/logan-weaver.jpg", slug: "fitness" },
];
