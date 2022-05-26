//function which removes all text after " "
export function removeAfterSpace(text) {
    return text.substring(0, text.indexOf(" "));
    }



export function showLanguageWithEmoji(language) {

    switch (language) {
        case "en":
            return "English 🇺🇸";
        case "fr":
            return "Français 🇫🇷";
        case "de":
            return "Deutsch 🇩🇪";
        case "it":
            return "Italiani 🇮🇹";
        case "es":
            return "Español 🇪🇸";
        case "ja-Hrkt":
            return "日本 🇯🇵";
        case "ko":
            return "한국어 🇰🇷";
        default:
            return "-";
    }
}