import { locomotiveScroll, lenis } from "./modules/smoothScroll";
import cookieYes from "./modules/cookieYes";
import modals from "./modules/modals";
import scrollbars from "./modules/scrollbars";
import swipers from "./modules/swipers";
import currentYear from "./modules/currentYear";

document.addEventListener("DOMContentLoaded", function () {
    // Load modules
    cookieYes();
    currentYear();
});
