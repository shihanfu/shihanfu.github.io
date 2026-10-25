---
tldr: >-
  Beginners often lose focus when meditating, and most VR meditation apps only offer things to watch and listen to.
  LOOP Meditation adds slow, Tai Chi-inspired hand movements: users guide a ball along an infinity-loop or ellipse path
  paced by on-screen breathing cues. In a small pilot study, novice meditators found it calming and helpful for focusing on their breathing.
abstract: >-
  Virtual reality (VR) and associated technologies have rapidly grew, creating new opportunities for improving mental health. In order to provide an immersive and concentrated meditation experience, this paper offers the idea of VR-assisted meditation, which integrates the advantages of VR technology with mindfulness techniques. The suggested technique, which is known as LOOP Meditation, is mainly aimed toward novice meditators and places a strong emphasis on the value of movement and breath awareness when meditating. Existing VR experiences and meditation applications sometimes ignore the value of including physical movement, which can improve mindful body sensations and maintain interest. By creating a software that incorporates body movement and breath sensing into virtual reality surroundings, LOOP Meditation addresses this gap. The LOOP Meditation design and implementation are examined in this paper along with its possible advantages and consequences for people looking to develop their meditation practice. A pilot research comparing the efficacy of this strategy to conventional meditation techniques is offered. The study’s findings add to the expanding body of knowledge on VR-assisted meditation and demonstrate how it may have a positive effect on mental health.
---

## The problem

Meditation helps people manage stress, focus attention, and stay calm, often by regulating their breathing. For novices, though, it is hard: they tend to disengage and lose focus before reaching a sustained meditative state.

VR seems like a natural fit, since immersion can reduce outside distractions. But popular meditation apps focus mainly on visual and audio guidance, and research systems mostly respond to biosignals such as breathing rate or brain activity, often through expensive external devices. Body movement, which practices like Qigong, Tai Chi, and Yoga combine with meditative attention, is largely missing.

## The idea

We built **LOOP Meditation**, a VR meditation system for novice meditators that makes gentle physical movement part of the practice. It uses focused-attention meditation, where you keep returning your attention to your breath, and draws on Tai Chi's slow, circular movements. Because VR users already hold controllers, we focused on the hands.

## The system

LOOP Meditation runs on an Oculus Quest 2 headset with Touch controllers and was built in Unity. The scene is a calm lakeside surrounded by forest, with soft piano music that also masks background noise. The trees enclose the space to discourage wandering, while staying low enough, with an open sky, that it does not feel confining.

<figure>
  <img src="/assets/papers/loop-meditation/scene-overview.png" alt="Low-poly lakeside VR scene surrounded by trees, with a welcome panel offering the infinity-loop and ellipse movement modes" />
  <figcaption>The lakeside meditation scene, with a welcome panel for choosing between the two movement modes.</figcaption>
</figure>

"Breathing in" and "breathing out" cues appear above the lake in a regular rhythm. Using the controller's ray, the user steers a blue ball along a track, while a white ball moving along the same track sets the pace. We designed two tracks:

- **Infinity loop**, a symbol of continuous flow and balance, which guides users to synchronize their movements.
- **Ellipse**, a simpler shape that reduces the complexity of the movement.

## The pilot study

<div class="stats">
  <div><strong>3</strong><span>novice meditators took part in the pilot study</span></div>
  <div><strong>3</strong><span>conditions: text cues only, text + infinity loop, and text + ellipse</span></div>
</div>

Participants meditated in each of the three conditions, in counterbalanced order, and then took part in semi-structured interviews about the environment, the two kinds of movement, and the pros and cons of each condition.

## What we found

All three participants gave positive reviews, saying the experience reduced their stress and helped them focus on their breathing.

- **Fewer distractions with the loop.** Two participants reported fewer distractions with the infinity loop than with the other conditions. Another felt the shapes helped somewhat more than text, but not by much:

  > "I try to keep my breathing rate during meditation and the images do not have much impact." (P2)

- **Shape matters.** The infinity loop was received positively, though one participant noted that its repetitive, mechanical motion could make them feel lost or fixated on the visuals. The ellipse was described as monotonous, even hypnotic: "it feels like hypnosis." (P2)
- **Variety would keep people longer.**

  > "I think this pattern is interesting, but if there are other more patterns I can stay longer in the environment." (P1)

Participants also suggested different lighting and scenes; one noted that the infinity loop "reminds me of a yin and yang taiji diagram," and wanted to choose between day and night scenes.

## Takeaway

Adding gentle, guided hand movement to VR meditation is a promising way to help beginners stay engaged and attend to their breath, using only a standard headset and controllers. This was a small pilot based on subjective feedback; next steps are more pattern and scene options, user-chosen session lengths, and larger studies with objective measures.
