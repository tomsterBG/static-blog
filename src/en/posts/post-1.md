---
layout: base.njk
title: English Post One
date: 2023-10-27
tldr: Short summary of post one.
tags:
  - test
  - example
---

{% set breadcrumbs = [
  { text: 'Home', url: '/' },
  { text: 'EN', url: '/en/' },
  { text: title, url: permalink }
] %}
{% include "header.njk" %} {# Include header for post page too #}


# English Post Title One

This is the first paragraph of the English post.

--- {# Horizontal rule #}

This is the second paragraph with **bold** and *italic* text.

## Section Title

*   List item one
*   List item two

> This is a blockquote.

```javascript
// Code block example
console.log('hello');
```

[Example Link](https://www.google.com/url?sa=E&q=https%3A%2F%2Fwww.example.com)

This post is tagged with: {% for tag in tags | excludeTag('hidden') %}<span class="tag">{{ tag }}</span>{% endfor %}

---
layout: base.njk
title: English Post One
date: 2023-10-27
tldr: Short summary of post one.
tags:
  - test
  - example
---
