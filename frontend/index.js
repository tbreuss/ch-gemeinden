import m from "mithril";

// layout
import DefaultLayout from "./layouts/Default";

// views
import Index from "./views/Index";
import Error from "./views/Error";

// components
import t from "./components/Translate";

m.route(document.body, "/", {
    "/": {
        render() {
            document.title = t("Gemeindeverzeichnis Schweiz");
            return m(DefaultLayout, m(Index))
        }
    },
    "/:404...": {
        render() {
            document.title = t("Fehler");
            return m(DefaultLayout, m(Error))
        }
    }
});
