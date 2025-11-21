'use client'

import { FormEvent, useState } from 'react'
import { useLanguage } from './LanguageProvider'

export default function ContactForm() {
  const { dictionary, locale } = useLanguage()
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    const formData = new FormData(e.currentTarget)
    const payload = Object.fromEntries(formData.entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, locale }),
      })

      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setMessage(dictionary.contact.success)
      e.currentTarget.reset()
    } catch (err) {
      console.error(err)
      setStatus('error')
      setMessage(dictionary.contact.error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-4 p-6">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm font-semibold text-navy">
          {dictionary.contact.name}
          <input
            name="name"
            required
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </label>
        <label className="space-y-1 text-sm font-semibold text-navy">
          {dictionary.contact.phone}
          <input
            name="phone"
            required
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </label>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="space-y-1 text-sm font-semibold text-navy">
          {dictionary.contact.email}
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          />
        </label>
        <label className="space-y-1 text-sm font-semibold text-navy">
          {dictionary.contact.serviceType}
          <select
            name="serviceType"
            required
            defaultValue=""
            className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
          >
            <option value="" disabled hidden>
              --
            </option>
            {dictionary.contact.serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>
      <label className="space-y-1 text-sm font-semibold text-navy">
        {dictionary.contact.message}
        <textarea
          name="message"
          rows={4}
          required
          className="mt-1 w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20"
        />
      </label>

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full rounded-full bg-navy px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? '…' : dictionary.contact.submit}
      </button>

      {message && (
        <p
          className={
            status === 'success'
              ? 'text-sm font-semibold text-green-600'
              : 'text-sm font-semibold text-red-600'
          }
        >
          {message}
        </p>
      )}
    </form>
  )
}
