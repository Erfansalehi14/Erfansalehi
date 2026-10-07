import { useEffect, useMemo, useState } from 'react';
import SectionHeader from './SectionHeader.jsx';
import { COURTS } from '../data/site.js';
import {
  DURATIONS,
  TIME_SLOTS,
  fetchAvailability,
  saveLocalBooking,
  createBookingRef,
} from '../data/booking.js';
import { IconArrowRight, IconCheck } from './Icons.jsx';

const todayISO = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
};

const fmtDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString('fa-IR-u-ca-gregory', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

function Field({ label, children }) {
  return (
    <div className="bk-field">
      <span className="bk-label">{label}</span>
      {children}
    </div>
  );
}

function SegGroup({ label, options, value, onChange, render }) {
  return (
    <div className="bk-seg" role="radiogroup" aria-label={label}>
      {options.map((opt) => (
        <button
          key={opt.value}
          type="button"
          role="radio"
          aria-checked={value === opt.value}
          className={value === opt.value ? 'is-active' : ''}
          onClick={() => onChange(opt.value)}
        >
          {render(opt)}
        </button>
      ))}
    </div>
  );
}

export default function Booking() {
  const [date, setDate] = useState(todayISO());
  const [courtId, setCourtId] = useState(COURTS[0].id);
  const [duration, setDuration] = useState(90);
  const [players, setPlayers] = useState(4);
  const [slot, setSlot] = useState(null);
  const [status, setStatus] = useState('loading'); // loading | ready | empty
  const [available, setAvailable] = useState([]);
  const [step, setStep] = useState('select'); // select | review | confirmed
  const [confirmed, setConfirmed] = useState(null);

  const court = useMemo(() => COURTS.find((c) => c.id === courtId), [courtId]);

  useEffect(() => {
    let alive = true;
    setStatus('loading');
    setSlot(null);
    fetchAvailability({ date, courtId, duration }).then((slots) => {
      if (!alive) return;
      const isToday = date === todayISO();
      let open = slots;
      if (isToday) {
        const now = new Date();
        const cutoff = now.getHours() * 60 + now.getMinutes() + 45;
        open = slots.filter((t) => {
          const [h, m] = t.split(':').map(Number);
          return h * 60 + m > cutoff;
        });
      }
      setAvailable(open);
      setStatus(open.length ? 'ready' : 'empty');
    });
    return () => {
      alive = false;
    };
  }, [date, courtId, duration]);

  const confirm = () => {
    const booking = {
      ref: createBookingRef(),
      date,
      courtId,
      court: court.name,
      time: slot,
      duration,
      players,
    };
    saveLocalBooking(booking);
    setConfirmed(booking);
    setStep('confirmed');
  };

  const reset = () => {
    setStep('select');
    setConfirmed(null);
    setSlot(null);
  };

  const summaryRows = step === 'review' || confirmed
    ? [
        ['تاریخ', fmtDate(confirmed ? confirmed.date : date)],
        ['زمین', confirmed ? confirmed.court : court.name],
        ['ساعت', confirmed ? confirmed.time : slot],
        ['مدت', `${confirmed ? confirmed.duration : duration} دقیقه`],
        ['بازیکنان', confirmed ? confirmed.players : players],
      ]
    : slot
      ? [['تاریخ', fmtDate(date)], ['زمین', court.name], ['ساعت', slot], ['مدت', `${duration} دقیقه`], ['بازیکنان', players]]
      : null;

  return (
    <section id="booking" className="section booking" aria-labelledby="booking-title">
      <div className="container">
        <SectionHeader id="booking-title" eyebrow="رزروها" title="زمین خود را رزرو کنید" center />

        {step === 'confirmed' ? (
          <div className="bk-confirmed" role="status" data-reveal>
            <span className="bk-check">
              <IconCheck />
            </span>
            <h3 className="bk-confirmed-title">رزرو تأیید شد</h3>
            <p>زمین شما با موفقیت رزرو شد.</p>
            <p className="bk-ref">{confirmed.ref}</p>
            <dl className="bk-rows">
              {summaryRows.map(([k, v]) => (
                <div className="bk-row" key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
            <button type="button" className="btn btn-ghost" onClick={reset}>
              رزرو زمین دیگر <IconArrowRight />
            </button>
          </div>
        ) : (
          <div className="bk-layout">
            <div className="bk-panel" data-reveal>
              <div className="bk-controls">
                <Field label="تاریخ">
                  <input
                    type="date"
                    min={todayISO()}
                    value={date}
                    aria-label="تاریخ رزرو"
                    onChange={(e) => e.target.value && setDate(e.target.value)}
                  />
                </Field>
                <Field label="زمین">
                  <SegGroup
                    label="زمین"
                    options={COURTS.map((c) => ({ value: c.id, label: c.name }))}
                    value={courtId}
                    onChange={setCourtId}
                    render={(o) => o.label}
                  />
                </Field>
                <Field label="مدت">
                  <SegGroup
                    label="مدت"
                    options={DURATIONS.map((d) => ({ value: d }))}
                    value={duration}
                    onChange={setDuration}
                    render={(o) => `${o.value} دقیقه`}
                  />
                </Field>
                <Field label="بازیکنان">
                  <SegGroup
                    label="بازیکنان"
                    options={[2, 4].map((n) => ({ value: n }))}
                    value={players}
                    onChange={setPlayers}
                    render={(o) => `${o.value} بازیکن`}
                  />
                </Field>
              </div>

              <div className="bk-slots-head">
                <span className="bk-label">ساعت‌های آزاد</span>
                <span className="bk-hint">
                  {status === 'ready' ? `${available.length} زمان آزاد` : status === 'loading' ? 'در حال بررسی ظرفیت…' : ''}
                </span>
              </div>

              {status === 'loading' && (
                <div className="bk-slots" aria-hidden="true">
                  {TIME_SLOTS.map((t) => (
                    <span key={t} className="bk-slot is-skeleton">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {status === 'empty' && (
                <p className="bk-error" role="status">
                  برای این انتخاب زمانی آزاد نیست — تاریخ یا زمین دیگری را امتحان کنید.
                </p>
              )}

              {status === 'ready' && (
                <div className="bk-slots" role="radiogroup" aria-label="ساعت‌های آزاد">
                  {TIME_SLOTS.map((t) => {
                    const open = available.includes(t);
                    return (
                      <button
                        key={t}
                        type="button"
                        role="radio"
                        aria-checked={slot === t}
                        disabled={!open}
                        className={`bk-slot${slot === t ? ' is-selected' : ''}${open ? '' : ' is-unavailable'}`}
                        onClick={() => setSlot(t)}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>

            <aside className="bk-summary" data-reveal style={{ '--reveal-delay': '120ms' }}>
              <span className="bk-label">رزرو شما</span>
              {summaryRows ? (
                <dl className="bk-rows">
                  {summaryRows.map(([k, v]) => (
                    <div className="bk-row" key={k}>
                      <dt>{k}</dt>
                      <dd>{v}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <p className="bk-empty">برای دیدن رزرو خود، تاریخ، زمین و ساعت را انتخاب کنید.</p>
              )}
              {step === 'review' ? (
                <div className="bk-actions">
                  <button type="button" className="btn btn-gold btn-block" onClick={confirm}>
                    تأیید رزرو <IconCheck />
                  </button>
                  <button type="button" className="btn btn-ghost btn-block" onClick={() => setStep('select')}>
                    بازگشت
                  </button>
                </div>
              ) : (
                <button type="button" className="btn btn-gold btn-block" disabled={!slot} onClick={() => setStep('review')}>
                  ادامه و رزرو <IconArrowRight />
                </button>
              )}
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
