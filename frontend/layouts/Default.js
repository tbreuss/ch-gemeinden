import m from "mithril"

export default {
    view: function (vnode) {
        return m("#layout.app", [
            m("a#menuLink.menu-link[href='#']", [
                m('span')
            ]),
            m("div#main", [
                m("div#flashError.alert.alert-error.hidden", "Error"),
                m("div#flashInfo.alert.alert-info.hidden", "Info"),
                m("div#flashSuccess.alert.alert-success.hidden", "Success"),
                m("div.content", [
                    m("div.pure-g", [
                        m("div.pure-u-1", vnode.children)
                    ])
                ])
            ])
        ])
    }
}
