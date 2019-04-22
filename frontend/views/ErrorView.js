import m from "mithril";
import {t} from "../components/Translate";

const ErrorView = {
    view() {
        document.title = t("Fehler");
        return m("h1", t("Error"));
    }
};

export {ErrorView}
