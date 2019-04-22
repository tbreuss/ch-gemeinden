import m from "mithril";
import {t} from "./Translate";

const SearchTotal = {
    view(vnode) {
        let {count, wasSearched} = vnode.attrs;
        if (!wasSearched) {
            return "";
        }
        if (count < 1) {
            return m("p.total", t("Es wurden keine Einträge gefunden."));
        }
        if (count === 1) {
            return m("p.total", t("Es wurde 1 Eintrag gefunden."));
        }
        return m("p.total", t(`Es wurden ${count} Einträge gefunden.`));
    }
};

export {SearchTotal};
