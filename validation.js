const ValidateAnswers = (index) => {
    let validate = true;
    let elem = document.getElementsByTagName("input");

    for (let i = 0; i < elem.length; i++) {
        let elem_index = index;

        if (elem_index == 0 && ANSWERS.length !== 1) {
            validate = false;
            Alert("Please select atleast one");
        } else
        if (elem_index == 1 && ANSWERS.length !== 2) {
            validate = false;
            Alert("Please select atleast one");
        } else
        if (elem_index == 2 && ANSWERS.length !== 3) {
            validate = false;
            Alert("Please select atleast one");
        } else
        if (elem_index == 3 && ANSWERS.length !== 4) {
            validate = false;
            Alert("Please select atleast one");
        } else
        if (elem_index == 4 && ANSWERS.length !== 5) {
            validate = false;
            Alert("Please select atleast one");
        } else
        if (elem_index == 5 && ANSWERS.length !== 6) {
            validate = false;
            Alert("Please select atleast one");
        } else
        if (elem_index == 6 && (elem[i].getAttribute("id") == 'a_salary')) {
            if (elem[i].value.length == 0) {
                validate = false;
                elem[i].classList.add("error");
                Alert("Please fill the field");
            } else {
                elem[i].classList.remove("error")
            }
        } else
        if (elem_index == 13 && ((elem[i].getAttribute("id") == 'first') || (elem[i].getAttribute("id") == 'last'))) {
            if (elem[i].value.length == 0) {
                validate = false;
                elem[i].classList.add("error");
                Alert("Please fill the field");
            } else {
                elem[i].classList.remove("error")
            }
        } else
        if (elem_index == 11 && (elem[i].getAttribute("id") == 'month_pay')) {
            if (elem[i].value.length == 0) {
                validate = false;
                elem[i].classList.add("error");
                Alert("Please fill the field");
            } else {
                if (elem_index == 11 && ANSWERS.filter(a => a.parentID == 11).length == 0) {
                    validate = false;
                    elem[i].classList.add("error");
                    Alert("Please select one of them");
                } else {
                    elem[i].classList.remove("error")
                }
            }
        } else if (elem_index == 7 && ((elem[i].getAttribute("id") == 'year') || (elem[i].getAttribute("id") == 'month'))) {
            if (elem[i].value.length !== 0) {
                if (elem[i].getAttribute("id") == 'year') {
                    if (elem[i].value > 99) {
                        elem[i].parentElement.parentElement.classList.add("error")
                        Alert("Years can't exceed 99");
                        validate = false;
                    } else if (elem[i].value.length == 0) {
                        elem[i].parentElement.parentElement.classList.add("error")
                        Alert("Years can't be empty");
                        validate = false;
                    } else if (elem[i].value <= 99 && elem[i].value > 0) {
                        elem[i].parentElement.parentElement.classList.remove("error")
                    } else {
                        elem[i].parentElement.parentElement.classList.add("error")
                        Alert("Years must be greater than 0");
                        validate = false;
                    }
                } else if (elem[i].getAttribute("id") == 'month') {
                    if (elem[i].value > 11) {
                        elem[i].parentElement.parentElement.classList.add("error")
                        Alert("Months can't exceed 11");
                        validate = false;
                    } else if (elem[i].value.length == 0) {
                        elem[i].parentElement.parentElement.classList.add("error")
                        Alert("Months can't be empty");
                        validate = false;
                    } else if (elem[i].value <= 11 && elem[i].value > 0) {
                        elem[i].parentElement.parentElement.classList.remove("error")
                    } else {
                        elem[i].parentElement.parentElement.classList.add("error")
                        Alert("Months must be greater than 0");
                        validate = false;
                    }
                }
            } else {
                elem[i].parentElement.parentElement.classList.add("error")
                Alert("Fields can't be empty");
                validate = false;
            }
        } else if (elem_index == 10 && ((elem[i].getAttribute("id") == 'year2') || (elem[i].getAttribute("id") == 'month2'))) {
            if (elem[i].value.length !== 0) {
                if (elem[i].getAttribute("id") == 'year2') {
                    if (elem[i].value > 99) {
                        elem[i].parentElement.parentElement.classList.add("error")
                        Alert("Years can't exceed 99");
                        validate = false;
                    } else if (elem[i].value.length == 0) {
                        elem[i].parentElement.parentElement.classList.add("error")
                        Alert("Years can't be empty");
                        validate = false;
                    } else if (elem[i].value <= 99 && elem[i].value > 0) {
                        elem[i].parentElement.parentElement.classList.remove("error")
                    } else {
                        elem[i].parentElement.parentElement.classList.add("error")
                        Alert("Years must be greater than 0");
                        validate = false;
                    }
                } else if (elem[i].getAttribute("id") == 'month2') {
                    if (elem[i].value > 11) {
                        elem[i].parentElement.parentElement.classList.add("error")
                        Alert("Months can't exceed 11");
                        validate = false;
                    } else if (elem[i].value.length == 0) {
                        elem[i].parentElement.parentElement.classList.add("error")
                        Alert("Months can't be empty");
                        validate = false;
                    } else if (elem[i].value <= 11 && elem[i].value > 0) {
                        elem[i].parentElement.parentElement.classList.remove("error")
                    } else {
                        elem[i].parentElement.parentElement.classList.add("error")
                        Alert("Months must be greater than 0");
                        validate = false;
                    }
                }
            } else {
                elem[i].parentElement.parentElement.classList.add("error")
                Alert("Fields can't be empty");
                validate = false;
            }
        } else if (elem_index == 8 && ((elem[i].getAttribute("id") == 'company') || (elem[i].getAttribute("id") == 'job'))) {
            if (elem[i].value.length !== 0) {
                elem[i].classList.remove("error")
            } else {
                elem[i].classList.add("error")
                Alert("Fields can't be empty");
                validate = false;
            }
        } else if (elem_index == 9 && elem[i].getAttribute("id") == 'address') {
            if (elem[i].value.length !== 0) {
                elem[i].classList.remove("error")
            } else {
                elem[i].classList.add("error")
                Alert("Fields can't be empty");
                validate = false;
            }
        } else if (elem_index == 12 && elem[i].getAttribute("id") == 'date') {
            // Date validation
            let d = (new Date().getFullYear() - new Date(elem[i].value).getFullYear());
            if (elem[i].value !== '') {
                if (new Date(elem[i].value).getTime() < new Date().getTime()) {
                    if (d > 18 && d < 99) {
                        elem[i].classList.remove("error")
                    } else {
                        elem[i].classList.add("error")
                        Alert("Must be between 18 and 99 years old");
                        validate = false;
                    }
                } else if (new Date(elem[i].value).getTime() > new Date().getTime()) {
                    elem[i].classList.add("error")
                    Alert("Date is not correct");
                    validate = false;
                }
            } else if (elem[i].value == '') {
                elem[i].classList.add("error")
                Alert("Fields can't be empty");
                validate = false;
            }
        } else if ((elem_index == 14) && ((elem[i].getAttribute("id") == 'email') || (elem[i].getAttribute("id") == 'phone'))) {
            // email and phone validation
            if (elem[i].value.length !== 0) {
                if (elem[i].getAttribute("id") == 'email') {
                    if (elem[i].value.includes("@") && elem[i].value.includes(".")) {
                        elem[i].classList.remove("error")
                    } else {
                        elem[i].classList.add("error")
                        Alert("Email is not correct");
                        validate = false;
                    }
                } else if (elem[i].getAttribute("id") == "phone") {
                    if (elem[i].value.length !== 0) {
                        elem[i].classList.remove("error")
                    } else {
                        elem[i].classList.add("error")
                        Alert("Email is not correct");
                        validate = false;
                    }
                }
            } else {
                elem[i].classList.add("error")
                Alert("Fields can't be empty");
                validate = false;
            }
        }
    }
    return validate;
}