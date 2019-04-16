import m from "mithril";
import t from "../components/Translate"
import EntryForm from "../components/EntryForm";
import EntryList from "../components/EntryList";
import Entry from "../models/Entry";
import ErrorHandler from "../components/ErrorHandler";

export default {
    plz: "",
    kanton: "",
    gemeinde: "",
    gemeindename: "",
    oninit() {
        this.plz = "";
        this.kanton = "";
        this.gemeinde = "";
        this.gemeindename = "";
    },
    view() {
        return [
            m(EntryForm, {
                searchHandler: this.search,
                resetHandler: this.reset
            }),
            this.renderError(),
            m("br"),
            m(EntryList, { entries: Entry.list })
        ];
    },
    renderError() {
        if (this.error == "") {
            return m("span.error.hidden", this.error)
        }
        return m("span.error", this.error)
    },
    search() {
        if ((this.plz === "") && (this.kanton === "") && (this.gemeinde === "") && (this.gemeindename === "")) {
            return;
        }
        Entry.search(this.plz, this.kanton, this.gemeinde, this.gemeindename)
            .then(() => {
                //this.plz = "";
            })
            .catch((error) => {
                ErrorHandler.show(error)
            });
        /*.catch((error) => {
            this.error = error.response.errors.name[0]
        });*/
    },
    reset() {
        Entry.list = [];
        this.plz = '';
        this.kanton = '';
        this.gemeinde = '';
        this.gemeindename = '';
    }
}
