import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// Price IDs for different donation amounts
const ONE_TIME_PRICE_ID = "price_1ShzH5BTNSdyOiO1lJfhNetm";
const MONTHLY_PRICE_ID = "price_1ShzHOBTNSdyOiO1yXu8WBxS";

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { amount, donationType, tributeType, tributeName, email } = await req.json();

    if (!amount || amount < 1) {
      throw new Error("Invalid donation amount");
    }

    const stripe = new Stripe(Deno.env.get("STRIPE_SECRET_KEY") || "", {
      apiVersion: "2025-08-27.basil",
    });

    // Build metadata for the donation
    const metadata: Record<string, string> = {
      donation_type: donationType || "once",
      amount: amount.toString(),
    };

    if (tributeType && tributeType !== "none") {
      metadata.tribute_type = tributeType;
      if (tributeName) {
        metadata.tribute_name = tributeName;
      }
    }

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      customer_email: email || undefined,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: donationType === "monthly" 
                ? `VETPAL Monthly Donation - $${amount}/month` 
                : `VETPAL One-Time Donation - $${amount}`,
              description: tributeType && tributeType !== "none"
                ? `${tributeType === "honor" ? "In Honor Of" : "In Memory Of"}: ${tributeName || "Someone Special"}`
                : "Supporting veterans and marine conservation",
            },
            unit_amount: amount * 100, // Convert to cents
            recurring: donationType === "monthly" ? { interval: "month" } : undefined,
          },
          quantity: 1,
        },
      ],
      mode: donationType === "monthly" ? "subscription" : "payment",
      success_url: `${req.headers.get("origin")}/donate/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get("origin")}/donate`,
      metadata,
    });

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Checkout error:", errorMessage);
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
