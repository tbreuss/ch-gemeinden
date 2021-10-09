import m from "mithril";
import {DefaultLayout} from "./layouts/DefaultLayout";
import {SearchView} from "./views/SearchView";
import {ErrorView} from "./views/ErrorView";

const State = () => ({
    count: 0,
});

const Actions = state => ({
    increment: () => state.count += 1,
    decrement: () => state.count -= 1,
    doSearch: () => { },
    doReset: () => { },
    doSort: (sortField) => { },
});

const state = State();

const actions = Actions(state);

m.route(document.body, "/", {
    "/": {
        render() {
            return m(DefaultLayout, m(SearchView, { state, actions }));
        }
    },
    "/:404...": {
        render() {
            return m(DefaultLayout, m(ErrorView));
        }
    }
});
