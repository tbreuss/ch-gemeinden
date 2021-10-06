import m from "mithril";
import {t} from "./Translate";

const kantone = [
    "", "AG", "AR", "AI", "BL", "BS", "BE", "FR", "GE",
    "GL", "GR", "JU", "LU", "NE", "NW", "OW", "SH", "SZ",
    "SO", "SG", "TI", "TG", "UR", "VD", "VS", "ZG", "ZH"
];

const SearchForm = {
    view(vnode) {
        let {searchParams, search, reset, wasSearched} = vnode.attrs;
        return [
            m("form.pure-form.pure-form-aligned", [
                m("fieldset", [
                    m(".pure-control-group", [
                        m("label[for=plz]", "Postleitzahl"),
                        m("input#plz", {
                            onfocusout: (e) => {
                                searchParams.plz4 = e.target.value;
                            },
                            oninput: (e) => {
                                e.target.value = e.target.value.replace(/[^0-9]/, "");
                                searchParams.plz4 = e.target.value;
                            },
                            type: "text",
                            value: searchParams.plz4,
                            maxlength: 4,
                            autofocus: "autofocus"
                        })
                    ]),
                    m(".pure-control-group", [
                        m("label", "Kanton"),
                        m("select", {
                            oninput: (e) => {
                                searchParams.ktkz = e.target.value;
                            },
                            onchange: (e) => {
                                searchParams.ktkz = e.target.value;
                            },
                            value: searchParams.ktkz
                        }, [
                            kantone.map((kanton) => {
                                return m('option', kanton);
                            })
                        ]),
                    ]),
                    m(".pure-control-group", [
                        m("label", "Gemeindenummer"),
                        m("input", {
                            onfocusout: (e) => {
                                searchParams.gdenr = e.target.value;
                            },
                            oninput: (e) => {
                                e.target.value = e.target.value.replace(/[^0-9]/, "");
                                searchParams.gdenr = e.target.value;
                            },
                            value: searchParams.gdenr,
                            maxlength: 4
                        }),
                    ]),
                    m(".pure-control-group", [
                        m("label", "Gemeindename"),
                        m("input", {
                            onfocusout: (e) => {
                                searchParams.gdenamk = e.target.value;
                            },
                            oninput: (e) => {
                                searchParams.gdenamk = e.target.value;
                            },
                            value: searchParams.gdenamk
                        }),
                    ]),
                    m(".pure-controls", [
                        m("label.pure-checkbox",
                            m("input[type=checkbox]", {
                                checked: searchParams.only100 > 0 ? "checked" : "",
                                onclick: (e) => {
                                    searchParams.only100 = e.target.checked ? 1 : 0;
                                },
                            }),
                            t("nur mit 100% Anteil in Gemeinde")
                        )
                    ]),
                    m(".pure-controls", [
                        m("button.pure-button", {
                            onclick: (e) => {
                                e.preventDefault();
                                search();
                            },
                            type: "button"
                        }, t("Suchen")),
                        !wasSearched ? "" : m("button.pure-button", {
                            onclick: (e) => {
                                e.preventDefault();
                                reset();
                                document.getElementById("plz").focus();
                            },
                            type: "button"
                        }, t("Zurücksetzen")),
                    ])
                ])
            ])
        ];
    }
};

export {SearchForm};
