import m from "mithril";
import {t} from "./Translate";

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
        SearchForm.plz = ""
        SearchForm.kanton = ""
        SearchForm.gemeinde = ""
        SearchForm.gemeindename = ""
        SearchForm.checkboxvalue = false
        SearchForm.resetHandler = vnode.attrs.resetHandler
        SearchForm.searchHandler = vnode.attrs.searchHandler
    },
    view(vnode) {
        let {searching} = vnode.attrs;
        return [
            m("form.pure-form.pure-form-aligned", [
                m("fieldset", [
                    m(".pure-control-group", [
                        m("label[for=plz]", "Postleitzahl"),
                        m("input#plz", {
                            onfocusout: (e) => {
                                SearchForm.plz = e.target.value
                                //SearchForm.search()
                            },
                            oninput: (e) => {
                                SearchForm.plz = e.target.value = e.target.value.replace(/[^0-9]/, "")
                            },
                            onkeyup: (e) => {
                                if (e.keyCode === 13) {
                                    SearchForm.plz = e.target.value
                                    SearchForm.search()
                                }
                            },
                            type: "text",
                            value: SearchForm.plz,
                            maxlength: 4,
                            autofocus: "autofocus"
                        })
                    ]),
                    m(".pure-control-group", [
                        m("label", "Kanton"),
                        m("select", {
                            oninput: (e) => {
                                SearchForm.kanton = e.target.value
                            },
                            onchange: (e) => {
                                SearchForm.kanton = e.target.value
                                //SearchForm.search()
                            },
                            onkeyup: (e) => {
                                if (e.keyCode === 13) {
                                    //SearchForm.kanton = e.target.value
                                    SearchForm.search()
                                }
                            },
                            value: SearchForm.kanton
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
                                SearchForm.gemeinde = e.target.value
                                //SearchForm.search()
                            },
                            oninput: (e) => {
                                SearchForm.gemeinde = e.target.value = e.target.value.replace(/[^0-9]/, "")
                            },
                            onkeyup: (e) => {
                                if (e.keyCode === 13) {
                                    SearchForm.gemeinde = e.target.value
                                    SearchForm.search()
                                }
                            },
                            value: SearchForm.gemeinde,
                            maxlength: 4
                        }),
                    ]),
                    m(".pure-control-group", [
                        m("label", "Gemeindename"),
                        m("input", {
                            onfocusout: (e) => {
                                SearchForm.gemeindename = e.target.value
                                //SearchForm.search()
                            },
                            oninput: (e) => {
                                SearchForm.gemeindename = e.target.value
                            },
                            onkeyup: (e) => {
                                if (e.keyCode === 13) {
                                    SearchForm.gemeindename = e.target.value
                                    SearchForm.search()
                                }
                            },
                            value: SearchForm.gemeindename
                        }),
                    ]),
                    m(".pure-controls", [
                        m("label.pure-checkbox",
                            m("input[type=checkbox]", {
                                checked: SearchForm.checkboxvalue ? "checked" : "",
                                onclick: (e) => {
                                    SearchForm.checkboxvalue = e.target.checked
                                    SearchForm.search()
                                },
                            }),
                            t("nur 100% Übereinstimmung")
                        )
                    ]),
                    m(".pure-controls", [
                        m("button.pure-button", {
                            onclick: (e) => {
                                SearchForm.search()
                            }
                        }, t("Suchen")),
                        !searching ? "" : m("button.pure-button", {
                            onclick: (e) => {
                                SearchForm.reset()
                            }
                        }, t("Zurücksetzen")),
                    ])
                ])
            ])
        ];
    },
    reset() {
        SearchForm.plz = ""
        SearchForm.kanton = ""
        SearchForm.gemeinde = ""
        SearchForm.gemeindename = ""
        SearchForm.checkboxvalue = false
        SearchForm.resetHandler.call()
    },
    search() {
        SearchForm.searchHandler.call(
            SearchForm,
            SearchForm.plz,
            SearchForm.kanton,
            SearchForm.gemeinde,
            SearchForm.gemeindename,
            SearchForm.checkboxvalue
        )
    }
}

export {SearchForm};
