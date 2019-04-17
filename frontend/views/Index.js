import m from "mithril";
import SearchForm from "../components/SearchForm";
import EntryList from "../components/EntryList";
import Entry from "../models/Entry";

export default {
    view() {
        return [
            m("h2", "Gemeindeverzeichnis"),
            m(SearchForm, {
                searchHandler: this.search,
                resetHandler: this.reset
            }),
            this.renderError(),
            m("br"),
            m(EntryList, { entries: Entry.list })
        ];
    },
    renderError() {
        if (this.error == "") {
            return m("span.error.hidden", this.error)
        }
        return m("span.error", this.error)
    },
    search(plz, kanton, gemeinde, gemeindename) {
        if ((plz === "") && (kanton === "") && (gemeinde === "") && (gemeindename === "")) {
            this.reset()
            return
        }
        Entry.search(plz, kanton, gemeinde, gemeindename)
    },
    reset() {
        Entry.reset()
    }
}
