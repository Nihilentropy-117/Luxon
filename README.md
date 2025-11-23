# Luxon - Privacy-First Smart Home Installation Website

A professional website for Luxon, a Cincinnati-based smart home installation business specializing in privacy-first, contract-free home security solutions.

## Tech Stack

- **Backend**: Node.js with Express.js
- **Frontend**: AngularJS 1.8
- **Styling**: Custom CSS with responsive design
- **Notifications**: Telegram Bot API for contact form submissions

## Project Structure

```
Site3/
├── public/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   ├── app.js
│   │   └── controllers.js
│   ├── views/
│   │   ├── home.html
│   │   ├── services.html
│   │   ├── portfolio.html
│   │   ├── about.html
│   │   └── contact.html
│   └── index.html
├── server.js
├── package.json
└── .env.example
```

## Features

### Pages
1. **Home** - Hero section, trust indicators, problem/solution showcase, portfolio teaser, testimonials
2. **Services** - Three service packages with pricing, add-ons, process overview
3. **Portfolio** - Project showcase with filtering, featured case study
4. **About** - Company story, values, competitor comparison, credentials, service areas
5. **Contact** - Contact form with backend integration, FAQ section

### Key Features
- Responsive mobile-first design
- Single Page Application (SPA) with AngularJS routing
- Contact form with Telegram notifications
- Portfolio filtering system
- Professional UI with brand colors (Deep Blue & Orange)
- SEO-friendly structure

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file based on `.env.example`:
   ```bash
   cp .env.example .env
   ```

4. Update the `.env` file with your Telegram credentials:
   ```
   PORT=3000
   TELEGRAM_BOT_TOKEN=your-telegram-bot-token
   TELEGRAM_CHAT_ID=your-telegram-chat-id
   ```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Telegram Configuration

The contact form sends each submission to Telegram via the Bot API. To configure:

1. Create a Telegram bot with [@BotFather](https://t.me/BotFather) and copy the bot token into `TELEGRAM_BOT_TOKEN`.
2. Start a chat with the bot (or add it to a group) and obtain the chat ID. You can:
   - Message [@userinfobot](https://t.me/userinfobot) to get your personal chat ID, or
   - Add the bot to a group and call `https://api.telegram.org/bot<token>/getUpdates` to read the group chat ID.
3. Set `TELEGRAM_CHAT_ID` to that ID and restart the server so the new environment variables take effect.

## Customization

### Update Phone Number
Search for `(513) XXX-XXXX` in all files and replace with actual phone number.

### Update Email
Replace `hello@luxonhome.com` with actual email address.

### Add Images
Place project images in `public/images/` and update the image placeholders in the view files.

### Modify Colors
Update CSS variables in `public/css/styles.css`:
```css
:root {
    --primary-color: #1e3a8a;  /* Deep Blue */
    --secondary-color: #f59e0b; /* Orange */
}
```

## Deployment

### Option 1: Traditional Hosting (DigitalOcean, Linode, AWS EC2)
1. Upload files to server
2. Install Node.js and npm
3. Run `npm install`
4. Configure environment variables
5. Start with `npm start` or use PM2 for process management

### Option 2: Platform as a Service (Heroku, Render, Railway)
1. Connect repository
2. Set environment variables in dashboard
3. Deploy automatically from git

### Option 3: Serverless (Vercel, Netlify)
- May require adaptation for serverless functions

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

ISC

## Contact

For questions or support, contact hello@luxonhome.com
