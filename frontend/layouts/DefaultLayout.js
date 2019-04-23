import m from "mithril";

const DefaultLayout = {
    view(vnode) {
        return [
            m(".container", [
                m(".pure-g.header", [
                    m(".pure-u-1-3", [
                        m("a.pure-menu-heading[href='.']", "CH-Gemeinden")
                    ]),
                ])
            ]),
            m("#layout.app", [
                m("div#main", [
                    m("div.content", [
                        m("div.pure-g", [
                            m("div.pure-u-1", vnode.children)
                        ])
                    ])
                ])
            ]),
            m("div.footer",
                m("div.container",
                    [
                        m("div.pure-g",
                            [
                                m("div.pure-u-1.pure-u-md-3-5.footer-about",
                                    [
                                        m("h3.footer-about__heading",
                                            "Über dieses Projekt"
                                        ),
                                        m("p.footer-about__text",
                                            "Dieses Projekt ist ein Beispiel für eine Mithril.js Single Page Application (SPA), \
                                                die an eine REST-API angebunden ist, basierend auf dem Yii2 Framework."
                                        )
                                    ]
                                ),
                                m("div.pure-u-1.pure-u-md-2-5.footer-tools",
                                    [
                                        m("h3.footer-tools__heading",
                                            "Toolset"
                                        ),
                                        m("ul.footer-tools__list",
                                            [
                                                m("li",
                                                    m("a[target='_blank'][href='https://mithril.js.org']",
                                                        "Mithril.js"
                                                    )
                                                ),
                                                m("li",
                                                    m("a[target='_blank'][href='https://www.yiiframework.com']",
                                                        "Yii2 Framework"
                                                    )
                                                ),
                                                m("li",
                                                    m("a[target='_blank'][href='http://purecss.io']",
                                                        "Pure.css"
                                                    )
                                                )
                                            ]
                                        )
                                    ]
                                )
                            ]
                        ),
                        m("hr.footer-ruler"),
                        m("div.pure-g",
                            m("div.pure-u-1.footer-copyright",
                                [
                                    "Ein kleines ",
                                    m("a[target='_blank'][href='https://www.tebe.ch']",
                                        "tebe.ch"
                                    ),
                                    " Projekt"
                                ]
                            )
                        )
                    ]
                )
            )
        ];
    }
};

export {DefaultLayout}
