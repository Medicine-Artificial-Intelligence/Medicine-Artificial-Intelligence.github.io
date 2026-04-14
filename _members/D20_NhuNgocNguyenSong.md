---
layout: page
title: Nhu-Ngoc Nguyen-Song
description: DCQ2020
img: assets/img/members/D20_NhuNgocNguyenSong.jpg
importance: 4
category: "Current members"
website:
github: biiu315
email: nsnngoc@ump.edu.vn
linkedin:
orcid: 0009-0009-9764-9677
related_publications: false
---

<div class="row">
    <div class="col-sm-2"></div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path=page.img title=page.title class="img-fluid rounded z-depth-1" caption=page.title %}
    </div>
    <div class="col-sm-2"></div>
</div>

Hello! I’m a pharmacy graduate who realized that instead of only studying successful drugs, it’s sometimes more interesting to study _why things fail_ - and then teach machines to understand that too.

I work in CASP (Computer-Aided Synthesis Planning) and CADD (Computer-Aided Drug Design), exploring how AI can better navigate chemical space. My recent work focuses on building a framework to generate reaction _decoys_, introducing meaningful **negative data** into reaction datasets. In other words, I give models carefully designed “wrong answers” so they can stop being overconfident and start being more accurate.

Moving forward, I’m eager to push further into cheminformatics and integrate more AI into drug design, building models that don’t just predict, but actually _understand_ a bit more of the chemistry behind their decisions.

<a href="mailto:nsnngoc@ump.edu.vn" title="email"><i class="fa-solid fa-envelope"></i> nsnngoc@ump.edu.vn</a>

<a href="https://github.com/biiu315" title="GitHub"><i class="fa-brands fa-github"></i> biiu315</a>

<a href="https://orcid.org/0009-0009-9764-9677" title="ORCID"><i class="ai ai-orcid"></i> 0009-0009-9764-9677</a>

<h2>Related publications</h2>

{% include bib_search.liquid %}

<div class="publications">

{% bibliography --query @*[author_abbr ^= *Nhu-Ngoc*] %}

</div>
