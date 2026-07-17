// src/sections/Kontak.jsx — "Modul 04: Mari Terhubung"
import { useState } from 'react'
import SectionLabel from '../components/SectionLabel'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { profile } from '../data/profile'
import { useLang } from '../context/LanguageContext'

const EMPTY = { name: '', email: '', message: '' }

export default function Kontak() {
  const { t, tr } = useLang()
  const [form, setForm] = useState(EMPTY)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | sent

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }))
    setErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = t('contact.err.name')
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = t('contact.err.email')
    if (form.message.trim().length < 10)
      next.message = t('contact.err.message')
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')

    // ── STUB: handler pengiriman ──────────────────────────────
    // Ganti blok ini dengan integrasi nyata, misalnya:
    //   - EmailJS: emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
    //   - Backend: fetch('/api/contact', { method:'POST', body: JSON.stringify(form) })
    // Untuk sekarang, kita simulasikan sukses.
    console.log('[Kontak] Pesan siap dikirim:', form)
    setTimeout(() => {
      setStatus('sent')
      setForm(EMPTY)
    }, 900)
    // ──────────────────────────────────────────────────────────
  }

  return (
    <section id="kontak" className="scroll-mt-20 bg-surface-alt px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionLabel
          module="04"
          title={tr({ id: 'Mari Terhubung', en: "Let's Connect" })}
          kicker={t('kicker.kontak')}
        />

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* Info langsung */}
          <div className="space-y-4">
            <ContactRow
              href={`mailto:${profile.email}`}
              label={t('contact.label.email')}
              value={profile.email}
            >
              <path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
              <path d="m22 6-10 7L2 6" />
            </ContactRow>

            <ContactRow
              href={`https://wa.me/${profile.whatsapp}`}
              label={t('contact.label.whatsapp')}
              value={profile.phone}
              external
            >
              <path d="M21 11.5a8.5 8.5 0 0 1-12.5 7.5L3 21l2-5.5A8.5 8.5 0 1 1 21 11.5z" />
            </ContactRow>

            <ContactRow label={t('contact.label.location')} value={tr(profile.location)} static>
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </ContactRow>

            <Card className="bg-[color:var(--bg)]">
              <p className="font-mono text-[11px] uppercase tracking-wider text-sage">
                {t('contact.label.social')}
              </p>
              <div className="mt-3 flex gap-3">
                <SocialButton href={profile.socials.linkedin} label="LinkedIn">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM6 9H2v12h4zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
                </SocialButton>
                <SocialButton href={profile.socials.github} label="GitHub">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.9a3.4 3.4 0 0 0-1-2.6c3-.3 6-1.5 6-6.6a5 5 0 0 0-1.4-3.5 4.7 4.7 0 0 0-.1-3.5s-1.1-.3-3.5 1.3a12 12 0 0 0-6 0C6.6.3 5.5.6 5.5.6a4.7 4.7 0 0 0-.1 3.5A5 5 0 0 0 4 7.6c0 5.1 3 6.3 6 6.6a3.4 3.4 0 0 0-1 2.6V21" />
                </SocialButton>
              </div>
            </Card>
          </div>

          {/* Form */}
          <Card as="form" onSubmit={handleSubmit} className="bg-[color:var(--bg)]">
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center gap-3 py-12 text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-sage/20 text-sage">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                </span>
                <h3 className="font-display text-xl font-semibold text-surface-fg">
                  {t('contact.sent.title')}
                </h3>
                <p className="max-w-sm font-body text-sm text-surface-fg/70">
                  {t('contact.sent.body')}
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="mt-2 font-mono text-xs text-clay underline-offset-4 hover:underline"
                >
                  {t('contact.sent.again')}
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <Field
                  label={t('contact.label.name')}
                  error={errors.name}
                  htmlFor="c-name"
                >
                  <input
                    id="c-name"
                    type="text"
                    value={form.name}
                    onChange={update('name')}
                    placeholder={t('contact.ph.name')}
                    className={inputCls(errors.name)}
                  />
                </Field>

                <Field label={t('contact.label.email')} error={errors.email} htmlFor="c-email">
                  <input
                    id="c-email"
                    type="email"
                    value={form.email}
                    onChange={update('email')}
                    placeholder={t('contact.ph.email')}
                    className={inputCls(errors.email)}
                  />
                </Field>

                <Field label={t('contact.label.message')} error={errors.message} htmlFor="c-msg">
                  <textarea
                    id="c-msg"
                    rows={5}
                    value={form.message}
                    onChange={update('message')}
                    placeholder={t('contact.ph.message')}
                    className={`${inputCls(errors.message)} resize-none`}
                  />
                </Field>

                <Button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full"
                >
                  {status === 'sending' ? t('contact.sending') : t('contact.submit')}
                </Button>
              </div>
            )}
          </Card>
        </div>

        <p className="mt-12 text-center font-display text-lg italic text-clay">
          {t('contact.quote')}
        </p>
      </div>
    </section>
  )
}

const inputCls = (hasError) =>
  [
    'w-full rounded-xl border bg-surface-alt px-4 py-3 font-body text-sm text-surface-fg placeholder:text-surface-fg/40 transition focus:outline-none focus:ring-2 focus:ring-amber',
    hasError ? 'border-clay' : 'border-ink/15',
  ].join(' ')

function Field({ label, error, htmlFor, children }) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block font-mono text-[11px] uppercase tracking-wider text-sage"
      >
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 font-body text-xs text-clay">{error}</p>}
    </div>
  )
}

function ContactRow({ href, label, value, children, external, static: isStatic }) {
  const inner = (
    <>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber/15 text-clay">
        <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          {children}
        </svg>
      </span>
      <span>
        <span className="block font-mono text-[11px] uppercase tracking-wider text-sage">
          {label}
        </span>
        <span className="font-body text-sm font-medium text-surface-fg">
          {value}
        </span>
      </span>
    </>
  )

  const cls =
    'flex items-center gap-3 rounded-2xl border border-ink/10 bg-[color:var(--bg)] p-4 shadow-card transition-all'

  if (isStatic) return <div className={cls}>{inner}</div>
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noreferrer' : undefined}
      className={`${cls} hover:-translate-y-0.5 hover:border-amber/40`}
    >
      {inner}
    </a>
  )
}

function SocialButton({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/15 text-surface-fg transition-all hover:-translate-y-0.5 hover:border-amber hover:text-clay"
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </a>
  )
}
