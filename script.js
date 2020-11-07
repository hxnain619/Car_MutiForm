var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

function AssignFunc() {

    $('.next').click(NEXT);
    $('.previous').click(PREV)
    $("#submit").click(SUBMIT)
}

function NEXT() {

    CheckAndMarkSelected();
    let index = $(this).parent().data("elem");
    let total = (Questions.length);
    if (ValidateAnswers(index)) {
        let i = index + 1;
        progressBar.style.width = `${(i/total)*100}%`;

        if (animating) return false;
        animating = true;

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        next_fs.show();
        current_fs.animate({
            opacity: 0
        }, {
            step: function(now, mx) {
                scale = 1 - (1 - now) * 0.2;
                left = now * 50 + "%";
                opacity = 1 - now;

                current_fs.css({
                    'transform': 'scale(' + scale + ')',
                    'position': 'absolute'
                });

                next_fs.css({
                    'left': left,
                    'opacity': opacity
                });
            },
            duration: 800,
            complete: function() {
                current_fs.hide();
                animating = false;
            },
            easing: 'easeInOutBack'
        });

    }
}

function PREV() {

    CheckAndMarkSelected();
    let index = $(this).parent().data("elem");
    let total = (Questions.length);
    let i = index - 1;
    progressBar.style.width = `${(i/total)*100}%`;

    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    previous_fs = $(this).parent().prev();

    previous_fs.show();
    current_fs.animate({
        opacity: 0
    }, {
        step: function(now, mx) {
            scale = 0.8 + (1 - now) * 0.2;
            left = (1 - now) * 50 + "%";
            opacity = 1 - now;
            current_fs.css({
                'left': left
            });
            previous_fs.css({
                'transform': 'scale(' + scale + ')',
                'opacity': opacity
            });
        },
        duration: 800,
        complete: function() {
            current_fs.hide();
            animating = false;
        },
        easing: 'easeInOutBack'
    });

};

function SUBMIT() {

    let vehicle = ANSWERS.filter(a => a.parentID == 0 ? a.title : null)[0].title;
    let budget = ANSWERS.filter(a => a.parentID == 1 ? a.title : null)[0].title;
    let trade = ANSWERS.filter(a => a.parentID == 2 ? a.title : null)[0].title;
    let credit_rate = ANSWERS.filter(a => a.parentID == 3 ? a.title : null)[0].title;
    let emp_status = ANSWERS.filter(a => a.parentID == 4 ? a.title : null)[0].title;
    let income_detail = ANSWERS.filter(a => a.parentID == 5 ? a.title : null)[0].title;
    let salary = document.getElementById("a_salary");
    let how_long_m = document.getElementById("month");
    let how_long_y = document.getElementById("year");
    let company = document.getElementById("company");
    let job = document.getElementById("job");
    let address = document.getElementById("address");
    let rent_own = ANSWERS.filter(a => a.parentID == 11 ? a.title : null)[0].title;
    let how_long_add_m = document.getElementById("month2");
    let how_long_add_y = document.getElementById("year2");
    let d_o_b = document.getElementById("date");
    let first = document.getElementById("first");
    let last = document.getElementById("last");
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");

    if (ValidateAnswers(14)) {
        console.log({
            vehicle,
            budget,
            trade,
            credit_rate,
            emp_status,
            income_detail,
            salary: salary.value,
            how_long_m: how_long_m.value,
            how_long_y: how_long_y.value,
            company: company.value,
            job: job.value,
            address: address.value,
            rent_own,
            how_long_add_m: how_long_add_m.value,
            how_long_add_y: how_long_add_y.value,
            d_o_b: d_o_b.value,
            first: first.value,
            last: last.value,
            email: email.value,
            phone: phone.value,
        });
    }
};