import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    );

    // Save message + basic visitor analytics
    const { error } = await supabase.from("visitor_messages").insert([
      {
        name,
        email,
        subject: subject || null,
        message,
        ip_address: req.headers.get("x-forwarded-for") ?? null,
        user_agent: req.headers.get("user-agent") ?? null,
        created_at: new Date().toISOString(),
      },
    ]);

    if (error) throw error;

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to save message." },
      { status: 500 }
    );
  }
}