import m from "mithril";
import {DefaultLayout} from "./layouts/DefaultLayout";
import {SearchView} from "./views/SearchView";
import {ErrorView} from "./views/ErrorView";

m.route(document.body, "/", {
    "/": {
        render() {
            return m(DefaultLayout, m(SearchView));
        }
    },
    "/:404...": {
        render() {
            return m(DefaultLayout, m(ErrorView));
        }
    }
});
