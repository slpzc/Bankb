import menuStore from "./menu";
import userData from "./userData";
import {injectStores} from "@mobx-devtools/tools";

injectStores({
    menuStore,
    userData
});

export {menuStore, userData};