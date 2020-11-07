let DATA = {
    "question": [{
            id: 0,
            first: true,
            title: "What type of vehicle do you want?",
            desc: "",
            type: "option",
            elem_id: "1",
            options: [{
                    id: 0,
                    title: "Car",
                    icon: "./Images/car.jpg",
                },
                {
                    id: 1,
                    title: "Truck",
                    icon: "./Images/truck.jpg",
                    type: 'option',
                },
                {
                    id: 2,
                    title: "SUV",
                    icon: "./Images/suv.jpg",
                    type: 'option',
                },
                {
                    id: 3,
                    title: "Van",
                    icon: "./Images/van.jpg",
                    type: 'option',
                }
            ]
        },
        {
            id: 1,
            title: "what is your budget?",
            desc: "",
            type: "option",
            elem_id: "2",
            options: [{
                    id: 0,
                    title: "under$250/month",
                },
                {
                    id: 1,
                    title: "$250-374/month",
                },
                {
                    id: 2,
                    title: "375-500/month",
                },
                {
                    id: 3,
                    title: "over $500/month",
                }
            ]
        },
        {
            id: 2,
            title: "Do you have a trade in?",
            desc: "",
            type: "option",
            elem_id: "3",
            options: [{
                    id: 0,
                    title: "yes",
                },
                {
                    id: 1,
                    title: "no",
                },
                {
                    id: 2,
                    title: "unsure",
                }
            ]
        },
        {
            id: 3,
            title: "What is your estimated credit rating?",
            desc: "",
            type: "option",
            elem_id: "4",
            options: [{
                    id: 0,
                    title: "Good (over 650)",
                },
                {
                    id: 1,
                    title: "Fair (550-650)",
                },
                {
                    id: 2,
                    title: "Poor (under-550)",
                },
                {
                    id: 3,
                    title: "Crunnet bankurptcy",
                },
                {
                    id: 4,
                    title: "No credit/Unsure",
                }
            ]
        },
        {
            id: 4,
            title: "What is your employment status?",
            desc: "",
            type: "option",
            elem_id: "5",
            options: [{
                    id: 0,
                    title: "Employed",
                },
                {
                    id: 1,
                    title: "Self-employed",
                },
                {
                    id: 2,
                    title: "Student",
                },
                {
                    id: 3,
                    title: "Retired/Pension",
                },
                {
                    id: 4,
                    title: "Other",
                }
            ]
        },
        {
            id: 5,
            title: "Income details please select one:",
            desc: "",
            type: "option",
            elem_id: "6",
            options: [{
                    id: 0,
                    title: "I know my anuual salary",
                },
                {
                    id: 1,
                    title: "I know my hourly wage",
                },
                {
                    id: 2,
                    title: "I know my monthly income",
                },
                {
                    id: 3,
                    title: "Other",
                }
            ]
        },

        {
            id: 6,
            title: "What is your annual salary?",
            desc: "Before taxes and deductions",
            type: "number",
            elem_id: "a_salary"
        },
        {
            id: 7,
            title: "How long have you been receiving this income?",
            desc: "",
            type: "m&y"
        },
        {
            id: 8,
            title: "Where do you work?",
            desc: "",
            type: "text"
        },
        {
            id: 9,
            title: "Where you looking for a vehicle?",
            desc: "",
            type: "address"
        },
        {
            id: 10,
            title: "How long have you lived at your current address?",
            desc: "",
            type: "m&y2"
        },
        {
            id: 11,
            title: "Do you rent or own your home?",
            desc: "",
            type: "select",
            elem_id: "rent"
        },
        {
            id: 12,
            title: "What is your date of birth?",
            desc: "",
            type: "date",
        },
        {
            id: 13,
            title: "Almost done What is your Name?",
            desc: "",
            type: "name",
        },
        {
            id: 14,
            title: "Create Your Account",
            desc: "",
            type: "email",
        }

    ]
}