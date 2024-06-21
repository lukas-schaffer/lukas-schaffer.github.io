---
title: How i gave the people a voice .. and then heavily policed it.
description: Big brother may not be watching but i sure am
date: 2024-06-04T00:13:45+08:00
tags:
  - blog related
  - coding
---
Welcome the the second installation of a blog where i did not know if i would even post a single entry.
If you're still with me, i'm glad, if you're new, don't worry there isn't much to catch up on, i will make it quick:
1. I set up my blog
<br>
Done.
Like i said, quick.

The next point that was brought up by two readers simultaniously (who i may or may not have asked to proofread and check the website for general faults like some pair of ill-conceived digital plumbers) is the, while functional, still relatively stiff comment system. While Github is a great service (hell, they allow me to host this thing for free with all bells and whistles attached!), for a layperson, creating a github account that is normally connected to their microsoft account and getting put on about 3 email lists is not the ideal workflow for just leaving a comment.

![GIF of the Mario Brothers doing some Plumbing](../attachments/plumbing.gif)
*[Real image of my friends when i asked them to test my website for me]*

So, having explained the general situation, lets work out the scope of the project now. Fun!

## Problems

First up, lets talk about the general problems and why it should normally be impossible to have a working comment-system on this website. After that and a tea-break, lets see how quickly i can make the nigh-impossible possible (if i had a bigger ego, this would have been the tagline of the entire blog).

### Problem Nr.1: This site is about as interactive as a student after a post-exam beer bender
This site, while impressively created by Astro and all its gimmicks (again, big thanks to the entire team that built this impressive piece of software) is by definition a **static** website. This means that everything you see on this site was pre-built on the server that serves you this website and therefore is unable to be changed or interacted with unless you are clever. The big advantages of this are speed and less complexity. Browsers and by that extension, search engines, are very clever and optimize the hell out of serving you a static document that only changes once in a while instead of every time you press a button. Also by pre-rendering everything i don't have to think a lot about how your browser might interpret my blog because everyone gets the same website. It's a win for everybody! (Well, except the guy who wants to build his own comment-system which is nearly the definition of dynamic. But i like the challenge so its okay)

### Problem Nr.2: I have a deadly allergy against spending money and this seems like i would cost money :(
While i know that a lot of things cost money especially things that work like they should without annyoing problems, this is still a hobby blog that does not generate any income, i would quite like to not turn it into a money-dump.

### Problem Nr.3: People on the Internet are mean
I know, i know, this is a broad overgeneralization and i am sure you, currently reading this, are a very pleasant person in real life. But when you give strangers on the internet a way to publish their opinion without the fear of exposing them then you are just asking for the KKK to have their bi-yearly meeting in your comment section. So we somehow need to find a way to moderate a comment section or find a workaround.

![Visual representation of my comment section if i don't find a solution against it](../attachments/fightingTheClan.gif)
[*On an unrelated note, this is also what twitter feels like currently*]

## Solutions

### Solution Nr.1: Nobody ever said comments need to interactive
I got this idea while thinking about the way this websites provides a search function. The index that is build for the search function is completetly pre-built, so there is no dynamic loading *REDACTED* happening while we search, just a bit of script searching for text. So with that idea in mind, my plan is as follows: 
1. A user chooses a temporary name for the comment, gets a number assigned and writes their comment
2. This comment along with their Name and ID gets send to my top secret database and is saved there
3. Every week, when this website builds, the new comments get loaded in from this database and are shown on the site.
I know its cheap and some people wouldn't even call it a workaround because of how crass it is, but i like it and its mine so scamper off back to your land of better ideas that will never get done *because your incessant need for perfection stumps every attempt at a start because life is inherently unoptimized and faulty.* (Can you tell i study psychology?)

### Solution Nr.2: A lot of things are free if you just don't pay for them
Thankfully as this is first and foremost a private blog and my numbers will never even hit three digits, i can most likely scoot by with the free tiers offered by most big software companies. Case in Point, Firebase by Google is a great service that i can use for Firestore, their enterprise grade No-SQL Database that users can use free of charge in free tier. It enables me to save comments to my firestore right from this website, whithout using another server in-between. This is great because adding another moving part to this blog makes it unnessesarily complex when i am saving that complexion for my fun future plans (And oh boy, are they fun).

### Solution Nr.3: But Lukas, Human nature is radically evil!
Yes, i have also read Kant, but i can assure you, there is nothing a bit of software can't fix (okay maybe human nature itself is a bit of a tall order, but stay with me here). We just need to return to our good old friend Google Firebase. They have something called app protect, which already sounds great for us, and wouldn't you know it, they have a free tier! Now we just need to build the comment part, protect it with app protect, send the result to my database, query the comments in the database every time the website builds, and ... oh boy, this was wayy easier in my head. Nevertheless, time to start this wild ride.

![GIF of Spongebob on a very tiny rollercoaster](../attachments/rollercoaster.gif)
[*"Wild ride", he says, fully aware what it looks like to everyone else*]

### Footnote
Ignore my increased usage of the word clever, i have been rewatching Matt Smiths brilliant portrayal of the Doctor in the show of the same name and it has altered my speech patterns temporarily 