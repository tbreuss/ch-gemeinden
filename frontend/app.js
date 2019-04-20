import m from "mithril";

// layout
import { DefaultLayout } from "./layouts/DefaultLayout";

// views
import { IndexView } from "./views/IndexView";
import { ErrorView } from "./views/ErrorView";

// components
import { t } from "./components/Translate";

m.route(document.body, "/", {
    "/": {
        render() {
            document.title = t("Gemeindeverzeichnis der Schweiz");
            return m(DefaultLayout, m(IndexView));
        }
    },
    "/:404...": {
        render() {
            document.title = t("Fehler");
            return m(DefaultLayout, m(ErrorView));
        }
    }
});
