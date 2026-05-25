const Calendar = ({ openEvent, openNew, events }) => {
  const { SECTIONS, EVENT_TYPES } = window.CV_DATA;

  const [cursor, setCursor] = useState(new Date(2026, 4, 24));

  const [view, setView]     = useState('mes');
  const [filterSections, setFilterSections] = useState(SECTIONS.map(s => s.id));
  const [filterTypes, setFilterTypes]       = useState(EVENT_TYPES.map(t => t.id));

  const year  = cursor.getFullYear();
  const month = cursor.getMonth();
  const today = new Date(2026, 4, 24);

  const firstOfMonth = new Date(year, month, 1);
  const startOffset  = firstOfMonth.getDay();
  const gridStart = new Date(year, month, 1 - startOffset);
  const cells = [];
  for (let i = 0; i < 42; i++) {
    const d = new Date(gridStart);
    d.setDate(gridStart.getDate() + i);
    cells.push(d);
  }

  const filteredEvents = useMemo(() => events.filter(e =>
    e.sections.some(s => filterSections.includes(s)) &&
    filterTypes.includes(e.type)
  ), [events, filterSections, filterTypes]);

  const eventsByDate = useMemo(() => {
    const map = {};
    filteredEvents.forEach(e => {
      const start = window.parseDate(e.start), end = window.parseDate(e.end);
      for (let d = new Date(start); d <= end; d.setDate(d.getDate()+1)) {
        const key = window.fmtDate(d);
        (map[key] ||= []).push(e);
      }
    });
    return map;
  }, [filteredEvents]);

  const monthEvents = filteredEvents.filter(e => {
    const d = window.parseDate(e.start);
    return d.getFullYear() === year && d.getMonth() === month;
  }).sort((a,b) => a.start.localeCompare(b.start));

  const navigate = (delta) => {
    if (view === 'mes') {
      setCursor(d => new Date(d.getFullYear(), d.getMonth() + delta, 1));
    } else if (view === 'semana') {
      setCursor(d => {
        const c = new Date(d);
        c.setDate(c.getDate() + delta * 7);
        return c;
      });
    } else {
      setCursor(d => {
        const c = new Date(d);
        c.setDate(c.getDate() + delta);
        return c;
      });
    }
  };
  const goToday  = () => setCursor(new Date(2026, 4, 24));

  const sectionOf = (id) => SECTIONS.find(s => s.id === id);
  const primarySection = (ev) => sectionOf(ev.sections[0]) || sectionOf('general');

  const toggleSection = (id) => setFilterSections(prev =>
    prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]);

  return (
    <div data-screen-label="03 Calendario" style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: 0 }}>
      <div style={{
        padding: '20px 28px', borderBottom: '1px solid var(--line)',
        background: 'var(--surface)',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <IconButton icon="chevron-left" onClick={() => navigate(-1)} title="Mes anterior" />
            <IconButton icon="chevron-right" onClick={() => navigate(1)}  title="Mes siguiente" />
            <Button variant="ghost" size="sm" onClick={goToday} style={{ marginLeft: 4 }}>Hoy</Button>
          </div>

          <h2 style={{
            margin: 0, fontSize: 22, fontWeight: 600, letterSpacing: '-.02em',
            display: 'flex', alignItems: 'baseline', gap: 8,
          }}>
            <span style={{ textTransform: 'capitalize' }}>{window.MONTHS[month]}</span>
            <span style={{ color: 'var(--ink-4)', fontWeight: 400 }}>{year}</span>
          </h2>

          <div style={{ flex: 1 }} />

          <Segmented value={view} onChange={setView}
            options={[{value:'mes',label:'Mes'},{value:'semana',label:'Semana'},{value:'dia',label:'Día'}]} />

          <Button variant="secondary" size="md" icon="download">Exportar PDF</Button>
          <Button variant="primary" size="md" icon="plus" onClick={openNew}>Nuevo evento</Button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 16, flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 11.5, fontWeight: 500, color: 'var(--ink-4)', letterSpacing: '.06em', textTransform: 'uppercase' }}>
              Secciones
            </span>
            <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', alignItems: 'center' }}>
              <button onClick={() => {
                if (filterSections.length === SECTIONS.length) {
                  setFilterSections([]);
                } else {
                  setFilterSections(SECTIONS.map(s => s.id));
                }
              }} style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '5px 10px', borderRadius: 999, cursor: 'pointer',
                border: '1px solid var(--line-strong)',
                background: 'transparent',
                color: filterSections.length === SECTIONS.length ? 'var(--brand)' : 'var(--ink-4)',
                fontSize: 11.5, fontWeight: 500,
              }}>
                <Icon name={filterSections.length === SECTIONS.length ? 'check' : 'close'} size={12} />
                Todas
              </button>
              {SECTIONS.map(s => {
                const on = filterSections.includes(s.id);
                return (
                  <button key={s.id} onClick={() => toggleSection(s.id)}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 7,
                      padding: '5px 11px', borderRadius: 999, cursor: 'pointer',
                      border: '1px solid ' + (on ? 'transparent' : 'var(--line-strong)'),
                      background: on ? s.soft : 'transparent',
                      color: on ? 'var(--ink)' : 'var(--ink-4)',
                      fontSize: 12, fontWeight: 500,
                      opacity: on ? 1 : 0.7,
                    }}>
                    <span style={{ width: 8, height: 8, borderRadius: 999, background: s.color }} />
                    {s.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div style={{ width: 1, height: 22, background: 'var(--line)' }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <span style={{ fontSize: 11.5, fontWeight: 500, color: 'var(--ink-4)', letterSpacing: '.06em', textTransform: 'uppercase' }}>
              Tipo
            </span>
            <Select value={filterTypes.length === EVENT_TYPES.length ? 'todos' : filterTypes[0]}
              onChange={e => {
                const val = e.target.value;
                setFilterTypes(val === 'todos' ? EVENT_TYPES.map(t => t.id) : [val]);
              }}
              style={{ height: 30, fontSize: 12.5, width: 160 }}>
              <option value="todos">Todos los tipos</option>
              {EVENT_TYPES.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
            </Select>
          </div>

          <div style={{ flex: 1 }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12.5, color: 'var(--ink-3)' }}>
            <Icon name="calendar" size={14} />
            <span><strong style={{ color: 'var(--ink)', fontWeight: 600 }}>{monthEvents.length}</strong> eventos este mes</span>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, minHeight: 0, display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 320px', gap: 0 }}>
        <div style={{ padding: 24, display: 'flex', flexDirection: 'column', minHeight: 0 }}>
          {view === 'mes' && (
            <MonthGrid
              cells={cells} month={month} today={today}
              eventsByDate={eventsByDate} sectionOf={sectionOf} primarySection={primarySection}
              onEventClick={openEvent} onDayClick={(d) => openNew(window.fmtDate(d))} />
          )}
          {view === 'semana' && (
            <WeekView cursor={cursor} today={today} eventsByDate={eventsByDate}
              primarySection={primarySection} onEventClick={openEvent} />
          )}
          {view === 'dia' && (
            <DayView cursor={cursor} eventsByDate={eventsByDate}
              primarySection={primarySection} onEventClick={openEvent} />
          )}
        </div>

        <SidePanel monthEvents={monthEvents} today={today} primarySection={primarySection}
          eventTypes={EVENT_TYPES} onEventClick={openEvent} />
      </div>
    </div>
  );
};

window.Calendar = Calendar;
