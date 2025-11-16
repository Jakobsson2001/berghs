import { Container, Box, Typography, Paper, Link as MuiLink, List, ListItem, ListItemText } from '@mui/material';

const AiMlPage = () => {
  return (
    <Container maxWidth="lg" sx={{ px: 2 }}>
      <Box
        sx={{
          background: 'var(--panel)',
          border: '1px solid var(--border)',
          borderRadius: 5,
          p: 4,
          boxShadow: 'var(--shadow)',
          mb: 4,
          mt: 4,
        }}
      >
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' }, gap: 3, alignItems: 'center' }}>
          <Box>
            <Typography
              variant="overline"
              sx={{
                display: 'block',
                fontSize: '12px',
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                mb: 1,
              }}
            >
              AI & Machine Learning
            </Typography>
            <Typography variant="h1" sx={{ fontSize: '34px', mb: 1, color: 'var(--text)' }}>
              Open-Source AI Models & Data
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--muted)', mb: 2, lineHeight: 1.7 }}>
              Explore how modern AI workflows are shaped by data. Compare commercial APIs like OpenAI with open-source models on Hugging Face, and learn how to integrate AI into your backend.
            </Typography>
          </Box>
          <Box sx={{ width: '100%', maxWidth: 420, ml: 'auto' }}>
            <svg viewBox="0 0 260 200" role="img" width="100%" height="100%">
              <defs>
                <linearGradient id="aiGradient" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="260" height="200" rx="16" fill="url(#aiGradient)" opacity="0.18" />
              <circle cx="130" cy="100" r="50" fill="#a78bfa" opacity="0.9" />
              <circle cx="100" cy="80" r="20" fill="#f472b6" opacity="0.85" />
              <circle cx="160" cy="80" r="20" fill="#f472b6" opacity="0.85" />
              <path d="M 110 130 Q 130 140 150 130" stroke="#f472b6" strokeWidth="4" fill="none" opacity="0.9" />
            </svg>
          </Box>
        </Box>
      </Box>

      <Box
        className="prose"
        sx={{
          background: 'var(--panel)',
          border: '1px solid var(--border)',
          borderRadius: 5,
          p: 5,
          boxShadow: 'var(--shadow)',
        }}
      >
        <Box sx={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(236,72,153,0.08))', border: '1px solid var(--border)', borderRadius: 4, p: 2.5, mb: 3, textAlign: 'center' }}>
          <Typography sx={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)' }}>
            🤖 Data powers AI. Open-source models make AI accessible. Commercial APIs make it easy.
          </Typography>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          How Data Powers AI Models
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Modern AI models are trained on massive datasets. The quality and quantity of data directly impacts how well a model performs. Understanding this relationship helps you choose the right AI solution for your project.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            The Data → Model → Application Pipeline
          </Typography>
          <List component="ol" sx={{ m: '12px 0', pl: 2.5, listStyleType: 'decimal' }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Data Collection</strong> — Gather large amounts of text, images, or other data relevant to the task</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Data Cleaning & Preparation</strong> — Remove noise, format consistently, label if needed</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Model Training</strong> — Feed data to algorithms that learn patterns (this takes massive computing power)</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Model Deployment</strong> — Make the trained model available via API or download</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Application Integration</strong> — Developers call the model from their backend to add AI features</>} />
            </ListItem>
          </List>
        </Paper>

        <Box
          sx={{
            borderLeft: '4px solid var(--accent)',
            p: 2,
            m: '24px 0',
            background: 'rgba(217,70,239,0.08)',
            borderRadius: 1.5,
            lineHeight: 1.6,
          }}
        >
          <Typography sx={{ m: 0, fontWeight: 600 }}>
            💡 Why Data Matters
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            A model trained on medical texts will excel at medical questions but struggle with cooking recipes. 
            A model trained on diverse internet text (like GPT) can handle many topics but may lack depth in specialized areas. 
            The dataset determines the model's strengths and limitations.
          </Typography>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Hugging Face: The GitHub of AI
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          <strong>Hugging Face</strong> is a platform that hosts thousands of open-source AI models, datasets, and tools. Think of it as GitHub for machine learning — a place where researchers and developers share their work.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            What You Can Find on Hugging Face
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Models</strong> — Pre-trained AI models for text, images, audio, and more. Download and use them in your projects.</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Datasets</strong> — Collections of data used to train models. Browse datasets to understand what data powers different AI capabilities.</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Spaces</strong> — Interactive demos and applications built with models. Try them out to see what's possible.</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Documentation & Code</strong> — Examples, tutorials, and code snippets to help you integrate models.</>} />
            </ListItem>
          </List>
        </Paper>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2, my: 3 }}>
          <Paper sx={{ background: 'linear-gradient(180deg, rgba(139,92,246,0.10), rgba(139,92,246,0.02))', border: '1px solid var(--border)', borderRadius: 3.5, p: 2.25 }}>
            <Typography sx={{ fontSize: '32px', mb: 1 }}>🔍</Typography>
            <Typography variant="h4" sx={{ fontSize: '18px', mb: 1 }}>
              Browse Models
            </Typography>
            <Typography variant="body2" sx={{ color: 'var(--muted)', fontSize: '14px', mb: 1.5 }}>
              Search for models by task: text generation, image classification, translation, sentiment analysis, and more.
            </Typography>
            <MuiLink href="https://huggingface.co/models" target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)', fontSize: '14px' }}>
              Explore Models →
            </MuiLink>
          </Paper>
          <Paper sx={{ background: 'linear-gradient(180deg, rgba(59,130,246,0.10), rgba(59,130,246,0.02))', border: '1px solid var(--border)', borderRadius: 3.5, p: 2.25 }}>
            <Typography sx={{ fontSize: '32px', mb: 1 }}>📊</Typography>
            <Typography variant="h4" sx={{ fontSize: '18px', mb: 1 }}>
              Explore Datasets
            </Typography>
            <Typography variant="body2" sx={{ color: 'var(--muted)', fontSize: '14px', mb: 1.5 }}>
              See what data was used to train models. Understand the relationship between data and model capabilities.
            </Typography>
            <MuiLink href="https://huggingface.co/datasets" target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)', fontSize: '14px' }}>
              Browse Datasets →
            </MuiLink>
          </Paper>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Open-Source Models vs Commercial APIs
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          When building AI features, you have two main options: use open-source models (often via Hugging Face) or commercial APIs (like OpenAI). Each has trade-offs.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Comparison: Open-Source vs Commercial
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2, mt: 2 }}>
            <Box>
              <Typography variant="h5" sx={{ fontSize: '16px', mb: 1, color: 'var(--accent)' }}>
                🤖 Open-Source Models (Hugging Face)
              </Typography>
              <List sx={{ m: '8px 0', pl: 2.5 }}>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="✅ Free to use (no API costs)" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="✅ Full control — run on your own servers" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="✅ Privacy — data stays on your infrastructure" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="❌ Requires technical setup (GPU, infrastructure)" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="❌ May need fine-tuning for your use case" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="❌ Generally less polished than commercial APIs" />
                </ListItem>
              </List>
            </Box>
            <Box>
              <Typography variant="h5" sx={{ fontSize: '16px', mb: 1, color: 'var(--accent)' }}>
                💼 Commercial APIs (OpenAI, Anthropic)
              </Typography>
              <List sx={{ m: '8px 0', pl: 2.5 }}>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="✅ Easy to use — simple API calls" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="✅ No infrastructure needed — they handle servers" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="✅ High quality — state-of-the-art models" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="✅ Regular updates and improvements" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="❌ Costs money per API call" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="❌ Data sent to third-party servers" />
                </ListItem>
                <ListItem sx={{ display: 'list-item', pl: 0 }}>
                  <ListItemText primary="❌ Less control over model behavior" />
                </ListItem>
              </List>
            </Box>
          </Box>
        </Paper>

        <Box
          sx={{
            borderLeft: '4px solid var(--accent)',
            p: 2,
            m: '24px 0',
            background: 'rgba(217,70,239,0.08)',
            borderRadius: 1.5,
            lineHeight: 1.6,
          }}
        >
          <Typography sx={{ m: 0, fontWeight: 600 }}>
            💡 When to Choose What
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            <strong>Use commercial APIs</strong> when you want to ship quickly, don't have infrastructure, or need the best quality. 
            <strong>Use open-source models</strong> when you need privacy, have infrastructure, want to avoid costs, or need to customize the model.
          </Typography>
          <Typography sx={{ m: 0, mt: 1.5 }}>
            <strong>Cost Consideration:</strong> For high-volume applications, hosting your own open-source LLM can be significantly cheaper than using commercial APIs like OpenAI. While there's an upfront infrastructure cost, at scale, the per-request cost of self-hosted models is often much lower. Calculate your expected usage to determine which approach makes financial sense.
          </Typography>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Fine-Tuning: Task-Specific Model Adaptation
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          When you have access to task-specific data, <strong>fine-tuning</strong> a model can significantly outperform general-purpose models. Fine-tuning involves taking a pre-trained model and training it further on your specific dataset, adapting it to your particular use case.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Why Fine-Tune?
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Better Performance</strong> — Fine-tuned models often achieve significantly higher accuracy on specific tasks compared to general-purpose models</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Domain-Specific Knowledge</strong> — The model learns the nuances, terminology, and patterns specific to your domain</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Smaller Models Can Excel</strong> — A fine-tuned smaller model can outperform larger general-purpose models on your specific task</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Cost Efficiency</strong> — Fine-tuned models can be more efficient, requiring fewer resources than constantly calling large commercial APIs</>} />
            </ListItem>
          </List>
        </Paper>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Real-World Example: Process Mining & Conformance Checking
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5, color: 'var(--muted)' }}>
            My own research has demonstrated the effectiveness of fine-tuning for specialized tasks. In my Master's thesis on process mining and semantic anomaly detection, I found that a fine-tuned model (xSemAD) significantly outperformed state-of-the-art general-purpose LLMs like GPT-4o and Llama when generating process constraints for conformance checking.
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5, color: 'var(--muted)' }}>
            The fine-tuned model achieved consistently higher F1-scores across most constraint types, highlighting that task-specific adaptation can be superior to using large general-purpose models, especially when you have domain-specific training data available.
          </Typography>
          <MuiLink href="https://www.diva-portal.org/smash/get/diva2:1942070/FULLTEXT01.pdf" target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)', fontSize: '14px' }}>
            Read my research paper →
          </MuiLink>
        </Paper>

        <Box
          sx={{
            borderLeft: '4px solid var(--accent)',
            p: 2,
            m: '24px 0',
            background: 'rgba(217,70,239,0.08)',
            borderRadius: 1.5,
            lineHeight: 1.6,
          }}
        >
          <Typography sx={{ m: 0, fontWeight: 600 }}>
            💡 When to Consider Fine-Tuning
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            Fine-tuning is worth considering when you have access to task-specific data, need better performance than general-purpose models can provide, or want to reduce long-term costs. 
            However, it requires technical expertise, computational resources, and quality training data. For many projects, starting with commercial APIs or pre-trained models is the right choice.
          </Typography>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          OpenAI API: A Practical Example
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          The <strong>OpenAI API</strong> is one of the most popular commercial AI APIs. It provides access to models like GPT-4 for text generation, DALL-E for image generation, and Whisper for speech-to-text. Here's how to call it from your backend.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Step 1: Get an API Key
          </Typography>
          <List component="ol" sx={{ m: '12px 0', pl: 2.5, listStyleType: 'decimal' }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<span>Visit <MuiLink href="https://platform.openai.com" target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)' }}>platform.openai.com</MuiLink> and sign up</span>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Navigate to API Keys section and create a new key" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<span>Add the key to your <code>.env</code> file: <code>OPENAI_API_KEY=sk-...</code></span>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="⚠️ Never commit API keys to git! Always use environment variables." />
            </ListItem>
          </List>
        </Paper>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Step 2: Flask Backend Example
          </Typography>
          <Paper component="pre" sx={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 2, p: 1.5, my: 1, overflow: 'auto' }}>
            <code style={{ color: '#bae6fd', whiteSpace: 'pre-wrap' }}>{`from flask import Flask, request, jsonify
import os
import requests
from dotenv import load_dotenv

load_dotenv()  # Load .env file

app = Flask(__name__)

@app.route('/api/chat', methods=['POST'])
def chat():
    try:
        data = request.get_json()
        user_message = data.get('message')
        
        if not user_message:
            return jsonify({'error': 'Message is required'}), 400
        
        # Get API key from environment
        api_key = os.getenv('OPENAI_API_KEY')
        if not api_key:
            return jsonify({'error': 'OpenAI API key not configured'}), 500
        
        # Call OpenAI API
        response = requests.post(
            'https://api.openai.com/v1/chat/completions',
            headers={
                'Authorization': f'Bearer {api_key}',
                'Content-Type': 'application/json',
            },
            json={
                'model': 'gpt-3.5-turbo',  # or 'gpt-4' for better quality
                'messages': [
                    {'role': 'system', 'content': 'You are a helpful assistant.'},
                    {'role': 'user', 'content': user_message}
                ],
                'max_tokens': 150,
            }
        )
        
        if response.status_code != 200:
            return jsonify({'error': 'OpenAI API error', 'details': response.text}), 500
        
        result = response.json()
        ai_message = result['choices'][0]['message']['content']
        
        return jsonify({
            'ok': True,
            'message': ai_message
        })
        
    except Exception as e:
        print(f'Chat error: {e}')
        return jsonify({'error': 'Failed to process request'}), 500

if __name__ == '__main__':
    app.run(debug=True)`}</code>
          </Paper>
          <Typography variant="body2" sx={{ mt: 1.5, color: 'var(--muted)' }}>
            <strong>Install dependencies:</strong> <code>pip install flask requests python-dotenv</code>
          </Typography>
        </Paper>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Step 3: Frontend Call Example
          </Typography>
          <Paper component="pre" sx={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: 2, p: 1.5, my: 1, overflow: 'auto' }}>
            <code style={{ color: '#bae6fd', whiteSpace: 'pre-wrap' }}>{`// React component example
const handleChat = async (message: string) => {
  try {
    const response = await fetch('http://localhost:5000/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });
    
    const data = await response.json();
    
    if (data.ok) {
      console.log('AI response:', data.message);
      // Display the AI response in your UI
    } else {
      console.error('Error:', data.error);
    }
  } catch (error) {
    console.error('Failed to send message:', error);
  }
};`}</code>
          </Paper>
        </Paper>

        <Box
          sx={{
            borderLeft: '4px solid var(--accent)',
            p: 2,
            m: '24px 0',
            background: 'rgba(217,70,239,0.08)',
            borderRadius: 1.5,
            lineHeight: 1.6,
          }}
        >
          <Typography sx={{ m: 0, fontWeight: 600 }}>
            🔐 Security Best Practices
          </Typography>
          <List sx={{ m: '8px 0 0 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Always store API keys in .env files, never in code" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Add .env to .gitignore to prevent committing secrets" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Call AI APIs from your backend, never from the frontend" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Validate and sanitize user input before sending to AI APIs" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Set rate limits to prevent abuse and control costs" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<span>Use <strong>CAPTCHA</strong> and other anti-spam measures to prevent exploitation. Without protection, malicious users can spam your AI endpoints, racking up costs and potentially causing service disruptions.</span>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Monitor API usage and set up alerts for unusual activity patterns" />
            </ListItem>
          </List>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Understanding Datasets
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Datasets are collections of data used to train AI models. Understanding what data a model was trained on helps you predict its strengths and limitations.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Common Dataset Types
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Text Datasets</strong> — Books, articles, code, conversations. Used to train language models like GPT.</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Image Datasets</strong> — Photos with labels (e.g., "cat", "dog"). Used to train image classification models.</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Audio Datasets</strong> — Recordings with transcriptions. Used to train speech recognition models.</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Structured Data</strong> — Tables, CSV files. Used to train models for predictions and analysis.</>} />
            </ListItem>
          </List>
        </Paper>

        <Box
          sx={{
            borderLeft: '4px solid var(--accent)',
            p: 2,
            m: '24px 0',
            background: 'rgba(217,70,239,0.08)',
            borderRadius: 1.5,
            lineHeight: 1.6,
          }}
        >
          <Typography sx={{ m: 0, fontWeight: 600 }}>
            📊 Dataset Quality Matters
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            A model trained on biased or low-quality data will produce biased or low-quality results. 
            When choosing a model, check what dataset it was trained on. 
            Hugging Face model cards often include dataset information.
          </Typography>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          What's Actually Accessible to Developers?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          As a developer, you have access to powerful AI tools without needing a PhD in machine learning. Here's what you can actually use:
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2, my: 3 }}>
          {[
            { 
              emoji: '🔌', 
              title: 'Commercial APIs', 
              desc: 'OpenAI, Anthropic, Google — simple API calls, no ML knowledge needed. Perfect for most projects.' 
            },
            { 
              emoji: '📦', 
              title: 'Pre-trained Models', 
              desc: 'Download models from Hugging Face and run them locally or on cloud services. Requires some setup.' 
            },
            { 
              emoji: '🛠️', 
              title: 'AI Libraries', 
              desc: 'Use libraries like transformers (Python) to load and run models. Great for customization.' 
            },
            { 
              emoji: '☁️', 
              title: 'Managed Services', 
              desc: 'Services like Replicate, Hugging Face Inference API — run models without managing infrastructure.' 
            },
          ].map((item) => (
            <Paper key={item.title} sx={{ background: 'linear-gradient(180deg, rgba(168,85,247,0.10), rgba(168,85,247,0.02))', border: '1px solid var(--border)', borderRadius: 3.5, p: 2.25 }}>
              <Typography sx={{ fontSize: '32px', mb: 1 }}>{item.emoji}</Typography>
              <Typography variant="h4" sx={{ fontSize: '18px', mb: 1 }}>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: 'var(--muted)', fontSize: '14px' }}>
                {item.desc}
              </Typography>
            </Paper>
          ))}
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          The AI Community: Competition & Status
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          The AI space can be competitive, with developers and researchers often comparing model sizes, performance metrics, and technical achievements. While healthy competition drives innovation, it's important to focus on what actually matters for your project: solving real problems with the right tools.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Environmental & Ethical Concerns
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Environmental Impact</strong> — Training and running large LLMs consumes massive amounts of energy. The race to build bigger models has significant carbon footprints. Consider whether you actually need the largest model or if a smaller, more efficient one would work.</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Bias & Discrimination</strong> — Models trained on biased data can perpetuate racism, sexism, and other forms of discrimination. Always test your AI applications for bias and consider the ethical implications of the models and datasets you use.</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Data Quality Matters</strong> — The saying "garbage in, garbage out" applies. Models trained on low-quality or biased datasets will produce problematic outputs. Be aware of what data was used to train the models you're using.</>} />
            </ListItem>
          </List>
        </Paper>

        <Box
          sx={{
            borderLeft: '4px solid var(--accent)',
            p: 2,
            m: '24px 0',
            background: 'rgba(217,70,239,0.08)',
            borderRadius: 1.5,
            lineHeight: 1.6,
          }}
        >
          <Typography sx={{ m: 0, fontWeight: 600 }}>
            💡 Focus on What Matters
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            Don't get caught up in status competitions about who uses the biggest model or most advanced techniques. 
            The best solution is the one that solves your problem effectively, efficiently, and within your budget. 
            Often, smaller, more task-specific models can be better than large general-purpose models — they're faster, cheaper, and more environmentally friendly.
          </Typography>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Automation Tools: n8n vs ChatGPT Agentic SDK
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          When building AI-powered workflows and automations, you have different approaches. <strong>n8n</strong> is a visual workflow automation tool, while <strong>ChatGPT's Agentic SDK</strong> provides a programmatic way to build AI agents. Each serves different use cases.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            n8n: Visual Workflow Automation
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Visual Interface</strong> — Build workflows by connecting nodes visually, no coding required</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Integrations</strong> — Connects to hundreds of services (APIs, databases, email, etc.)</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Self-hosted or Cloud</strong> — Run on your own server or use n8n Cloud</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Use Cases</strong> — Data pipelines, webhook automation, scheduled tasks, API integrations</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>AI Integration</strong> — Can include AI nodes (OpenAI, Hugging Face) in workflows</>} />
            </ListItem>
          </List>
        </Paper>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            ChatGPT Agentic SDK: Programmatic AI Agents
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Code-based</strong> — Build AI agents programmatically using Python/TypeScript</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>AI-First</strong> — Designed specifically for building autonomous AI agents</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Tool Use</strong> — Agents can use tools, make decisions, and take actions autonomously</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Use Cases</strong> — Autonomous assistants, complex reasoning tasks, multi-step problem solving</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>OpenAI Ecosystem</strong> — Built by OpenAI, integrates tightly with their models</>} />
            </ListItem>
          </List>
        </Paper>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2, my: 3 }}>
          <Paper sx={{ background: 'linear-gradient(180deg, rgba(139,92,246,0.10), rgba(139,92,246,0.02))', border: '1px solid var(--border)', borderRadius: 3.5, p: 2.25 }}>
            <Typography sx={{ fontSize: '32px', mb: 1 }}>🔧</Typography>
            <Typography variant="h4" sx={{ fontSize: '18px', mb: 1 }}>
              Choose n8n When
            </Typography>
            <Typography variant="body2" sx={{ color: 'var(--muted)', fontSize: '14px' }}>
              You need to automate workflows between multiple services, want a visual interface, or need to integrate many different APIs and tools.
            </Typography>
          </Paper>
          <Paper sx={{ background: 'linear-gradient(180deg, rgba(59,130,246,0.10), rgba(59,130,246,0.02))', border: '1px solid var(--border)', borderRadius: 3.5, p: 2.25 }}>
            <Typography sx={{ fontSize: '32px', mb: 1 }}>🤖</Typography>
            <Typography variant="h4" sx={{ fontSize: '18px', mb: 1 }}>
              Choose Agentic SDK When
            </Typography>
            <Typography variant="body2" sx={{ color: 'var(--muted)', fontSize: '14px' }}>
              You're building AI-first applications, need autonomous agents that can reason and make decisions, or want programmatic control over AI behavior.
            </Typography>
          </Paper>
        </Box>

        <Box
          sx={{
            borderLeft: '4px solid var(--accent)',
            p: 2,
            m: '24px 0',
            background: 'rgba(217,70,239,0.08)',
            borderRadius: 1.5,
            lineHeight: 1.6,
          }}
        >
          <Typography sx={{ m: 0, fontWeight: 600 }}>
            💡 Note
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            These tools can complement each other. You might use n8n for general automation and the Agentic SDK for AI-specific tasks. 
            For this course, we focus on basic API integration — these advanced tools are worth exploring if you want to dive deeper into AI automation.
          </Typography>
        </Box>

        <Typography variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Summary
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          AI integration is accessible to developers. Here are the key takeaways:
        </Typography>

        <List sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Data powers AI</strong> — The dataset determines what a model can and cannot do</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Hugging Face</strong> — The go-to platform for open-source models and datasets</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Commercial APIs</strong> — Easy to use, high quality, but cost money (OpenAI, Anthropic)</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Open-source models</strong> — Free, private, customizable, but require more setup</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Call from backend</strong> — Always call AI APIs from your backend to protect API keys</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>No ML degree needed</strong> — You can integrate AI into your projects using APIs and pre-trained models</>} />
          </ListItem>
        </List>

        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.10), rgba(59,130,246,0.10))',
            border: '1px solid var(--border)',
            borderRadius: 4,
            p: 3,
            my: 3,
          }}
        >
          <Typography variant="body1" sx={{ mb: 0, color: 'var(--text)', lineHeight: 1.8, fontSize: '17px' }}>
            <strong>Remember:</strong> You don't need to train models from scratch. Use existing models via APIs or download pre-trained models. Focus on integrating AI into your applications, not building the AI itself.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default AiMlPage;

