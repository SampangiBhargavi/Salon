function getReviews() {

    return JSON.parse(
        localStorage.getItem("reviews")
    ) || [];

}


function addReview(name, rating, review) {

    let reviews = getReviews();

    reviews.push({

        id: Date.now(),

        name: name,

        rating: rating,

        review: review,

        status: "Pending"

    });

    localStorage.setItem(
        "reviews",
        JSON.stringify(reviews)
    );

}


function deleteReview(id) {

    let reviews = getReviews();

    reviews = reviews.filter(
        review => review.id !== id
    );

    localStorage.setItem(
        "reviews",
        JSON.stringify(reviews)
    );

}