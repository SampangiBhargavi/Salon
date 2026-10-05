function joinMembership(plan) {

    localStorage.setItem(
        "selectedMembership",
        plan
    );

    alert(
        "You selected " +
        plan +
        " membership."
    );

    window.location.href =
        "login.html";

}


function getMembership() {

    return localStorage.getItem(
        "selectedMembership"
    );

}
