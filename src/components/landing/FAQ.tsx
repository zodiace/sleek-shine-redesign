import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How is this different from writing a system prompt?",
    a: "A system prompt tells a model how to behave. Trinity gives it the life experiences that make that behavior natural. The difference is depth and persistence — a prompt that says \"be cautious\" fades after a few exchanges. A persona whose caution is rooted in a decade of formative experiences maintains that trait consistently, even in long conversations and unexpected contexts. Trinity also makes personality parameterized, measurable, and portable across different LLM models.",
  },
  {
    q: "Which LLM models does Trinity support?",
    a: "Trinity works with all major LLM providers through OpenRouter, including models from Anthropic, OpenAI, Google, Meta, and others. Starter plan users get access to a default model. Professional and Enterprise users can select a specific model for each persona, and the personality wrapper works consistently across all of them.",
  },
  {
    q: "What is Life Context?",
    a: "Life Context is a Professional plan feature that lets you describe your persona's specific background — their culture, socioeconomic circumstances, career path, and personal history. Instead of drawing from a generic backstory library, Trinity generates backstories on the fly that are grounded in the context you provide. This produces personas with much richer, more specific behavioral patterns.",
  },
  {
    q: "How does multi-persona chat work?",
    a: "When you start a new chat, you select up to five personas. Every message you send goes to all of them independently — they don't see each other's responses. Tabs at the top of the chat let you switch between personas to compare how each one responds to the same input. It's like having a panel discussion where each participant brings a genuinely different perspective shaped by their personality and life experiences.",
  },
  {
    q: "Can I use Trinity personas in my own application?",
    a: "Yes. Enterprise plan users get access to the Trinity API, which lets you create personas programmatically and use their system prompts in your own chat completions. Every persona has a unique 18-character ID that you can reference in API calls. This lets you integrate Trinity's personality engine into your own products, chatbots, and workflows.",
  },
  {
    q: "How long does it take to create a persona?",
    a: "Setting the personality traits takes about 30 seconds. The system then takes 15–60 seconds to generate the life story and assemble the system prompt, depending on the persona's maturity setting and whether you've added Life Context. You'll see a progress indicator while the persona is being generated, and you can start chatting as soon as it's ready.",
  },
  {
    q: "What personality traits can I control?",
    a: "Trinity offers 10 personality dimensions: Warmth, Assertiveness, Risk Orientation, Openness to Novelty, Analytical Depth, Formality, Authority Orientation, Optimism Bias, Decisiveness, and Self-Disclosure. Each is set on a 1–5 scale. Enterprise users can define custom trait frameworks with dimensions specific to their domain.",
  },
  {
    q: "Is there academic research behind this approach?",
    a: 'Yes. The concept of using narrative backstories to condition LLM behavior has been validated in peer-reviewed research, notably "Virtual Personas for Language Models via an Anthology of Backstories" (EMNLP 2024) from UC Berkeley. The research demonstrates that backstory-conditioned models produce responses more aligned with genuine human behavioral patterns than models conditioned with simple descriptive labels or demographic profiles.',
  },
  {
    q: "Can I edit a persona after creating it?",
    a: "You can edit a persona's name at any time. However, personality traits and maturity settings are fixed once created. This is by design — a persona's life story is generated from those settings, and changing them would require regenerating the entire narrative. If you want a different personality profile, create a new persona. Your existing conversations with the original persona are preserved.",
  },
  {
    q: "What happens to my chats if I delete a persona?",
    a: "Your conversation history is preserved. Deleted personas are archived rather than removed — you can still read past conversations, but you can't send new messages to them. In multi-persona chats, the other personas remain fully functional.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-32 md:py-40 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">FAQ</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Frequently asked questions
          </h2>
        </div>
        <Accordion type="single" collapsible className="max-w-2xl mx-auto">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
