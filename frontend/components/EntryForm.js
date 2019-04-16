import m from "mithril";
import t from "./Translate";

let EntryForm = {
    resetHandler: null,
    searchHandler: null,
    oninit(vnode) {
        this.resetHandler = vnode.attrs.resetHandler
        this.searchHandler = vnode.attrs.searchHandler
    },
    view(vnode) {
        return [
            m("form.pure-form pure-form-aligned", [
                m("fieldset", [
                    m(".pure-control-group", [
                        m("label[for=plz]", "Postleitzahl"),
                        m("input#plz", {
                            oninput: (e) => {
                                this.plz = e.target.value
                                e.redraw = false
                            },
                            onkeypress: (e) => {
                                this.error = ""
                                e.redraw = false
                            },
                            onkeyup: (e) => {
                                if (e.keyCode == 13) {
                                    this.plz = e.target.value
                                    this.searchHandler()
                                }
                                e.redraw = false
                            },
                            type: "text",
                            value: this.plz,
                            min: 1000,
                            max: 9999,
                            maxlength: 4,
                            placeholder: "",
                            autofocus: "autofocus"
                        })
                    ]),
                    m(".pure-control-group", [
                        m("label", "Kanton"),
                        m("input", {
                            oninput: (e) => {
                                this.kanton = e.target.value
                                e.redraw = false
                            },
                            onkeypress: (e) => {
                                this.error = ""
                                e.redraw = false
                            },
                            onkeyup: (e) => {
                                if (e.keyCode == 13) {
                                    this.kanton = e.target.value
                                    this.searchHandler()
                                }
                                e.redraw = false
                            },
                            value: this.kanton,
                            maxlength: 2,
                            placeholder: ""
                        }),
                    ]),
                    m(".pure-control-group", [
                        m("label", "Gemeindenummer"),
                        m("input", {
                            oninput: (e) => {
                                this.gemeinde = e.target.value
                                e.redraw = false
                            },
                            onkeypress: (e) => {
                                this.error = ""
                                e.redraw = false
                            },
                            onkeyup: (e) => {
                                if (e.keyCode == 13) {
                                    this.gemeinde = e.target.value
                                    this.searchHandler()
                                }
                                e.redraw = false
                            },
                            value: this.gemeinde,
                            placeholder: ""
                        }),
                    ]),
                    m(".pure-control-group", [
                        m("label", "Gemeindename"),
                        m("input", {
                            oninput: (e) => {
                                this.gemeindename = e.target.value
                                e.redraw = false
                            },
                            onkeypress: (e) => {
                                this.error = ""
                                e.redraw = false
                            },
                            onkeyup: (e) => {
                                if (e.keyCode == 13) {
                                    this.gemeindename = e.target.value
                                    this.searchHandler()
                                }
                                e.redraw = false
                            },
                            value: this.gemeindename,
                            placeholder: ""
                        }),
                    ]),
                    m(".pure-controls", [
                        m("button.pure-button", {
                            onclick: (e) => {
                                this.searchHandler()
                            }
                        }, t("Search")),
                        m("button.pure-button", {
                            onclick: (e) => {
                                this.resetHandler()
                            }
                        }, t("Reset")),
                    ])
                ])
            ])
        ];
    }
}

export default EntryForm;
