import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { email } = body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        type: "service_account",
        project_id: process.env.GOOGLE_PROJECT_ID,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID; // From .env
    const range = "Sheet1!H:H"; // Adjust as needed

    const values = [[email]];

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range,
      valueInputOption: "RAW",
      requestBody: { values },
    });

    return NextResponse.json(
      { message: "Mail added to Google Sheets" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: "Failed to add Mail" }, { status: 500 });
  }
}

export async function OPTIONS() {
  return NextResponse.json(
    {},
    { status: 200, headers: { "Access-Control-Allow-Origin": "*" } }
  );
}