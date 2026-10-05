const services = [
    {
        id: 1,
        name: "Haircut & Styling",
        price: 499,
        duration: "45-60 minutes",
        category: "Hair"
    },
    {
        id: 2,
        name: "Hair Spa",
        price: 999,
        duration: "60 minutes",
        category: "Hair"
    },
    {
        id: 3,
        name: "Facial",
        price: 799,
        duration: "45 minutes",
        category: "Skin"
    },
    {
        id: 4,
        name: "Party Makeup",
        price: 1499,
        duration: "90 minutes",
        category: "Makeup"
    },
    {
        id: 5,
        name: "Manicure",
        price: 599,
        duration: "45 minutes",
        category: "Nails"
    },
    {
        id: 6,
        name: "Pedicure",
        price: 699,
        duration: "50 minutes",
        category: "Nails"
    },
    {
        id: 7,
        name: "Bridal Makeup",
        price: 4999,
        duration: "3 hours",
        category: "Makeup"
    },
    {
        id: 8,
        name: "Waxing",
        price: 399,
        duration: "30 minutes",
        category: "Beauty"
    },
    {
        id: 9,
        name: "Nail Art",
        price: 899,
        duration: "60 minutes",
        category: "Nails"
    }
];

localStorage.setItem(
    "services",
    JSON.stringify(services)
);