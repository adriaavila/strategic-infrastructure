# Design System

Sistema de diseño arquitectónico y minimalista para mantener consistencia visual en toda la aplicación.

## 📋 Tabla de Contenidos

- [Filosofía](#filosofía)
- [Tokens](#tokens)
- [Colores](#colores)
- [Tipografía](#tipografía)
- [Espaciado](#espaciado)
- [Componentes](#componentes)
- [Uso](#uso)

## 🎨 Filosofía

Este design system se basa en principios arquitectónicos:

- **Minimalismo**: Diseño limpio y sin distracciones
- **Consistencia**: Tokens centralizados para mantener coherencia
- **Accesibilidad**: Contraste adecuado y soporte para modo oscuro
- **Escalabilidad**: Sistema modular que crece con el proyecto

## 🎨 Tokens

Todos los tokens están definidos en `src/design-system/tokens.ts` y se exponen como variables CSS en `src/index.css`.

### Importar Tokens

```typescript
import { designTokens } from '@/design-system';

// Acceder a tokens
const primaryColor = designTokens.colors.semantic.primary.DEFAULT;
const spacing = designTokens.spacing.lg;
```

## 🎨 Colores

### Brand Palette (servicioscreativos.online)

Default theme is dark-first. CSS variables and Tailwind classes:

| Token / Variable | Tailwind | Hex | Use |
|-----------------|----------|-----|-----|
| `--bg-main` | `bg-brand-dark` | `#0A0A0B` | Main background (Deep Space) |
| `--brand-primary` | `bg-brand-primary`, `text-brand-primary` | `#8B5CF6` | CTAs, logo accent (Electric Violet) |
| `--brand-secondary` | `bg-brand-secondary`, `text-brand-secondary` | `#2DD4BF` | Highlights, success (Cyber Mint) |
| `--text-muted` | `text-brand-slate` | `#94A3B8` | Subtext, borders (Slate) |
| `--text-main` | — | `#FFFFFF` | Headlines, primary text |

Hero gradient: `bg-hero-gradient` (radial from top, #1E1B4B → #0A0A0B).

### Paleta Base

El sistema utiliza una paleta de grises cálidos como base:

- **Grey 50-900**: Escala de grises de claro a oscuro
- **Background**: `hsl(0, 0%, 99%)` - Fondo principal
- **Foreground**: `hsl(0, 0%, 10%)` - Texto principal

### Colores Semánticos

```typescript
// Uso en Tailwind
<div className="bg-primary text-primary-foreground">
<div className="bg-secondary text-secondary-foreground">
<div className="bg-destructive text-destructive-foreground">
<div className="bg-success text-success-foreground">
<div className="bg-warning text-warning-foreground">
<div className="bg-info text-info-foreground">
```

### Bordes

El sistema utiliza bordes sutiles (1px) como elemento arquitectónico:

```typescript
// Variantes disponibles
border          // Opacidad 8%
border-subtle   // Opacidad 5%
border-medium   // Opacidad 12%
border-strong   // Opacidad 20%
```

**Uso:**
```tsx
<div className="border border-subtle">
<div className="border border-medium">
```

## 📝 Tipografía

### Fuentes

- **Sans/Heading/Body**: Inter
- **Mono**: ui-monospace, SFMono-Regular, Menlo, Monaco

### Tamaños

El sistema incluye una escala tipográfica completa:

```tsx
// Tamaños disponibles
text-xs    // 12px
text-sm    // 14px
text-base  // 16px
text-lg    // 18px
text-xl    // 20px
text-2xl   // 24px
text-3xl   // 30px
text-4xl   // 36px
text-5xl   // 48px
text-6xl   // 60px
text-7xl   // 72px
```

### Pesos

```tsx
font-light     // 300
font-normal    // 400
font-medium    // 500
font-semibold  // 600
font-bold      // 700
```

### Letter Spacing

```tsx
tracking-tighter  // -0.05em
tracking-tight    // -0.02em
tracking-normal   // 0em
tracking-wide     // 0.025em
tracking-wider    // 0.05em
```

### Line Height

```tsx
leading-none     // 1
leading-tight    // 1.25
leading-snug     // 1.375
leading-normal   // 1.5
leading-relaxed  // 1.6
leading-loose    // 2
```

## 📏 Espaciado

Sistema basado en múltiplos de 4px:

```tsx
// Espaciado disponible
p-xs      // 4px
p-sm      // 8px
p-md      // 16px
p-lg      // 24px
p-xl      // 32px
p-2xl     // 48px
p-3xl     // 64px
p-4xl     // 96px
p-5xl     // 128px
p-section // 128px (para secciones)
```

**Uso:**
```tsx
<div className="p-lg m-md">
<section className="py-section">
```

## 🎯 Componentes

### Card Surface

Superficie de tarjeta con estilos predefinidos:

```tsx
<div className="card-surface">
  Contenido de la tarjeta
</div>
```

### Card Glow

Efecto de brillo que sigue el mouse:

```tsx
<div className="card-glow">
  Contenido con efecto glow
</div>
```

### Bento Grid

Grid responsivo para layouts tipo Bento:

```tsx
<div className="bento-grid">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Section Spacing

Espaciado consistente para secciones:

```tsx
<section className="section-spacing">
  Contenido de la sección
</section>
```

## 🎭 Utilidades

### Clases de Utilidad

```tsx
// Bordes arquitectónicos
.border-architectural
.border-subtle
.border-medium
.border-strong

// Tipografía
.text-heading
.text-body
.text-muted

// Transiciones
.transition-smooth
.transition-spring

// Animaciones
.animate-float
.animate-pulse-soft
.animate-draw
```

### Helpers TypeScript

```typescript
import { 
  getSpacing, 
  getColor, 
  getFontSize,
  getBorderRadius,
  getShadow,
  getTransition,
  getZIndex
} from '@/design-system/utils';

// Ejemplos
const spacing = getSpacing('lg'); // '24px'
const color = getColor('semantic.primary.DEFAULT');
const fontSize = getFontSize('xl'); // '1.25rem'
const radius = getBorderRadius('lg'); // '16px'
const shadow = getShadow('glow');
const transition = getTransition('base', 'spring');
const zIndex = getZIndex('modal'); // '1050'
```

## 🎨 Sombras

Sistema de sombras sutiles para elevación:

```tsx
shadow-xs      // Muy sutil
shadow-sm      // Sutil
shadow-md      // Medio
shadow-lg      // Grande
shadow-xl      // Muy grande
shadow-2xl     // Extra grande
shadow-glow    // Efecto glow
shadow-glow-lg // Efecto glow grande
shadow-card    // Para tarjetas
shadow-inner   // Sombra interna
```

## 🔄 Transiciones

### Duración

```tsx
duration-fast    // 150ms
duration-base    // 200ms
duration-slow    // 300ms
duration-slower  // 500ms
```

### Easing

```tsx
ease-default  // cubic-bezier(0.4, 0, 0.2, 1)
ease-in       // cubic-bezier(0.4, 0, 1, 1)
ease-out      // cubic-bezier(0, 0, 0.2, 1)
ease-in-out   // cubic-bezier(0.4, 0, 0.2, 1)
ease-spring   // cubic-bezier(0.16, 1, 0.3, 1)
ease-bounce   // cubic-bezier(0.68, -0.55, 0.265, 1.55)
```

## 📱 Responsive

El design system incluye breakpoints estándar:

```tsx
xs: '475px'
sm: '640px'
md: '768px'
lg: '1024px'
xl: '1280px'
2xl: '1536px'
```

## 🌙 Modo Oscuro

El sistema soporta modo oscuro automáticamente. Las variables CSS se ajustan cuando se aplica la clase `.dark`:

```tsx
<html className="dark">
  {/* Contenido en modo oscuro */}
</html>
```

## 📚 Ejemplos

### Botón con Design System

```tsx
<button className="
  bg-primary 
  text-primary-foreground 
  px-lg 
  py-md 
  rounded-lg 
  border 
  border-subtle
  shadow-sm
  transition-smooth
  hover:bg-primary-hover
  hover:shadow-md
">
  Click me
</button>
```

### Card con Design System

```tsx
<div className="
  card-surface
  card-glow
  p-lg
  rounded-xl
">
  <h3 className="text-heading text-2xl mb-md">
    Título
  </h3>
  <p className="text-body text-muted">
    Descripción
  </p>
</div>
```

### Sección con Design System

```tsx
<section className="section-spacing bg-background">
  <div className="container-custom">
    <h2 className="text-heading text-4xl mb-lg">
      Título de Sección
    </h2>
    <p className="text-body text-lg text-muted max-w-2xl">
      Descripción de la sección
    </p>
  </div>
</section>
```

## 🔧 Personalización

Para personalizar el design system, edita los tokens en:

- `src/design-system/tokens.ts` - Tokens TypeScript
- `src/index.css` - Variables CSS
- `tailwind.config.ts` - Configuración de Tailwind

## 📖 Referencias

- [Tailwind CSS](https://tailwindcss.com/docs)
- [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)
- [Design Tokens](https://www.designtokens.org/)
