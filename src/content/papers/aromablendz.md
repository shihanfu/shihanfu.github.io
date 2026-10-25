---
tldr: >-
  Scent can shape emotion and memory, but most olfactory systems use preset smells and are hard for everyday users to customize.
  We built AromaBlendz, a low-cost device and interface that lets people mix essential oils into their own scents,
  preview a blend before committing to it, and save and rate their recipes.
abstract: >-
  Although the HCI community has recently begun to explore the usage of scent to enrich interactive system experiences (e.g., making VR more immersive), scent is often preset. In contrast, personalized scents might help trigger emotional responses and memory recall in many application scenarios, ranging from fostering relaxation to managing emotional states. We present AromaBlendz, a novel digital platform that enables users to create and customize their unique scent profiles. AromaBlendz comprises both hardware and software components that collectively deliver a seamless scent customization experience. The hardware includes a blending mechanism for essence oils and a user-friendly control unit, while the software component provides an intuitive interface for users to create, preview, and store their preferred scents. The platform not only allows for the generation of personalized scent profiles using a library of essential oils but also facilitates the process of scent creation through an accessible and interactive user interface.
---

## The problem

Smell is easy to overlook, yet it is closely tied to emotion and memory. Scents can affect attention, judgment, and mood, and adding smell to media has been explored for entertainment, art, education, advertising, and medicine. HCI researchers have started using scent to enrich interactive experiences, for example to make VR more immersive.

But in those systems the scent is usually **preset**. People differ in which smells they like, and how a scent is received depends on both the scent and the person. Personalized scents could help trigger memories and emotional responses, yet existing olfactory delivery systems tend to be expensive and lack simple interfaces that let general users formulate their own.

## The idea

**What if creating a personal scent were as easy as dragging a few sliders?** AromaBlendz is a platform that pairs a small blending machine with an accessible interface, so that anyone can mix essential oils into a scent profile of their own, smell it before committing, and reproduce it later with precise, repeatable proportions.

<figure>
  <img src="/assets/papers/aromablendz/system-setup.png" alt="AromaBlendz setup: the blending hardware, a laptop running the AromaBlendz interface, and bottles of essence oils; close-up of the peristaltic pump module" />
  <figcaption>(A) The AromaBlendz hardware, its interface, and the essence oil ingredients. (B) The standalone hardware module.</figcaption>
</figure>

## How we built it

**Software.** The interface has four parts:

- **Ingredients**, where users set the proportion of each essence with a slider, then click *Preview* or *Print*.
- **Recommendation**, which suggests formulas that can be applied to the sliders with one click.
- **History**, which records every previewed and printed recipe and lets users rate it with stars.
- **Visualization**, a pie chart showing the proportion of each ingredient.

Ratings feed the recommendations. A MySQL database stores both the recipes a user has tried and a set of preset recipes. When a user rates a recipe very highly, AromaBlendz recommends similar recipes; when they rate one very low, it recommends something different.

**Hardware.** The device is 3D-printed in PLA and holds four peristaltic pumps. Tubes from the pumps converge on a hollow center so the oils drip together into the same spot. In the middle are two layers: a preview layer, where users can insert fragrance paper to smell the current formula, and a baffle. The finished blend is collected in a bottle on the bottom platform. An Arduino UNO with an ESP8266 receives *Preview* and *Print* commands from the interface over UDP, and the proportion of each oil is controlled by how long each pump runs.

## Using AromaBlendz

Creating a scent takes a few simple steps: install the ingredients, set their proportions, preview the mix, and print the final blend.

<figure>
  <img src="/assets/papers/aromablendz/usage-process.png" alt="Four steps of using AromaBlendz: select and install ingredients, set proportions, preview mixed scents, print the finished product" />
  <figcaption>Using AromaBlendz: select and install ingredients, set their proportions, preview the mixed scent, and print the finished product.</figcaption>
</figure>

Previewing lets users smell an approximation of the final blend and adjust it before committing. Once they are happy, *Print* blends the oils in the chosen proportions to produce a physical scent.

<div class="stats">
  <div><strong>4</strong><span>peristaltic pumps blend the essential oils</span></div>
  <div><strong>2 s / 8 s</strong><span>total pump running time for a preview and for a full print</span></div>
  <div><strong>4</strong><span>interface parts: ingredients, recommendations, history, and visualization</span></div>
</div>

## Where it could go

- **Olfactory training.** Actively smelling different scents twice a day over several months can help rehabilitate the sense of smell. Because AromaBlendz precisely controls the concentration of each component and records users' responses, it could support personalized training programs, for example helping older adults or professional evaluators.
- **Tools for scent designers.** Sliders, flexible blending ratios, and saved recipes could help olfactory designers craft scent menus or customer-tailored fragrances, with version management to iterate and collaborate.
- **VR.** Users could pre-select and customize the scents they want to encounter in a virtual environment, for leisure as well as education, training, and therapy.

## Takeaway

Personal scent does not have to depend on expensive equipment or expert knowledge. By combining low-cost hardware with a simple interface for previewing, saving, and rating blends, AromaBlendz makes custom scents something people can create on demand. As next steps, we plan user studies to understand the prototype's effectiveness and user experience, and to derive design guidelines for future olfactory interfaces.
