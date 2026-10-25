---
tldr: >-
  Agentic AI shopping assistants change faster than human user studies can keep up with. We had 40 people shop with
  Amazon Rufus, then built an LLM-agent "digital twin" of each one to repeat the same tasks: the twins matched humans
  on overall structure, buy-or-not decisions, and most UX ratings, but explored differently and chose different products.
abstract: >-
  Agentic AI is emerging, capable of executing tasks through natural language, such as Copilot for coding or Amazon Rufus for shopping. Evaluating these systems is challenging, as their rapid evolution outpaces traditional human evaluation. Researchers have proposed LLM Agents to simulate participants as digital twins, but it remains unclear to what extent a digital twin can represent a specific customer in multi-turn interaction with an agentic AI system. In this paper, we recruited 40 human participants to shop with Amazon Rufus, collected their personas, interaction traces, and UX feedback, and then created digital twins to repeat the task. Pairwise comparison of human and digital-twin traces shows that while agents often explored more diverse choices, their action patterns aligned with humans and yielded similar design feedback. This study is the first to quantify how closely LLM agents can mirror human multi-turn interaction with an agentic AI system, highlighting their potential for scalable evaluation.
---

## The problem

Agentic AI systems now carry out tasks for people through conversation: Copilot for coding, or Amazon Rufus for shopping. Instead of typing keywords into a search bar, a customer can describe what they need, ask follow-up questions, and get tailored recommendations over several turns.

These systems ship new features weekly or even daily, but the usual ways of evaluating them, such as think-aloud studies, heuristic walkthroughs, A/B tests, or Wizard-of-Oz studies, take weeks of planning, recruiting, and analysis. The interactions are also open-ended: different users pursue different goals and the assistant adapts to each one, so the same task can unfold very differently from person to person.

<figure>
  <img src="/assets/papers/llm-agent-meets-agentic-ai/rufus-interface.png" alt="Amazon Rufus answering 'I want to buy a monitor' with a text response, a product recommendation card, and related question suggestions" />
  <figcaption>Amazon Rufus, the agentic shopping assistant we studied. It replies with text, product recommendation cards, and suggested related questions.</figcaption>
</figure>

## The idea

A growing line of work uses LLM agents as stand-ins for people: judging other models' outputs, answering surveys, or role-playing individuals. But these uses are mostly single-turn. **Can an LLM agent role-play a specific customer through a whole multi-turn conversation with an agentic AI system, and give the same feedback that person would?**

To find out, we compared real people head-to-head with their own "digital twins." We asked three questions: how do people interact with and evaluate a conversational shopping assistant; can LLM agents role-play customers on the same tasks; and how closely do the agents match humans in outcomes, interaction patterns, and UX evaluations?

## How we studied it

<figure>
  <img src="/assets/papers/llm-agent-meets-agentic-ai/study-procedure.png" alt="Study procedure: a human completes a persona survey, installs a logging plugin, and shops with Rufus; an agent initialized with the same persona does the same tasks; their ratings and reasoning are compared" />
  <figcaption>The two-stage study. Each participant's persona was used to create a digital twin, which repeated the same shopping tasks so we could compare the two directly.</figcaption>
</figure>

**Stage 1: the human study.** We recruited 40 participants (out of 50 who started) from Prolific. Each filled out a detailed persona survey covering demographics, shopping habits, and personality traits, and installed a custom Chrome extension that logged clicks, typing, and scrolling on Amazon and in Rufus, with pop-ups asking them to briefly explain why they clicked a product or a suggested question. Each person then completed two shopping tasks with Rufus, one utilitarian (a monitor or a chair) and one hedonic (an outfit for a summer wedding or a jacket for a group hike), and rated the experience afterwards.

**Stage 2: the digital twins.** For each participant, we built a persona-grounded agent with UXAgent, running on Claude 3.7 Sonnet. The agent planned, acted, and revised its plan on the real Amazon website, choosing from a small set of actions (click, type, go back, and so on). After each task it answered the same UX survey as its human counterpart. In total we compared 80 human sessions with 80 agent sessions.

## What we found

<div class="stats">
  <div><strong>40</strong><span>participants shopped with Amazon Rufus, each paired with an LLM-agent digital twin</span></div>
  <div><strong>0.9</strong><span>F1 score for agents matching their human's final buy-or-not decision</span></div>
  <div><strong>1.3%</strong><span>of human–agent pairs that ended up picking the exact same product</span></div>
</div>

**Agents start like humans.** Humans and agents used a similar number of dialogue turns (1.9 vs. 2.1 on average), and both usually opened with a message stating the product type and budget. Their first messages had an average cosine similarity of 0.49.

**But they explore differently.** Agents clicked on significantly more recommended items and asked more of Rufus's suggested related questions. Their first messages were shorter, but their messages overall were much longer. When we compared full action sequences, the overlap was small (similarity 0.11), and agents rarely landed on the same product as their human. Humans narrowed down quickly to what mattered to them; agents searched more broadly and systematically.

**Their feedback is similar, but flatter.** UX ratings from humans and their twins showed no significant differences in how well results matched the query, coherence, enjoyment, helpfulness, or trust. The two groups diverged on two dimensions: humans were more satisfied with the product they picked, and agents expressed a stronger preference for Rufus over traditional search. Both groups praised Rufus's efficiency, with one participant saying:

> "it's like having a personal shopper!" (P11)

Humans, however, also described real frustrations, such as Rufus guessing their gender wrong or showing fewer options than a normal search:

> "I can't see as many options at a time when using Rufus compared to manually searching." (P31)

The agents rarely mentioned anything negative, framing Rufus almost entirely as a tidy, efficient tool.

## Takeaway

Persona-grounded LLM agents can reproduce the broad shape of human interaction with an agentic AI system, from task completion and buy-or-not decisions to most functional UX ratings, which makes them useful for fast, early-stage evaluation. But they do not yet capture how people actually reason and decide, and they miss the frustrations around personalization, trust, and control that real users raise. We see digital twins as a complement to human studies, not a replacement: their feedback is a directional signal, and keeping real people in the loop is both a methodological and an ethical necessity.
