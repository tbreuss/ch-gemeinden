import m from "mithril";
import t from "./Translate";

let kantone = [
    '', 'AG', 'AR', 'AI', 'BL', 'BS', 'BE', 'FR', 'GE',
    'GL', 'GR', 'JU', 'LU', 'NE', 'NW', 'OW', 'SH', 'SZ',
    'SO', 'SG', 'TI', 'TG', 'UR', 'VD', 'VS', 'ZG', 'ZH'
];

let SearchForm = {
    plz: "",
    kanton: "",
    gemeinde: "",
    gemeindename: "",
    resetHandler: null,
    searchHandler: null,
    oninit(vnode) {
        this.plz = ""
        this.kanton = ""
        this.gemeinde = ""
        this.gemeindename = ""
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
                            onfocusout: (e) => {
                                this.plz = e.target.value
                                this.search()
                                //e.redraw = false
                            },
                            oninput: (e) => {
                                if (e.target.value.match(/^[0-9]+$/)) {
                                    this.plz = e.target.value
                                } else {
                                    e.target.value = e.target.value.replace(/[^0-9]/, "")
                                }
                                e.redraw = false
                            },
                            onkeypress: (e) => {
                                this.error = ""
                                e.redraw = false
                            },
                            onkeyup: (e) => {
                                if (e.keyCode == 13) {
                                    this.plz = e.target.value
                                    this.search()
                                } else {
                                    e.redraw = false
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
                                e.redraw = false
                            },
                            onchange: (e) => {
                                this.kanton = e.target.value
                                this.search()
                                //e.redraw = false
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
                                //e.redraw = false
                            },
                            oninput: (e) => {
                                if (e.target.value.match(/^[0-9]+$/)) {
                                    this.gemeinde = e.target.value
                                } else {
                                    e.target.value = e.target.value.replace(/[^0-9]/, "")
                                }
                                e.redraw = false
                            },
                            onkeypress: (e) => {
                                this.error = ""
                                e.redraw = false
                            },
                            onkeyup: (e) => {
                                if (e.keyCode == 13) {
                                    this.gemeinde = e.target.value
                                    this.search()
                                } else {
                                    e.redraw = false
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
                                //e.redraw = false
                            },
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
                                    this.search()
                                } else {
                                    e.redraw = false
                                }
                            },
                            value: this.gemeindename
                        }),
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
        this.resetHandler.call()
    },
    search() {
        this.searchHandler.call(
            this,
            this.plz,
            this.kanton,
            this.gemeinde,
            this.gemeindename
        )
    },
    isEmpty() {
        return this.plz === ""
            && this.kanton === ""
            && this.gemeinde === ""
            && this.gemeindename === ""
    }
}

export default SearchForm;
