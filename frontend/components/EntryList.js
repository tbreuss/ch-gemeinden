import m from "mithril";
import t from "./Translate";

let EntryList = {
    entries: [],
    view(vnode) {
        if (vnode.attrs.entries.length === 0) {
            return [];
        }
        return m("table#test-table.pure-table.pure-table-horizontal", [
            m("thead", [
                m("tr", [
                    m("th", t("Postleitzahl")),
                    m("th", t("Anteil in Gemeinde [%]")),
                    m("th", t("Kanton")),
                    m("th", t("Gemeindenummer")),
                    m("th", t("Gemeindename")),
                ])
            ]),
            m("tbody#test-tbody", vnode.attrs.entries.map((entry) => {
                return m("tr", [
                    m("td", entry.plz4),
                    m("td", entry.in_gde),
                    m("td", entry.ktkz),
                    m("td", entry.gdenr),
                    m("td", entry.gdenamk),
                ])
            }))
        ])
    }
};

export default EntryList;
