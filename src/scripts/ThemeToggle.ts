class ThemeToggle {
    private themeToggeles = document.querySelectorAll('.switch input[type="checkbox"], .theme_toggle') as NodeListOf<HTMLInputElement>;
    private currentTheme = localStorage.getItem("theme");

    constructor() { this.init(); }

    init() {
        if (this.currentTheme) {
            this.setTheme(this.currentTheme);
        } else {
            const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
            const defaultTheme = prefersDarkScheme.matches ? "dark" : "light";
            this.setTheme(defaultTheme);
        }

        this.themeToggeles.forEach(toggle => {
            toggle.addEventListener("change", (e: Event) => {
                const target = e.target as HTMLInputElement;
                const newTheme = target.checked ? "dark" : "light";
                this.setTheme(newTheme);
            });
        });
    }

    private setTheme(theme: string): void {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);

        this.themeToggeles.forEach(toggle => {
            toggle.checked = theme == "dark";
        })
    }

}

new ThemeToggle();