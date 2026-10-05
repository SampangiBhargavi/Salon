function getAppointments() {

    return JSON.parse(
        localStorage.getItem("appointments")
    ) || [];

}


function isSlotAvailable(date, time, stylist) {

    const appointments =
        getAppointments();

    return !appointments.some(
        appointment =>
            appointment.date === date &&
            appointment.time === time &&
            appointment.stylist === stylist
    );

}


function saveAppointment(appointment) {

    let appointments =
        getAppointments();

    appointments.push(appointment);

    localStorage.setItem(
        "appointments",
        JSON.stringify(appointments)
    );

}


function deleteAppointment(id) {

    let appointments =
        getAppointments();

    appointments =
        appointments.filter(
            appointment =>
                appointment.id !== id
        );

    localStorage.setItem(
        "appointments",
        JSON.stringify(appointments)
    );

}