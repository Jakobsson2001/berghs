import { Container, Box, Typography, Paper, Link as MuiLink, List, ListItem, ListItemText } from '@mui/material';

const StartupJourneyPage = () => {
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
              Entrepreneurship
            </Typography>
            <Typography variant="h1" sx={{ fontSize: '34px', mb: 1, color: 'var(--text)' }}>
              Startup Journey
            </Typography>
            <Typography variant="body1" sx={{ color: 'var(--muted)', mb: 2, lineHeight: 1.7 }}>
              Learn the fundamentals of building a startup from idea to execution. Based on Sam Altman's Startup Playbook and insights from successful founders.
            </Typography>
          </Box>
          <Box sx={{ width: '100%', maxWidth: 420, ml: 'auto' }}>
            <svg viewBox="0 0 260 200" role="img" width="100%" height="100%">
              <defs>
                <linearGradient id="startupGradient" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
              </defs>
              <rect x="0" y="0" width="260" height="200" rx="16" fill="url(#startupGradient)" opacity="0.18" />
              <circle cx="80" cy="80" r="30" fill="#fbbf24" opacity="0.9" />
              <rect x="130" y="100" width="80" height="50" rx="8" fill="#f87171" opacity="0.85" />
              <path d="M 60 160 L 200 160 L 200 190 L 60 190 Z" fill="#34d399" opacity="0.8" />
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
        <Box sx={{ background: 'linear-gradient(135deg, rgba(245,158,11,0.08), rgba(239,68,68,0.08))', border: '1px solid var(--border)', borderRadius: 4, p: 2.5, mb: 3, textAlign: 'center' }}>
          <Typography sx={{ fontSize: '18px', fontWeight: 600, color: 'var(--text)' }}>
            🚀 Building a startup requires: a great idea, a great team, a great product, and great execution. The difference between success and failure comes down to execution.
          </Typography>
        </Box>

        <Box
          sx={{
            borderLeft: '4px solid var(--accent)',
            p: 2,
            m: '24px 0',
            background: 'rgba(245,158,11,0.08)',
            borderRadius: 1.5,
            lineHeight: 1.6,
          }}
        >
          <Typography sx={{ m: 0, fontWeight: 600, mb: 1 }}>
            📚 Recommended Reading
          </Typography>
          <Typography sx={{ m: 0, mb: 1 }}>
            This page is based on <MuiLink href="https://playbook.samaltman.com/" target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)' }}>Sam Altman's Startup Playbook</MuiLink>, which distills advice from Y Combinator's experience with thousands of startups. We highly recommend reading the full playbook for deeper insights.
          </Typography>
          <Typography sx={{ m: 0, mt: 1, fontWeight: 600 }}>
            🎤 Guest Lecture
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            <strong>Kim Rants</strong>, founder of <MuiLink href="https://www.alice.tech/sv-se" target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)' }}>Alice.tech</MuiLink>, will share more insights on the startup journey during a guest lecture. This will provide real-world perspectives from a successful Swedish founder.
          </Typography>
        </Box>

        <Typography id="what-is-startup" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          What is a Startup?
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          A startup is a company designed to grow fast. Your goal as a startup is to <strong>make something users love</strong>. If you do that, then you have to figure out how to get a lot more users. But this first part is critical—think about the really successful companies of today. They all started with a product that their early users loved so much they told other people about it.
        </Typography>

        <Box
          sx={{
            borderLeft: '4px solid #ef4444',
            p: 2,
            m: '24px 0',
            background: 'rgba(239,68,68,0.08)',
            borderRadius: 1.5,
            lineHeight: 1.6,
          }}
        >
          <Typography sx={{ m: 0, fontWeight: 600 }}>
            ⚠️ Reality Check
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            Starting a startup is hard! One of the most consistent pieces of feedback from YC founders is it's harder than they could have ever imagined. The startup graveyard is littered with people who thought they could skip making something users love. If you fail to do this, you will fail. If you deceive yourself and think your users love your product when they don't, you will still fail.
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          It's much better to first make a product a small number of users love than a product that a large number of users like. Even though the total amount of positive feeling is the same, it's much easier to get more users than to go from like to love.
        </Typography>

        <Typography id="the-idea" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Part I: The Idea
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          One of the first things to consider is what you're building and why. Ideas need to be clear and concise. Complex ideas are almost always a sign of muddled thinking or a made-up problem. If the idea does not really excite at least some people the first time they hear it, that's a bad sign.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Key Questions About Your Idea
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Who desperately needs the product?</strong> In the best case, you yourself are the target user. In the second best case, you understand the target user extremely well.</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>How will you test the idea?</strong> Either launch it and see what happens (better for consumer ideas) or try to sell it before building (better for enterprise ideas—get a letter of intent).</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Why do you want to start this particular company?</strong> Startups are really hard and take consistent intense effort. You need a shared sense of mission to sustain you.</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>How will the company one day be a monopoly?</strong> We're looking for businesses that get more powerful with scale and that are difficult to copy.</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>What about the market?</strong> How big is it today, how fast is it growing, and why will it be big in ten years? We like it when major technological shifts are just starting.</>} />
            </ListItem>
          </List>
        </Paper>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          What Makes a Good Idea?
        </Typography>
        <List sx={{ m: '16px 0 16px 24px', pl: 1 }}>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Something new, not derivative.</strong> Most really big companies start with something fundamentally new (one acceptable definition of new is 10x better).</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>The best ideas sound bad but are in fact good.</strong> So you don't need to be too secretive with your idea—if it's actually a good idea, it likely won't sound like it's worth stealing.</>} />
          </ListItem>
          <ListItem sx={{ display: 'list-item', pl: 0 }}>
            <ListItemText primary={<><strong>Almost everyone will tell you your idea sucks.</strong> Maybe they are right. Maybe they are not good at evaluating startups. The faster you can develop self-belief and not get dragged down by haters, the better off you'll be.</>} />
          </ListItem>
        </List>

        <Box
          sx={{
            borderLeft: '4px solid var(--accent)',
            p: 2,
            m: '24px 0',
            background: 'rgba(245,158,11,0.08)',
            borderRadius: 1.5,
            lineHeight: 1.6,
          }}
        >
          <Typography sx={{ m: 0, fontWeight: 600 }}>
            💡 What If You Don't Have an Idea?
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            It's better not to try too actively to force yourself to come up with startup ideas. Instead, learn about a lot of different things. Practice noticing problems, things that seem inefficient, and major technological shifts. Work on projects you find interesting. Go out of your way to hang around smart, interesting people. At some point, ideas will emerge.
          </Typography>
        </Box>

        <Typography id="the-team" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Part II: A Great Team
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Mediocre teams do not build great companies. One of the most important things is the strength of the founders. The best teams have founders who know each other well, complement each other's skills, and can work together effectively.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            What Makes a Great Team?
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Founders who know each other well and have worked together before" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Complementary skills—technical and non-technical founders working together" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Ability to execute and get things done" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Determination and resilience—startups are hard, you need to persist" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Flexibility—the ability to pivot when needed" />
            </ListItem>
          </List>
        </Paper>

        <Typography id="the-product" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Part III: A Great Product
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Your goal is to make something users love. This is the most important thing. If users don't love your product, nothing else matters. The best way to know if users love your product is if they're telling their friends about it without you asking them to.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Building a Great Product
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Start with the minimum thing to test your hypothesis" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Get feedback from users early and often" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Let your idea evolve based on user feedback" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Understand your users really well—you need this to build a great product" />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Focus on making a small number of users love it, not a large number like it" />
            </ListItem>
          </List>
        </Paper>

        <Typography id="execution" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Part IV: Great Execution
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Execution is what separates successful startups from the thousands of others with similar ideas. Remember: at least a thousand people have every great idea. One of them actually becomes successful. The difference comes down to execution.
        </Typography>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Growth
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Once you have a product users love, you need to figure out how to get a lot more users. Growth is critical, but it should come after you've built something users love. Don't try to grow before you have product-market fit.
        </Typography>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Focus & Intensity
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Startups require intense focus. You need to say no to almost everything and focus on what matters most. Most successful startups started with everyone in the same office—remote work can work for larger companies, but it's harder for early-stage startups.
        </Typography>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Making Money
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          You need to figure out how to make money. The short version is that you have to get people to pay you more money than it costs you to deliver your good/service. Try to get to "ramen profitability" as quickly as you can—make enough money so that the founders can live on ramen. When you get here, you control your own destiny.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Business Model Guidelines
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Free product:</strong> Don't plan to grow by buying users. That's really hard for ad-supported businesses. You need to make something people share with their friends.</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Paid product with &lt;$500 LTV:</strong> You generally cannot afford sales. Try to repay your customer acquisition cost (CAC) in 3 months.</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Paid product with &gt;$500 LTV:</strong> You generally can afford direct sales. Try selling the product yourself first to learn what works.</>} />
            </ListItem>
          </List>
        </Paper>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Competitors
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Competitors are a startup ghost story. First-time founders think they are what kill 99% of startups. But 99% of startups die from suicide, not murder. Worry instead about all of your internal problems. If you fail, it will very likely be because you failed to make a great product and/or failed to make a great company.
        </Typography>
        <Box
          sx={{
            borderLeft: '4px solid var(--accent)',
            p: 2,
            m: '24px 0',
            background: 'rgba(245,158,11,0.08)',
            borderRadius: 1.5,
            lineHeight: 1.6,
          }}
        >
          <Typography sx={{ m: 0, fontWeight: 600 }}>
            💡 On Competitors
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            99% of the time, you should ignore competitors. Especially ignore them when they raise a lot of money or make a lot of noise in the press. Do not worry about a competitor until they are beating you with a real, shipped product. In the words of Henry Ford: "The competitor to be feared is one who never bothers about you at all, but goes on making his own business better all the time."
          </Typography>
        </Box>

        <Typography variant="h3" sx={{ fontSize: '20px', mt: 3, mb: 1, color: 'var(--text)' }}>
          Fundraising
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          Most startups raise money at some point. You should raise money when you need it or when it's available on good terms. Be careful not to lose your sense of frugality or to start solving problems by throwing money at them.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Key Fundraising Principles
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="The secret to successfully raising money is to have a good company. All of the other stuff probably only matters about 5% of the time." />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Always explain why you could be a huge success. Investors' returns are dominated by the big successes." />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Don't get demoralized if you struggle to raise money. Many of the best companies have struggled with this." />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="View fundraising as a necessary evil and something to get done as quickly as possible." />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="The first check is the hardest to get, so focus your energies on getting that." />
            </ListItem>
          </List>
        </Paper>

        <Typography id="yc-resources" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Y Combinator (YC) Resources for Startups
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          <strong>Y Combinator (YC)</strong> is one of the world's most successful startup accelerators, having funded companies like Airbnb, Dropbox, Stripe, and Reddit. They provide valuable resources and partnerships that can help startups, including hosting and infrastructure credits.
        </Typography>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            YC Startup Resources
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Hosting credits</strong> — YC companies often receive credits for hosting platforms like AWS, Google Cloud, and other infrastructure providers</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Startup School</strong> — Free online course covering startup fundamentals, including technical infrastructure and hosting</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>YC Startup Playbook</strong> — Comprehensive guide to building startups (this page is based on this playbook)</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Partner deals</strong> — YC companies get access to discounted or free services from various tech partners</>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><strong>Community and network</strong> — Access to a network of successful founders and investors</>} />
            </ListItem>
          </List>
        </Paper>

        <Box
          sx={{
            borderLeft: '4px solid var(--accent)',
            p: 2,
            m: '24px 0',
            background: 'rgba(139,92,246,0.08)',
            borderRadius: 1.5,
            lineHeight: 1.6,
          }}
        >
          <Typography sx={{ m: 0, fontWeight: 600 }}>
            💡 YC and Infrastructure
          </Typography>
          <Typography sx={{ m: 0, mt: 0.5 }}>
            While YC doesn't directly provide hosting, they help startups by providing credits and partnerships with major cloud providers. For early-stage startups, platforms like Render (see our <MuiLink href="/hosting-domain" sx={{ color: 'var(--accent)' }}>Hosting & Domain page</MuiLink>) are often sufficient and free. As companies grow, they may leverage YC's partner credits for more advanced infrastructure needs. The key is to start simple and scale as needed.
          </Typography>
        </Box>

        <Paper sx={{ background: 'rgba(2, 6, 23, 0.6)', border: '1px solid var(--border)', borderRadius: 3, p: 2.5, my: 2.5 }}>
          <Typography variant="h4" sx={{ fontSize: '18px', mb: 1.5, color: 'var(--accent)' }}>
            Learn More About YC
          </Typography>
          <Typography variant="body2" sx={{ mb: 1.5, color: 'var(--muted)' }}>
            Y Combinator offers many free resources for entrepreneurs:
          </Typography>
          <List sx={{ m: '12px 0', pl: 2.5 }}>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><>Visit <MuiLink href="https://www.ycombinator.com/" target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)' }}>ycombinator.com</MuiLink> to learn about their programs</></>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><>Check out <MuiLink href="https://www.startupschool.org/" target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)' }}>Startup School</MuiLink> for free online courses</></>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary={<><>Read the <MuiLink href="https://playbook.samaltman.com/" target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)' }}>Startup Playbook</MuiLink> by Sam Altman (former YC president)</></>} />
            </ListItem>
            <ListItem sx={{ display: 'list-item', pl: 0 }}>
              <ListItemText primary="Explore YC's blog and resources for startup advice and technical guidance" />
            </ListItem>
          </List>
        </Paper>

        <Typography id="summary" variant="h2" sx={{ fontSize: '24px', mt: 4, mb: 2, color: 'var(--text)' }}>
          Summary
        </Typography>
        <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
          To have a successful startup, you need: a great idea (including a great market), a great team, a great product, and great execution. It's a grind, and everyone wishes there were some other way to transform "idea" into "success", but no one has figured it out yet.
        </Typography>

        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' }, gap: 2, my: 3 }}>
          {[
            { emoji: '💡', title: 'The Idea', desc: 'Clear, exciting ideas that solve real problems. Test early, iterate based on feedback, and understand your users deeply.' },
            { emoji: '👥', title: 'The Team', desc: 'Mediocre teams don\'t build great companies. Find co-founders who complement your skills and share your mission.' },
            { emoji: '🎯', title: 'The Product', desc: 'Make something users love. It\'s better to have a small number of users who love it than many who just like it.' },
            { emoji: '⚡', title: 'Execution', desc: 'The difference between success and failure. Focus intensely, grow after product-market fit, and ignore competitors.' },
            { emoji: '💰', title: 'Making Money', desc: 'Get to ramen profitability quickly. Understand your business model and customer acquisition costs.' },
            { emoji: '🚀', title: 'Growth', desc: 'Once users love your product, figure out how to get more. But don\'t try to grow before product-market fit.' },
          ].map((item) => (
            <Paper key={item.title} sx={{ background: 'linear-gradient(180deg, rgba(245,158,11,0.10), rgba(245,158,11,0.02))', border: '1px solid var(--border)', borderRadius: 3.5, p: 2.25 }}>
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

        <Box
          sx={{
            background: 'linear-gradient(135deg, rgba(245,158,11,0.10), rgba(239,68,68,0.10))',
            border: '1px solid var(--border)',
            borderRadius: 4,
            p: 3,
            my: 3,
          }}
        >
          <Typography variant="h3" sx={{ fontSize: '20px', mb: 1, color: 'var(--text)' }}>
            📚 Further Reading
          </Typography>
          <Typography variant="body1" sx={{ mb: 2, color: 'var(--text)', lineHeight: 1.7 }}>
            This page provides an overview of key startup principles. For the complete guide with detailed insights, read the full <MuiLink href="https://playbook.samaltman.com/" target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)' }}>Startup Playbook by Sam Altman</MuiLink>.
          </Typography>
          <Typography variant="body1" sx={{ mb: 0, color: 'var(--text)', lineHeight: 1.7 }}>
            Don't miss the guest lecture with <strong>Kim Rants</strong>, founder of <MuiLink href="https://www.alice.tech/sv-se" target="_blank" rel="noopener noreferrer" sx={{ color: 'var(--accent)' }}>Alice.tech</MuiLink>, who will share real-world experiences and insights from building a successful startup.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default StartupJourneyPage;

