---
title: "GO Transit #EtiquetteFail"
description: Landing page to promote GO Transit's book on transit etiquette.
date: 2018-01-17
image: go-transit-etiquette-fail-book.png
colors: {
  primary: '#000000',
  secondary: '#CBE3D2',
}
projectType: Landing Page
technologies:
  - HTML
  - CSS
  - SCSS
  - JS
  - Twig
  - Gulp
links:
  - text: Live Site - English
    url: 'https://www.gotransit.com/etiquettefail/'
  - text: Site Live - en Français
    url: 'https://www.gotransit.com/manquedebienseance/'
featured: true
layout: layouts/portfolioItem.njk
---

## Summary
[GO Transit](https://www.gotransit.com/) is the regional public transit service for the Greater Toronto and Hamilton Area in Ontario, Canada. Together with [DDB Canada](https://www.ddb.ca/), they produced a book of "transit etiquette fails" entitled "Unwritten Rules of Transit Etiquette Written Down" (and in French, "<span lang="fr">Règles de bienséance non-écrites-maintenant-écrites en transport en commun</span>"). The book is a compilation of "etiquette fails" suggested by GO Transit riders.

This landing page was created to promote the book, which is available in both print and PDF formats, and in both official languages of Canada (English and French).

I was the lead developer on this project, which involved setting up a [Gulp](https://gulpjs.com/) front-end build process to generate static HTML files for the client to host.

## Highlights

### Fully responsive
I carefully coded the markup and styles so the page content displays well at common screen sizes, and in-between, too.

![Above-fold screenshots of the #EtiquetteFail landing page at desktop, tablet, and mobile sizes.](./assets/go-transit-etiquette-fail/responsive.png)

### Translatable
I set up the build process to handle any number of languages, although only two were needed for this particular project.

Since the client didn't expect content changes after launch, the content is editable through static data files rather than a CMS.

I carefully coded the page so variations in text length would not break its layout and design.

![Food, noise, and share sections of the #EtiquetteFail landing page in English and French.](./assets/go-transit-etiquette-fail/translatable.png)

### Sharable
The page contains several social share buttons, which prompt the user to share the #EtiquetteFail landing page on their Twitter or Facebook accounts. It was requested that each share button share different content, based on the content in its section. I managed to find a way to make that functionality happen for Twitter while respecting their policies and APIs.

![A Twitter share card for the #EtiquetteFail landing page.](./assets/go-transit-etiquette-fail/sharable.png)
