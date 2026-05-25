# Prompt inicial para Claude Code — Sprint 1

> Pega esto en tu primera sesión de Claude Code, después de que confirmes que ya leyó el CLAUDE.md.

---

## Mensaje 1: Confirmación de contexto

```
Hola, colega. Antes de empezar, lee el archivo CLAUDE.md de la raíz del proyecto. 
Confírmame en español que entendiste:
1. El stack técnico
2. Los principios no negociables (modularidad, permisos, seguridad)
3. Las 5 secciones reales del colegio + la sección "general"
4. Los 5 roles reales + sus restricciones
5. El plan del Sprint 1

Cuando me confirmes, te doy la primera tarea concreta.
```

---

## Mensaje 2: Setup inicial (después de su confirmación)

```
Perfecto. Vamos a arrancar el Sprint 1 — Cimientos.

Tarea 1: Setup del monorepo

Crea la estructura siguiendo la sección 5 del CLAUDE.md. Necesito:

1. Estructura de carpetas backend/ y frontend/ vacías por ahora
2. .gitignore raíz que cubra Node, Next.js, Prisma, .env, /dist, /build, node_modules
3. .env.example en la raíz con todas las variables que vamos a usar:
   - DATABASE_URL
   - JWT_SECRET
   - JWT_REFRESH_SECRET
   - FIELD_ENCRYPTION_KEY (32 bytes hex)
   - NODE_ENV
   - PORT
   - FRONTEND_URL
4. docker-compose.yml en la raíz con PostgreSQL 16 para desarrollo local
   - Puerto 5432
   - Usuario: erp_user
   - Password: erp_dev_password (solo para dev)
   - Base de datos: mi_erp_escolar
   - Volumen persistente
5. README.md inicial con: descripción breve, requisitos (Node 20+, Docker), 
   pasos de instalación, comandos básicos

NO crees todavía el código del backend ni frontend, solo la cáscara.
Cuando termines, lístame los archivos creados y espera mi OK antes de seguir.
```

---

## Mensaje 3: Backend base (después del OK)

```
OK. Ahora el backend base.

Tarea 2: Inicializar el backend con TypeScript + Express + Prisma

Dentro de backend/:
1. package.json con dependencias mínimas:
   - express, cors, helmet, dotenv, zod, bcryptjs, jsonwebtoken, @prisma/client
   - dev: typescript, @types/node, @types/express, @types/cors, @types/bcryptjs, 
     @types/jsonwebtoken, ts-node, nodemon, tsconfig-paths, prisma, vitest
2. tsconfig.json con strict mode, paths para @/* → src/*
3. nodemon.json para que reinicie al cambiar src/
4. src/server.ts con Express básico, CORS, helmet, healthcheck en /api/health
5. src/lib/prisma.ts con cliente singleton
6. src/lib/logger.ts básico (console por ahora, lo cambiamos después)
7. prisma/schema.prisma con TODO el modelo de la sección 4 del CLAUDE.md 
   (incluido Event y EventSection del módulo Calendar)
8. Scripts en package.json: dev, build, start, prisma:migrate, prisma:seed, test, lint

NO corras todavía las migraciones, solo deja el código listo.
Lístame los archivos y espera confirmación.
```

---

## Mensaje 4: Seed inicial (después del OK)

```
Excelente. Ahora el seed con datos reales del colegio.

Tarea 3: Crear prisma/seed.ts

El seed debe insertar:

1. Las 6 secciones (idempotente con upsert):
   - general (orden 0)
   - maternal (1)
   - preescolar (2)
   - primaria (3)
   - secundaria (4)
   - bachillerato (5)

2. Los permisos del módulo calendar:
   - event.create, event.read, event.update, event.delete
   - module.manage (para reordenar/habilitar módulos)
   - user.manage (para CRUD de usuarios)
   - audit.read (para ver logs)

3. Los 5 roles con sus permisos asignados:
   - admin_global: TODOS los permisos
   - director_seccion: event.* (los 4)
   - academico: event.* (los 4)
   - vinculacion: event.read
   - lectura: event.read

4. El módulo "calendar" en la tabla Module:
   - code: "calendar"
   - name: "Calendario de Eventos"
   - icon: "calendar"
   - routePath: "/calendar"
   - apiPrefix: "/api/calendar"
   - enabled: true
   - displayOrder: 0

5. Un usuario admin inicial:
   - email: admin@colegiovictoria.local
   - password: leer de env DEV_ADMIN_PASSWORD (si no existe, error claro)
   - rol: admin_global con sectionId NULL

Hazlo idempotente (upsert en todos lados). Agrega DEV_ADMIN_PASSWORD al .env.example.
```

---

## Mensaje 5: Servicio de permisos (después del OK)

```
Ahora la pieza crítica: el servicio de permisos.

Tarea 4: Crear src/core/permissions/

Necesito tres archivos:

1. permission.service.ts con:
   - Type UserContext
   - Type PermissionAction (string literal con todas las acciones)
   - loadUserContext(userId): carga roles + permisos + scope desde Prisma
   - hasPermission(ctx, action): boolean
   - canActOnSections(ctx, action, sectionIds[]): boolean
     - Regla: debe cubrir TODAS las secciones (.every())
     - Si algún rol tiene sectionIds = null, es scope global
   - getAccessibleSectionIds(ctx, action): string[] | 'ALL'

2. permission.middleware.ts con:
   - authenticate(): extrae JWT, valida, carga UserContext en req.user
   - requirePermission(action): middleware que checa hasPermission

3. permission.service.test.ts con Vitest:
   - Director general crea evento en cualquier sección → true
   - Director primaria crea evento en bachillerato → false
   - Académico crea evento en "general" → false
   - Evento que toca primaria Y secundaria, usuario solo primaria → false
   - Vinculación intenta crear → false, leer → true
   - Múltiples roles del mismo tipo → unión de secciones

Sigue los snippets que ya tenemos en el contexto de la conversación anterior, pero 
ADAPTA a la estructura del proyecto y al schema de Prisma.
```

---

## Mensaje 6: Auth (después del OK)

```
Tarea 5: Sistema de autenticación

Crea src/core/auth/:

1. auth.service.ts:
   - register(data): crea usuario con bcrypt (cost 12). Solo lo llaman admins.
   - login(email, password): valida y devuelve { accessToken, refreshToken, user }
   - refreshAccessToken(refreshToken)
   - JWT con expiración: access 15min, refresh 7 días
   - Guarda refresh tokens en BD si quieres revocación, o solo firma stateless (recomiendo stateless para empezar)

2. auth.controller.ts: endpoints POST /login, POST /refresh, POST /logout

3. auth.routes.ts: registra en /api/auth

4. auth.schema.ts: validaciones Zod

5. Integra en src/server.ts el registro de las rutas

Reglas:
- NUNCA devolver passwordHash
- Logs sin password ni tokens
- En errores de login devolver mensaje genérico "Credenciales inválidas" 
  (no decir si el email existe o no)
- Rate limiting básico en /login (express-rate-limit, 5 intentos/15min por IP)
```

---

## Mensaje 7: Registro dinámico de módulos (cierre del Sprint 1)

```
Tarea 6: Sistema de registro de módulos

Crea src/core/modules/:

1. module.controller.ts con endpoints:
   - GET /api/modules — lista TODOS (solo admin con permiso module.manage)
   - GET /api/modules/available — lista los habilitados Y para los que el usuario 
     tiene permiso. Usado por el sidebar del frontend.
   - PATCH /api/modules/:id — actualiza enabled, displayOrder
   - PATCH /api/modules/reorder — recibe array de {id, displayOrder} y actualiza en batch

2. Crea src/routes/index.ts con función registerRoutes(app) que:
   - Importa los moduleDefinition de cada módulo en src/modules/
   - Los registra en Express con su apiPrefix + authenticate middleware
   - Loguea cuáles se registraron al arrancar

3. Crea src/modules/calendar/index.ts vacío todavía pero exportando un 
   moduleDefinition placeholder con su router vacío. Lo llenamos en Sprint 2.

Cuando todo esto compile y los tests pasen, cerramos Sprint 1.
Hazme un resumen de lo que quedó, cuáles tests pasan, y qué falta verificar manualmente 
antes de pasar al Sprint 2 (módulo Calendar).
```

---

## Notas de uso

- **Un mensaje a la vez.** No le pegues todo de golpe. Claude Code trabaja mejor por tareas concretas.
- **Espera el OK antes de seguir.** Después de cada tarea, revisa los archivos generados, prueba lo que se pueda probar, y si algo está mal pide corrección antes de avanzar.
- **Si algo se desvía del CLAUDE.md**, recuérdaselo: "checa la sección X del CLAUDE.md, eso no respeta el principio Y".
- **Commits frecuentes.** Después de cada tarea exitosa, haz `git commit` con mensaje claro: "feat: setup monorepo", "feat: backend base + prisma schema", etc.
- **Actualiza el CLAUDE.md** cuando tomes decisiones nuevas (sección 8 — tabla de decisiones).