import m from "mithril";
import { t } from "../components/Translate";

const ErrorView = {
    view() {
        return m("h1", t("Error"));
    }
};

export { ErrorView }
