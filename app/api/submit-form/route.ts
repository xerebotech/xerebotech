import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const sheetUrl = process.env.FORM_SHEET_URL;
        if (!sheetUrl) {
            return NextResponse.json({ error: 'Sheet URL not configured' }, { status: 500 });
        }

        const response = await fetch(sheetUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify(body),
        });

        if (!response.ok) {
            throw new Error(`Apps Script responded with ${response.status}`);
        }

        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Form submission error:', error);
        return NextResponse.json({ error: 'Failed to submit form' }, { status: 500 });
    }
}
