import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // -------------------------------------
    // FUTURE: Add SMTP / Email sending here
    // -------------------------------------
    // Example:
    // await sendEmail(name, email, message);

    console.log("Contact form received:", { name, email, message });

    return NextResponse.json(
      { success: true, message: "Message received successfully." },
      { status: 200 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Invalid JSON or server error." },
      { status: 500 }
    );
  }
}
