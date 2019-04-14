import m from "mithril";

// layout
import DefaultLayout from "./layouts/Default";

// views
import Index from "./views/Index";
import Error from "./views/Error";

// components
import t from "./components/Translate";

const PAGE_TITLE = t("Adminpanel");

m.route(document.body, "/", {
    "/": {
        onmatch: onMatchHandler,
        render() {
            document.title = t("Index") + " / " + PAGE_TITLE;
            setActiveMenuItem('.site-navigation__index a');
            return m(DefaultLayout, m(Index))
        }
    },
    "/:404...": {
        render() {
            document.title = t("Error") + " / " + PAGE_TITLE;
            setActiveMenuItem();
            return m(DefaultLayout, m(Error))
        }
    }
});

function __(key) {
    return key;
}

function onMatchHandler() {
    if (!localStorage.getItem("auth-token")) m.route.set("/login")
}

function setActiveMenuItem(selector = '') {
    let els = document.querySelectorAll('.site-navigation a');
    els.forEach((el) => {
        el.classList.remove('active');
    });

    if (selector === '') {
        return;
    }

    let el = document.querySelector(selector);
    if (el) {
        el.classList.add('active');
    }
}