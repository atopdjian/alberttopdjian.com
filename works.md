---
layout: default
permalink: /works/
---

<!--
<div class="home">

  <h1 class="page-heading">Posts</h1>

  <ul class="post-list">
    {% for post in site.posts %}
      <li>
        <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>

        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h2>
      </li>
    {% endfor %}
  </ul>

  <p class="rss-subscribe">subscribe <a href="{{ "/feed.xml" | prepend: site.baseurl }}">via RSS</a></p>

</div>
-->

<div class="row">
  {% assign project_order = (site.projects | sort: 'order') %}
  {% for project in project_order %}
    <div class="column small-12 medium-4 tile">
    <a href="{{ project.url | prepend: site.baseurl }}">
      <div class="thumbnail-container hover">
        <img src="../img/thumbnails/{{ project.thumbnail }}" class="thumbnail-image"/>
        <div class="thumbnail-text">
        <span class="thumbnail-header">{{ project.title }}</span>
        <br>
        <span class="thumbnail-tag">{{ project.tag }}</span>
        <br>
        <span class="thumbnail-desc">{{ project.desc }}</span>
        </div>
      </div>
     </a>
    </div>
  {% endfor %}
</div>
