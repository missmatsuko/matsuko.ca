---
title: Hearing-centric UX in video chat apps
description: Some hearing-centric design choices in video chat apps that make it harder to use unless relying on auditory communication.
date: 2020-05-03
image:
  path: /laptop-talking-hands.jpg
  alt: Man with tattooed arms balancing a laptop on his lap with one hand, with his other hand slightly raised. His face is hidden.
  width: 1200
  height: 800
  caption: '<a href="https://unsplash.com/photos/Rx_ItZAek_Q" target="_blank" rel="nofollow noopener">Photo by Oleg Ivanov on Unsplash</a>'
---

<!--
TODO:
- change date
- update heading texts
- add screenshots to items in "the list"
- proofread/edit/grammars
-->

**Note: If you are not familiar with Deaf and hard of hearing (DHH) culture, you may want to read [Deaf 101 by the Hearing, Speech & Deaf Center (HSDC)](https://www.hsdc.org/services/deaf-101/) first.**

## Introduction

Around mid-March, the COVID-19 pandemic started to really affect life here in Vancouver. Within the span of a few days, we went from business as usual to the shut-down of most of the city's public spaces.

This was a challenge for the ASL (American Sign Language) practice [Meetup](https://www.meetup.com/) I help organize, [ASL Social and Practice](https://www.meetup.com/ASL-Social/). Up until this point, we had been meeting in person at a public library. For the health and safety of our participants, and since more and more potential venues were shutting down anyway, we decided to look at whether it'd be feasible to move our Meetup online.

You might have expected that since sign languages are so visual, they would be well-suited for a visual format such as video. While video chat technology has made it possible to communicate in sign language online, it is no replacement for conversing in-person. Since ASL is a 3D language, certain aspects of the language cannot be preserved in a 2D format.

With this in mind, three of us from the ASL practice group tested out the following video chat apps:
- [Discord](https://discordapp.com/)
- [Google Hangouts](https://hangouts.google.com/)
- [Google Meet](https://meet.google.com/)
- [Houseparty](https://www.houseparty.com/)
- [Jitsi Meet](https://meet.jit.si/)
- [Skype](https://www.skype.com/)
- [Zoom](https://zoom.us/)

As expected, we did experience more difficulties communicating in sign language through video than in person. For example, it was tricky to get a particular person's attention, which we typically do by waving towards them and making eye contact. It's just not possible on video since there's no way to position ourselves in relation to others (unless everyone's got their own [MVPD](https://bigbangtheory.fandom.com/wiki/Mobile_Virtual_Presence_Device), that is).

While some issues were unavoidable due to the nature of the video format, there were additional difficulties stemming from the apps' designs. Like most things in the world, video chat apps were created for the hearing. If DHH been considered while designing the app, these issues would likely not exist.

<!-- TODO: work on this bit? -->
For the remainder of this blog post, I will list and describe UX patterns commonly found in video chat apps that make it more difficult to communicate without relying on audio. It is important to note that these issues were discovered during ASL practice with mostly hearing participants, and do not represent the DHH experience. At the same time, many of these design choices would have an impact on communicating with signing, lip reading, or when there's audio quality issues.

By the way, we ended up settling on Jitsi Meet for now, although Google Meet is quickly becoming a good contender with all the features they've started rolling out.

<!-- TODO: more descriptive heading...? -->
## UX patterns

### Text chat interface obstructs video

![Screenshot of a text chat interface covering up a video. In the video, only some hair and part of a headset is visible. The text chat reads: 'Hey can you see me?' and a reply: 'Not with the text chat open!'](./assets/hearing-centric-ux-in-video-chat-apps/google-meet-text-chat-obstructs-video.png)

Many video chat applications have a basic text chat feature participants can use to converse through text-based messages. This can be handy for sharing links, troubleshooting audio-video issues, and having side conversations. It's one tool DHH can use to communicate with the hearing. In our ASL practice Meetup, it's also been useful for explaining things when we have difficulty communicating through signing alone.

Unfortunately, the text chat interface often obstructs videos when in use. This makes it difficult, or even impossible, to see someone's reaction to messages. This kind of visual feedback can be critical when communicating without sound to know if a message has been understood.

### Screensharing disables video

![Screenshot of a message above a disabled camera button, reading: 'Your video has been disabled because you started screensharing.'](./assets/hearing-centric-ux-in-video-chat-apps/skype-video-disabled-when-screensharing.png)

People share their screen in a video meeting for a number of reasons. For example: to present a slide deck, to share a video, or to demonstrate how an application works.

In some video chat apps, when someone shares their screen, their camera is forced to be disabled. That means nobody in the video meeting can see the presenter. In some cases, the shared screen will take over the whole video meeting, disabling everyone's cameras.

This design choice assumes that the presenter is speaking, and the audience is hearing.

<!--
  Maybe add another image here?
  An illustration maybe?
-->

What if the presenter were non-speaking? They wouldn't be able to communicate by signing, since nobody can see them. An interpreter may be able to speak for them, but since the presenter's video is not visible, the interpreter would have to physically be with the presenter. The presenter may be able to communicate to their audience via a text chat. This is not a very practical solution, since the presenter will have to go back and forth between their shared screen and the text chat. It would be especially difficult if the presenter has a lot to talk about, like when presenting a slide deck.

What if the audience were not hearing? They would not be able to watch the presenter for lip reading or signing, since their camera has been disabled. If everyone's cameras have been disabled, they would not be able see them for lip reading or signing, either. If the presenter is speaking, captions may be helpful.

<!--
  Combine next 2?
-->

### Video too small for signing or lip reading

![Screenshot of a video chat where there's one large video at the top and several small videos below it.'](./assets/hearing-centric-ux-in-video-chat-apps/discord-one-featured-video-rest-small.png)

In some video chat layouts, one video is "featured" and shown at a large size, while the rest are shown at smaller sizes. This does not have much of an effect on speaking-hearing conversations, since video dimensions don't have any affect on audio quality. However, if the videos are too small to clearly see signing, facial expressions, and mouth shapes, it can make signing and lip reading impossible. This is essentially the hearing equivalent of muting everyone's microphones except for the one featured person's microphone.

### Featuring video based on audio

<!--
  Add screenshot?
  Could be same as previous.
-->

This issue is related to the previous one in that it also involves the one large featured video layout. Typically, the featured participant is the one that is making the most noise. This works so-so for speaking-hearing conversations, since participants can see and listen to the current speaker. It doesn't work that well when more than one person is speaking at a time, or if there's background noises. Additionally, when communicating in sign language, focusing on the person that is making the most noise might swap out someone that is actively signing for someone that is passively watching and happens to be audibly reacting to them. It might be nice to have an option to feature the video that has the most movement.

### Limiting video

<!--
  Get screenshot from...?
-->

Some apps will display a subset of videos at a time, even if more videos could potentially fit on the screen. This doesn't affect hearing-speaking communication much, since a person's audio can still be heard even when their video is not visible. For signing or lip reading, though, hiding videos off-screen is essentially the equivalent or muting them.

### Video cropping

![Mobile and desktop screenshots of a video meeting with 3 participants. The mobile layout has 2 equal-width videos on top, and 1 full-width video at the bottom. On desktop, there 3 equal-width videos. On mobile, the woman in the bottom, wider video can be seen holding her hands up next to her. On desktop, her arms are not visible.](./assets/hearing-centric-ux-in-video-chat-apps/houseparty-cropped-videos.png)

The captured video's dimensions will be different for every camera. Video meeting apps will generally crop the displayed videos so they all display at the same aspect ratio and lay out nicely. The crop can also vary depending on the type of device it's displayed on, so what someone sees on their video may not match what is shown to another person. This doesn't affect lip reading much, since people's faces will likely be centered and in-view regardless of the crop. It can have a huge impact on signing, though. A signer will use up the space available to them, and a lot of their signing could end up being hidden from others. The most extreme example would be cropping a horizontal video (e.g. from a desktop) to a vertical video (e.g. to a smartphone).

### Video quality issues

<!--
  Get screenshot from Discord...?
-->

We've all been annoyed by video quality issues like freezing, lagging, blurring, and pixellation. These types of issues have a significant impact on non-auditory communication. While hearing-speaking conversations can still continue (so long as audio isn't also affected), lip reading and signing can be severely hampered. These types of issues can't all be fixed by the app, but some apps tend to have fewer issues than others.

### Captioning availability and quality

<!--
  Get screenshot from Jitsi...?
  - Some apps don't attribute captions to specific people (Google Meet is ok, try a diff one)? In this case, might not be able to tell who is speaking.
-->

Some video chat apps don't have a captioning feature at all. Many do now have captioning, but the captions quality can vary. Some apps will allow manual captioning, which is generally more accurate (and costly) than automatic captioning. Captions are beneficial for DHH observing a speaking presenter. In some cases, an interpreter may be more beneficial, especially if there is 2-way communication.

### Getting someone's attention

<!--
  Get screenshot... of what?
  TODO: expand this more...?
-->

There are [a number of ways to get a Deaf person's attention](https://www.lifeprint.com/asl101/topics/attention_getting_techniques.htm), and most of these don't work well in a video format. Flailing on video might get their attention, but they may be too focused on another video to notice, or they may not realize it's meant to grab their attention specifically. Pinging them through text chat might work. It would be nice if there were some way to highlight a video for specific people.

### Referring to someone else

<!--
  Get screenshot... of what?
  TODO: expand this more...?
-->

When we refer to someone that is present in sign language, we can usually just point at them. In a video chat, pointing is pretty meaningless. There's no way to tell who someone is pointing at, especially if everyone's video order is different. We can adjust our communication style to use people's names, but many beginner's names can be a hassle to spell out.
