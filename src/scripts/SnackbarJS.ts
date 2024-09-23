export class SnackbarJS {
    private toggleVisibility(element: HTMLElement, show: boolean): void {
        if (show) {
            element.classList.remove("hidden");
            element.classList.add("display");
        } else {
            element.classList.remove("display");
            element.classList.add("hidden");
        }
    }

    showSnackbar(message: string): void {
        const snackbar = document.getElementById("snackbar") as HTMLDivElement;
        const snackMessage = document.getElementById("snack_message") as HTMLElement;

        snackMessage.innerHTML = message;

        this.toggleVisibility(snackbar, true);
        this.toggleVisibility(snackMessage, true)

        setTimeout(() => {
            this.toggleVisibility(snackbar, false);
            this.toggleVisibility(snackMessage, false)
        }, 2000);
    }
}