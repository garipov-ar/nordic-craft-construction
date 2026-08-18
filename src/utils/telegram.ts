export interface LeadPayload {
  source: string;
  name: string;
  phone: string;
  preferredMessenger?: 'telegram' | 'whatsapp' | 'call';
  comment?: string;
  quizData?: {
    technology: string;
    area: number;
    floors: number;
    package: string;
    extras?: string[];
    estimatedPrice: number;
    monthlyMortgage?: number;
    timelineDays?: number;
  };
}

export async function sendLeadToTelegram(lead: LeadPayload): Promise<{ success: boolean; error?: string }> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const timestamp = new Date().toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' });
  const messengerLabel =
    lead.preferredMessenger === 'telegram'
      ? '✈️ Telegram'
      : lead.preferredMessenger === 'whatsapp'
      ? '💬 WhatsApp'
      : '📞 Звонок';

  let message = `🏠 <b>НОВАЯ ЗАЯВКА С САЙТА NORDIC CRAFT</b>\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `👤 <b>Клиент:</b> ${lead.name}\n`;
  message += `📱 <b>Телефон:</b> <code>${lead.phone}</code>\n`;
  message += `📲 <b>Связь через:</b> ${messengerLabel}\n`;
  message += `📍 <b>Источник:</b> ${lead.source === 'quiz_calculator' ? 'Квиз-калькулятор' : 'Форма вызова инженера'}\n`;
  message += `⏰ <b>Время (МСК):</b> ${timestamp}\n`;

  if (lead.comment) {
    message += `💬 <b>Комментарий:</b> ${lead.comment}\n`;
  }

  if (lead.quizData) {
    message += `\n📊 <b>ПАРАМЕТРЫ РАСЧЕТА СМЕТЫ:</b>\n`;
    message += `• Технология: <b>${lead.quizData.technology}</b>\n`;
    message += `• Площадь: <b>${lead.quizData.area} м² (${lead.quizData.floors} эт.)</b>\n`;
    message += `• Комплектация: <b>${lead.quizData.package}</b>\n`;

    if (lead.quizData.extras && lead.quizData.extras.length > 0) {
      message += `• Доп. опции: ${lead.quizData.extras.join(', ')}\n`;
    }

    message += `💰 <b>Ориентир сметы:</b> <u>${new Intl.NumberFormat('ru-RU').format(lead.quizData.estimatedPrice)} ₽</u>\n`;
    if (lead.quizData.monthlyMortgage) {
      message += `🏦 <b>Ипотечный платеж:</b> ~${new Intl.NumberFormat('ru-RU').format(lead.quizData.monthlyMortgage)} ₽/мес\n`;
    }
    if (lead.quizData.timelineDays) {
      message += `⏱ <b>Срок строительства:</b> ~${lead.quizData.timelineDays} дней\n`;
    }
  }

  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `🎁 <i>Подарки зафиксированы: 3D-проект + Геология грунта</i>`;

  // If credentials are configured, dispatch real Telegram Bot API request
  if (botToken && chatId) {
    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: chatId,
          text: message,
          parse_mode: 'HTML',
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.ok) {
        console.error('Telegram API error:', data);
        return { success: false, error: data.description || 'Telegram API error' };
      }
      return { success: true };
    } catch (err) {
      console.error('Failed to send telegram notification:', err);
      return { success: false, error: 'Network failure' };
    }
  }

  // Fallback logging for development / portfolio preview
  console.log('--- [MOCK TELEGRAM DISPATCH] ---');
  console.log(message.replace(/<[^>]*>?/gm, ''));
  console.log('--------------------------------');

  return { success: true };
}
