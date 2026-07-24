import { NextRequest, NextResponse } from "next/server";

const GHL_WEBHOOK_URL =
  "https://services.leadconnectorhq.com/hooks/iMsGw83syazqwBs1cQgw/webhook-trigger/dd00fa18-988e-4104-8eeb-e52ede585f9a";

export async function POST(req: NextRequest) {
  const body = await req.json();

  if (body.website) {
    return NextResponse.json({ ok: true });
  }

  if (!body.fullName || !body.email || !body.phone) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields" },
      { status: 400 }
    );
  }

  const ghlPayload = {
    name: body.fullName,
    email: body.email,
    phone: body.phone,
    postal_code: body.zip,
    service_interested: body.serviceInterest,
    message: body.message,
  };

  try {
    const response = await fetch(GHL_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ghlPayload),
    });

    if (!response.ok) throw new Error("GHL webhook failed");

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Submission failed" },
      { status: 500 }
    );
  }
}
