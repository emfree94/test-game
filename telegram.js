import { Telegraf, Markup } from 'telegraf';

const token = '7535788563:AAGhL2y19Bp8HektbDj43g3qhBuekYF8Uew';
const webUrl = 'https://games-telegram.netlify.app'; 

const bot = new Telegraf(token);

bot.command('start', async (ctx) => {
  const user = ctx.message.from;

  console.log(user);
  try {
    const userProfilePhotos = await ctx.telegram.getUserProfilePhotos(user.id);
    if (userProfilePhotos.total_count > 0) {
      const fileId = userProfilePhotos.photos[0][0].file_id;

      const fileDetails = await ctx.telegram.getFile(fileId);
      const fileUrl = `https://api.telegram.org/file/bot${token}/${fileDetails.file_path}`;

      console.log('userImg', fileUrl);
    } else {
      ctx.reply('No profile photo found.');
    }
  } catch (error) {
    console.error('Error fetching profile photo:', error);
    ctx.reply('Could not fetch profile photo.');
  }

  ctx.reply(
    'Please share your phone number:',
    Markup.keyboard([
      Markup.button.contactRequest('Share Phone Number') 
    ]).oneTime().resize()
  );

  ctx.reply(
    'Click the button below to visit our website:',
    Markup.inlineKeyboard([
      [Markup.button.webApp('Visit Website', webUrl)] 
    ])
  )
});

bot.on('contact', (ctx) => {
  const phoneNumber = ctx.message.contact.phone_number;
  console.log('User Phone Number:', phoneNumber);

  ctx.reply(`Thanks for sharing your phone number: ${phoneNumber}`);
});

bot.launch();
