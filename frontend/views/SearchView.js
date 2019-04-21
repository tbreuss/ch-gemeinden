import m from "mithril";
import { SearchForm } from "../components/SearchForm";
import { SearchList } from "../components/SearchList";
import { EntryModel } from "../models/EntryModel";

let searching = false;

const SearchView = {
    view() {
        return [
            m("h2", "Gemeindeverzeichnis der Schweiz"),
            m(SearchForm, {
                searchHandler: this.search,
                resetHandler: this.reset
            }),
            this.renderError(),
            m("br"),
            m(SearchList, {entries: EntryModel.list, searching: searching})
        ]
    },
    renderError() {
        if (this.error === "") {
            return m("span.error.hidden", this.error)
        }
        return m("span.error", this.error)
    },
    search(plz, kanton, gemeinde, gemeindename, only100) {
        if ((plz === "") && (kanton === "") && (gemeinde === "") && (gemeindename === "")) {
            this.reset();
            return;
        }
        EntryModel.search(plz, kanton, gemeinde, gemeindename, only100)
            .then(() => {
                searching = true;
            })
    },
    reset() {
        EntryModel.reset();
        searching = false;
    }
};

export { SearchView }
