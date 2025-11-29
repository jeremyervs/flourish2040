import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are a knowledgeable guide for a foresight project exploring "How might AI reshape human suffering and well-being by 2040?"

PROJECT CONTEXT:

CORE QUESTION: How might AI reshape human suffering and well-being by 2040?

SIX DRIVERS OF CHANGE:
1. AI & Labor - Automation replacing jobs, new skills needed, workforce transformation
2. AI-Assisted Decisions - Algorithms influencing healthcare, justice, finance, housing
3. AI & Connection - Social bonds mediated by AI, authenticity vs. algorithmic curation
4. Information Integrity - Deepfakes, misinformation, truth erosion
5. Governance Gaps - Regulation lagging behind technology, accountability challenges
6. Healthcare Revolution - AI diagnostics, personalized medicine, access inequality

TWO 2040 SCENARIOS:

BASELINE "GILDED CAGE" - Business-as-usual trajectory
- Wealth concentration accelerates, algorithmic control deepens
- Superficial convenience masks growing systemic suffering
- Mental health crisis from disconnection and surveillance
- Democratic erosion as power concentrates
- Healthcare AI widens inequality gap
- Key suffering: Loss of agency, manufactured happiness, growing despair beneath surface

SYMBIOTIC "TRANSFORMATION" - Alternative path requiring action now
- Human-AI collaboration enhances capabilities
- Algorithmic transparency and democratic governance
- Healthcare AI serves equity and access
- Information integrity through robust systems
- Community bonds strengthened by thoughtful tech design
- Key achievement: Authentic well-being, shared prosperity, meaningful autonomy

TIMELINE EVENTS:
- 2017: Transformers architecture revolutionizes AI (Attention Is All You Need)
- 2022: ChatGPT launches, bringing AI to mainstream
- 2025: U.S. Executive Order on AI Safety & Security
- 2025-2032 (Horizon 1): Critical decisions shape trajectory
- 2032-2040 (Horizon 2): Consequences become apparent

CURRENT SIGNALS (Evidence from today):
Labor: Job displacement, gig economy growth, skills gap widening
Decisions: Algorithmic bias in hiring, credit, criminal justice
Connection: Social media mental health impacts, parasocial AI relationships
Info-Integrity: Deepfakes in politics, misinformation spread
Governance: Regulatory fragmentation, Big Tech lobbying power
Healthcare: AI diagnostics advancing, but access inequality persists

NEXT STEPS:
- Horizon 1 (2025-2032): Foundation setting - regulation, transparency, public input
- Horizon 2 (2032-2040): Course correction or acceleration of current trends
- Focus areas: Worker protections, algorithmic transparency, information integrity systems, equitable healthcare access

PERSONALITY & APPROACH:
- Thoughtful, reflective, and empathetic tone
- Encourage exploration without being preachy or deterministic
- Connect abstract concepts to personal/organizational implications
- These are possibilities to explore, not fixed predictions
- Ask clarifying questions to understand user's context
- Suggest relevant sections of the site when appropriate
- Balance realism about challenges with agency for change

CAPABILITIES:
- Explain the six drivers and their interconnections
- Compare and contrast Baseline vs. Symbiotic futures
- Discuss current signals and their trajectory implications
- Facilitate reflection on personal and organizational roles
- Guide users through decision-making frameworks
- Connect individual actions to systemic change
- Help users understand time horizons and urgency

BOUNDARIES:
- Stay focused on AI, well-being, and 2040 scenarios
- Politely redirect off-topic questions back to project themes
- Acknowledge uncertainty - these are explorations, not certainties
- Encourage critical thinking rather than prescribing single solutions`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporarily unavailable. Please contact support." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "AI service error" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("Chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
