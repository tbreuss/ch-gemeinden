import m from "mithril";
import t from "../components/Translate"
import Entry from "../models/Entry";
import ErrorHandler from "../components/ErrorHandler";

export default {
    oninit() {
    },
    view() {
        return [
            m("h1", t("PLZ")),
            m("div.pure-form", [
                m("input.pure-input[data-target=test.name]", {
                    oninput: (e) => {
                        this.name = e.target.value
                        e.redraw = false
                    },
                    onkeypress: (e) => {
                        this.error = ""
                        e.redraw = false
                    },
                    onkeyup: (e) => {
                        if (e.keyCode == 13) {
                            this.name = e.target.value
                            this.search()
                        }
                        e.redraw = false
                    },
                    value: this.name,
                }),
                m("button.pure-button", {
                    onclick: (e) => {
                        this.search()
                    }
                }, t("Search")),
            ]),
            this.renderError(),
            m("br"),
            this.renderTable()
        ];
    },
    renderError() {
        if (this.error == "") {
            return m("span.error.hidden", this.error)
        }
        return m("span.error", this.error)
    },
    renderTable() {
        if (Entry.list.length === 0) {
            return [];
        }
        return m("table#test-table.pure-table.pure-table-horizontal", [
            m("thead", [
                m("tr", [
                    m("th", t("PLZ")),
                    m("th", t("% in Gemeinde")),
                    m("th", t("Kanton")),
                    m("th", t("Nummer")),
                    m("th", t("Name")),
                ])
            ]),
            m("tbody#test-tbody", Entry.list.map((test, index) => {
                return m("tr", [
                    m("td", test.plz4),
                    m("td", test.in_gde),
                    m("td", test.ktkz),
                    m("td", test.gdenr),
                    m("td", test.gdenamk),
                ])
            }))
        ])
    },
    search() {
        if (this.name == "") {
            return;
        }
        Entry.search(this.name)
            .then(() => {
                this.name = "";
            })
            .catch((error) => {
                ErrorHandler.show(error)
            });
        /*.catch((error) => {
            this.error = error.response.errors.name[0]
        });*/
    },
}
