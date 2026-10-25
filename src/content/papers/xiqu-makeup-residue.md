---
tldr: >-
  Chinese opera (Xiqu) performers wear heavy, heavy-metal-laden face paint, and eye makeup they fail to fully remove
  is a leading cause of the skin problems they can control. We built EyeVis, a clip-on phone attachment and app that
  makes leftover eye makeup visible and tracks how long makeup was worn; in a 7-day deployment with 12 performers,
  it helped them remove makeup more thoroughly and made them more aware of their skincare.
abstract: >-
  Chinese traditional opera (Xiqu) performers often experience skin problems due to the long-term use of heavy-metal-laden face paints. To explore the current skincare challenges encountered by Xiqu performers, we conducted an online survey (N=136) and semi-structured interviews (N=15) as a formative study. We found that incomplete makeup removal is the leading cause of human-induced skin problems, especially the difficulty in removing eye makeup. Therefore, we proposed EyeVis, a prototype that can visualize the residual eye makeup and record the time make-up was worn by Xiqu performers. We conducted a 7-day deployment study (N=12) to evaluate EyeVis. Results indicate that EyeVis helps to increase Xiqu performers’ awareness about removing makeup, as well as boosting their confidence and security in skincare. Overall, this work also provides implications for studying the work of people who wear makeup on a daily basis, and helps to promote and preserve the intangible cultural heritage of practitioners.
---

## The problem

Xiqu, Chinese traditional opera, is on UNESCO's list of intangible cultural heritage, and its striking look depends on thick, colorful face paint. That paint contains various heavy metals, and performers wear it for long stretches. Prior surveys found adverse reactions to face paint in 67.7% of performers at one Beijing opera theater, and skin diseases such as erythema and dermatitis in 53% of another sample.

Performers cannot simply stop using face paint; it is the essence of the art form. What they *can* control is how thoroughly they take it off. Makeup left on the skin clogs pores and causes problems like acne and inflammation, yet little was known about how performers actually remove their makeup, or where it goes wrong.

## Research questions

We asked two questions:

1. What are the practices and challenges of makeup removal among Xiqu performers?
2. What features would Xiqu performers find valuable in a system designed to help them remove eye makeup?

## What performers told us

We collected 136 valid responses to an online survey and then interviewed 15 performers in depth. One part of the face stood out. Fourteen of the 15 interviewees said eye makeup is the hardest to remove: several layers of oil-based paint are applied right around the eyes, and the eye socket's curves and wrinkles make it hard to wipe clean.

> "The eyeliner in Xiqu requires the oil-based face paints to be applied inside the eyelashes, very close to the eyes, which makes it difficult to clean them completely." (P5)

Other challenges compounded this:

- **Residue is hard to see.** All 15 relied on subjective checks, looking in the mirror or checking whether the towel still picked up color, and 10 were not entirely confident they had removed everything.
- **Black and pink paints are the worst.** Most (13) use pink and black oil-based paints for eye makeup, and black paint is easy to confuse with eyelashes.
- **Backstage conditions are poor.** Performers often remove makeup at theaters where they must queue for limited space, and dim lighting makes subtle remnants hard to see.
- **Fatigue leads to wearing makeup too long.** Twelve interviewees had experienced skin problems or discomfort after being too exhausted to remove makeup promptly.

We distilled these into six design considerations: focus on the eye area; give an objective, easy-to-compare view of makeup versus no makeup; highlight black and pink paint; be portable, low-cost, and quick to use; provide stable lighting; and show how long makeup has been worn.

## EyeVis

EyeVis has two parts. The first is a small hardware attachment for a phone's front camera: a clip with a 3x macro lens to capture the eye area up close, a rechargeable ring-shaped fill light, and a silicone eye shield that rests against the skin, blocking outside light and keeping the camera at a fixed distance.

<figure>
  <img src="/assets/papers/xiqu-makeup-residue/eyevis-hardware.png" alt="EyeVis hardware: a clip and macro lens, a ring fill light, and a silicone eye shield assembled and attached to a phone's front camera" />
  <figcaption>The EyeVis attachment: a camera lens magnifier (clip and macro lens), a ring fill light, and an eye shield, clipped onto the phone's front camera.</figcaption>
</figure>

The second part is a mobile app. Performers first photograph their bare eyes (open and closed) as a baseline, then record how long they wear their makeup, and after removing it take another photo. The app compares the two with two visualizations. Because real UV light, which makes cosmetic residue glow, can damage the eyes, we built an **HSV-UV simulation** that uses color filtering to show black paint in blue and pink paint in red. A **binary threshold** view instead highlights edges and contours of eyeliner around the eye. A third screen shows a list of past sessions and a line graph of makeup-wearing time across the last five uses.

<figure>
  <img src="/assets/papers/xiqu-makeup-residue/residue-visualization.png" alt="Vision pipeline: the eye is located and cropped, then shown as an HSV-UV simulation with black paint in blue and pink paint in red, and as a binary threshold image" />
  <figcaption>How EyeVis visualizes residue: (A) locate and crop the eye, then (B) the HSV-UV simulation, with black paint in blue and pink paint in red, and (C) the binary threshold view.</figcaption>
</figure>

In a technical evaluation on 259 eye images, the eye-localization step overlapped with hand-labeled eye areas at an average rate of 96.1%, and every visualization method stayed above 80%. Under three lighting conditions (no room light, room light, and sunshine), images taken with EyeVis varied far less than images from a phone camera alone.

## What we found

We then gave EyeVis to 12 performers from Xiqu troupes and academies for 7 days. Each used it at least five times during performances or daily practice, with their own favorite makeup removers.

<div class="stats">
  <div><strong>136 + 15</strong><span>survey responses and in-depth interviews with Xiqu performers</span></div>
  <div><strong>12</strong><span>performers used EyeVis over a 7-day deployment</span></div>
  <div><strong>19.84% → 4%</strong><span>average share of the eye image covered by pink paint residue, daily routine vs. with EyeVis</span></div>
</div>

Participants rated how completely they removed their makeup much higher with EyeVis (median 6) than in their usual routine (median 2), and reported lower effort and frustration. Black paint residue dropped similarly, from 19.48% to 3.63% of the image on average. Being able to see the residue also told them when to stop:

> "With the EyeVis system, I can easily determine when to stop wiping, avoiding over-cleansing and discomfort due to excessive rubbing." (P3)

Participants rated both visualizations highly, with most (10) appreciating the clearer contrast of the binary threshold view. The makeup-wearing time trend was a favorite feature because it made patterns visible:

> "After wearing makeup for three days, I checked the trend feature and realized that I had been applying makeup too frequently, which could lead to skin problems." (P7)

Removal time first rose as participants explored the system and took more care, then fell as they got used to it. Some changed their habits: one participant said that after using EyeVis, "I would subconsciously check to see if it had been removed completely" (P9). Very experienced performers, however, said their routines changed little.

## Takeaway

For people who must wear heavy makeup as part of their work, an objective view of what is left on the skin, plus a reminder of how long it has been there, can turn makeup removal from guesswork into a confident routine. The same portable setup could extend beyond the eye to other areas of the face, to everyday makeup and sunscreen, and to collecting skin images. Supporting performers' skin health is also a way of helping to preserve the art form they carry on.
