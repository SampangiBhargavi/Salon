const offers = [

    {
        id: 1,
        title: "First Visit Offer",
        discount: "20%",
        code: "GLOW20",
        status: "Active"
    },

    {
        id: 2,
        title: "Weekend Glow",
        discount: "15%",
        code: "WEEKEND15",
        status: "Active"
    },

    {
        id: 3,
        title: "Beauty Combo",
        discount: "25%",
        code: "GLOW25",
        status: "Active"
    }

];

localStorage.setItem(
    "offers",
    JSON.stringify(offers)
);