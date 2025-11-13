# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Environment Variables

When building backends that integrate with external services (CMS, email, APIs), you'll need to store API keys securely. Create a `.env` file in your project root (never commit this file to git!).

### Example `.env` file:

```env
# Email Services
SENDGRID_API_KEY=your_sendgrid_key_here
POSTMARK_API_KEY=your_postmark_key_here
MAILGUN_API_KEY=your_mailgun_key_here

# Marketing Email Services
MAILCHIMP_API_KEY=your_mailchimp_key_here
MAILCHIMP_LIST_ID=your_list_id_here
BREVO_API_KEY=your_brevo_key_here
CONVERTKIT_API_KEY=your_convertkit_key_here

# CMS Services
SANITY_PROJECT_ID=your_project_id
SANITY_DATASET=production
SANITY_API_TOKEN=your_sanity_token
CONTENTFUL_SPACE_ID=your_space_id
CONTENTFUL_ACCESS_TOKEN=your_access_token
STRAPI_API_URL=https://your-strapi-instance.com
STRAPI_API_TOKEN=your_strapi_token
```

**Important:** 
- Add `.env` to your `.gitignore` file
- Never commit API keys to version control
- Use environment variables in your backend code: `process.env.API_KEY` (Node.js) or `os.getenv('API_KEY')` (Python)

## How to Run API Routes

### Next.js (App Router)

1. Create API routes in `app/api/[route-name]/route.ts`
2. Use `process.env.API_KEY` to access environment variables
3. See examples in `docs/examples/contact-route.ts` and `docs/examples/subscribe-route.ts`

### Flask (Python)

1. Install dependencies: `pip install flask python-dotenv`
2. Create your Flask app in `server/app.py`
3. Use `os.getenv('API_KEY')` to access environment variables
4. Load environment variables with `load_dotenv()` at the start of your app
5. See examples in `docs/examples/flask-contact-route.py` and `docs/examples/flask-subscribe-route.py`

### Example Frontend Call

```typescript
// In your React component
const handleSubmit = async (email: string, message: string) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, message }),
  });
  const data = await response.json();
  console.log(data);
};
```

## Example: Spin the Wheel Backend (No Database!)

A complete example showing in-memory storage (no database required):

1. **Backend:** `docs/examples/flask-spin-the-wheel.py`
2. **Frontend example:** `docs/examples/spin-the-wheel-frontend-example.tsx`
3. **Setup guide:** `docs/examples/SETUP-GUIDE.md`
4. **Testing with cURL:** `docs/examples/TESTING-WITH-CURL.md`

**Quick start:**
```bash
# Terminal 1: Start Flask backend
cd docs/examples
python flask-spin-the-wheel.py

# Terminal 2: Start React frontend (from project root)
npm run dev
```

**Test with cURL:**
```bash
# Get all names
curl http://localhost:5000/api/names

# Spin the wheel
curl http://localhost:5000/api/spin
```

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
