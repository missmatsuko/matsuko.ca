---
templateKey: project
date: 2019-01-16T00:00:00.000Z
title: ASL Tab
description: >-
  A browser extension that helps you learn a little American Sign Language (ASL)
  every time you open a new tab.
thumbnail: /img/flavor_wheel.jpg
projectType: Other
technologies:
  - HTML
  - CSS
  - JS
  - YouTube APIs
  - AWS Lambda
links:
  - text: Download for Chrome
    url: >-
      https://chrome.google.com/webstore/detail/asl-tab/bjiakmejoofpfclmopcfpkopmamecnkd
  - text: Download for Firefox
    url: 'https://addons.mozilla.org/en-US/firefox/addon/asl-tab/'
  - text: Front-end Repository
    url: 'https://github.com/missmatsuko/asl-tab'
  - text: Back-end Repository
    url: 'https://github.com/missmatsuko/asl-tab-api'
---

## Notes
This project's content is unfinished. This is a collection of notes on things to include in the final post.

### Technologies
- YouTube APIs
- AWS Lambda

### Challenges
- Firefox's strict rules on third-party resources
- Hacky/undocumented work-arounds
  - v1 client-side: setting `index` parameter of iFrame could load beyond 100 "allowed", but not when using `playVideoAt`
  - Playlists can be looped via YouTube API, but single videos cannot.
    - v1: Listening to video end and replaying.
    - v2: Embedding playlist with the same video.
  - v2: Can't use iFrame Player API (because Firefox). Can't play/pause video, so embedding with `autoplay` parameter and then replacing iFrame with embed without that parameter.
  - v2: Have to get 50 videos at a time, although this is not documented. Pagination doesn't work for more than 300 or so videos. Have to use another API to get video duration.

### Story
- Learned about browser extensions in prep for mentoring CLC workshop
- Learning ASL
- Content from Dr. Bill, shared with FB
- Now more than 70 users
- Add some screenshots?
- Nice not to have to handle older browsers
