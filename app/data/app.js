$(".submit").on("click", function(event) {
    event.preventDefault();

    var newUser = {
        name: $("#survey-name").val().trim(),
        photo: $("#survey-photo").val().trim();
        scores: $('#survey-scores :selected').text();
    };
});

console.log(newUser);

$.post("/api/surveyData",newUser, function(data) {
    if (data) {
        alert("")
    };
});