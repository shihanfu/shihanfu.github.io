---
tldr: >-
  Rehabilitation is long and discouraging when patients keep failing to reach their goals. In VR, we can quietly
  stretch the movement of a patient's virtual hand so they reach targets their real hand cannot. In a study with
  11 hospital patients with upper limb impairments, they barely noticed this "hand redirection," and a new version
  we proposed, which helps only at the end of a reach, kept their effort high.
abstract: >-
  Rehabilitation therapies are widely employed to assist people with motor impairments in regaining control over their affected body parts. Nevertheless, factors such as fatigue and low self-efficacy can hinder patient compliance during extensive rehabilitation processes. Utilizing hand redirection in virtual reality (VR) enables patients to accomplish seemingly more challenging tasks, thereby bolstering their motivation and confidence. While previous research has investigated user experience and hand redirection among able-bodied people, its effects on motor-impaired people remain unexplored. In this paper, we present a VR rehabilitation application that harnesses hand redirection. Through a user study and semi-structured interviews, we examine the impact of hand redirection on the rehabilitation experiences of people with motor impairments and its potential to enhance their motivation for upper limb rehabilitation. Our findings suggest that patients are not sensitive to hand movement inconsistency, and the majority express interest in incorporating hand redirection into future long-term VR rehabilitation programs.
---

## The problem

Hand and arm impairments are common after stroke, spinal cord injury, and conditions such as cerebral palsy or ALS, and they make everyday tasks hard to do independently. Rehabilitation helps people regain strength and control, but it is demanding: one widely used therapy asks for more than six hours of exercise a day, five days a week, for over two weeks. Patients get tired, and because progress is slow and hard to see, they become discouraged by every failed attempt with their affected arm.

## The idea

Virtual reality can make exercise more engaging, and it offers a particular trick: **hand redirection**. Normally your virtual hand follows your real hand exactly. With redirection, the virtual hand is shifted or its movement amplified, so a patient can touch a target that is actually beyond their reach. Succeeding at a seemingly harder task could boost motivation.

There is a catch. If people notice that the virtual hand is not really theirs, they may lose the sense of **hand ownership**, the feeling that the hand belongs to them, and realize their success came from outside help. Making the task easier might also mean they simply put in less effort. Prior studies of hand redirection were mostly done with able-bodied people, so we asked: **how do different hand redirection techniques affect the effort, motivation, and sense of hand ownership of patients in VR-based rehabilitation?**

We compared two techniques from the literature with a new one we proposed:

- **Pre-offset:** the virtual hand is displaced a fixed distance toward the target throughout the movement.
- **Scaling offset:** the virtual hand's movement is scaled up by a fixed factor.
- **Post-offset (ours):** the virtual hand moves exactly like the real hand until the real hand nears its maximum reach, and only then does a gradually growing offset extend it toward the target.

The idea behind Post-offset is to help only at the very end, so patients still have to work as hard as they can before getting a boost.

## How we studied it

We ran a within-subject study in a therapy room at a local hospital with 11 patients with upper limb motor impairments (average age 50.5), ranging from mild to severe. None had used VR before. A rehabilitation robot (BURT) supported the affected arm against gravity so that patients with very limited mobility could take part.

<figure>
  <img src="/assets/papers/vr-hand-redirection/study-setup.png" alt="Left: VR scenes of a virtual hand reaching for a red ball on a table. Right: a patient in a wheelchair wearing a VR headset with their arm supported by a rehabilitation robot" />
  <figcaption>The study setup: the VR reaching task (left) and a participant wearing the headset, with the affected arm supported by the BURT rehabilitation robot (right).</figcaption>
</figure>

Participants reached for a red ball in three directions (depth, vertical, and horizontal), with targets placed at 1, 1.25, and 1.5 times their own measured maximum reach. Each experienced five conditions in random order: no redirection, the three redirection techniques, and a second baseline with no redirection where targets were simply moved closer, making it exactly as easy as the redirection conditions. They were not told the real purpose of the study until the interview afterward. We measured effort as how far the hand actually traveled, normalized by each person's maximum reach, and asked about hand ownership in a questionnaire.

## What we found

<div class="stats">
  <div><strong>11</strong><span>patients with upper limb motor impairments, studied in a hospital</span></div>
  <div><strong>990</strong><span>reaching trials across five conditions and three directions</span></div>
  <div><strong>2</strong><span>interviewees who reported noticing the virtual hand's offset before we revealed it</span></div>
</div>

**Patients barely noticed the redirection.** There were no significant differences between the five conditions in self-reported hand movement consistency (p = 0.39), hand location consistency (p = 0.745), or hand ownership (p = 0.123). Two more participants said they had sensed something only after we explained the study, but could not articulate it:

> "There are differences in my hands, But I can not tell what exactly the differences are. The hands in the VR seem less flexible." (P6)

**Redirection kept effort up, and Post-offset kept it highest.** Effort differed significantly across techniques (p<.001) and movement directions (p<.001). When the task was equally easy, patients worked significantly harder with any redirection technique than when the targets were simply moved closer. Among the three, Post-offset yielded the highest effort.

<figure>
  <img src="/assets/papers/vr-hand-redirection/training-effort.png" alt="Bar chart of normalized hand movement for five conditions across depth, vertical, and horizontal directions" />
  <figcaption>Training effort (hand movement normalized by each patient's maximum reach) in each direction. Overall, Post-offset (blue) yielded the highest effort of the three redirection techniques, while simply moving targets closer (orange) gave the lowest.</figcaption>
</figure>

**Redirection felt motivating, but obvious shortcuts did not.** Almost all interviewees thought redirection could enhance their motivation because it helped them complete the task:

> "If I can not reach the target, I will give up. This can improve my confidence because my confidence comes from completing tasks." (P5)

Only one participant (P10) rejected it, preferring to see his true capability. Yet most objected to simply placing targets closer, finding it boring or worrying it would not help their recovery. Most preferred Post-offset for future rehabilitation, because help arriving at the end pushed them to try harder:

> "In Post-offset condition, the hand is reaching to target slowly. It'll build up my endurance." (P6)

## Takeaway

For people with motor impairments, VR hand redirection can let them experience success without losing the feeling that the virtual hand is their own. How the help is delivered matters: support that arrives only at the limit of a patient's reach preserves the effort that therapy depends on, while still giving them a reason not to give up. Our sessions lasted under an hour, so a longer study is needed to see whether these gains translate into real therapeutic outcomes.
