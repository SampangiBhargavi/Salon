/* Logged-in user */

function getLoggedInUser() {

    return JSON.parse(
        localStorage.getItem("loggedInUser")
    );

}


/* Logout customer */

function logoutUser() {

    localStorage.removeItem(
        "loggedInUser"
    );

    window.location.href =
        "index.html";

}


/* Check login */

function checkLogin() {

    const user =
        getLoggedInUser();

    if (!user) {

        window.location.href =
            "login.html";

    }

    return user;

}


/* Current date */

function getToday() {

    const date = new Date();

    return date.toISOString()
        .split("T")[0];

}