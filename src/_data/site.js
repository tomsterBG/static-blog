module.exports = {
  title: "My Knowledge Blog", // Your site title
  author: "Your Name",
  // Use environment variable for base URL in production, fallback for local dev
  url: process.env.URL || "http://localhost:8080",
  languages: [
    {
      label: "English",
      code: "en",
    },
    {
      label: "Български", // Bulgarian
      code: "bg",
    },
  ],
  // Placeholder for analytics script (GoatCounter example)
  // Replace with your actual code if you use it
  // analytics: `<script data-goatcounter="https://YOURCODE.goatcounter.com/count" async src="//gc.zgo.at/count.js"></script>`,
  analytics: `<!-- Analytics placeholder -->`,
  // Placeholder for comments script (Giscus example)
  // Configure this per the Giscus documentation
  // comments: `
  //   <script src="https://giscus.app/client.js"
  //           data-repo="YOUR_GITHUB_USERNAME/YOUR_REPO_NAME"
  //           data-repo-id="YOUR_REPO_ID"
  //           data-category="Announcements"
  //           data-category-id="YOUR_CATEGORY_ID"
  //           data-mapping="pathname"
  //           data-strict="0"
  //           data-reactions-enabled="1"
  //           data-emit-metadata="0"
  //           data-input-position="top"
  //           data-theme="light" // Or your preferred theme
  //           data-lang="en"    // Or detect language
  //           crossorigin="anonymous"
  //           async>
  //   </script>
  // `,
  comments: `<!-- Comments placeholder (e.g., Giscus script goes here) -->`
};
