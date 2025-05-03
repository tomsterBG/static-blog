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
*   `LICENSE`: Contains the full text of the GNU GPL v3 License.

## Conventions

### URL Structure ("Pretty URLs")

*   **Goal:** Use the shortest, cleanest URLs possible (e.g., `/en/` instead of `/en/index.html`).
*   **Implementation:**
    *   Name the main HTML file for any directory `index.html`.
    *   When linking internally to a directory's main page, link to the *directory path* (e.g., `../en/` or `../bg/` or `/static-blog/en/`). GitHub Pages automatically serves the `index.html` file within that directory.
    *   Links to specific posts (not in their own directories) will still use the `.html` filename (e.g., `my-post.html`), which is the shortest form in that case.

### Content Style Guide

*   **Capitalization:** Use "sentence case" for titles, headings, and general text. This means:
    *   Capitalize only the first letter of the first word in a sentence or heading.
    *   Capitalize proper nouns (names of people, places, specific entities).
    *   Follow standard grammatical rules for other capitalization needs (e.g., acronyms if necessary).
    *   Avoid "Title Case" where every major word is capitalized.
    *   **Example Heading:** `My first experience testing a principle` (Correct) vs. `My First Experience Testing a Principle` (Incorrect).

### Header & Footer Consistency

*   The HTML comment blocks `<!-- ======== START: Standard Header ======== -->` and `<!-- ======== START: Standard Footer ======== -->` contain the standard header and footer code.
*   **Crucially, you MUST copy these exact blocks into every new HTML page** you create within the `en/` and `bg/` folders to maintain consistent navigation and branding.
*   Remember to update the language switcher links within the copied header to point to the correct corresponding page in the other language.

## How to Add a New Post

1.  **Write Content:** Create a new `.html` file inside the appropriate language folder (e.g., `en/new-post-title.html`).
2.  **Basic HTML Structure:** Start with `<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`.
3.  **Link CSS:** In `<head>`, link: `<link rel="stylesheet" href="../assets/css/style.css">`.
4.  **Copy Header/Footer:** Copy the standard header/footer blocks from an existing page into your new file.
5.  **Update Header Links:** Adjust language switcher links in the header. Add `<link rel="alternate">` in the `<head>` if a translation exists.
6.  **Add Main Content:** Write your post within `<main class="container">`, using semantic HTML. Apply the writing style conventions.
7.  **Update Homepage:** Add a link to your new post on the corresponding language's `index.html` page (`en/index.html` or `bg/index.html`).
8.  **Translate (Optional):** Repeat for the other language.

## Deployment to GitHub Pages

1.  Upload the *entire* folder structure to your GitHub repository (`static-blog`).
2.  Ensure GitHub Pages is configured to deploy from the correct branch (e.g., `main` or `master`) using the `/ (root)` folder.
3.  Your site will be live at `https://<your-username>.github.io/static-blog/`.

## License

*   All code (HTML/CSS) and content (text) in this repository are licensed under the **GNU General Public License v3.0**.
*   See the `LICENSE` file for the full license text.
