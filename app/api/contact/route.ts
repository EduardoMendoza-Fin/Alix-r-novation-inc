import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { name, phone, email, serviceType, message, locale } = await request.json()
  const apiKey = process.env.AIRTABLE_API_KEY
  const baseId = process.env.AIRTABLE_BASE_ID
  const tableName = process.env.AIRTABLE_TABLE_NAME

  if (!apiKey || !baseId || !tableName) {
    return NextResponse.json({ error: 'Missing Airtable environment variables' }, { status: 500 })
  }

  try {
    const airtableUrl = `https://api.airtable.com/v0/${baseId}/${encodeURIComponent(tableName)}`
    const res = await fetch(airtableUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          Name: name,
          Phone: phone,
          Email: email,
          Service: serviceType,
          Message: message,
          Locale: locale,
          Source: 'Website',
        },
      }),
    })

    if (!res.ok) {
      const error = await res.text()
      console.error('Airtable error', error)
      return NextResponse.json({ error: 'Failed to submit' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Unexpected error', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
