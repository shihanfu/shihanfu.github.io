---
tldr: >-
  Clinicians spot sepsis by checking organ function with clinical calculators like SOFA, but most AI models only output
  a single risk score. SepsisCalc builds those calculators into the model, estimating them even when lab values are missing,
  and outperforms state-of-the-art methods on three real-world datasets while showing clinicians which organs may be failing.
abstract: >-
  Sepsis is an organ dysfunction caused by a deregulated immune response to an infection. Early sepsis prediction and identification allow for timely intervention, leading to improved clinical outcomes. Clinical calculators (e.g., the six-organ dysfunction assessment of SOFA) play a vital role in sepsis identification within clinicians' workflow, providing evidence-based risk assessments essential for sepsis diagnosis. However, artificial intelligence (AI) sepsis prediction models typically generate a single sepsis risk score without incorporating clinical calculators for assessing organ dysfunctions, making the models less convincing and transparent to clinicians. To bridge the gap, we propose to mimic clinicians' workflow with a novel framework SepsisCalc to integrate clinical calculators into the predictive model, yielding a clinically transparent and precise model for utilization in clinical settings. Practically, clinical calculators usually combine information from multiple component variables in Electronic Health Records (EHR), and might not be applicable when the variables are (partially) missing. We mitigate this issue by representing EHRs as temporal graphs and integrating a learning module to dynamically add the accurately estimated calculator to the graphs. Experimental results on real-world datasets show that the proposed model outperforms state-of-the-art methods on sepsis prediction tasks. Moreover, we developed a system to identify organ dysfunctions and potential sepsis risks, providing a human-AI interaction tool for deployment, which can help clinicians understand the prediction outputs and prepare timely interventions for the corresponding dysfunctions, paving the way for actionable clinical decision-making support for early intervention.
---


## The problem

Sepsis is life-threatening organ dysfunction caused by the body's response to an infection. It contributes to up to half of all hospital deaths in the United States, and timing matters: prior work shows patients may have a 4% higher chance of survival if diagnosed one hour earlier.

To identify sepsis, clinicians work through **clinical calculators**, such as the Sequential Organ Failure Assessment (SOFA), which scores six organ systems from 12 clinical variables. Most AI sepsis models, by contrast, take in the patient's record and return a single risk number. That gap between the two workflows makes AI predictions hard to trust and hard to act on.

Simply feeding calculators into a model is not straightforward either. A calculator needs all of its component variables, and in real hospital data many are missing: the missing rate in our three datasets ranged from 65% to 75%. The usual fix, filling in the gaps with an imputation model, becomes inaccurate when so much is missing, and its errors flow straight into the prediction.

## The idea

**What if the model followed the clinician's workflow?** Instead of a black box that jumps from raw data to a risk score, SepsisCalc first estimates the same calculators clinicians use, organ by organ, and then predicts sepsis from both the raw observations and those calculator scores.

To deal with missing data, we do not fill in every gap. We represent each patient's record as a **temporal graph**, a network that contains only what was actually observed, and let the model add a calculator to that graph only when it is confident the estimate is accurate.

## How SepsisCalc works

Each patient's record becomes a graph whose nodes are time points, observed variables (vital signs, lab tests, procedures, medications), the six organ systems, and clinical calculators. Edges link repeated measurements over time, things observed at the same moment, and interacting clinical events, such as a vasopressor given because blood pressure dropped.

<figure>
  <img src="/assets/papers/sepsiscalc/framework.png" alt="SepsisCalc framework: (A) a temporal graph is encoded and used to estimate organ-specific and multi-organ calculators with confidence scores; (B) the resulting dynamic graph is encoded again to predict organ dysfunction risks and sepsis risk" />
  <figcaption>The SepsisCalc framework. (A) The model encodes the patient's temporal graph and estimates organ-specific and multi-organ calculator scores, each with a confidence. (B) Confident calculators are added to build a dynamic graph, from which the model predicts the risk of each organ's dysfunction and of sepsis.</figcaption>
</figure>

A **graph neural network**, a model that learns by passing information along the edges of a graph, summarizes the patient's state at each time point. From that summary, SepsisCalc does three things:

1. **Estimates the calculators.** When all component variables happen to be observed, the true score is available, and the model learns to reproduce it. This teaches it how each calculator is computed.
2. **Decides which estimates to keep.** A confidence score filters out calculators that would likely be wrong, for example when all of their components are unobserved. Only confident estimates are added to the graph, along with edges to the variables they summarize.
3. **Predicts organ dysfunction and sepsis.** The model reads the updated graph again and outputs both a sepsis risk and a risk for each of the six organ systems.

We evaluated SepsisCalc on two public ICU datasets, MIMIC-III (21,686 patients) and AmsterdamUMCdb (6,560 patients), and on data from 85,181 patients at the Ohio State University Wexner Medical Center (OSUWMC). Starting when a patient arrives, the model predicts every hour whether sepsis will develop within the next four hours. We compared it against four clinical early-warning scores and seven deep learning models.

## What we found

Performance is measured with AUC, which captures how well a model ranks patients who will develop sepsis above those who will not (1.0 is perfect, 0.5 is chance).

<div class="stats">
  <div><strong>0.918</strong><span>AUC on the OSUWMC dataset, vs. 0.894 for the strongest baseline (DFSP)</span></div>
  <div><strong>3 / 3</strong><span>real-world datasets where SepsisCalc achieved the best AUC, F1, and recall</span></div>
  <div><strong>~1 hour</strong><span>earlier sepsis alerts when models use calculators alongside raw observations</span></div>
</div>

- **Calculators help.** Adding calculators improved sepsis prediction whether or not their component variables were fully observed, and models using them alerted roughly an hour earlier with higher recall.
- **The estimates are accurate.** When the true scores were available, estimation error was close to zero. When we hid 70% of component variables to mimic real-world gaps, SepsisCalc's estimates had much smaller errors than computing the calculators from the latest available values. Error rose sharply when confidence was low, which is why low-confidence calculators are left out.
- **SepsisCalc beat every baseline.** Every deep learning model outperformed the traditional clinical scores, and SepsisCalc did best overall, for example 0.839 AUC on MIMIC-III and 0.848 on AmsterdamUMCdb. Removing any piece (event interactions, dynamic calculators, or organ-level prediction), or replacing the dynamic graph with imputation, lowered performance.

## From model to bedside

We built SepsisCalc into a system deployed in the Epic EHR at OSUWMC that predicts sepsis risk hourly from the moment a patient arrives.

<figure>
  <img src="/assets/papers/sepsiscalc/deployed-interface.png" alt="SepsisCalc interface showing a patient list with risk scores, a patient profile, a radar chart of observed and estimated SOFA scores by organ, a SOFA respiration trend, and related vital signs and lab results" />
  <figcaption>The SepsisCalc interface: (A) patients ranked by sepsis risk, (B) patient profile, (C) observed and estimated SOFA scores across six organs, (D) how one organ's score has changed over time, and (E) the vital signs and lab results behind it. Patient names and details are randomly generated.</figcaption>
</figure>

In the example above, the observed total SOFA score is unavailable because of missing variables, so SepsisCalc estimates it as 12. Clicking an organ on the radar chart, such as respiration, shows how its score evolved and the measurements behind it. Usability evaluation with clinicians is ongoing.

## Takeaway

Accuracy alone does not make a clinical AI model usable. By building clinicians' own tools into the model and being honest about what it cannot estimate, SepsisCalc gives a prediction that comes with evidence: which organs may be failing, and why the model thinks so. That makes it easier for clinicians to check the output and prepare targeted interventions before sepsis sets in.
