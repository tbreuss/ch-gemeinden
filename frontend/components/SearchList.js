import m from "mithril";
import {t} from "./Translate";
import {SearchModel} from "../models/SearchModel";

const SearchList = {
    view(vnode) {
        let {entries} = vnode.attrs;
        if (entries.length === 0) {
            return [];
        }
        return m("table.pure-table.pure-table-horizontal.pure-table--entries", [
            m("thead", [
                m("tr", [
                    m("th[data-sort=plz4]", {onclick: SearchList.sort}, t("Postleitzahl")),
                    m("th[data-sort=in_gde]", {onclick: SearchList.sort}, t("Anteil in Gemeinde")),
                    m("th[data-sort=ktkz]", {onclick: SearchList.sort}, t("Kanton")),
                    m("th[data-sort=gdenr]", {onclick: SearchList.sort}, t("Gemeindenummer")),
                    m("th[data-sort=gdenamk]", {onclick: SearchList.sort}, t("Gemeindename"))
                ])
            ]),
            m("tbody", entries.map((entry) => {
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
        SearchModel.sort(searchField);
    }
};

export {SearchList};
