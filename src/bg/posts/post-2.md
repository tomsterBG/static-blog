---
layout: base.njk
title: English Post Two (Hidden & Outdated)
date: 2023-10-20
tldr: Summary of the second post, which is hidden from lists and marked outdated.
tags:
  - hidden
  - outdated
  - another-tag
---

{% set breadcrumbs = [
  { text: 'Home', url: '/' },
  { text: 'EN', url: '/en/' },
  { text: title, url: permalink }
] %}
{% include "header.njk" %} {# Include header for post page too #}

{% if tags contains 'outdated' %}
<div class="callout outdated-callout" onclick="this.classList.toggle('expanded')">
    <div class="callout-title">⚠️ This post is outdated</div>
    <div class="callout-content">
        <p>This content might not be accurate or relevant anymore.</p>
    </div>
</div>
{% endif %}

# English Post Title Two

Content for the second English post.

This post demonstrates the 'hidden' tag (won't appear in lists but is accessible by direct link) and the 'outdated' tag (shows a warning).
