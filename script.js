:root {
  --bg: #f2f2f2;          /* Soft grey background */
  --text: #2b2b2b;        /* Dark text */
  --muted: #6b6b6b;       /* Muted text */
  --wine: #722f37;        /* Headings */
  --rose: #b76e79;        /* Accents */
  --white: #ffffff;
  --card: #ffffff;
  --border: #e0e0e0;
}

* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Arial, "Noto Sans";
  color: var(--text);
  background: var(--bg);
  line-height: 1.6;
}

/* Typography */
h1, h2, h3 {
  font-family: "Playfair Display", serif;
  color: var(--wine);
  margin: 0 0 12px;
}

/* Utilities */
.container { max-width: 1100px; margin: 0 auto; padding: 0 16px; }
.btn {
  display: inline-block; padding: 10px 16px; border-radius: 8px;
  border: 1px solid var(--rose); color: var(--white); background: var(--rose);
  text-decoration: none; transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.btn:hover { transform: translateY(-1px); box-shadow: 0 6px 14px rgba(183, 110, 121, 0.25); }
.btn.primary { background: var(--rose); border-color: var(--rose); }
.btn.accent { background: transparent; color: var(--rose); border-color: var(--rose); }
.btn.accent:hover { background: var(--rose); color: var(--white); }

/* Header */
.site-header {
  position: sticky; top: 0; z-index: 50;
  backdrop-filter: saturate(180%) blur(8px);
  background: rgba(255, 255, 255, 0.8);
  border-bottom: 1px solid var(--border);
}
.header-wrap { display: flex; align-items: center; justify-content: space-between; height: 64px; }
.brand {
  font-family: "Playfair Display", serif; font-weight: 700; color: var(--wine);
  text-decoration: none; letter-spacing: 0.4px;
}
.site-nav ul { list-style: none; margin: 0; padding: 0; display: flex; gap: 16px; }
.site-nav a { color: var(--text); text-decoration: none; padding: 8px 10px; border-radius: 8px; }
.site-nav a.active, .site-nav a:hover { background: var(--card); border: 1px solid var(--border); }

/* Mobile nav toggle */
.nav-toggle { display: none; background: transparent; border: 0; cursor: pointer; }
.nav-toggle .bar { display: block; width: 24px; height: 2px; background: var(--wine); margin: 5px 0; }

/* Hero */
.hero {
  padding: 96px 0 64px;
  background:
    radial-gradient(800px 300px at 20% 0%, rgba(183, 110, 121, 0.18), transparent 60%),
    radial-gradient(600px 300px at 80% 10%, rgba(114, 47, 55, 0.18), transparent 60%);
  border-bottom: 1px solid var(--border);
  text-align: center;
}
.hero h1 { font-size: 2.6rem; }
.hero p { color: var(--muted); max-width: 720px; margin: 0 auto 24px; }

/* Sections */
.section { padding: 64px 0; }
.section.alt {
  background: linear-gradient(180deg, #ffffff, #f8f8f8);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

/* Services grid */
.grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 24px; }
.card.service {
  background: var(--card); border: 1px solid var(--border); border-radius: 14px; padding: 16px;
  transition: border-color 0.2s ease, transform 0.2s ease;
}
.card.service h3 { color: var(--wine); }
.card.service:hover { border-color: var(--rose); transform: translateY(-2px); }

/* Forms */
.booking-form, .contact-form { max-width: 780px; }
.form-row { display: flex; flex-direction: column; margin-bottom: 16px; }
.form-row label { font-weight: 600; color: var(--wine); margin-bottom: 6px; }
.form-row input, .form-row select, .form-row textarea {
  background: #fff; color: var(--text);
  border: 1px solid var(--border); border-radius: 10px; padding: 10px;
}
.form-row input:focus, .form-row select:focus, .form-row textarea:focus {
  outline: 2px solid rgba(183, 110, 121, 0.4);
}
.form-hint { color: var(--muted); font-size: 0.9rem; }

.actions { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; margin-top: 6px; }

.confirm { margin-top: 16px; padding: 14px; border: 1px solid var(--rose); border-radius: 12px; background: #fff; }
.confirm.hidden { display: none; }

/* Contact */
.contact-columns { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: start; }
.map-embed iframe { width: 100%; height: 280px; border: 0; border-radius: 12px; }

/* Footer */
.site-footer { padding: 24px 0; border-top: 1px solid var(--border); background: #fff; }
.footer-wrap { display: flex; justify-content: space-between; align-items: center; gap: 12px; flex-wrap: wrap; }
.footer-wrap p { margin: 0; color: var(--muted); }
.socials a { color: var(--rose); text-decoration: none; margin-left: 12px; }
.socials a:hover { text-decoration: underline; }

/* Responsive */
@media (max-width: 1000px) { .grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 640px) {
  .site-nav { display: none; }
  .nav-toggle { display: block; }
  .site-nav.open { display: block; }
  .site-nav ul { flex-direction: column; gap: 8px; padding: 12px 0; }
  .grid { grid-template-columns: 1fr; }
  .hero h1 { font-size: 2.2rem; }
  .contact-columns { grid-template-columns: 1fr; }
}
