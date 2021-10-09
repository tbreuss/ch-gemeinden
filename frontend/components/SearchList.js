import m from "mithril";
import {t} from "./Translate";

function entryView(entry) {
    return m("tr", [
        m("td", entry.plz4),
        m("td", entry.in_gde + " %"),
        m("td", entry.ktkz),
        m("td", entry.gdenr),
        m("td", entry.gdenamk)
    ]);
}

const SearchList = {
    view(vnode) {
        let {entries, sort, state} = vnode.attrs;
        if (entries.length === 0) {
            return [];
        }
        return [
          m('h2', state.count),
          m("table.pure-table.pure-table-horizontal.pure-table--entries", [
            m("thead", [
                m("tr", [
                    m("th[data-sort=plz4]", {
                        onclick: (e) => {
                            sort(e.target.dataset.sort)
                        }
                    }, t("Postleitzahl")),
                    m("th[data-sort=in_gde]", {
                        onclick: (e) => {
                            sort(e.target.dataset.sort)
                        }
                    }, t("Anteil in Gemeinde")),
                    m("th[data-sort=ktkz]", {
                        onclick: (e) => {
                            sort(e.target.dataset.sort)
                        }
                    }, t("Kanton")),
                    m("th[data-sort=gdenr]", {
                        onclick: (e) => {
                            sort(e.target.dataset.sort)
                        }
                    }, t("Gemeindenummer")),
                    m("th[data-sort=gdenamk]", {
                        onclick: (e) => {
                            sort(e.target.dataset.sort)
                        }
                    }, t("Gemeindename"))
                ])
            ]),
            m("tbody", entries.map(entryView))
        ])];
    }
};

export {SearchList};
