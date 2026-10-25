---
tldr: >-
  Heart damage from cancer treatment often starts with subtle symptoms at home, long before clinicians can see it.
  We co-designed CardioAI with 11 clinicians: wearables and an LLM voice assistant monitor patients continuously, and
  an explainable AI risk score and daily summary help clinicians act early without adding to their workload.
abstract: >-
  Despite recent advances in cancer treatments that prolong patients’ lives, treatment-induced cardiotoxicity (i.e., the various heart damages caused by cancer treatments) emerges as one major side effect. The clinical decision-making process of cardiotoxicity is challenging, as early symptoms may happen in non-clinical settings and are too subtle to be noticed until life-threatening events occur at a later stage; clinicians already have a high workload focusing on the cancer treatment, no additional effort to spare on the cardiotoxicity side effect. Our project starts with a participatory design study with 11 clinicians to understand their decision-making practices and their feedback on an initial design of an AI-based decision-support system. Based on their feedback, we then propose a multimodal AI system, CardioAI, that can integrate wearables data and voice assistant data to model a patient’s cardiotoxicity risk to support clinicians’ decision-making. We conclude our paper with a small-scale heuristic evaluation with four experts and the discussion of future design considerations.
---

## The problem

Cancer treatments like chemotherapy have dramatically improved survival, but they can also damage the heart. This treatment-induced cardiotoxicity can lead to heart failure or arrhythmia, and in breast cancer it has become a leading cause of illness and death in long-term follow-up.

Catching it early is hard for four reasons:

1. Early symptoms are subtle, and by the time they are obvious the damage may be irreversible.
2. Symptoms often appear at home, between clinic visits.
3. Tracking outside the hospital relies on patients' self-reports, which are easily forgotten or downplayed.
4. Clinicians are already overloaded and cannot sift through large amounts of data in time.

## The idea

Two lines of work point to a solution. **Remote patient monitoring** with wearables can continuously capture vital signs outside the clinic, and **LLM-based voice assistants** can make reporting symptoms as easy as talking. But more data alone would only add to clinicians' workload. So we pair them with an **explainable AI decision-support system** that organizes the data and surfaces a risk score clinicians can trust and act on.

We asked two questions: what do clinicians actually need when making early decisions about cardiotoxicity, and how would they use a multimodal AI system built around those needs?

## Designing with clinicians

We ran participatory design sessions with 11 oncology and cardiology clinicians, using a low-fidelity dashboard as a probe. They added important nuances to the known challenges:

- **Symptoms can be absent, not just subtle.** One clinician described a patient who was "completely asymptomatic… sitting at home relaxing" when a heart monitor he happened to wear picked up a severe arrhythmia.
- **Self-reporting tools are generic.** Existing surveys are "not specific to cardiotoxicity," and patients may hesitate to call because they feel like a burden.
- **There is no risk score to lean on.** Without reliable patterns, clinicians often have to wait for symptoms before intervening.

Their suggestions shaped four design revisions: monitor the metrics and symptoms that matter for cardiotoxicity, alert only on significant deviations from each patient's own baseline, visualize symptoms alongside physiological data, and explain clearly how every AI output is produced. As one clinician put it:

> "AI is supposed to be my assistant, not my replacement." (P4)

## CardioAI

A wearable (Garmin Vivosmart 5) passively collects heart rate, respiration, blood oxygen, and skin temperature, while a smart speaker lets patients report symptoms by voice. Three LLM-powered modules turn this data into something clinicians can use: a retrieval-augmented **conversation module** grounded in clinical guidelines, a **summarization module** that writes daily summaries, and a Transformer-based **risk prediction module** whose scores are explained with Shapley values and plain language.

<figure>
  <img src="/assets/papers/cardioai/system-architecture.png" alt="CardioAI system architecture: wearable and smart speaker data flow through conversation, summarization, and risk prediction modules to a clinician dashboard" />
  <figcaption>CardioAI's architecture: data from the wearable and smart speaker flows through conversation, summarization, and risk prediction modules into a clinician-facing dashboard.</figcaption>
</figure>

The dashboard brings everything onto one page in five modules: patient information, an AI-generated daily summary, wearable sensor data, an explainable risk score, and the conversation log, with abnormal symptom reports highlighted.

## What we found

<div class="stats">
  <div><strong>11</strong><span>clinicians co-designed the system in participatory design sessions</span></div>
  <div><strong>4</strong><span>cardiologists and oncologists evaluated the prototype through think-aloud sessions</span></div>
  <div><strong>5</strong><span>dashboard modules, from wearable data to an explainable risk score</span></div>
</div>

Clinicians found CardioAI simple and easy to learn, and valued having cardiotoxicity-specific information in one focused view: "In the chart, there's so much more data. This is more specific, organized, mostly for cardiotoxicity." Most importantly, it could shift their care from reactive to proactive, flagging patients who should follow up with a cardiologist before problems escalate, and supporting long-term monitoring for cancer survivors.

They also raised real concerns. Alerts are only useful if someone is available to act on them, especially outside office hours, and it must be clear who is responsible. Patients might over-trust a chatbot and delay seeking care: "no one's gonna check the chatbot until Tuesday." And clinicians will only rely on the data after it is rigorously validated.

## Takeaway

Continuous monitoring blurs the boundary between clinical and non-clinical settings, giving clinicians a window into the weeks between visits. For that window to help rather than overwhelm, AI systems need to set accurate expectations through their interface and explanations, fit into existing workflows, and balance clinical benefit against the extra work and responsibility they create.
