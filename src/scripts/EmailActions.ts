import ClipboardJS from "clipboard";
import { SnackbarJS } from "./SnackbarJS";

class EmailActions {

    private copy = document.getElementById("copy_email") as HTMLImageElement;
    private toSendEmail = document.getElementById("to_send_email") as HTMLImageElement;
    private contactSection = document.getElementById("contact_section_id") as HTMLElement;
    private contactSectionPosition = this.contactSection.getBoundingClientRect().top + window.pageYOffset - 70;
    private readonly email: string = "cariasdaniel261@gmail.com";

    constructor() { this.init() }

    private init(): void {
        this.copy.addEventListener("click", () => {
            ClipboardJS.copy(this.email);
            new SnackbarJS().showSnackbar("Email copied!");
        });

        this.toSendEmail.addEventListener("click", () => {
            window.scrollTo({
                top: this.contactSectionPosition,
                behavior: "auto"
            });
        });
    }
}

new EmailActions();