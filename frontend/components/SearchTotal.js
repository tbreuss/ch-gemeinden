import m from "mithril";

const SearchTotal = {
    view(vnode) {
        let {count, searching} = vnode.attrs;
        if (!searching) {
            return "";
        }
        if (count < 1) {
            return m("p.total", "Es wurden keine Einträge gefunden.");
        }
        if (count === 1) {
            return m("p.total", "Es wurde 1 Eintrag gefunden.");
        }
        return m("p.total", `Es wurden ${count} Einträge gefunden.`);
    }
};

export {SearchTotal};
