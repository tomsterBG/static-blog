# My Simple Bilingual Blog

A basic, multi-file HTML & CSS website structure for a bilingual blog, designed for easy manual updates and deployment on GitHub Pages.

## Structure

*   `/index.html`: Landing page for language selection.
*   `/en/`: Contains all English HTML pages.
    *   `index.html`: English homepage (lists posts).
    *   `[post-name].html`: Individual English blog posts.
*   `/bg/`: Contains all Bulgarian HTML pages.
     *   `index.html`: Bulgarian homepage (lists posts).
    *   `[post-name].html`: Individual Bulgarian blog posts.
*   `/assets/css/style.css`: Shared stylesheet for the entire site.
*   `LICENSE`: Contains licensing information.

## How to Add a New Post

1.  **Write Content:** Create a new `.html` file inside the appropriate language folder (e.g., `en/new-post-title.html`).
2.  **Basic HTML Structure:** Start with the basic HTML boilerplate (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`).
3.  **Link CSS:** In the `<head>`, link to the shared CSS file: `<link rel="stylesheet" href="../assets/css/style.css">`.
4.  **Copy Header/Footer:** Copy the HTML code blocks marked `<!-- Standard Header -->` and `<!-- Standard Footer -->` from an existing page (like `en/index.html`) into your new file in the correct places within the `<body>`.
5.  **Update Header Links:** Adjust the links in the copied header's language switcher to point correctly (e.g., link to the *other language version* of *this specific new post* if it exists).
6.  **Add Main Content:** Write your post content within the `<main class="container">` tags. Use standard HTML tags (`<p>`, `<h1>`, `<img>`, `<details>`, `hr.ribbon`, etc.).
7.  **Update Homepage:** Add a link to your new post file in the post list (`<ul class="post-list">`) on the corresponding language's homepage (`en/index.html` or `bg/index.html`).
8.  **Translate (Optional):** Repeat steps 1-7 for the other language, ensuring the `translationKey` (or just manual links between corresponding posts) is updated in the `<head>` or header navigation.

## Deployment to GitHub Pages

1.  Upload the *entire* `simple-bilingual-blog` folder structure (including `en/`, `bg/`, `assets/`, `index.html`, etc.) to your GitHub repository.
2.  Go to Repository Settings -> Pages.
3.  Deploy from your main branch, using the `/ (root)` folder.
4.  Your site will be live at `https://<your-username>.github.io/<repository-name>/`. The landing page will show first.

## License

*   **Code (HTML/CSS):** MIT License
*   **Content (Text):** CC BY-SA 4.0
*   See the `LICENSE` file for details.
