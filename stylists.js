const stylists = [

    {
        id: 1,
        name: "Ananya Sharma",
        role: "Senior Hair Stylist",
        experience: "8+ Years",
        status: "Active"
    },

    {
        id: 2,
        name: "Meera Kapoor",
        role: "Makeup Artist",
        experience: "6+ Years",
        status: "Active"
    },

    {
        id: 3,
        name: "Riya Sharma",
        role: "Skin Specialist",
        experience: "5+ Years",
        status: "Active"
    },

    {
        id: 4,
        name: "Sneha Rao",
        role: "Nail Artist",
        experience: "4+ Years",
        status: "Active"
    }

];

localStorage.setItem(
    "stylists",
    JSON.stringify(stylists)
);