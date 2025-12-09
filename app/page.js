'use client';
import { useState } from 'react';

export default function Home() {
  const [form, setForm] = useState({
    name: '',
    role: '',
    stack: '',
    style: 'concise',
    goals: '',
    constraints: '',
    personality: ''
  });
  const [generatedUrl, setGeneratedUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const generateUrl = () => {
    const params = new URLSearchParams();
    if (form.name) params.set('name', form.name);
    if (form.role) params.set('role', form.role);
    if (form.stack) params.set('stack', form.stack);
    if (form.style) params.set('style', form.style);
    if (form.goals) params.set('goals', form.goals);
    if (form.constraints) params.set('constraints', form.constraints);
    if (form.personality) params.set('personality', form.personality);
    
    const base = typeof window !== 'undefined' ? window.location.origin : '';
    setGeneratedUrl(`${base}/seed/?${params.toString()}`);
  };

  const copyUrl = () => {
    navigator.clipboard.writeText(generatedUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div style={styles.container}>
      {/* Subtle gradient overlay */}
      <div style={styles.gradientOverlay} />
      
      {/* Header */}
      <header style={styles.header}>
        <div style={styles.logo}>
          <span style={styles.logoIcon}>◈</span>
          <span style={styles.logoText}>Human Endpoint</span>
        </div>
        <div style={styles.badge}>PRIVATE BETA</div>
      </header>

      {/* Hero */}
      <main style={styles.main}>
        <div style={styles.hero}>
          <p style={styles.eyebrow}>UNIVERSAL AI IDENTITY</p>
          <h1 style={styles.headline}>
            You Are<br />
            <span style={styles.headlineAccent}>The API</span>
          </h1>
          <p style={styles.subheadline}>
            One link. Every AI knows you instantly.
          </p>
          
          <nav style={styles.nav}>
            <span style={styles.navItem}>VISION</span>
            <span style={styles.navItem}>HOW IT WORKS</span>
            <span style={styles.navItem}>PROTOCOL</span>
          </nav>
        </div>

        {/* Form Card */}
        <div style={styles.card}>
          <div style={styles.cardHeader}>
            <h2 style={styles.cardTitle}>Create Your Endpoint</h2>
            <p style={styles.cardSubtitle}>Define your context once. Use it everywhere.</p>
          </div>

          <div style={styles.formGrid}>
            <div style={styles.inputGroup}>
              <label style={styles.label}>Name</label>
              <input
                type="text"
                placeholder="Your name"
                value={form.name}
                onChange={(e) => setForm({...form, name: e.target.value})}
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Role</label>
              <input
                type="text"
                placeholder="Developer, Designer, Founder..."
                value={form.role}
                onChange={(e) => setForm({...form, role: e.target.value})}
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Tech Stack</label>
              <input
                type="text"
                placeholder="python, react, typescript..."
                value={form.stack}
                onChange={(e) => setForm({...form, stack: e.target.value})}
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Communication Style</label>
              <select
                value={form.style}
                onChange={(e) => setForm({...form, style: e.target.value})}
                style={styles.select}
              >
                <option value="concise">Concise — Direct and efficient</option>
                <option value="detailed">Detailed — Comprehensive explanations</option>
                <option value="socratic">Socratic — Guide through questions</option>
                <option value="casual">Casual — Friendly conversation</option>
                <option value="expert">Expert — Assume deep knowledge</option>
              </select>
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Current Goals</label>
              <input
                type="text"
                placeholder="ship_mvp, learn_rust, scale_startup..."
                value={form.goals}
                onChange={(e) => setForm({...form, goals: e.target.value})}
                style={styles.input}
              />
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>Constraints</label>
              <input
                type="text"
                placeholder="solo_founder, bootstrap, no_typescript..."
                value={form.constraints}
                onChange={(e) => setForm({...form, constraints: e.target.value})}
                style={styles.input}
              />
            </div>
          </div>

          <button onClick={generateUrl} style={styles.button}>
            Generate Endpoint
          </button>

          {generatedUrl && (
            <div style={styles.result}>
              <div style={styles.resultHeader}>
                <span style={styles.resultLabel}>Your Human Endpoint</span>
                <span style={styles.secure}>◈ Secure</span>
              </div>
              <div style={styles.urlBox}>
                <code style={styles.url}>{generatedUrl}</code>
              </div>
              <div style={styles.actions}>
                <button onClick={copyUrl} style={styles.actionButton}>
                  {copied ? '✓ Copied' : 'Copy URL'}
                </button>
                <a href={generatedUrl} target="_blank" style={styles.actionButtonSecondary}>
                  Preview
                </a>
              </div>
              <p style={styles.hint}>
                Paste this link at the start of any AI conversation.<br />
                ChatGPT, Claude, Gemini — they all read it instantly.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <footer style={styles.footer}>
          <p style={styles.footerText}>
            No data stored. No account required. Your context lives in the URL.
          </p>
        </footer>
      </main>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(180deg, #0a0e14 0%, #0d1117 50%, #0a0e14 100%)',
    color: '#e6edf3',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    position: 'relative',
    overflow: 'hidden',
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: '600px',
    background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 150, 200, 0.12), transparent)',
    pointerEvents: 'none',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '24px 48px',
    position: 'relative',
    zIndex: 10,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  logoIcon: {
    fontSize: '24px',
    color: '#8b949e',
  },
  logoText: {
    fontSize: '16px',
    fontWeight: 500,
    letterSpacing: '0.5px',
    color: '#e6edf3',
  },
  badge: {
    fontSize: '11px',
    letterSpacing: '1.5px',
    color: '#8b949e',
    padding: '6px 14px',
    border: '1px solid #30363d',
    borderRadius: '4px',
  },
  main: {
    maxWidth: '720px',
    margin: '0 auto',
    padding: '40px 24px 80px',
    position: 'relative',
    zIndex: 10,
  },
  hero: {
    textAlign: 'center',
    marginBottom: '60px',
  },
  eyebrow: {
    fontSize: '12px',
    letterSpacing: '2px',
    color: '#8b949e',
    marginBottom: '24px',
  },
  headline: {
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: 'clamp(42px, 8vw, 64px)',
    fontWeight: 400,
    lineHeight: 1.1,
    margin: '0 0 24px 0',
    color: '#e6edf3',
  },
  headlineAccent: {
    fontStyle: 'italic',
    background: 'linear-gradient(135deg, #e6edf3 0%, #8b949e 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subheadline: {
    fontSize: '18px',
    color: '#8b949e',
    marginBottom: '40px',
    fontWeight: 400,
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '32px',
  },
  navItem: {
    fontSize: '11px',
    letterSpacing: '1.5px',
    color: '#6e7681',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  card: {
    background: 'rgba(22, 27, 34, 0.8)',
    border: '1px solid #30363d',
    borderRadius: '12px',
    padding: '40px',
    backdropFilter: 'blur(20px)',
  },
  cardHeader: {
    marginBottom: '32px',
  },
  cardTitle: {
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: '24px',
    fontWeight: 400,
    margin: '0 0 8px 0',
    color: '#e6edf3',
  },
  cardSubtitle: {
    fontSize: '14px',
    color: '#8b949e',
    margin: 0,
  },
  formGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '20px',
    marginBottom: '32px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    fontSize: '12px',
    fontWeight: 500,
    color: '#8b949e',
    letterSpacing: '0.5px',
  },
  input: {
    background: '#0d1117',
    border: '1px solid #30363d',
    borderRadius: '8px',
    padding: '12px 16px',
    fontSize: '14px',
    color: '#e6edf3',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  select: {
    background: '#0d1117',
    border: '1px solid #30363d',
    borderRadius: '8px',
    padding: '12px 16px',
    fontSize: '14px',
    color: '#e6edf3',
    outline: 'none',
    cursor: 'pointer',
  },
  button: {
    width: '100%',
    padding: '16px 24px',
    background: '#e6edf3',
    color: '#0d1117',
    border: 'none',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.2s',
  },
  result: {
    marginTop: '32px',
    padding: '24px',
    background: '#0d1117',
    border: '1px solid #238636',
    borderRadius: '8px',
  },
  resultHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  resultLabel: {
    fontSize: '12px',
    fontWeight: 500,
    color: '#8b949e',
    letterSpacing: '0.5px',
  },
  secure: {
    fontSize: '11px',
    color: '#238636',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  urlBox: {
    background: '#161b22',
    borderRadius: '6px',
    padding: '16px',
    marginBottom: '16px',
    overflowX: 'auto',
  },
  url: {
    fontSize: '13px',
    color: '#58a6ff',
    wordBreak: 'break-all',
    fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
  },
  actions: {
    display: 'flex',
    gap: '12px',
    marginBottom: '16px',
  },
  actionButton: {
    flex: 1,
    padding: '12px 20px',
    background: '#238636',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: 500,
    cursor: 'pointer',
  },
  actionButtonSecondary: {
    flex: 1,
    padding: '12px 20px',
    background: 'transparent',
    color: '#8b949e',
    border: '1px solid #30363d',
    borderRadius: '6px',
    fontSize: '13px',
    fontWeight: 500,
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
  },
  hint: {
    fontSize: '12px',
    color: '#6e7681',
    textAlign: 'center',
    lineHeight: 1.6,
    margin: 0,
  },
  footer: {
    marginTop: '60px',
    textAlign: 'center',
  },
  footerText: {
    fontSize: '13px',
    color: '#6e7681',
  },
};
