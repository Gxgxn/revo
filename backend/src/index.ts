require('dotenv').config();
import Anthropic from '@anthropic-ai/sdk';

const anthropic = new Anthropic({
  // defaults to process.env["ANTHROPIC_API_KEY"]
  apiKey: process.env.CLAUDE_API_KEY,
});
async function main() {
  await anthropic.messages
    .stream({
      messages: [{ role: 'user', content: 'create a simple todo app' }],
      model: 'claude-3-5-sonnet-20241022',
      max_tokens: 1024,
    })
    .on('text', (text) => {
      console.log(text);
    });
}
main();
