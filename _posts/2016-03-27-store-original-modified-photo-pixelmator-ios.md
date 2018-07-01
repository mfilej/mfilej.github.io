---
title: Store original and edited as one photo using Pixelmator on iOS
layout: article
category: article
tags: ios
redirect_from: "/store-original-modified-photo-pixelmator-ios"
---

# {{ page.title }}

This article is for you if: you use iCloud Photo Library to store your
photos, you sometimes edit your photos with apps that store the edited
version as a separate image (instead of storing it together with the
original), you are bothered by seeing two almost-identical photos in your
library and you don't want to get rid of the original photo.
{: .intro}

Given a certain amount of self-diagnosed OCD, it's likely that one would be
bothered by having two almost-identical images in Photo Library. I know I am.

Why would I want to keep both images? Well, I have zero confidence in my photo
editing abilities. When I look at my photos that I edited two or more years
ago, I often think: "You should've gone easier on the editing, dummy!"[^editing]

<figure class="full-width image-collection">
  <ul>
    <li><img src="/assets{{ page.id }}/over-edit-example-1.jpg" alt="Terschelling, The Netherlands"></li>
    <li><img src="/assets{{ page.id }}/over-edit-example-2.jpg" alt="Egmond aan Zee, The Netherlands"></li>
    <li><img src="/assets{{ page.id }}/over-edit-example-3.jpg" alt="Copenhagen, Denmark"></li>
  </ul>
  <figcaption>
    A few examples of over-edited photos. I wish I still had their originals.
  </figcaption>
</figure>

In recent versions, iCloud Photo Library will preserve the original photo
alongside the edited version, so if you edit using Photos.app or another app
that supports these iCloud APIs, your library will be neat and tidy. Sadly a
lot of the popular apps still haven't put a lot of thought in
this[^vsco-rant], so unless you are willing to get rid of the original
(:fearful:), you are bound to live with some duplication.

Wouldn't it be great if we could merge the two photos back together and let
Photo Library keep the original for us? Whether it's because of my poor
googling skills or lack of patience, I wasn't able to find an app that would
offer this functionality---until I remembered I already have one: [Pixelmator
for iOS][pixelmator-ios].

I love Pixelmator. On the Mac I don't need Photoshop (nor do I have the
patience to suffer Adobe's software updater and everything that comes with
it). I bought the iOS version of Pixelmator when it came out mostly because I
wanted to support its developers. However I did find it useful at times and
this allowed me to notice it has an option to save an image *in-place*.

I quickly figured out how one can take advantage of this feature to merge an
edited photo together with its original. In this example I have an original
photo and its black and white version. [^bw] I'd like them to appear as one
photo in the library.

<figure class="full-width screenshot">
  <img src="/assets/{{ page.id }}/photo-library-start.png" alt="We'd like these two photos to show as one">
</figure>

These are the steps: start by launching Pixelmator. You want to start a new
document based on an image from you Photo Library. Then create another layer,
again from your Photo Library (if the modified image is smaller than the
original, you will need to use the crop tool to adjust the canvas). Tap the
share icon and choose Save to Photos, then confirm by clicking Modify.

<figure class="full-width image-collection screenshot">
  <ul>
    <li><img src="/assets{{ page.id }}/pixelmator-step-1.png" alt="Start a new Pixelmator document from a photo (the original version)"></li>
    <li><img src="/assets{{ page.id }}/pixelmator-step-2.png" alt="Add a layer from a photo (the modified version)"></li>
    <li><img src="/assets{{ page.id }}/pixelmator-step-3.png" alt="Tap the share icon and choose Save to Photos"></li>
    <li><img src="/assets{{ page.id }}/pixelmator-step-4.png" alt="Confirm"></li>
  </ul>
  <figcaption>The procedure in pictures.</figcaption>
</figure>

After completing the procedure in Pixelmator, go back to Photos. Both
photos should now look the same at first sight. However if you try to Edit,
tapping and holding on the photo will reveal the original version.

<figure class="center screenshot">
  <img src="/assets{{ page.id }}/photo-library-final.gif" alt="Final result" width="500" height="375">
  <figcaption>Reveal original by tapping and holding.</figcaption>
</figure>

The other photos can now be removed. Our Photo Libraries are nice and tidy
again. Thanks, Pixelmator! :muscle: :sparkling_heart:

[^editing]: With time I learned to choose a setting I find aesthetically pleasing and scale it back 20--30% to maximize the chance I'm still going to like the photo in a couple of years, but still…
[^vsco-rant]: How about that [iOS 8 Photo Extension][vsco-faq], VSCO?
[^bw]: I know nothing about black-and-white photography.

[vsco-faq]: https://support.vsco.co/hc/en-us/articles/203001254-VSCO-x-iOS-Where-is-the-iOS-8-Photo-Extension-
[pixelmator-ios]: http://www.pixelmator.com/ios/
