import m from "mithril";
import {SearchForm} from "../components/SearchForm";
import {SearchList} from "../components/SearchList";
import {SearchTotal} from "../components/SearchTotal";
import {SearchModel} from "../models/SearchModel";
import {t} from "../components/Translate";

function sort(sortField) {
    SearchModel.params.sort = sortField;
    search();
}

function search() {
    SearchModel.search();
}

function reset() {
    SearchModel.reset();
}

const SearchView = {
    view({ attrs: { state, actions } }) {
        document.title = t("Gemeindeverzeichnis der Schweiz");
        return [
            m("h2", "Gemeindeverzeichnis der Schweiz"),
            m(SearchForm, {
                searchParams: SearchModel.params,
                wasSearched: SearchModel.wasSearched(),
                search,
                reset,
                state: state,
                actions: actions
            }),
            m(SearchTotal, {count: SearchModel.getCount(), wasSearched: SearchModel.wasSearched()}),
            m(SearchList, {entries: SearchModel.getList(), sort: sort, state: state })
        ]
    }
};

export {SearchView}
