'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function SeedContent() {
  const searchParams = useSearchParams();
  
  const seed = {
    name: searchParams.get('name'),
    role: searchParams.get('role'),
    stack: searchParams.get('stack')?.split(',').map(s => s.trim()).filter(Boolean),
    style: searchParams.get('style'),
    goals: searchParams.get('goals')?.split(',').map(s => s.trim()).filter(Boolean),
    constraints: searchParams.get('constraints')?.split(',').map(s => s.trim()).filter(Boolean),
    personality: searchParams.get('personality')?.split(',').map(s => s.trim()).filter(Boolean),
  };

  // Clean undefined values
  Object.keys(seed).forEach(key => {
    if (seed[key] === null || seed[key] === undefined || (Array.isArray(seed[key]) && seed[key].length === 0)) {
      delete seed[key];
    }
  });

  const jsonOutput = JSON.stringify({ human_endpoint: seed }, null, 2);

  return (
    <div style={styles.container}>
      <div style={styles.gradientOverlay} />
      
      <header style={styles.header}>
        <a href="/" style={styles.logo}>
          <span style={styles.logoIcon}>◈</span>
          <span style={styles.logoText}>Human Endpoint</span>
        </a>
        <div style={styles.badge}>CONTEXT SEED</div>
      </header>

      <main style={styles.main}>
        <div style={styles.hero}>
          <p style={styles.eyebrow}>AI-READABLE IDENTITY</p>
          <h1 style={styles.headline}>
            {seed.name ? `${seed.name}'s` : 'Anonymous'}<br />
            <span style={styles.headlineAccent}>Context</span>
          </h1>
        </div>

        <div style={styles.card}>
          {seed.role && (
            <div style={styles.field}>
              <span style={styles.fieldLabel}>Role</span>
              <span style={styles.fieldValue}>{seed.role}</span>
            </div>
          )}

          {seed.stack && (
            <div style={styles.field}>
              <span style={styles.fieldLabel}>Stack</span>
              <div style={styles.tags}>
                {seed.stack.map((s, i) => (
                  <span key={i} style={styles.tag}>{s}</span>
                ))}
              </div>
            </div>
          )}

          {seed.style && (
            <div style={styles.field}>
              <span style={styles.fieldLabel}>Communication</span>
              <span style={styles.fieldValueAccent}>{seed.style}</span>
            </div>
          )}

          {seed.goals && (
            <div style={styles.field}>
              <span style={styles.fieldLabel}>Goals</span>
              <div style={styles.tags}>
                {seed.goals.map((g, i) => (
                  <span key={i} style={styles.tagGreen}>{g}</span>
                ))}
              </div>
            </div>
          )}

          {seed.constraints && (
            <div style={styles.field}>
              <span style={styles.fieldLabel}>Constraints</span>
              <div style={styles.tags}>
                {seed.constraints.map((c, i) => (
                  <span key={i} style={styles.tagRed}>{c}</span>
                ))}
              </div>
            </div>
          )}

          {seed.personality && (
            <div style={styles.field}>
              <span style={styles.fieldLabel}>Personality</span>
              <div style={styles.tags}>
                {seed.personality.map((p, i) => (
                  <span key={i} style={styles.tagYellow}>{p}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div style={styles.jsonSection}>
          <div style={styles.jsonHeader}>
            <span style={styles.jsonLabel}>Machine-Readable Format</span>
            <span style={styles.secure}>◈ JSON</span>
          </div>
          <pre style={styles.jsonBox}>
            <code style={styles.json}>{jsonOutput}</code>
          </pre>
        </div>

        <footer style={styles.footer}>
          <a href="/" style={styles.footerLink}>← Create your own endpoint</a>
          <p style={styles.footerText}>
            This context is portable across all AI systems.
          </p>
        </footer>
      </main>
    </div>
  );
}

export default function SeedPage() {
  return (
    <Suspense fallback={
      <div style={{ 
        minHeight: '100vh', 
        background: '#0a0e14', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: '#8b949e',
        fontFamily: '-apple-system, sans-serif'
      }}>
        Loading context...
      </div>
    }>
      <SeedContent />
    </Suspense>
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
    textDecoration: 'none',
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
    color: '#238636',
    padding: '6px 14px',
    border: '1px solid #238636',
    borderRadius: '4px',
  },
  main: {
    maxWidth: '640px',
    margin: '0 auto',
    padding: '20px 24px 80px',
    position: 'relative',
    zIndex: 10,
  },
  hero: {
    textAlign: 'center',
    marginBottom: '40px',
  },
  eyebrow: {
    fontSize: '12px',
    letterSpacing: '2px',
    color: '#8b949e',
    marginBottom: '16px',
  },
  headline: {
    fontFamily: 'Georgia, "Times New Roman", serif',
    fontSize: 'clamp(36px, 6vw, 48px)',
    fontWeight: 400,
    lineHeight: 1.1,
    margin: 0,
    color: '#e6edf3',
  },
  headlineAccent: {
    fontStyle: 'italic',
    background: 'linear-gradient(135deg, #e6edf3 0%, #8b949e 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  card: {
    background: 'rgba(22, 27, 34, 0.8)',
    border: '1px solid #30363d',
    borderRadius: '12px',
    padding: '32px',
    backdropFilter: 'blur(20px)',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    paddingBottom: '20px',
    marginBottom: '20px',
    borderBottom: '1px solid #21262d',
  },
  fieldLabel: {
    fontSize: '11px',
    fontWeight: 500,
    color: '#6e7681',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  fieldValue: {
    fontSize: '16px',
    color: '#e6edf3',
  },
  fieldValueAccent: {
    fontSize: '16px',
    color: '#58a6ff',
    textTransform: 'capitalize',
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  tag: {
    background: '#21262d',
    color: '#e6edf3',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '13px',
  },
  tagGreen: {
    background: 'rgba(35, 134, 54, 0.2)',
    color: '#3fb950',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '13px',
  },
  tagRed: {
    background: 'rgba(248, 81, 73, 0.15)',
    color: '#f85149',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '13px',
  },
  tagYellow: {
    background: 'rgba(210, 153, 34, 0.2)',
    color: '#d29922',
    padding: '6px 12px',
    borderRadius: '6px',
    fontSize: '13px',
  },
  jsonSection: {
    marginTop: '32px',
  },
  jsonHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '12px',
  },
  jsonLabel: {
    fontSize: '12px',
    fontWeight: 500,
    color: '#8b949e',
    letterSpacing: '0.5px',
  },
  secure: {
    fontSize: '11px',
    color: '#8b949e',
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
  },
  jsonBox: {
    background: '#161b22',
    border: '1px solid #30363d',
    borderRadius: '8px',
    padding: '20px',
    margin: 0,
    overflowX: 'auto',
  },
  json: {
    fontSize: '13px',
    color: '#7ee787',
    fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, monospace',
    lineHeight: 1.6,
  },
  footer: {
    marginTop: '48px',
    textAlign: 'center',
  },
  footerLink: {
    display: 'inline-block',
    color: '#58a6ff',
    textDecoration: 'none',
    fontSize: '14px',
    marginBottom: '16px',
  },
  footerText: {
    fontSize: '13px',
    color: '#6e7681',
    margin: 0,
  },
};
