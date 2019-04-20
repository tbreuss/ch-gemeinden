import m from "mithril";
import { t } from "./Translate";

const kantone = [
    "", "AG", "AR", "AI", "BL", "BS", "BE", "FR", "GE",
    "GL", "GR", "JU", "LU", "NE", "NW", "OW", "SH", "SZ",
    "SO", "SG", "TI", "TG", "UR", "VD", "VS", "ZG", "ZH"
];

const SearchForm = {
    plz: "",
    kanton: "",
    gemeinde: "",
    gemeindename: "",
    checkboxvalue: false,
    resetHandler: null,
    searchHandler: null,
    oninit(vnode) {
        this.plz = ""
        this.kanton = ""
        this.gemeinde = ""
        this.gemeindename = ""
        this.checkboxvalue = false
        this.resetHandler = vnode.attrs.resetHandler
        this.searchHandler = vnode.attrs.searchHandler
    },
    view(vnode) {
        return [
            m("form.pure-form.pure-form-aligned", [
                m("fieldset", [
                    m(".pure-control-group", [
                        m("label[for=plz]", "Postleitzahl"),
                        m("input#plz", {
                            onfocusout: (e) => {
                                this.plz = e.target.value
                                this.search()
                            },
                            oninput: (e) => {
                                this.plz = e.target.value = e.target.value.replace(/[^0-9]/, "")
                            },
                            onkeyup: (e) => {
                                if (e.keyCode === 13) {
                                    this.plz = e.target.value
                                    this.search()
                                }
                            },
                            type: "text",
                            value: this.plz,
                            maxlength: 4,
                            autofocus: "autofocus"
                        })
                    ]),
                    m(".pure-control-group", [
                        m("label", "Kanton"),
                        m("select", {
                            oninput: (e) => {
                                this.kanton = e.target.value
                            },
                            onchange: (e) => {
                                this.kanton = e.target.value
                                this.search()
                            },
                            value: this.kanton
                        }, [
                            kantone.map((kanton) => {
                                return m('option', kanton)
                            })
                        ]),
                    ]),
                    m(".pure-control-group", [
                        m("label", "Gemeindenummer"),
                        m("input", {
                            onfocusout: (e) => {
                                this.gemeinde = e.target.value
                                this.search()
                            },
                            oninput: (e) => {
                                this.gemeinde = e.target.value = e.target.value.replace(/[^0-9]/, "")
                            },
                            onkeyup: (e) => {
                                if (e.keyCode === 13) {
                                    this.gemeinde = e.target.value
                                    this.search()
                                }
                            },
                            value: this.gemeinde,
                            maxlength: 4
                        }),
                    ]),
                    m(".pure-control-group", [
                        m("label", "Gemeindename"),
                        m("input", {
                            onfocusout: (e) => {
                                this.gemeindename = e.target.value
                                this.search()
                            },
                            oninput: (e) => {
                                this.gemeindename = e.target.value
                            },
                            onkeyup: (e) => {
                                if (e.keyCode === 13) {
                                    this.gemeindename = e.target.value
                                    this.search()
                                }
                            },
                            value: this.gemeindename
                        }),
                    ]),
                    m(".pure-controls", [
                        m("label.pure-checkbox",
                            m("input[type=checkbox]", {
                                checked: this.checkboxvalue ? "checked" : "",
                                onclick: (e) => {
                                    this.checkboxvalue = e.target.checked
                                    this.search()
                                },
                            }),
                            t("nur 100% Übereinstimmung")
                        )
                    ]),
                    m(".pure-controls", [
                        m("button.pure-button", {
                            onclick: (e) => {
                                this.search()
                            }
                        }, t("Suchen")),
                        this.isEmpty() ? "" : m("button.pure-button", {
                            onclick: (e) => {
                                this.reset()
                            }
                        }, t("Zurücksetzen")),
                    ])
                ])
            ])
        ];
    },
    reset() {
        this.plz = ""
        this.kanton = ""
        this.gemeinde = ""
        this.gemeindename = ""
        this.checkboxvalue = false
        this.resetHandler.call()
    },
    search() {
        this.searchHandler.call(
            this,
            this.plz,
            this.kanton,
            this.gemeinde,
            this.gemeindename,
            this.checkboxvalue
        )
    },
    isEmpty() {
        return this.plz === ""
            && this.kanton === ""
            && this.gemeinde === ""
            && this.gemeindename === ""
    }
}

export { SearchForm };
