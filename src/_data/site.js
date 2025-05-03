module.exports = {
  // Update these values!
  title: "My Knowledge Blog", // Used in <title> tags and header
  author: "TomsterBG", // Used in footer copyright
  baseURL: "/static-blog", // The base path on GitHub Pages (your repo name)
                          // Use "" if deploying to <username>.github.io root
  currentYear: new Date().getFullYear(),
  languages: [
    { code: "en", label: "English", flag: "🇬🇧", // Or "🇺🇸"
      locale_GPL: "en" }, // language code for GPL link if needed
    { code: "bg", label: "Български", flag: "🇧🇬",
      locale_GPL: "bg" }, // Bulgarian GPL link exists
  ],
  // You can add more global data here if needed
};
