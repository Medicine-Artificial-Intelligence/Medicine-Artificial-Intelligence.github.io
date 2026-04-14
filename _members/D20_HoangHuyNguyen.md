---
layout: page
title: Hoang-Huy Nguyen
description: DCQ2020
img: assets/img/members/D20_HoangHuyNguyen.png
importance: 4
category: "Current members"
website:
github: Nhhuyd20
email: nhhuy.d02@gmail.com
linkedin:
orcid: 0009-0006-6763-5344
related_publications: false
---

<div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path=page.img title=page.title class="img-fluid rounded z-depth-1" caption=page.title %}
    </div>
    <div class="col-sm-2"></div>
</div>

My name is Nguyen Hoang Huy. I have completed my academic program at the University of Medicine and Pharmacy, Ho Chi Minh City. Currently, I am conducting research in cheminformatics with the MedAI team.

<a href="mailto:nhhuy.d02@gmail.com" title="email"><i class="fa-solid fa-envelope"></i> nhhuy.d02@gmail.com</a>

<a href="https://github.com/Nhhuyd20" title="GitHub"><i class="fa-brands fa-github"></i> Nhhuyd20</a>

<a href="https://orcid.org/0009-0006-6763-5344" title="ORCID"><i class="ai ai-orcid"></i> 0009-0006-6763-5344</a>

<h2>Related publications</h2>

{% include bib_search.liquid %}

<div class="publications">

{% bibliography --query @*[author_abbr ^= *Hoang-Huy*] %}

</div>
