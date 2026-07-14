// app/ai-ml-solutions-gurgaon/faqs.ts
import { contactInfo } from "@/data/ContactInfo";

export interface FAQItem {
  q: string;
  a: string;
}

export function generateFAQs(city: string): FAQItem[] {
  return [
    {
      q: `What makes CoderLala the best AI and ML solutions company in ${city}?`,
      a: `CoderLala stands out as a premier AI and ML solutions company in ${city} due to our expertise in custom model development, deep learning, and production-ready AI systems. We combine technical excellence with local presence, delivering intelligent solutions with personalized attention. Our prime location in JMD Megapolis, Sector 48, allows us to serve ${city} businesses with rapid response times and in-person consultations.`
    },
    {
      q: `How long does AI/ML solution development take with your ${city} team?`,
      a: `AI/ML solution development typically takes 12 to 20 weeks depending on model complexity, data availability, and integration requirements. We follow an iterative approach with regular model evaluations. As a local AI company in ${city}, we offer faster turnaround times through close collaboration.`
    },
    {
      q: `What is the cost of AI and ML solutions in ${city}?`,
      a: `Pricing depends on model complexity, data requirements, and deployment needs. Standard AI/ML projects range between ₹5,00,000 to ₹50,00,000+. We provide transparent quotes as a trusted AI agency in ${city}. Contact us for a detailed, no-obligation estimate.`
    },
    {
      q: `Do you have experience with our industry?`,
      a: `We've worked with various industries including finance, healthcare, e-commerce, insurance, manufacturing, education, and logistics. We can leverage domain knowledge to build effective AI solutions tailored to your specific industry challenges.`
    },
    {
      q: `How much data do we need?`,
      a: `Ideally 1000+ quality data points, but we can start with less and grow the model as you collect more data. Data quality matters more than quantity. We also help with data collection and annotation strategies.`
    },
    {
      q: `What technologies do you use?`,
      a: `We use Python, TensorFlow, PyTorch, OpenAI, Hugging Face, scikit-learn, and various AWS ML services. We choose the best tools for your specific needs, whether it's deep learning, NLP, computer vision, or traditional ML.`
    },
    {
      q: `Can we meet your AI team in ${city}?`,
      a: `Yes! Our office is located at ${contactInfo.websiteAddress}. We welcome in-person consultations, strategy sessions, and AI workshops at our office or your ${city} headquarters.`
    },
    {
      q: `What is your contact information for ${city}?`,
      a: `You can reach us at +91 ${contactInfo.salmanNizamPhone} or visit our office at ${contactInfo.websiteAddress}. Our business hours are typically ${contactInfo.businessHours.weekdays} on weekdays. For any inquiries, you can also contact us via email or through our website.`
    },
    {
      q: `What types of AI models do you develop?`,
      a: `We develop a wide range of AI models including classification models, regression models, time series forecasting, natural language processing (NLP) models, computer vision models, recommendation systems, and generative AI solutions using LLMs.`
    },
    {
      q: `Do you provide natural language processing (NLP) solutions?`,
      a: `Yes, we specialize in NLP solutions including text classification, sentiment analysis, named entity recognition, machine translation, chatbots, and document understanding. We use state-of-the-art transformers and LLMs like GPT, BERT, and LLaMA.`
    },
    {
      q: `What is computer vision and do you provide it?`,
      a: `Computer vision enables machines to interpret and understand visual information. Yes, we provide computer vision solutions including image classification, object detection, facial recognition, OCR, and video analytics using CNNs and vision transformers.`
    },
    {
      q: `Do you develop predictive analytics solutions?`,
      a: `Yes, we develop predictive analytics solutions for demand forecasting, churn prediction, risk assessment, fraud detection, and predictive maintenance. We use time series analysis, regression models, and machine learning algorithms.`
    },
    {
      q: `What are large language models (LLMs) and do you use them?`,
      a: `Large Language Models are AI models trained on vast amounts of text data to understand and generate human-like text. We use LLMs including GPT-4, Claude, and open-source models for applications like chatbots, content generation, and document analysis.`
    },
    {
      q: `How do you ensure model accuracy?`,
      a: `We implement rigorous model evaluation using cross-validation, test sets, and business metrics. We also conduct A/B testing and continuous monitoring to ensure models maintain accuracy in production. We typically achieve 85%+ accuracy on well-defined problems.`
    },
    {
      q: `Do you provide MLOps services?`,
      a: `Yes, we provide comprehensive MLOps services including model deployment, monitoring, versioning, retraining pipelines, and CI/CD for ML models. We ensure your AI models are production-ready and maintainable.`
    },
    {
      q: `What is your approach to data privacy?`,
      a: `We implement strict data privacy measures including data anonymization, encryption, secure data storage, and compliance with GDPR, HIPAA, and other regulations. We never share your data with third parties.`
    },
    {
      q: `Do you provide AI consulting services?`,
      a: `Yes, we provide AI consulting services including feasibility studies, technology assessment, ROI analysis, and AI strategy development. We help you identify the best AI opportunities for your business.`
    },
    {
      q: `What is deep learning and do you use it?`,
      a: `Deep learning is a subset of machine learning using neural networks with multiple layers. Yes, we use deep learning for complex tasks like image recognition, speech recognition, and natural language understanding using frameworks like TensorFlow and PyTorch.`
    },
    {
      q: `Do you provide recommendation systems?`,
      a: `Yes, we build recommendation systems using collaborative filtering, content-based filtering, and hybrid approaches. Our recommendation engines help businesses increase cross-sell and upsell opportunities.`
    },
    {
      q: `How do you handle model deployment?`,
      a: `We deploy models using containerization (Docker), serverless functions, or dedicated endpoints. We implement API layers for integration, set up monitoring, and ensure scalability and reliability.`
    },
    {
      q: `Do you provide AI training and knowledge transfer?`,
      a: `Yes, we provide comprehensive AI training and knowledge transfer programs for your team. This includes model understanding, maintenance, retraining processes, and best practices for AI operations.`
    },
    {
      q: `What is generative AI and do you use it?`,
      a: `Generative AI creates new content like text, images, audio, or code. We use generative AI technologies including GPT models, DALL-E, Stable Diffusion, and others for content creation, code generation, and creative applications.`
    },
    {
      q: `How do you handle model bias and fairness?`,
      a: `We implement fairness and bias detection techniques including data audit, model explainability, and fairness metrics. We ensure our AI models are fair, transparent, and free from unintended bias.`
    },
    {
      q: `Do you provide sentiment analysis solutions?`,
      a: `Yes, we build sentiment analysis solutions that understand and classify opinions, emotions, and attitudes in text data. This is used for social media monitoring, customer feedback analysis, and market research.`
    },
    {
      q: `What is your experience with time series forecasting?`,
      a: `We have extensive experience with time series forecasting using ARIMA, Prophet, LSTM, and transformer-based models. We provide demand forecasting, sales prediction, and resource planning solutions.`
    },
    {
      q: `Do you provide AI-powered chatbots?`,
      a: `Yes, we build AI-powered chatbots and virtual assistants using LLMs and NLP. Our chatbots provide natural, contextual conversations for customer support, lead generation, and internal assistance.`
    },
    {
      q: `How do you handle model retraining?`,
      a: `We implement automated retraining pipelines that trigger based on data drift detection or schedule. This ensures your models stay accurate and relevant as new data becomes available.`
    },
    {
      q: `What is explainable AI and do you provide it?`,
      a: `Explainable AI (XAI) helps understand how AI models make decisions. We provide model explainability using tools like SHAP, LIME, and other interpretation techniques. This is crucial for regulated industries.`
    },
    {
      q: `Do you provide AI for automation?`,
      a: `Yes, we build AI solutions for business process automation including document processing, data extraction, workflow automation, and intelligent decision making using AI and ML.`
    },
    {
      q: `What is your approach to model governance?`,
      a: `We implement model governance including version control, approval workflows, audit trails, and compliance checks. This ensures your AI models are tracked, documented, and governed properly.`
    },
    {
      q: `Do you provide fraud detection solutions?`,
      a: `Yes, we build fraud detection solutions using anomaly detection, supervised learning, and graph neural networks. Our solutions help identify fraudulent transactions, activities, and patterns in real-time.`
    },
    {
      q: `What is your contact information for ${city}?`,
      a: `You can reach us at +91 ${contactInfo.salmanNizamPhone} or visit our office at ${contactInfo.websiteAddress}. Our business hours are ${contactInfo.businessHours.weekdays} on weekdays. For any inquiries, you can also contact us via email or through our website.`
    }
  ];
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}