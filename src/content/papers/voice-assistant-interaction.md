---
tldr: >-
  People talking to an LLM-based voice assistant while cooking don't just speak to it: they look at it, lean in,
  gesture, and raise their voice, even though it cannot see them. From video of 12 participants, we built a framework
  that links these verbal and nonverbal behaviors to three interaction stages (exploration, conflict, integration) and
  the transitions between them.
abstract: >-
  Recent progress in large language model (LLM) technology has significantly enhanced the interaction experience between humans and voice assistants (VAs). This project aims to explore a user's continuous interaction with LLM-based VA (LLM-VA) during a complex task. We recruited 12 participants to interact with an LLM-VA during a cooking task, selected for its complexity and the requirement for continuous interaction. We observed that users show both verbal and nonverbal behaviors, though they know that the LLM-VA can not capture those nonverbal signals. Despite the prevalence of nonverbal behavior in human-human communication, there is no established analytical methodology or framework for exploring it in human-VA interactions. After analyzing 3 hours and 39 minutes of video recordings, we developed an analytical framework with three dimensions: 1) behavior characteristics, including both verbal and nonverbal behaviors, 2) interaction stages--exploration, conflict, and integration--that illustrate the progression of user interactions, and 3) stage transition throughout the task. This analytical framework identifies key verbal and nonverbal behaviors that provide a foundation for future research and practical applications in optimizing human and LLM-VA interactions.
---

## The problem

Voice assistants like Alexa and Siri mostly work by matching a request to a predefined intent and replying with a predefined response. That is fine for checking the weather, but it breaks down in complex, multi-turn tasks. Large language models make much more fluid, human-like conversations possible, which raises a new design question: how should people and LLM-based voice assistants (LLM-VAs) interact during a long, hands-on task?

In conversations between people, nonverbal cues such as eye contact, gestures, tone, and posture often reveal more than words alone. Studies of voice assistants, however, have mostly ignored these cues or examined one at a time (for example, only gaze). There was no systematic way to analyze verbal and nonverbal behavior together as an interaction with an LLM-VA unfolds.

## The idea

We chose cooking as our setting: it is complex, it needs extended back-and-forth with the assistant, and because people's hands are busy, it invites nonverbal behavior. We observed how people actually talked to, looked at, and moved around an LLM-VA while preparing a recipe, and used what we saw to build an **analytical framework** for human–LLM-VA interaction.

## How we studied it

Twelve participants made a chicken mango avocado salad in the fully equipped kitchen of a smart home lab, with help from **Mango Mango**, an Alexa skill we built on GPT-3.5 Turbo. Mango Mango gave step-by-step recipe instructions, answered general cooking questions, and could make small talk. After a short tutorial and a recipe video they could not rewatch, participants had up to 30 minutes to cook, asking the assistant whatever they needed.

We analyzed 3 hours and 39 minutes of video in the ELAN annotation tool across three coding cycles: first the verbal exchanges, then nonverbal behaviors (eye contact, gestures, tone change, and spatial behavior, such as leaning closer), and finally the stages these behaviors formed. Two researchers coded independently, combining categories from prior work with new patterns that emerged from the data.

## The framework

<figure>
  <img src="/assets/papers/voice-assistant-interaction/analytical-framework.png" alt="Analytical framework with three rows: behavior characteristics (verbal and nonverbal), three interaction stages (exploration, conflict, integration), and stage transitions (conflict to integration and integration to conflict)" />
  <figcaption>The analytical framework: behavior characteristics, three interaction stages, and the transitions between them.</figcaption>
</figure>

The framework has three dimensions:

- **Behavior characteristics.** Verbal behavior (the user's queries and the assistant's responses) and four kinds of nonverbal behavior: eye contact, spatial behavior, gestures, and tone change.
- **Three interaction stages.** In **exploration**, users get to know the system: waking it up, sometimes forgetting the wake word "Alexa" or to open the skill, and testing questions beyond the recipe. In **conflict**, the assistant's response is wrong, missing, delayed, or asks for clarification, and users and the assistant may interrupt each other. In **integration**, the assistant gives valid, clear, and immediate answers, and users confidently ask follow-up questions.
- **Stage transitions.** Users move back and forth between stages. They climb from conflict to integration by adapting how they communicate, and they can slip back into conflict after a single unexpected error.

## What we found

<div class="stats">
  <div><strong>12</strong><span>participants cooked with an LLM-based voice assistant, across 3 hours and 39 minutes of video</span></div>
  <div><strong>66.4%</strong><span>of 447 queries received valid, accurate responses from the assistant</span></div>
  <div><strong>63%</strong><span>of interaction time, on average, was spent in the smooth integration stage</span></div>
</div>

**People behave nonverbally even though the assistant cannot see them.** Eye contact was by far the most common nonverbal behavior, as people instinctively "faced" their conversational partner when asking questions. Conflict was where nonverbal behavior became richest: people looked at the device to check its status, leaned or moved closer so it would hear them, tapped or waved at it, and raised their voices. Nine of the 12 participants raised their volume during conflict. In the integration stage, by contrast, tone softened, sometimes with a "thank you."

<figure>
  <img src="/assets/papers/voice-assistant-interaction/nonverbal-behaviors-by-stage.png" alt="Chart of the number of eye contact, gestural, tone change, and spatial behaviors in the exploration, conflict, and integration stages" />
  <figcaption>How often each nonverbal behavior appeared in the exploration, conflict, and integration stages across participants.</figcaption>
</figure>

**Not everyone reached smooth interaction.** Some participants spent most of their time in integration, but two spent more than half of it in conflict, and they also got the least accurate responses.

**People developed strategies to escape conflict.** They reframed questions, for example by referring to step numbers ("the fifth step") or describing their situation; they interrupted long answers once they heard what they needed; they reactivated the skill when the assistant seemed to drift off task; they repeated questions that got no reply; and they quickly added the forgotten wake word. Reframing worked in only 46.03% of 63 attempts, so people had to learn through trial and error. One participant, frustrated by an overly detailed answer, held up a hand in a "stop" gesture while asking:

> "Only tell me the step after adding the vinegar" (P1)

## Takeaway

When people work alongside an LLM-based voice assistant, they communicate with their whole body, and that behavior shifts in recognizable ways as the interaction moves between exploration, conflict, and integration. Our framework gives researchers and designers a way to analyze these dynamics. It also points to assistants that could pick up on nonverbal cues to sense frustration or confusion, respond with empathy, adjust their persona to the stage of the interaction, and build their own model of what the user knows and needs.
