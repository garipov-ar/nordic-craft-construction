import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { sendLeadToTelegram } from '@/utils/telegram';

const leadSchema = z.object({
  source: z.string().default('unknown'),
  name: z.string().min(1, 'Имя обязательно'),
  phone: z.string().min(8, 'Некорректный номер телефона'),
  preferredMessenger: z.enum(['telegram', 'whatsapp', 'call']).optional(),
  comment: z.string().optional(),
  quizData: z
    .object({
      technology: z.string(),
      area: z.number().positive(),
      floors: z.number().positive(),
      package: z.string(),
      extras: z.array(z.string()).optional(),
      estimatedPrice: z.number().positive(),
      monthlyMortgage: z.number().optional(),
      timelineDays: z.number().optional(),
    })
    .optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const validatedData = leadSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        {
          success: false,
          error: 'Ошибка валидации данных',
          details: validatedData.error.flatten(),
        },
        { status: 400 }
      );
    }

    const leadId = 'NC-' + Math.floor(100000 + Math.random() * 900000);
    const result = await sendLeadToTelegram(validatedData.data);

    return NextResponse.json({
      success: true,
      leadId,
      message: 'Заявка успешно принята в обработку',
      dispatched: result.success,
    });
  } catch (error) {
    console.error('Lead processing error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Внутренняя ошибка сервера при обработке заявки',
      },
      { status: 500 }
    );
  }
}
