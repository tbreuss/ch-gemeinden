import m from "mithril";
import { t } from "./Translate";
import { EntryModel } from "../models/EntryModel";

const SearchList = {
    view(vnode) {
        if (vnode.attrs.entries.length === 0) {
            if (vnode.attrs.searching) {
                return m("p", t("Es wurden keine Einträge gefunden."));
            }
            return [];
        }
        return m("table.pure-table.pure-table-horizontal.pure-table--entries", [
            m("thead", [
                m("tr", [
                    m("th[data-sort=plz4]", { onclick: this.sort }, t("Postleitzahl")),
                    m("th[data-sort=in_gde]", { onclick: this.sort }, t("Anteil in Gemeinde")),
                    m("th[data-sort=ktkz]", { onclick: this.sort }, t("Kanton")),
                    m("th[data-sort=gdenr]", { onclick: this.sort }, t("Gemeindenummer")),
                    m("th[data-sort=gdenamk]", { onclick: this.sort }, t("Gemeindename"))
                ])
            ]),
            m("tbody", vnode.attrs.entries.map((entry) => {
                return m("tr", [
                    m("td", entry.plz4),
                    m("td", entry.in_gde + " %"),
                    m("td", entry.ktkz),
                    m("td", entry.gdenr),
                    m("td", entry.gdenamk)
                ]);
            }))
        ]);
    },
    sort(e) {
        let searchField = e.target.dataset.sort;
        EntryModel.sort(searchField);
    }
};

export { SearchList };
