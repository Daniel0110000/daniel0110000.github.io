import { SnackbarJS } from "./SnackbarJS";

interface FormFormat  {
    name: string,
    email: string,
    message: string
}

class Contact {
    
    private form = document.getElementById("contact_form") as HTMLFormElement;
    private nameInput = document.getElementById("name_input") as HTMLInputElement;
    private emailInput = document.getElementById("email_input") as HTMLInputElement;
    private messageInput = document.getElementById("message_input") as HTMLInputElement;


    constructor() {
        this.form.addEventListener("submit", this.init);
    }

    private init = async (event: Event): Promise<void> => {
        event.preventDefault();
        const target = event.target as HTMLFormElement;
        
        const data: FormFormat = {
            name: this.nameInput.value.trim(),
            email: this.emailInput.value.trim(),
            message: this.messageInput.value.trim()
        };

        if (!this.validateForm(data)) return;
        
        try {
            const response = await fetch(target.action, {
                method: this.form.method,
                body: JSON.stringify(data),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                this.form.reset();
                this.showSnackbar("Your email has been sent successfully!");
            } else {
                this.showSnackbar("Sorry, something went wrong. Please try again.");
            }
        } catch(error) {
            this.showSnackbar("An unexpected error occurred. Please try again.");
        }
    }

    private validateForm(data: FormFormat): boolean {
        if (!data.name || !data.email || !data.message) {
            this.showSnackbar("Please fill in all required fields.");
            return false;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(data.email)) {
            this.showSnackbar("Enter a valid email address.");
            return false;
        }

        return true;

    }

    private showSnackbar(message: string): void {
        new SnackbarJS().showSnackbar(message);
    }
}

new Contact();