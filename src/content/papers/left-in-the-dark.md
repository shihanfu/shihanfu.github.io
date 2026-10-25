---
tldr: >-
  Family caregivers of older adults in the ICU have to make decisions with fragmented, jargon-heavy information.
  We interviewed 15 caregivers, turned their challenges into four design guidelines, and built CareMap, an AI timeline
  and context-aware chatbot that caregivers and clinicians found helpful, as long as it supports rather than replaces
  conversations with the care team.
abstract: >-
  Older adult patients constitute a rapidly growing subgroup of Intensive Care Unit (ICU) patients. In these situations, their family caregivers are expected to represent the unconscious patients to access and interpret patients' medical information. However, caregivers currently have to rely on overloaded clinicians for information updates and typically lack the health literacy to understand complex medical information. Our project aims to explore the information needs of caregivers of ICU older adult patients, from which we can propose design opportunities to guide future AI systems. The project begins with formative interviews with 15 caregivers to identify their challenges in accessing and understanding medical information; From these findings, we then synthesize design goals and propose an AI system prototype to cope with caregivers' challenges. The system prototype has two key features: a timeline visualization to show the AI extracted and summarized older adult patients' key medical events; and an LLM-based chatbot to provide context-aware informational support. We conclude our paper by reporting on the follow-up user evaluation of the system and discussing future AI-based systems for ICU caregivers of older adults.
---

## The problem

Older adults account for more than half of ICU admissions in the United States. When they are unconscious, a family member, often holding power of attorney, has to follow their condition and help make critical medical decisions on their behalf.

But caregivers can rarely enter the ward, the patient cannot talk to them, and the clinical team is overwhelmingly busy. What information they do get arrives as fragmented verbal updates, full of medical terms and lab values they were never trained to read. One caregiver put it this way:

> "In cases where I didn't get information, I didn't get to know what was going on… I just felt I was left in the dark." (P1)

## The idea

Most existing solutions focus on the clinical team: talk to families more often, use checklists or daily-goal forms. We started from the caregiver's side instead. Recent AI can pull the relevant pieces out of massive electronic health records, translate jargon into plain language, and answer individual questions in real time. **Could it help caregivers both access and understand what is happening to their loved one?**

## How we studied it

We ran a two-stage study. First, a formative interview study to understand caregivers' challenges and turn them into design guidelines; then a prototype, evaluated with caregivers and clinicians.

<figure>
  <img src="/assets/papers/left-in-the-dark/study-process.png" alt="Two-stage study: formative study, design goals, prototype design, and prototype evaluation" />
  <figcaption>The two-stage study: interviews with 15 caregivers, design goals, a prototype, and an evaluation with 10 caregivers and 2 clinicians.</figcaption>
</figure>

## What caregivers told us

Caregivers struggled in two ways:

- **Accessing information.** They wanted to know not just today's status but how it changed since yesterday, and what treatments and goals the team had in mind. Often they learned about a treatment only after it had happened.
- **Understanding information.** Medical terms in conversations and lab reports left them "lost in translation." Searching online without the patient's context gave conflicting or irrelevant answers, and conversations with clinicians could feel like "running in circles."

We translated these challenges into four design guidelines: structure daily updates as a **timeline**; present **treatment plans, goals, and lab results** in one accessible place; offer **context-aware explanations** of medical terms; and help caregivers **prepare meaningful questions** for the care team.

## CareMap

CareMap processes EHR data with three LLM-driven modules (summarization, extraction, and conversation) and delivers the results through two features.

<figure>
  <img src="/assets/papers/left-in-the-dark/caremap-timeline.png" alt="CareMap interface: a visual timeline of ICU medical events and a context-aware chatbot explaining lab results" />
  <figcaption>(A) A visual timeline of the patient's ICU stay, with an AI-generated lab summary, the day's treatments, and the day's goals. (B) A chatbot that explains lab results in the context of the patient's clinical notes.</figcaption>
</figure>

The chatbot works in three modes: a **Fact Finder** that answers questions about treatments and equipment in lay terms, a **Data Interpreter** that explains lab values and what they mean for this patient, and an **Intention Prompter** that suggests questions to bring to the next conversation with clinicians.

<figure>
  <img src="/assets/papers/left-in-the-dark/caremap-chatbot.png" alt="The three chatbot modes: Fact Finder, Data Interpreter, and Intention Prompter" />
  <figcaption>The chatbot's three modes: Fact Finder, Data Interpreter, and Intention Prompter.</figcaption>
</figure>

## What we found

<div class="stats">
  <div><strong>15</strong><span>family caregivers interviewed about their ICU experiences</span></div>
  <div><strong>10 + 2</strong><span>caregivers and clinicians who evaluated the CareMap prototype</span></div>
  <div><strong>4 / 5</strong><span>clinicians' average rating of the overall quality of AI-generated summaries</span></div>
</div>

Caregivers valued the timeline for turning scattered updates into one picture, and some used it to keep the rest of the family informed. The chatbot let them understand a treatment "instead of waiting to see a doctor," and suggested questions helped them go "straight to the point" with clinicians.

They also drew clear lines. Summaries must not oversimplify patients with multiple chronic conditions, and caregivers wanted to verify AI answers with a doctor before trusting them. Clinicians flagged that treatment plans for patients on ten or more medications are hard to summarize, and that numerical interpretations need care.

## Takeaway

Family caregivers are not just proxies or assistants to clinicians; with the right information, they can be active partners in ICU care. AI can help by organizing what is happening and explaining it in context, but it works best as a supplement that prepares caregivers for conversations with the care team, not as an authority that replaces them. Future systems should adapt to the care setting, communicate their limits clearly, and let caregivers contribute their own knowledge of the patient.
