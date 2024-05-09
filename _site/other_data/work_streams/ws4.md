#### Work Stream 4: Interactions
##### Generation and dialogue technology for sensitive data

**Background & challenges:** Dialogue systems are the leading public facing AI technology. Yet their suitability for use with sensitive data or vulnerable individuals is questionable. Issues include privacy leaks, harmful biases, inappropriate responses, poor situational reasoning and hallucinations. These constitute limitations that hinder appropriate generation (correct, safe and suitable), relevant to both summarisation and dialogue needs within use cases.

<br>

**Foci & implementation:** We will investigate methods of addressing such limitations to enable: (a) safe and useful summarisation of court cases, mental health therapy sessions & social media timelines and (b) appropriate generation of responses in dialogue systems for legal advice (e.g. with simplified terminology for lay users) and AI supported self-management. For privacy, author obfuscation methods including diversification in paraphrasing and training data will be explored. For situational reasoning, methods from Work Stream 3 will be included and evaluated in summarisation and dialogue. To prevent hallucinations, we will investigate generation using a blueprint for both summarisation and dialogue, as well as hybrid approaches that involve co-training for multiple tasks (e.g. response generation and rationale extraction), or the interfacing of symbolic methods with neural approaches. Finally we will explore regularisation strategies during generation that help optimise for combinations of the requirement criteria (e.g. privacy, text simplification). Model acceptability will be continuously evaluated by both humans in regular co-production workshops from Work Stream 1 and according to the metrics and criteria identified in Work Stream 2.

<br>

**Outputs:** We will create: (a) **long-document summarisation prototypes** for judicial reviews, therapy sessions and mental health social media timelines and (b) **dialogue systems for AI-assisted self-management and legal advice**, developed to be situation-aware, according to methods focussing on privacy-safety, factuality and criteria from Work Streams 1 and 2.


<br>
<br>


##### Medical diagnostics and monitoring with multi-modal data

**Background & challenges:** LLM use in medicine raises concerns and challenges, reflective of the socio-technical limitations already discussed in use cases 1 and 2, and Work Streams 2 and 4. These are particularly prominent in medical diagnostics and monitoring because of the complexity of data sources and the potential impact associated with wrong or missed diagnoses and critical points.

<br>

**Foci & implementation:** We will focus on developing and testing the ability of LLMs to identify evidence for phenotypes characteristic of different conditions from heterogeneous multi-modal data, including NHS text records, medical imaging and user generated content (e.g. dialogues, devices) for people with cancer and dementia. To achieve this we will develop methods for co-training of medical code classification (e.g. ICD, DSM) and rationale generation and extraction, using multi-modal representations. We will also explore the current opportunities and limitations of Chain-of-Thought reasoning in generating explanations for medical diagnostics. We will develop methods for diagnosis and monitoring with longitudinal data and consider data augmentation methods for missing or sparse data. We will also explore the interaction between condition monitoring and dialogic responses in AI-supported self-management.

<br>

**Outputs:** We will create and evaluate **LLM-based methods for diagnostics and monitoring using heterogeneous and multi-modal data** in cancer, mental health and dementia. These will result in: (a) longitudinal diagnosis and monitoring and (b) self-management AI prototypes both justifying their output with evidence. The prototypes will help assess the likelihood of such models being rolled out in practice and their potential for enhancing medical care.