---
title: ASL Tab
description: A browser extension that helps you learn a little American Sign Language (ASL) every time you open a new tab.
date: 2019-01-16
image: /asl-tab-icon.png
colors: {
  primary: '#FFFFFF',
  secondary: '#000000',
}
projectType: Browser Extension
technologies:
  - HTML
  - CSS
  - JS
  - YouTube APIs
  - AWS Lambda
links:
  - text: Download for Chrome
    url: 'https://chrome.google.com/webstore/detail/asl-tab/bjiakmejoofpfclmopcfpkopmamecnkd'
  - text: Front-end Repository
    url: 'https://github.com/missmatsuko/asl-tab'
  - text: Back-end Repository
    url: 'https://github.com/missmatsuko/asl-tab-api'
featured: true
layout: layouts/portfolioItem.njk
---
## Summary

ASL Tab is a browser extension that helps people learn American Sign Language (ASL) as they browse the web. Whenever a new tab is opened, a random YouTube video from [LifePrint/ASLU/Dr. Bill Vicars](https://www.lifeprint.com/) plays in the browser. Each video is just a few seconds long, so it's easy to take a moment and learn a new sign or phrase.

## Inspiration

I volunteer occasionally at [Canada Learning Code](https://www.canadalearningcode.ca) (formerly Ladies Learning Code). One day, I decided to mentor a full-day workshop on browser extensions even though I'd never built one before. I'd been working as a front-end developer for over a year, so I expected my JavaScript experience would be sufficient. I spent some time before the workshop reviewing the workshop course materials and browser documentation for creating browser extensions.

The workshop was a success, and I became more interested in how browser extensions are built. I just had to think of an idea for a first browser extension that was both simple _and_ useful.

I'd been learning ASL at [Queer ASL](http://www.queerasl.com/) and often referred to Dr. Bill's videos. Since his videos are very short, I thought that playing a random video of his would be a great way to build ASL vocabulary.

<!--
## Development
I decided to pull videos from his YouTube channel since YouTube has APIs and his website's content is less structured and doesn't have an API (i.e. crawling it would've been a nightmare). During development, though, I found that YouTube's APIs aren't exactly a dream to work with, either, at least for the functionality of this plugin. At least I didn't have to worry about complex builds and legacy browsers since the extension is only downloadable on modern Firefox and Chrome.

#v1
The \[first version of ASL Tab](https://github.com/missmatsuko/asl-tab/tree/v1.1.0) was built to run with entirely client-side code.

Surprisingly, YouTube provides no APIs to play a single random video from a playlist or channel.

I managed to accomplish this by embedding a playlist video of Dr. Bill's youtube videos and setting the index parameter in the video URL to a random number within the total number of videos in the channel. This was a hack since playlist embeds aren't really supposed to go over the most recent 100 videos.

In fact, if you try to use the \[\`playVideoAt\` function](https://developers.google.com/youtube/iframe_api_reference#playVideoAt) provided by YouTube Iframe Player API with a number greater than 100, it will end up playing the first video in the playlist.

I was still using the YouTube Iframe Player API to change the playlist embed into a single video embed and to simulate video looping since for some reason playlist embeds can be looped, but single video embeds cannot.

#v2
While v1 worked fine, I wasn't completely happy with it for a number of reasons:
- I didn't want to rely on the hack in v1.
- API calls were made with every new tab load.
- I was publicly exposing a YouTube API key.
- Firefox repeatedly approved and rejected the extension for using third-party scripts (YouTube APIs).

For v2, I created an AWS Lambda function to get information from YouTube's Data API for in Dr. Bill's playlist. This greatly reduced the number of API calls made. Instead of making calls to YouTube every time a new tab opens, the back-end scripts run twice a month. It isn't just a single API call every time the back-end scripts run, though. YouTube only provides about 300 results with pagination, and 50 results without pagination. This stuff isn't documented, but seems to have been happening for a while based on StackOverflow results.

The front-end code now calls a file of video information created by the Lambda function. This file is cached, making it quicker to load videos.

Since I was pulling out \*all\* third-party scripts to appease Firefox, I could no longer use the Iframe Player API to simulate looping single video embeds. I ended up finding another hacky workaround: it's possible to embed a playlist with a single video by setting the embed ID and playlist ID to the video's ID. Since it's possible to loop playlist embeds, and this playlist only contains the video I want to loop, it has the same effect as looping a single video.
-->

## Results

After building the first version of ASL Tab, I shared it with Dr. Bill who then shared it with his ASL learners' Facebook group.

Once it had his approval, I shared it with Queer ASL's Facebook group.

The browser extension was featured in [Canada Learning Code's theme page for February/accessibility](https://www.canadalearningcode.ca/code-can-change-the-world/february/) and newsletter.

The extension now has over 80 users, which is much more than I had expected. I'm so happy to see so many people using my product and learning ASL.
