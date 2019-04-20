import m from "mithril";

const DefaultLayout = {
    view(vnode) {
        return m("#layout.app", [
            m("div#main", [
                m("div.content", [
                    m("div.pure-g", [
                        m("div.pure-u-1", vnode.children)
                    ])
                ])
            ])
        ]);
    }
};

export { DefaultLayout }
