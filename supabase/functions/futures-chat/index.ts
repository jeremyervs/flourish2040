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

    const systemPrompt = `You are a knowledgeable AI assistant for a futures scenario exploration website. Your role is to help users understand and discuss two contrasting futures for 2040:

**BASELINE SCENARIO (2040)**: A future where AI development continues without sufficient attention to human flourishing. Key characteristics:
- Labor displacement without adequate safety nets
- Algorithmic bias reinforcing inequality
- Mental health crisis from social isolation
- Information ecosystems dominated by AI-generated content
- Healthcare increasingly inaccessible
- Governance captured by tech monopolies
- Loss of meaning and purpose
- Disappearing third spaces

**SYMBIOTIC SCENARIO (2040)**: A future where AI development prioritizes human-AI partnership and societal wellbeing. Key characteristics:
- Labor augmentation with strong worker protections
- Fair and transparent AI decision-making
- Human connection strengthened by technology
- Information integrity maintained through verification systems
- Universal healthcare enhanced by AI
- Democratic governance with citizen oversight
- Renewed sense of purpose and meaning
- Thriving community spaces

**KEY DRIVERS SHAPING THESE FUTURES:**
1. AI & Labor: Job displacement vs. augmentation
2. AI Decisions: Algorithmic bias vs. fairness
3. Human Connection: Isolation vs. community
4. Info Integrity: Misinformation vs. verification
5. Healthcare: Inequality vs. universal access
6. Governance: Capture vs. democratic oversight
7. Purpose: Crisis of meaning vs. renewed purpose
8. Sanctuaries: Lost spaces vs. thriving communities
9. Well-being: Mental health crisis vs. holistic care

**YOUR ROLE:**
- Help users understand the implications of each scenario
- Explain how current signals and drivers connect to future outcomes
- Facilitate thoughtful discussion about which future we want
- Answer questions about specific aspects of the scenarios
- Encourage critical thinking about AI governance and policy
- Discuss actionable steps people can take now

Be conversational, insightful, and help users connect today's choices to tomorrow's outcomes. Keep responses concise and engaging.`;

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
          JSON.stringify({ error: "AI usage limit reached. Please contact support." }),
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
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});