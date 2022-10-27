"use strict";

$("#swal-1").click(function () {
    swal("Hello");
});

$("#swal-2").click(function () {
    swal("Good Job", "You clicked the button!", "success");
});

$("#swal-3").click(function () {
    swal("Good Job", "You clicked the button!", "warning");
});

$("#swal-4").click(function () {
    swal("Good Job", "You clicked the button!", "info");
});

$("#swal-5").click(function () {
    swal("Good Job", "You clicked the button!", "error");
});

$("#swal-6").click(function () {
    swal({
        title: "Are you sure?",
        text: "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    }).then((willDelete) => {
        if (willDelete) {
            swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
            });
        } else {
            swal("Your imaginary file is safe!");
        }
    });
});

$("#swal-7").click(function () {
    swal({
        title: "How big your dick?",
        content: {
            element: "input",
            attributes: {
                placeholder: "Your dick size",
                type: "number",
            },
        },
    }).then((data) => {
        swal("Your dick is " + data + "!");
    });
});

$("#swal-8").click(function () {
    swal("This modal will disappear soon!", {
        buttons: false,
        timer: 500,
    });
});
