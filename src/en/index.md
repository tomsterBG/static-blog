---
layout: base.njk
title: Welcome to My Knowledge Blog
language: en
permalink: /en/ # Sets the URL for this page
---

# Sharing Knowledge & Tested Truths

Welcome! This blog is a space where I share insights gained from personal experience and reflections on timeless principles, often inspired by biblical wisdom tested in daily life.

My goal is to offer practical knowledge in a clear, accessible way.

## Recent Posts

Here are some of the latest thoughts shared:

<ul class="post-list">
{% set posts = collections.posts_en | head(5) %} {# Show latest 5 posts #}
{% for post in posts %}
  <li class="post-list-item">
    <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
    <p class="post-list-meta">
        <time datetime="{{ post.date | date('yyyy-MM-dd') }}">{{ post.date | readableDate }}</time>
        {% if post.data.tags %}
             | Tags:
            {% for tag in post.data.tags %}
                 <span class="tag">{{ tag }}</span>{% if not loop.last %}, {% endif %}
            {% endfor %}
        {% endif %}
    </p>
    {% if post.data.description %}
    <p class="post-list-description">{{ post.data.description }}</p>
    {% endif %}
  </li>
{% else %}
  <li>No posts yet in English.</li>
{% endfor %}
</ul>

<p>Explore more thoughts and topics...</p>
