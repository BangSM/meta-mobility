import { NextResponse } from "next/server"
import sgMail from "@sendgrid/mail"

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(req: Request) {
  try {
    const { companyName, yourName, companyEmail, contractNumber, message } = await req.json()

    if (!companyName || !yourName || !companyEmail || !contractNumber || !message) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 })
    }

    await sgMail.send({
      to: process.env.SENDGRID_SENDER_EMAIL!, // 관리자가 받을 주소
      from: process.env.SENDGRID_SENDER_EMAIL!, // verified sender
      subject: `[문의폼] ${yourName}님이 보낸 메시지`,
      text: `
          보낸 사람: ${yourName} (${companyEmail})
          메시지:
          ${message}
          `,
      html: `
        <h3>보낸 사람: ${yourName} (${companyEmail})</h3>
        <p>${message}</p>
      `,
    })

    return NextResponse.json({ message: "메일이 성공적으로 발송되었습니다!" }, { status: 200 })
  } catch (error: any) {
    console.error(error)
    return NextResponse.json({ message: "메일 발송 실패", error: error.message }, { status: 500 })
  }
}
