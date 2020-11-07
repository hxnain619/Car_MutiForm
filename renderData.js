let Questions = []
let ANSWERS = []
let form = document.getElementById('msform');
let field = document.getElementsByTagName('fieldset');
let opt_elem = document.getElementsByClassName('options');
let alert = document.getElementById('message');
let close = document.getElementsByClassName('fa-close')[0];
let progressBar = document.getElementsByClassName('progress-bar')[0];
let main = document.getElementsByClassName('main')[0];


window.addEventListener('load', () => {
    loadQuestion();
    RenderQuestion();

    $(document).ready(function() {
        $(":input[data-inputmask-mask]").inputmask();
        $(":input[data-inputmask-alias]").inputmask();
        $(":input[data-inputmask-regex]").inputmask("Regex");
    });
})

const loadQuestion = () => {
    form.innerHTML = ' ';
    Questions = []
    DATA.question.map(queries => {
        Questions.push(queries);
    })
    if (Questions.length > 0) {
        progressBar.style.width = '0%';
        progressBar.setAttribute('aria-valuemax', Questions.length * 10);
    }

}

const RenderQuestion = () => {
        Questions.forEach((Data, i) => {
                    if (Data.type == 'option') {
                        let opt = Data.options.map((option, index) => {
                                    return (`<div class="col col-sm-12 col-lg-${Data.options.length !== 3 ? '6' : '4'} options" data-type="2" id="${Data.elem_id}" onclick="SelectedAnswer(event)" data-index="${Data.id}" data-name="${option.title}" data-icon="${option.icon}" data-query="${Data.title}">
                     ${option.icon !== undefined ? `<img src=${option.icon} />` : ''}
                     <h2 class="title_head"> ${option.title} </h2>
                 </div>`)

            }).join('')

            form.innerHTML += `<fieldset data-elem="${Data.id}" >
            <h2 class="fs-title"> ${Data.title} </h2>
            <h3 class="fs-subtitle"> ${Data.desc} </h3>
            <div class="row">
                 ${opt}
            </div>
            ${Data.first ? '<input type="button" name="next" class="next action-button" value="Next" />' : 
            '<input type="button" name="previous" class="previous action-button" value="previous"> <input type="button" name="next" class="next action-button" value="Next" />'}
            </fieldset >`
        } else
        if (Data.type == "number") {

            form.innerHTML += `<fieldset data-elem="${Data.id}">
            <h2 class="fs-title"> ${Data.title} </h2>
            <h3 class="fs-subtitle"> ${Data.desc} </h3>
            <div class="row">
            <div class="input-parent" >
                <div class="input-container">
                    <p class="price_tag">$</p>
                    <label>Annual Salary</label>
                    <input type="number" min="10" max="99999" id="a_salary"  data-type="4" data-index="${Data.id}"  data-query="${Data.title}" onchange="SelectedFormAnswer(event)"/>
                    <span>Round To Nearest Dollar</span>
                </div>
            </div>
            </div>
            <input type="button" name="previous" class="previous action-button" value="Previous">
            <input type="button" name="next" class="next action-button" value="Next" />
            </fieldset >`

        } else if (Data.type == 'm&y') {
            form.innerHTML += `<fieldset data-elem="${Data.id}">
            <h2 class="fs-title"> ${Data.title} </h2>
            <h3 class="fs-subtitle"> ${Data.desc} </h3>
            <div class="input-parent row" >
                <div class="col col-sm-12 col-md-6 col-lg-6" >
                    <div class="date-container row" >
                        <div class="col col-sm-6 col-md-6 col-lg-6" >
                            <input type="number" id="year" data-index="${Data.id}" data-type="5"  data-query="${Data.title}" onchange="SelectedFormAnswer(event)" />
                        </div>
                        <div class="col col-sm-6 col-md-6 col-lg-6" >
                            <span>Years</span>
                        </div>
                    </div>
                </div>
                <div class="col col-sm-12 col-md-6 col-lg-6 last_parent" >
                    <div class="date-container row" >
                        <div class="col col-sm-6 col-md-6 col-lg-6" >
                            <input type="number" id="month" data-index="${Data.id}" data-type="5"  data-query="${Data.title}" onchange="SelectedFormAnswer(event)"/>
                        </div>
                        <div class="col col-sm-6 col-md-6 col-lg-6" >
                            <span>Months</span>
                        </div>
                    </div>
                </div>
            </div>
            <input type="button" name="previous" class="previous action-button" value="Previous">
            <input type="button" name="next" class="next action-button" value="Next" />
            </fieldset >`
        } else if (Data.type == 'm&y2') {
            form.innerHTML += `<fieldset data-elem="${Data.id}">
            <h2 class="fs-title"> ${Data.title} </h2>
            <h3 class="fs-subtitle"> ${Data.desc} </h3>
            <div class="input-parent row" >
                <div class="col col-sm-12 col-md-6 col-lg-6" >
                    <div class="date-container row" >
                        <div class="col col-sm-6 col-md-6 col-lg-6" >
                            <input type="number" id="year2" data-index="${Data.id}" data-type="5"  data-query="${Data.title}" onchange="SelectedFormAnswer(event)" />
                        </div>
                        <div class="col col-sm-6 col-md-6 col-lg-6" >
                            <span>Years</span>
                        </div>
                    </div>
                </div>
                <div class="col col-sm-12 col-md-6 col-lg-6 last_parent" >
                    <div class="date-container row" >
                        <div class="col col-sm-6 col-md-6 col-lg-6" >
                            <input type="number" id="month2" data-index="${Data.id}" data-type="5"  data-query="${Data.title}" onchange="SelectedFormAnswer(event)"/>
                        </div>
                        <div class="col col-sm-6 col-md-6 col-lg-6" >
                            <span>Months</span>
                        </div>
                    </div>
                </div>
            </div>
            <input type="button" name="previous" class="previous action-button" value="Previous">
            <input type="button" name="next" class="next action-button" value="Next" />
            </fieldset >`
        } else if (Data.type == 'text') {
            form.innerHTML += `<fieldset data-elem="${Data.id}">
            <h2 class="fs-title"> ${Data.title} </h2>
            <h3 class="fs-subtitle"> ${Data.desc} </h3>
            <div class="input-parent row" >
                <div class="col col-sm-12 col-md-6 col-lg-6" >
                        <input type="text" placeholder="Company Name" id="company" data-type="3" data-index="${Data.id}"  data-query="${Data.title}" onchange="SelectedFormAnswer(event)" />
                </div>
                <div class="col col-sm-12 col-md-6 col-lg-6 last_parent" >
                        <input type="text" placeholder="Job Title" id="job" data-type="3" data-index="${Data.id}"  data-query="${Data.title}" onchange="SelectedFormAnswer(event)" />
                </div>
            </div>
            <input type="button" name="previous" class="previous action-button" value="Previous">
            <input type="button" name="next" class="next action-button" value="Next" />
            </fieldset >`
        } else if (Data.type == "address") {
            form.innerHTML += `<fieldset data-elem="${Data.id}">
            <h2 class="fs-title"> ${Data.title} </h2>
            <h3 class="fs-subtitle"> ${Data.desc} </h3>
            <div class="input-parent" >
                <input type="text" placeholder="My Home Address" id="address" data-type="2" data-index="${Data.id}"  data-query="${Data.title}" onchange="SelectedFormAnswer(event)" />
            </div>
            <input type="button" name="previous" class="previous action-button" value="Previous">
            <input type="button" name="next" class="next action-button" value="Next" />
            </fieldset >`
        } else if (Data.type == "select") {
            form.innerHTML += `<fieldset data-elem="${Data.id}">
            <h2 class="fs-title"> ${Data.title} </h2>
            <h3 class="fs-subtitle"> ${Data.desc} </h3>
            <div class="input-parent row" >
               <div class="col col-sm-12 col-md-6 col-lg-6"  >
               <div class="row" >
                        <div class="col col-sm-6 options"  data-index="0" data-type="4"  data-name="Rent" data-query="${Data.title}" onclick="SelectedAnswer(event)" >
                            <h2 class="title_head"> Rent </h2>
                        </div>
                        <div class="col col-sm-6 options" data-index="0" data-type="4"  data-name="Own"  data-query="${Data.title}" onclick="SelectedAnswer(event)">
                            <h2 class="title_head"> Own </h2>
                        </div>
                </div>           
                </div>     
               <div class="col col-sm-12 col-md-6 col-lg-6" style="padding: 0">
               <div class="input-parent" style="padding: 0">
               <div class="input-container">
                   <p class="price_tag">$</p>
                   <label>Monthly Payment</label>
                   <input type="number" min="10" id="month_pay" max="99999" data-type="5" data-index="${Data.id}"  data-query="${Data.title}" onchange="SelectedFormAnswer(event)"/>
                   <span>Round To Nearest Dollar</span>
               </div>
           </div>
                </div>                
            </div>
            <input type="button" name="previous" class="previous action-button" value="Previous">
            <input type="button" name="next" class="next action-button" value="Next" />
            </fieldset >`
        } else if (Data.type == 'date') {
            form.innerHTML += `<fieldset data-elem="${Data.id}">
            <h2 class="fs-title"> ${Data.title} </h2>
            <h3 class="fs-subtitle"> ${Data.desc} </h3>
            <div class="input-parent row" >
            <div class="input-container">
               <div class="col col-sm-12" style="padding: 0" >
               <label>MM / DD / YYYY </label>
               <input data-inputmask-alias="mm/dd/yyyy"  data-val="true"  id="date" name="DATE" placeholder="mm/dd/yyyy" type="text" 
               data-index="${Data.id}" 
               data-type="3"  data-query="${Data.title}"  onchange="SelectedFormAnswer(event)" value=""/>
               </div>
               </div>
            </div>
            <input type="button" name="previous" class="previous action-button" value="Previous">
            <input type="button" name="next" class="next action-button" value="Next" />
            </fieldset>
            `
        } else if (Data.type == "name") {
            form.innerHTML += `<fieldset data-elem="${Data.id}">
            <h2 class="fs-title"> ${Data.title} </h2>
            <h3 class="fs-subtitle"> ${Data.desc} </h3>
            <div class="input-parent row" >
            <div class="col col-sm-12 col-md-6 col-lg-6"  >
               <label>First Name</label>
               <input type="text" data-index="${Data.id}" id="first" data-type="3"  data-query="${Data.title}"  onchange="SelectedFormAnswer(event)"/>
               </div>   
            <div class="col col-sm-12 col-md-6 col-lg-6"  >
               <label>Last Name</label>
               <input type="text" data-index="${Data.id}" id="last" data-type="3"  data-query="${Data.title}"  onchange="SelectedFormAnswer(event)"/>
               </div>
            </div>
            <input type="button" name="previous" class="previous action-button" value="Previous">
            <input type="button" name="next" class="next action-button" value="Next" />
            </fieldset>
            `
        } else if (Data.type == 'email') {
            form.innerHTML += `<fieldset data-elem="${Data.id}">
            <h2 class="fs-title"> ${Data.title} </h2>
            <h3 class="fs-subtitle"> ${Data.desc} </h3>
            <div class="input-parent row" >
            <div class="col col-sm-12 col-md-6 col-lg-6"  >
               <label>Email</label>
               <input type="email" id="email" placeholder="Email Address" data-index="${Data.id}" data-type="3"  data-query="${Data.title}"  onchange="SelectedFormAnswer(event)"/>
               </div>   
            <div class="col col-sm-12 col-md-6 col-lg-6"  >
               <label>Phone</label>
               <input data-inputmask-mask="(999)999-9999" data-val="true"  id="phone" name="PHONE" placeholder="Phone Number" type="text" value="" data-index="${Data.id}" data-type="3"  data-query="${Data.title}"  onchange="SelectedFormAnswer(event)"/>
               </div>
            </div>
            <input type="button" name="submit" class="submit action-button" id="submit" value="Submit" />
            </fieldset>
            `
        }
    })
    if (document.getElementsByTagName('input').length > 2) {
        AssignFunc()
    }
}

const CheckAndMarkSelected = (inc) => {
    let elem = document.getElementsByClassName('options');

    for (let i = 0; i < elem.length; i++) {
        ANSWERS.forEach(answer => {
            if (answer.title === elem[i].getAttribute('data-name') && answer.index == elem[i].getAttribute('data-index') && !elem[i].classList.contains('selected')) {
                elem[i].classList.add('selected');
            }
            if (elem[i].classList.contains('selected') && answer.title !== elem[i].getAttribute('data-name') && answer.index == elem[i].getAttribute('data-index')) {
                elem[i].classList.remove('selected');
            }
        })
    }
}
let formAnswers = []
const SelectedFormAnswer = (e) => {
    e.preventDefault();
    // let type = e.target.getAttribute('data-type');
    // let query = e.target.getAttribute('data-query');
    // let id = e.target.getAttribute('data-index');
    // let parentID;
    let title = e.target.value;

    // if (type == '2') {
    //     parentID = e.currentTarget.parentElement.parentElement.getAttribute('data-elem');
    // } else if (type == '3') {
    //     parentID = e.currentTarget.parentElement.parentElement.parentElement.getAttribute('data-elem');
    // } else if (type == '4') {
    //     parentID = e.currentTarget.parentElement.parentElement.parentElement.parentElement.getAttribute('data-elem');
    // } else if (type == '5') {
    //     parentID = e.currentTarget.parentElement.parentElement.parentElement.parentElement.getAttribute('data-elem');
    // }
    formAnswers.push({
        title,
    });

}

const SelectedAnswer = (e) => {
    e.preventDefault();

    let type = e.currentTarget.getAttribute('data-type');
    let query = e.currentTarget.getAttribute("data-query");
    let title = e.currentTarget.getAttribute("data-name");
    let id = e.currentTarget.getAttribute("data-index");
    let parentID;

    if (type == '2') {
        parentID = e.currentTarget.parentElement.parentElement.getAttribute('data-elem');
    } else if (type == '3') {
        parentID = e.currentTarget.parentElement.parentElement.parentElement.getAttribute('data-elem');
    } else if (type == '4') {
        parentID = e.currentTarget.parentElement.parentElement.parentElement.parentElement.getAttribute('data-elem');
    } else if (type == '5') {
        parentID = e.currentTarget.parentElement.parentElement.parentElement.parentElement.getAttribute('data-elem');
    }

    AddAnswers(query, title, id, parentID)
    CheckAndMarkSelected()
}

const AddAnswers = (query, name, id, parentID) => {

    let found = ANSWERS.findIndex((answer) => answer.parentID === parentID);

    if (ANSWERS.length !== 0) {
        if (found > -1) {
            ANSWERS[found].title = name;
            ANSWERS[found].index = id;
            ANSWERS[found].question = query;
            ANSWERS[found].parentID = parentID
        } else {
            ANSWERS.push({
                question: query,
                title: name,
                index: id,
                parentID
            });
        }
    } else {
        ANSWERS.push({
            question: query,
            title: name,
            index: id,
            parentID
        });
    }
    console.log(ANSWERS);
}

const SelectedOption = (e => {
    ANSWERS = []
    e.preventDefault();

    let type = e.currentTarget.getAttribute('data-type');
    let query = e.currentTarget.getAttribute("data-query");
    let title = e.currentTarget.getAttribute("data-name");
    let id = e.currentTarget.getAttribute("data-index");

    let parentID;

    if (type === '2') {
        parentID = e.currentTarget.parentElement.parentElement.getAttribute('data-elem');
    } else if (type === '3') {
        parentID = e.currentTarget.parentElement.parentElement.parentElement.getAttribute('data-elem');
    } else if (type === '5') {
        parentID = e.currentTarget.parentElement.parentElement.parentElement.parentElement.getAttribute('data-elem');
    }

    AddAnswers(query, title, id, parentID)
    loadQuestion()
    RenderQuestion()
    CheckAndMarkSelected()
    parentElement.lastElementChild.click()
})

const HIDE_ALERT = () => {
    close.parentElement.style.display = 'none'
}
const Alert = (message, color) => {
    alert.parentElement.style.display = 'block';
    alert.parentElement.style.color = color;
    alert.innerText = message;
    window.setTimeout(() => HIDE_ALERT(), 2000);
}

const ValidateLocation = () => {
    validate = false
    ANSWERS.map(answer => {
        if (answer.question == 'Wo befindet sich Ihre Immobilie?') {
            validate = true
        }
    })
    return validate
}