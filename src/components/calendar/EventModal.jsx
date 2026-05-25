const EventModal = ({ event, onClose, onSave, onDelete, isNew }) => {
  const { SECTIONS, EVENT_TYPES } = window.CV_DATA;
  const [draft, setDraft] = useState(event);
  const set = (k, v) => setDraft(d => ({ ...d, [k]: v }));

  const toggleSection = (id) => {
    set('sections', draft.sections.includes(id)
      ? draft.sections.filter(s => s !== id)
      : [...draft.sections, id]);
  };

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  const sectionObjects = SECTIONS.filter(s => draft.sections.includes(s.id));
  const primary = sectionObjects[0] || SECTIONS[0];

  return (
    <div onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(20,22,28,.36)', backdropFilter: 'blur(2px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 24, animation: 'overlayIn .15s ease-out',
      }}>
      <div onClick={e => e.stopPropagation()}
        style={{
          width: 'min(640px, 100%)', maxHeight: 'calc(100vh - 48px)',
          background: 'var(--surface)', borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow-lg)', display: 'flex', flexDirection: 'column',
          animation: 'modalIn .18s ease-out',
          overflow: 'hidden',
        }}>
        <div style={{ height: 6, background: primary.color }} />

        <div style={{ padding: '20px 24px 4px', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 11.5, fontWeight: 500, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--ink-4)' }}>
              {isNew ? 'Nuevo evento' : 'Editar evento'}
            </div>
            <input
              autoFocus={isNew}
              value={draft.title}
              onChange={e => set('title', e.target.value)}
              placeholder="Título del evento"
              style={{
                width: '100%', border: 0, outline: 'none', background: 'transparent',
                fontSize: 22, fontWeight: 600, letterSpacing: '-.015em',
                padding: '4px 0', marginTop: 4, color: 'var(--ink)',
              }}
            />
          </div>
          <IconButton icon="close" onClick={onClose} title="Cerrar" />
        </div>

        <div style={{ padding: '12px 24px 20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
            <Field label="Fecha de inicio">
              <Input type="date" value={draft.start} onChange={e => set('start', e.target.value)} />
            </Field>
            <Field label="Fecha de fin">
              <Input type="date" value={draft.end} onChange={e => set('end', e.target.value)} />
            </Field>
            <Field label="Horario">
              <Input type="text" value={draft.time} onChange={e => set('time', e.target.value)} placeholder="09:00 – 11:00" />
            </Field>
          </div>

          <Field label="Tipo de evento">
            <Select value={draft.type} onChange={e => set('type', e.target.value)}>
              {EVENT_TYPES.map(t => <option key={t.id} value={t.id}>{t.label}</option>)}
            </Select>
          </Field>

          <Field label="Secciones a las que aplica" hint="Selecciona una o más. El color principal se toma de la primera sección.">
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginTop: 2 }}>
              {SECTIONS.map(s => {
                const selected = draft.sections.includes(s.id);
                return (
                  <button key={s.id} type="button" onClick={() => toggleSection(s.id)}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: 8,
                      padding: '7px 12px', borderRadius: 999, cursor: 'pointer',
                      border: '1px solid ' + (selected ? 'transparent' : 'var(--line-strong)'),
                      background: selected ? s.color : 'var(--surface)',
                      color: selected ? '#fff' : 'var(--ink-2)',
                      fontSize: 12.5, fontWeight: 500,
                      transition: 'all .12s',
                    }}>
                    <span style={{
                      width: 8, height: 8, borderRadius: 999,
                      background: selected ? 'rgba(255,255,255,.85)' : s.color,
                    }} />
                    {s.label}
                  </button>
                );
              })}
            </div>
          </Field>

          <Field label="Descripción">
            <Textarea value={draft.desc} onChange={e => set('desc', e.target.value)} rows={3}
              placeholder="Añade notas, responsables, lugar..." />
          </Field>

        </div>

        <div style={{
          padding: '14px 20px', borderTop: '1px solid var(--line)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          background: 'var(--surface-2)',
        }}>
          <div>
            {!isNew && (
              <Button variant="danger" size="md" onClick={() => onDelete(draft.id)}>
                Eliminar
              </Button>
            )}
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <Button variant="secondary" size="md" onClick={onClose}>Cancelar</Button>
            <Button variant="primary" size="md" icon="check" onClick={() => onSave(draft)}>
              {isNew ? 'Crear evento' : 'Guardar cambios'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

window.EventModal = EventModal;
