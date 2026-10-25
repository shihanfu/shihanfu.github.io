---
tldr: >-
  Xiqu (Chinese opera) eye makeup is intricate, and video tutorials can't adapt to each learner's face. We interviewed
  12 Xiqu artists and built OperARtistry, an AR app that overlays step-by-step guide lines on the learner's own face
  in real time. In a first study with 6 participants, they rated it higher than a video tutorial on every measure.
abstract: >-
  Chinese Traditional Opera (Xiqu) is an important type of intangible cultural heritage and one key characteristic of Xiqu is its visual effects on face achieved via makeup. However, Xiqu makeup process, especially the eye-area makeup process, is complex and time-consuming, which poses a learning challenge for potential younger inheritors. We introduce OperARtistry, an interactive application based on Augmented Reality (AR) that offers in-situ Xiqu makeup guidance for beginners. Our application provides a step-by-step guide for Xiqu eye-area makeup, incorporating AR effects at each stage. Furthermore, we conducted an initial user study (n=6) to compare our approach with existing video-based tutorials to assess the effectiveness and usefulness of our approach. Our findings show that OperARtisty helped participants achieve high-quality eye-area makeup effects with less learning time.
---

## The problem

Xiqu, Chinese traditional opera, is recognized by UNESCO as intangible cultural heritage, and much of its power comes from the performer's face. Exaggerated, colorful makeup makes characters easy for the audience to recognize, and painted symbols and lines signal a character's personality, status, and age. Getting it right is hard: Xiqu uses its own brushes and grease paints, follows a strict order of steps, and must be adapted to the shape of each performer's face.

For young people who want to carry the art form forward, the most common way to learn is through short video tutorials on social media. But videos are not interactive and cannot account for the learner's own facial features, so beginners are left guessing and learning by trial and error.

## The idea

Augmented reality (AR) can overlay digital content onto the real world, for example drawing guide lines directly onto your face in a live camera view. We asked three questions: What makes learning Xiqu makeup challenging? How should an AR-based approach be designed to address those challenges? And how does it compare to video tutorials for beginners?

## What Xiqu artists told us

We interviewed 12 Xiqu artists with a wide range of experience across opera types including Beijing, Cantonese, and Kunqu opera. Four lessons shaped our design:

- **Order matters.** Unlike everyday makeup, Xiqu makeup follows a fixed sequence; for example, oil paint must go on before eyeshadow powder, or the makeup comes off easily.
- **The eyes are the hardest part.** Ten of the 12 rated eye-area makeup as the most challenging step, because of the eye's sunken shape and the need for near-perfect symmetry.
- **Tools and colors are specialized.** The right brush and color choices are key to presenting a character.
- **Every face is different.** Some artists adjust their makeup to their own features, for instance to make their eyes appear larger.

> "Creating symmetrical eyeliner in the precise area requires much practice and patience. Eye makeup, in particular, is the most intricate part of the process due to its multi-layered nature and the need for various shades of cosmetics." (P8)

We turned these into four design considerations: present the tutorial step by step, offer more help for the eyes, specify the tools and colors for each step, and adapt to each person's facial features.

## OperARtistry

OperARtistry is a web-based AR app focused on eye-area makeup. We broke professional makeup artists' process down into nine steps: four layers of blush rouge, setting powder, two layers of eyeshadow rouge, and upper and lower eyeliner. Each step names the exact brush and numbered paint to use and draws **auxiliary lines** on the learner's face showing where to apply it.

<figure>
  <img src="/assets/papers/operartistry/tutorial-interface.png" alt="OperARtistry tutorial page: a live camera view of a learner applying eyeliner with red AR guide shapes over the eyes, step instructions at top left, and flip, AR on/off, and debug buttons at top right" />
  <figcaption>The tutorial page. The live AR camera sits in the center, with the current step and tools at top left, buttons to flip the camera, turn AR effects on or off, or show the face mesh at top right, and previous/next step buttons at the bottom.</figcaption>
</figure>

To make the guides follow each learner's face, the app detects 468 facial feature points in real time using Google's FaceMesh model. We draw each step's colored pattern on a flat 2D map of those points, then map it back onto the 3D face in the live camera view. A **flip** button mirrors the camera to help check symmetry, and an **on/off** switch hides the overlay so the screen works like a mirror.

## How we evaluated it

Six participants (aged 22–28) who were interested in Xiqu, ranging from makeup novices to proficient, each did the eye makeup twice: once with OperARtistry and once with a video tutorial from professional Xiqu makeup artists, in a counterbalanced order. They then rated the result on color, shape, speed, effect, and similarity to the reference on a 1–5 scale, and we interviewed them about the experience.

## What we found

<div class="stats">
  <div><strong>12</strong><span>Xiqu artists interviewed about how they learned and apply makeup</span></div>
  <div><strong>6</strong><span>participants interested in Xiqu compared OperARtistry with a video tutorial</span></div>
  <div><strong>3.83 vs 3.00</strong><span>average speed rating for AR vs. video, the largest gap of the five ratings</span></div>
</div>

On average, participants rated OperARtistry higher than the video tutorial on all five measures, from color (3.17 vs 3.00) and shape (3.17 vs 2.67) to effect and similarity (3.67 vs 3.00 each). Interestingly, the biggest gap was in perceived speed, even though participants actually spent longer on average with AR (535.83 s vs 398.83 s). In interviews, they explained that the detailed instructions made them pay more attention to details, and that the process felt smoother. Five of the six said having clear, numbered steps made the process more fluid:

> "The clarity of knowing which cosmetics to use at each step and where to apply them precisely enhances the overall flow of the makeup process." (P5)

Participants appreciated the auxiliary lines for showing exactly where color should go, and liked not having to pause and scrub through a video. They also pointed out limits. Lines could block their view of the brush during eyeliner, and without seeing what each step should look like when finished, one participant felt overly dependent on the guidance:

> "I may have become overly dependent on AR. While I follow the instructions for each step, I don't have a clear understanding of how the final outcome of each step should appear, making it difficult for me to make effective adjustments." (P3)

## Takeaway

AR can turn a complex, hard-to-teach craft into guided, personalized practice on the learner's own face, which may lower the barrier for younger people to take up Xiqu. Our study is small and early, and points to clear next steps: show a preview of each step's intended result, let users adjust the guide points to fit their face, support better lighting, and extend the approach from the eyes to the whole face.
