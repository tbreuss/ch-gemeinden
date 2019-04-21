import m from "mithril";
import {SearchForm} from "../components/SearchForm";
import {SearchList} from "../components/SearchList";
import {SearchModel} from "../models/SearchModel";

let searching = false;

const SearchView = {
    view() {
        return [
            m("h2", "Gemeindeverzeichnis der Schweiz"),
            m(SearchForm, {
                searchHandler: this.search,
                resetHandler: this.reset
            }),
            m(SearchList, {entries: SearchModel.list, searching: searching})
        ]
    },
    search(plz, kanton, gemeinde, gemeindename, only100) {
        if ((plz === "") && (kanton === "") && (gemeinde === "") && (gemeindename === "")) {
            this.reset();
            return;
        }
        SearchModel.search(plz, kanton, gemeinde, gemeindename, only100)
            .then(() => {
                searching = true;
            })
    },
    reset() {
        SearchModel.reset();
        searching = false;
    }
};

export {SearchView}
