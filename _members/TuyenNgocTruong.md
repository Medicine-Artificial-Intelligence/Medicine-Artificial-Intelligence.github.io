---
layout: page
title: Tuyen Ngoc Truong
description: Associate Professor - Head of Department of Organic Chemistry
img: assets/img/members/TuyenNgocTruong.jpg
importance: 1
category: Supervisors
website:
github:
email: truongtuyen@ump.edu.vn
linkedin:
orcid:
related_publications: false
---

<div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path=page.img title=page.title class="img-fluid rounded z-depth-1" caption=page.title %}
    </div>
    <div class="col-sm-2"></div>
</div>

Assoc. Prof. Tuyen Ngoc Truong
Head of Department of Organic Chemistry, School of Pharmacy, University of Medicine and Pharmacy at Ho Chi Minh City (UMP)

<a href="mailto:truongtuyen@ump.edu.vn" title="email"><i class="fa-solid fa-envelope"></i> truongtuyen@ump.edu.vn</a>

<h2>Related publications</h2>

{% include bib_search.liquid %}

<div class="publications">

{% bibliography --query @*[author_abbr ^= *Tuyen-Ngoc*] %}

</div>
