import * as path from './path';
import * as autocomplete from './form/field/auto-complete/auto-complete.component';

export abstract class PathAppComponent implements path.IPathApp {

    private _pageStack:path.Page[] = [];
    private _formStack:path.Form[] = [];

    protected abstract getGuiModel();
    protected abstract getBeans();
    protected abstract getHandlers();

    public getPageStack():path.Page[] {
        return this._pageStack;
    }

    public getFormStack():path.Form[] {
        return this._formStack;
    }

    // TODO move ok and cancel to button object
    public doOk() {
        this._formStack = [];
    }

    public doCancel() {
        this._formStack = [];
    }

    public onKey(event) {
        if (event.keyCode == 27) {
            this.doCancel();
        }
    }

    public getCurrentPage() {
        return this._pageStack[this._pageStack.length - 1];
    }

    public navigateBack() {
        this._pageStack.pop();
    }

    public goToPage(pageNumber:number) {
        for (let k = this.getPageStack().length-1; k > pageNumber; k--) {
            console.log("back");
            this.navigateBack();
        }
    }

    public setCurrentPage(pageId:string, parentPageElement:path.PageElement) {
        let page:path.Page = new path.Page();
        page.id=pageId;
        page.parentPageElement=parentPageElement;

        for (var modelPage of this.getGuiModel().application.pageList) {
            if (modelPage.id == pageId) {
                page.title = modelPage.title;
                for (var modelElement of modelPage.elementList) {
                    // element
                    let element:path.PageElement = null;
                    switch (modelElement.type) {
                        case "button":
                            let pageButton:path.PageButton = new path.PageButton(this);
                            pageButton.icon = modelElement["icon"];
                            pageButton.color = modelElement["color"];
                            pageButton.page = modelElement["page"];
                            pageButton.form = modelElement["form"];
                            element = pageButton;
                            break;
                        case "backbutton":
                            let backButton:path.BackButton = new path.BackButton(this);
                            backButton.icon = modelElement["icon"];
                            backButton.color = modelElement["color"];
                            element = backButton;
                            break;
                        case "list":
                            let dynamicList:path.List = new path.List(this);
                            dynamicList.search = modelElement["search"];
                            for (var listElement of modelElement["data"]) {
                                let button:path.PageButton = new path.PageButton(this);
                                button.name = listElement.name;
                                button.color = modelElement["color"];
                                button.icon = modelElement["icon"];
                                button.page = modelElement["page"];
                                button.form = modelElement["form"];
                                dynamicList.content.push(button);
                            }
                            element = dynamicList;
                            break;
                    }
                    element.name = modelElement["name"];
                    element.type = modelElement.type;
                    page.content.push(element);
                }
            }
        }

        this._pageStack.push(page);
    }

    public setCurrentForm(formId:string) {
        let forms:path.Form[] = [];
        let form:path.Form = null;
        for (var modelForm of this.getGuiModel().application.formList) {
            if (modelForm.id === formId) {
                // create form
                form = new path.Form();
                form.title = modelForm.title;
                for (var modelFormField of modelForm.formFieldList) {
                    // create form fields
                    let formField:path.FormField = null;
                    switch (modelFormField.type) {
                        case "text": {
                            formField = new path.TextField(this);
                            break;
                        }
                        case "autocomplete":
                        {
                            let autoCompleteFormField = new autocomplete.AutoCompleteField(this);
                            autoCompleteFormField.data = modelFormField["data"];
                            autoCompleteFormField.wordSearchEnabled = modelFormField["wordSearchEnabled"];
                            formField = autoCompleteFormField;
                            break;
                        }
                        case "radiogroup":
                        {
                            let radioGroupFormField = new path.RadioGroup(this);
                            for (var radioModel of modelFormField["radios"]) {
                                let radio = new path.Radio(this);
                                radio.name = radioModel.name;
                                radioGroupFormField.radios.push(radio);
                            }
                            formField = radioGroupFormField;
                            break;
                        }
                        default:
                        {
                            formField = new path.FormField(this);
                        }
                    }
                    // general values
                    formField.id = modelFormField["id"];
                    formField.name = modelFormField.name;
                    formField.type = modelFormField.type;
                    formField.height = modelFormField["height"];
                    if (modelFormField["actions"] != null) {
                        for (var action of modelFormField["actions"]) {
                            let actionObject:path.Action = new path.Action();
                            actionObject.name = action.name;
                            actionObject.type = action.type;
                            formField.actions.push(actionObject);
                        }
                    }
                    form.fields.push(formField);
                }
                // get handler and execute load
                let handlerName = formId + 'Handler';
                if (this.getBeans()[formId] != null && this.getHandlers()[handlerName] != null) {
                    let formBean:path.IForm = new (this.getBeans()[formId]);
                    let formHandler:path.IFormHandler = new (this.getHandlers()[handlerName]);
                    for (let a = 0; a < form.fields.length; a++) {
                        if (form.fields[a].id != null) {
                            formBean[form.fields[a].id] = form.fields[a];
                        }
                    }
                    formHandler.doLoad(formBean);
                }

                forms.push(form)
            }
        }
        if (form == null && formId != null) {
            alert("Missing form: " + formId);
        }
        this._formStack = forms;
    }

}