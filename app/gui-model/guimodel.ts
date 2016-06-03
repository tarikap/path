export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "Assessment Tool",
            "formList": [
                {
                    "id": "projectform",
                    "title": "Project Details",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Project"
                        },
                        {
                            "type": "date",
                            "name": "Start Date"
                        },
                        {
                            "type": "date",
                            "name": "End Date"
                        },
                        {
                            "type": "autocomplete",
                            "name": "Customer PL",
                            "actions": [{"type": "new", "name": "New..."}],
                            "data": ["Marianne Johnson", "Abraham Griffin", "Lisa Silva", "Dean Mccormick", "Meghan Dunn", "Roy Steele", "Pete Nguyen", "Henrietta Holmes", "Rodolfo Murray", "Brenda Parsons", "Helen Cunningham", "Alexander Barber", "Rochelle Sharp", "Edward Phelps", "Ralph Cooper", "Drew Stevens", "Ricardo Wong", "Dale Parker", "Scott Matthews", "Claudia Bowman", "Geoffrey Lambert", "Naomi Garner", "Steve Hayes", "Brendan Johnston", "Tasha Mills"]
                        },
                        {
                            "type": "autocomplete",
                            "name": "Deloitte PL",
                            "actions": [{"type": "new", "name": "New..."}],
                            "data": ["Marianne Johnson", "Abraham Griffin", "Lisa Silva", "Dean Mccormick", "Meghan Dunn", "Roy Steele", "Pete Nguyen", "Henrietta Holmes", "Rodolfo Murray", "Brenda Parsons", "Helen Cunningham", "Alexander Barber", "Rochelle Sharp", "Edward Phelps", "Ralph Cooper", "Drew Stevens", "Ricardo Wong", "Dale Parker", "Scott Matthews", "Claudia Bowman", "Geoffrey Lambert", "Naomi Garner", "Steve Hayes", "Brendan Johnston", "Tasha Mills"]
                        },
                        {
                            "type": "autocomplete",
                            "name": "Industry Segment",
                            "data": ["Oil& Gas", "Basic Materials", "Industrials", "Consumer Services", "Consumer Goods", "Health Care", "Financials", "Technology", "Telecommunications", "Utilities"]
                        },
                        {
                            "type": "radiogroup",
                            "name": "Benchmarking",
                            "radios": [{
                                type: "radio",
                                name: "Yes"
                            }, {
                                type: "radio",
                                name: "No"
                            }
                            ]
                        },
                        {
                            "type": "radiogroup",
                            "name": "Monitoring (over Time)",
                            "radios": [{
                                type: "radio",
                                name: "Yes"
                            }, {
                                type: "radio",
                                name: "No"
                            }
                            ]
                        },
                        {
                            "type": "text",
                            "name": "Comments",
                            "height": 8
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "customerform",
                    "title": "Customer Details",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Company Name"
                        },
                        {
                            "type": "text",
                            "name": "Street"
                        },
                        {
                            "type": "text",
                            "name": "Postal Code"
                        },
                        {
                            "type": "text",
                            "name": "City"
                        },
                        {
                            "type": "text",
                            "name": "Comments",
                            "height": 8
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "personform",
                    "title": "Person Details",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Salutation"
                        },
                        {
                            "type": "text",
                            "name": "Family Name"
                        },
                        {
                            "type": "text",
                            "name": "First Name"
                        },
                        {
                            "type": "text",
                            "name": "Employment Title"
                        },
                        {
                            "type": "autocomplete",
                            "name": "Company",
                            "actions": [{"type": "new", "name": "New..."}],
                            "data": [ "Alpha Hospital", "Blue Hospital", "Charisma Hospital" ]
                        },
                        {
                            "type": "text",
                            "name": "Postal Code"
                        },
                        {
                            "type": "text",
                            "name": "City"
                        },
                        {
                            "type": "text",
                            "name": "Comments",
                            "height": 8
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "projectintervieweeform",
                    "title": "Add Interviewee to Project",
                    "formFieldList": [
                        {
                            "type": "autocomplete",
                            "name": "Person",
                            "actions": [{"type": "new", "name": "New..."}],
                            "data": [ "Frau Dr. Müller", "Herr Dr. Lisib", "Frau Dr. Last"]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "projectcategoryform",
                    "title": "Add Category to Project",
                    "formFieldList": [
                        {
                            "type": "autocomplete",
                            "name": "Category",
                            "actions": [{"type": "new", "name": "New..."}],
                            "data": [ "Category B1", "Category B2", "Category B3", "Category B4", "Category B5", "Category B6"]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "categoryform",
                    "title": "Category",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Category Name"
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "questionform",
                    "title": "Question",
                    "formFieldList": [
                        {
                            "type": "text",
                            "name": "Capability Question",
                            "height": 8
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                }
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "title": "Main Menu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "QuickScan",
                            "icon": "fa-fast-forward",
                            "color": "alizarin",
                            "page": "quickscanspage"
                        },
                        {
                            "type": "button",
                            "name": "DeepScan",
                            "icon": "fa-chevron-down",
                            "color": "wet-asphalt",
                            "page": "deepscanspage",
                        },
                        {
                            "type": "button",
                            "name": "Customers",
                            "icon": "fa-home",
                            "color": "purple",
                            "page": "customerspage",
                        },
                        {
                            "type": "button",
                            "name": "Persons",
                            "icon": "fa-user",
                            "color": "orange",
                            "page": "personspage",
                        },
                        {
                            "type": "button",
                            "name": "Reports",
                            "icon": "fa-file",
                            "color": "blue",
                        },
                        {
                            "type": "button",
                            "name": "Admin",
                            "icon": "fa-gear",
                            "color": "concrete",
                            "page": "adminpage"
                        }
                    ]
                },
                {
                    "id": "quickscanspage",
                    "title": "QuickScan",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "New",
                            "icon": "fa-fast-forward",
                            "color": "green",
                            "form": "projectform",
                        },
                        {
                            "type": "list",
                            "name": "QuickScans List",
                            "icon": "fa-fast-forward",
                            "color": "alizarin",
                            "page": "quickscanpage",
                            "data": [ {"name":"QuickScan One"}, {"name":"QuickScan Two"}, {"name":"QuickScan Three"}, {"name":"QuickScan Four"}, {"name":"QuickScan Five"}, {"name":"QuickScan Six"}]
                        }
                    ]
                },
                {
                    "id": "quickscanpage",
                    "title": "Interviewees",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Edit QuickScan",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": "projectform",
                        },
                        {
                            "type": "button",
                            "name": "Categories",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "page": "quickscancategoriespage"
                        },
                        {
                            "type": "button",
                            "name": "Interviewees",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "quickscanintervieweespage"
                        },
                        {
                            "type": "button",
                            "name": "Remove",
                            "icon": "fa-remove",
                            "color": "red",
                            "page": "quickscanspage"
                        }
                    ]
                },
                {
                    "id": "quickscanintervieweespage",
                    "title": "Interviewees",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Add Interviewee",
                            "icon": "fa-user",
                            "color": "green",
                            "form": "projectintervieweeform",
                        },
                        {
                            "type": "list",
                            "name": "Interviewee List",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "quickscanintervieweecategoriespage",
                            "data": [ {"name":"Frau Dr. Müller"}, {"name":"Herr Dr. Lisib"}, {"name":"Frau Dr. Last"}, {"name":"Frau Dr. Gesund"}]
                        }
                    ]
                },
                {
                    "id": "quickscancategoriespage",
                    "title": "Categories",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Add Category",
                            "icon": "fa-cube",
                            "color": "green",
                            "form": "projectcategoryform"
                        },
                        {
                            "type": "list",
                            "name": "Categories",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "form": "projectcategoryform",
                            "data": [ {"name":"Category B1"}, {"name":"Category B2"}, {"name":"Category B3"}, {"name":"Category B4"}, {"name":"Category B5"}, {"name":"Category B6"}, {"name":"Category B7"}, {"name":"Category B8"}, {"name":"Category B9"}, {"name":"Category B10"}]
                        }
                    ]
                },
                {
                    "id": "quickscanintervieweecategoriespage",
                    "title": "Interviewee Categories",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "name": "Categories",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "page": "categoryquestionspage",
                            "data": [ {"name":"Category B1"}, {"name":"Category B2"}, {"name":"Category B3"}, {"name":"Category B4"}, {"name":"Category B5"}, {"name":"Category B6"}, {"name":"Category B7"}, {"name":"Category B8"}, {"name":"Category B9"}, {"name":"Category B10"}]
                        },
                        {
                            "type": "button",
                            "name": "Remove",
                            "icon": "fa-remove",
                            "color": "red",
                            "page": "quickscanspage"
                        }
                    ]
                },
                {
                    "id": "categoryquestionspage",
                    "title": "Questions",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "TODO - Questions",
                            "icon": "fa-cube",
                            "color": "asbestos",
                        },
                        {
                            "type": "button",
                            "name": "Next",
                            "icon": "fa-forward",
                            "color": "silver",
                            "page": "categoryquestionspage",
                        }
                    ]
                },
                {
                    "id": "deepscanspage",
                    "title": "DeepScan",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "New",
                            "icon": "fa-fast-forward",
                            "color": "green",
                            "form": "projectform",
                        },
                        {
                            "type": "list",
                            "name": "DeepScans List",
                            "icon": "fa-chevron-down",
                            "color": "wet-asphalt",
                            "page": "deepscanpage",
                            "data": [ {"name":"DeepScan One"}, {"name":"DeepScan Two"}, {"name":"DeepScan Three"}, {"name":"DeepScan Four"}, {"name":"DeepScan Five"}, {"name":"DeepScan Six"}]
                        }
                    ]
                },
                {
                    "id": "deepscanpage",
                    "title": "Interviewees",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Edit DeepScan",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": "projectform",
                        },
                        {
                            "type": "button",
                            "name": "Processes",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "page": "deepscanprocessespage"
                        },
                        {
                            "type": "button",
                            "name": "Interviewees",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "deepscanintervieweespage"
                        },
                        {
                            "type": "button",
                            "name": "Delete",
                            "icon": "fa-remove",
                            "color": "red",
                            "page": "deepscanspage"
                        }
                    ]
                },
                {
                    "id": "deepscanintervieweespage",
                    "title": "Interviewees",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Add Interviewee",
                            "icon": "fa-user",
                            "color": "green",
                            "form": "projectintervieweeform",
                        },
                        {
                            "type": "list",
                            "name": "Interviewee List",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "deepscanintervieweeprocessespage",
                            "data": [ {"name":"Frau Dr. Müller"}, {"name":"Herr Dr. Lisib"}, {"name":"Frau Dr. Last"}, {"name":"Frau Dr. Gesund"}]
                        }
                    ]
                },
                {
                    "id": "deepscanprocessespage",
                    "title": "Processes",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Add Process",
                            "icon": "fa-cube",
                            "color": "green",
                            "form": "projectprocessform"
                        },
                        {
                            "type": "list",
                            "name": "Processes",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "form": "projectprocessform",
                            "data": [ {"name":"Process S1"}, {"name":"Process S2"}, {"name":"Process S3"}, {"name":"Process S4"}, {"name":"Process S5"}, {"name":"Process S6"}, {"name":"Process S7"}, {"name":"Process S8"}, {"name":"Process S10"}, {"name":"Process S11"}]
                        }
                    ]
                },
                {
                    "id": "deepscanintervieweeprocessespage",
                    "title": "Interviewee Processes",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "list",
                            "name": "Processes",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "page": "processquestionspage",
                            "data": [ {"name":"Process S1"}, {"name":"Process S2"}, {"name":"Process S3"}, {"name":"Process S4"}, {"name":"Process S5"}, {"name":"Process S6"}, {"name":"Process S7"}, {"name":"Process S8"}, {"name":"Process S10"}, {"name":"Process S11"}]
                        },
                        {
                            "type": "button",
                            "name": "Delete",
                            "icon": "fa-remove",
                            "color": "red",
                            "page": "deepscanspage"
                        }
                    ]
                },
                {
                    "id": "processquestionspage",
                    "title": "Questions",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "TODO - Questions",
                            "icon": "fa-cube",
                            "color": "asbestos",
                        },
                        {
                            "type": "button",
                            "name": "Next",
                            "icon": "fa-forward",
                            "color": "silver",
                            "page": "processquestionspage",
                        }
                    ]
                },
                {
                    "id": "customerspage",
                    "title": "Customers",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "New Customer",
                            "icon": "fa-home",
                            "color": "green",
                            "form": "customerform",
                        },
                        {
                            "type": "list",
                            "name": "Customer List",
                            "icon": "fa-home",
                            "color": "purple",
                            "page": "customerpersonspage",
                            "data": [ {"name":"Alpha Hospital"}, {"name":"Blue Hospital"}, {"name":"Charisma Hospital"}]
                        }
                    ]
                },
                {
                    "id": "personspage",
                    "title": "Persons",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "New Person",
                            "icon": "fa-user",
                            "color": "green",
                            "form": "personform",
                        },
                        {
                            "type": "list",
                            "name": "Person List",
                            "icon": "fa-user",
                            "color": "orange",
                            "form": "personform",
                            "data": [ {"name":"Frau Dr. Müller"}, {"name":"Herr Dr. Lisib"}, {"name":"Frau Dr. Held"}, {"name":"Frau Dr. Gesund"}, {"name":"Frau Dr. Krank"}]
                        }
                    ]
                },
                {
                    "id": "customerpersonspage",
                    "title": "Customer - Persons",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Edit Customer",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": "customerform",
                        },
                        {
                            "type": "button",
                            "name": "New Person",
                            "icon": "fa-user",
                            "color": "green",
                            "form": "personform",
                        },
                        {
                            "type": "list",
                            "name": "Person List",
                            "icon": "fa-user",
                            "color": "orange",
                            "form": "personform",
                            "data": [ {"name":"Frau Dr. Müller"}, {"name":"Herr Dr. Lisib"}]
                        }
                    ]
                },
                {
                    "id": "adminpage",
                    "title": "Administration",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Users",
                            "icon": "fa-user",
                            "color": "alizarin",
                            "page": "userspage"
                        },
                        {
                            "type": "button",
                            "name": "Configuration",
                            "icon": "fa-gear",
                            "color": "wet-asphalt",
                            "page": "configurationpage",
                        }
                    ]
                },
                {
                    "id": "userspage",
                    "title": "User",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "New User",
                            "icon": "fa-user",
                            "color": "green",
                            "form": "personform",
                        },
                        {
                            "type": "list",
                            "name": "User List",
                            "icon": "fa-user",
                            "color": "orange",
                            "form": "personform",
                            "data": [ {"name":"Anton Amacker"}, {"name":"Beate Burkhardt"}, {"name":"Chris Connor"}, {"name":"Doris Dempster"}, {"name":"Edgar Evans"}]
                        }
                    ]
                },
                {
                    "id": "configurationpage",
                    "title": "Configuration",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "QuickScan Categories",
                            "icon": "fa-fast-forward",
                            "color": "alizarin",
                            "page": "quickscancategoriesconfigurationpage"
                        },
                        {
                            "type": "button",
                            "name": "DeepScan Processes & KPIs",
                            "icon": "fa-chevron-down",
                            "color": "wet-asphalt",
                        },
                        {
                            "type": "button",
                            "name": "Reports and Handbooks",
                            "icon": "fa-file",
                            "color": "wisteria",
                        }
                    ]
                },
                {
                    "id": "quickscancategoriesconfigurationpage",
                    "title": "Categories",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "New Category",
                            "icon": "fa-cube",
                            "color": "green",
                            "form": "categoryform"
                        },
                        {
                            "type": "list",
                            "name": "Categories",
                            "icon": "fa-cube",
                            "color": "asbestos",
                            "page": "quickscancategoryconfigurationpage",
                            "data": [ {"name":"Category B1"}, {"name":"Category B2"}, {"name":"Category B3"}, {"name":"Category B4"}, {"name":"Category B5"}, {"name":"Category B6"}, {"name":"Category B7"}, {"name":"Category B8"}, {"name":"Category B9"}, {"name":"Category B10"}]
                        }
                    ]
                },
                {
                    "id": "quickscancategoryconfigurationpage",
                    "title": "Category",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Edit Category",
                            "icon": "fa-arrows-alt",
                            "color": "green",
                            "form": "categoryform"
                        },
                        {
                            "type": "button",
                            "name": "New Question",
                            "icon": "fa-question",
                            "color": "green",
                            "form": "questionform"
                        },
                        {
                            "type": "list",
                            "name": "Questions",
                            "icon": "fa-question",
                            "color": "lime",
                            "form": "questionform",
                            "data": [ {"name":"Question 1"}, {"name":"Question 2"}, {"name":"Question 3"}, {"name":"Question 4"}, {"name":"Question 5"}, {"name":"Question 6"}, {"name":"Question 7"}, {"name":"Question 8"}, {"name":"Question 9"}, {"name":"Question 10"}]
                        },
                        {
                            "type": "button",
                            "name": "Remove",
                            "icon": "fa-remove",
                            "color": "red"
                        }
                    ]
                }
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}