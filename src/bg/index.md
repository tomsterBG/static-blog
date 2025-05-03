---
layout: base.njk
title: Добре дошли в моя блог за знание
language: bg
permalink: /bg/ # Sets the URL for this page
---

# Споделяне на знание и изпитани истини

Добре дошли! Този блог е място, където споделям прозрения, придобити от личен опит и размисли върху вечни принципи, често вдъхновени от библейска мъдрост, изпитана в ежедневието.

Целта ми е да предложа практическо знание по ясен и достъпен начин.

## Последни публикации

Ето някои от последните споделени мисли:

<ul class="post-list">
{% set posts = collections.posts_bg | head(5) %} {# Show latest 5 posts #}
{% for post in posts %}
  <li class="post-list-item">
    <h2><a href="{{ post.url }}">{{ post.data.title }}</a></h2>
    <p class="post-list-meta">
        <time datetime="{{ post.date | date('yyyy-MM-dd') }}">{{ post.date | readableDate('dd LLLL yyyy', 'bg') }}</time> {# Specify locale for date #}
        {% if post.data.tags %}
             | Тагове:
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
  <li>Все още няма публикации на български.</li>
{% endfor %}
</ul>

<p>Разгледайте повече мисли и теми...</p>
