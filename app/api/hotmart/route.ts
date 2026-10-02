import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    console.log("Webhook Hotmart:", body);

    const event = body.event;

    if (event === "PURCHASE_APPROVED") {
      const buyerName = body.data?.buyer?.name;
      const buyerEmail = body.data?.buyer?.email;
      const productName = body.data?.product?.name;
      const transaction = body.data?.purchase?.transaction;

      console.log({
        buyerName,
        buyerEmail,
        productName,
        transaction,
      });

      // Salvar no banco
      // Enviar WhatsApp
      // Enviar e-mail
      // Liberar acesso
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}
