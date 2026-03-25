# DBS Freelance Tech (`tech-repair-site`)

Sitio web tipo landing para un servicio freelance de soporte técnico, reparación y mantenimiento de equipos. La web está pensada para explicar qué se ofrece, cómo funciona el proceso y facilitar que el usuario solicite ayuda desde un formulario de contacto.

## ¿En qué se centra?

- **Soporte técnico integral** (hardware + software) con foco en resolver problemas reales: equipos lentos, fallos de arranque, limpieza de virus, etc.
- **Servicios claros y “sin jerga”**, con énfasis en rapidez, profesionalidad y transparencia.
- **Captación de solicitudes** mediante un flujo simple: contar el problema → análisis → propuesta/presupuesto → solución.

## Propósito

Convertir visitas en solicitudes de servicio mostrando:

- Un mensaje principal (“Reparación Experta y Soluciones Tecnológicas a tu medida”).
- Un catálogo breve de servicios (“Servicios Profesionales”).
- Un proceso paso a paso (“Cómo funciona el servicio”).
- Una sección “Sobre mí” (“Tecnología con un toque humano”).
- Un punto de contacto central con CTA (“¿Tienes un problema? Hablemos.”).

## Objetivos

- Presentar la marca (“DBS Freelance Tech / Freelance Tech”) y su propuesta de valor.
- Explicar el tipo de trabajos y el enfoque (hardware, software, soporte, optimización).
- Guiar al usuario hacia el contacto con CTAs (“Cuéntame tu problema”, “Solicitar Presupuesto”, “Solicitar revisión del equipo”).
- Recoger la información mínima necesaria para preparar una solución/presupuesto.
- Cumplir con páginas legales y enlaces desde el footer (Aviso legal, Privacidad, Cookies).

## ¿Qué muestra la web?

### Secciones (home `/`)

- **Hero**: disponibilidad para nuevos proyectos + CTAs a `#contacto` y `#servicios`.
- **Servicios**: tarjetas con servicios y ejemplos (p. ej. reparación de ordenadores, instalación de aplicaciones, mantenimiento preventivo).
- **Cómo funciona**: 4 pasos (envío de solicitud → análisis → propuesta → solución).
- **Sobre mí**: enfoque personal y transparente + garantía de satisfacción.
- **Contacto**: modal/formulario para solicitar revisión del equipo y explicar el problema.

### Páginas legales (rutas)

- `/aviso-legal`: datos identificativos del titular, objeto, servicios, responsabilidad, propiedad intelectual y legislación aplicable (incluye el placeholder `[tudominio.com]`).
- `/privacidad`: política de privacidad (responsable, datos recogidos, finalidad, bases legales, conservación, derechos, seguridad y normativa RGPD/LOPDGDD).
- `/cookies`: política de cookies (información general, tipos de cookies, cookies utilizadas, gestión en navegadores y actualización de la política).

## Formulario de contacto (en la UI)

El flujo de contacto está orientado a recopilar datos del solicitante y del problema:

- Datos de contacto: nombre, email, teléfono y método preferido (email / teléfono / WhatsApp).
- Información del dispositivo: marca, modelo y sistema operativo.
- Detalles del problema: descripción libre con ejemplo guiado.

Además, la interfaz destaca “respuesta rápida”, “diagnóstico inicial gratuito” y “datos protegidos”, y muestra notificaciones de éxito/error al enviar.

## Tecnologías

- React + TypeScript + Vite
- React Router (rutas y navegación a páginas legales)
- Tailwind CSS (estilos)
- `react-hook-form` (formulario), `sonner` (toasts), `lucide-react` (iconos)
- EmailJS en el cliente para el envío del formulario

## Desarrollo local

```bash
npm install
npm run dev
```

Build y preview:

```bash
npm run build
npm run preview
```

## Descripción general (resumen)

`tech-repair-site` es una landing SPA de “DBS Freelance Tech” orientada a soporte técnico freelance: presenta servicios de reparación y optimización (hardware/software), explica el proceso de trabajo y centraliza la conversión en un formulario de contacto, complementado con páginas legales (aviso legal, privacidad y cookies).
