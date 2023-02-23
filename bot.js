const Telegraf = require('telegraf')
const TikTokScraper = require('tiktok-scraper')

const bot = new Telegraf(6216248779:AAERKYlQDU-HD7ix6eIZJsN8xBgX4btUiKw)

bot.start((ctx) => ctx.reply('Привет! Отправьте мне ссылку на видео в TikTok.'))

bot.on('text', async (ctx) => {
  const url = ctx.message.text

  try {
    const videoMeta = await TikTokScraper.getVideoMeta(url)
    const videoUrl = videoMeta.collector[0].videoUrl

    ctx.replyWithVideo({ url: videoUrl })
  } catch (error) {
    ctx.reply('Произошла ошибка при загрузке видео. Попробуйте еще раз.')
  }
})

bot.launch()
