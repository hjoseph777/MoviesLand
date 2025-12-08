## Lab3Mobile – Flexbox Layout Demo (Expo) Project
# do not use emoji keep prfessional
## Project Metadata
- Author: Cross Platform Mobile Development
- Created: 2025-09-26
- Platform: Expo (React Native + TypeScript + Expo Router)
- Package Manager: npm
- Minimum React Native version (from scaffold): 0.81.x
- Routing: File‑based via `expo-router`

## Overview
Lab3Mobile demonstrates responsive Flexbox layouts in React Native. The project showcases how to create flexible, wrapping grid layouts with dynamic column switching (1, 2, or 3 columns) that work consistently across web and Android platforms.

## 📥 Quick Download

**Get the complete project instantly:**
 ## donwload section
To show users that something is happening and encourage them to wait patiently while a file is being downloaded, you can use several UI/UX techniques depending on your platform (web, mobile, desktop, etc). Here are some common ways:
[![Download CrossPlatformLab8Activity](https://img.shields.io/badge/Download-CrossPlatformLab8Activity.zip-blue?style=for-the-badge&logo=download)](https://github.com/hjoseph777/CrossPlatformLab8Activity/archive/refs/heads/main.zip)


[![Download Lab3Mobile](https://img.shields.io/badge/Download-Lab3MobileZip.zip-blue?style=for-the-badge&logo=download)](https://github.com/hjoseph777/Flexbox/releases/download/v1.0/Lab3MobileZip.zip)


## live demo
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://lab3mobile-flexbox.vercel.app)

*Complete Expo project with Flexbox demo ready to run*

## Important: Where your Flexbox code lives
- The main Flexbox demo is in [`app/(tabs)/index.tsx`](app/(tabs)/index.tsx) with column state management and grid rendering
- The reusable card component is in [`components/item-card.tsx`](components/item-card.tsx) with flexible styling props

## Project Explorer
An interactive, collapsible view of the codebase. Click file names to open them.

<details open>
   <summary><strong>app/ – Routes & Navigation</strong></summary>

   - 📁 <strong>app</strong>
      - 📄 [`_layout.tsx`](app/_layout.tsx) – Root stack layout with theme provider
      - 📄 [`modal.tsx`](app/modal.tsx) – Example modal screen
      - 📁 <strong>(tabs)</strong>
         - 📄 [`_layout.tsx`](app/(tabs)/_layout.tsx) – Bottom tab navigator config
         - 🏠 [`index.tsx`](app/(tabs)/index.tsx) – **Main Flexbox demo screen**
         - 🔍 [`explore.tsx`](app/(tabs)/explore.tsx) – Explore screen placeholder
</details>

<details>
   <summary><strong>components/ – Reusable UI</strong></summary>

   - 📁 <strong>components</strong>
      - 📱 [`item-card.tsx`](components/item-card.tsx) – **Reusable grid item component**
      - 🖼️ [`parallax-scroll-view.tsx`](components/parallax-scroll-view.tsx) – Parallax header wrapper
      - ✨ [`themed-text.tsx`](components/themed-text.tsx) – Theme aware text
      - 🎨 [`themed-view.tsx`](components/themed-view.tsx) – Theme aware container
      - 🔔 [`haptic-tab.tsx`](components/haptic-tab.tsx) – Haptic feedback for tabs
      - 🔗 [`external-link.tsx`](components/external-link.tsx) – External URL opener
      - 👋 [`hello-wave.tsx`](components/hello-wave.tsx) – Animated wave component
      - 📁 ui
         - 📂 [`collapsible.tsx`](components/ui/collapsible.tsx) – Expand/collapse content region
         - 🧩 [`icon-symbol.tsx`](components/ui/icon-symbol.tsx) – Generic platform icon
         - 🧩 [`icon-symbol.ios.tsx`](components/ui/icon-symbol.ios.tsx) – iOS variant icon
</details>

<details>
   <summary><strong>constants/ & hooks/ – Theming & Utilities</strong></summary>

   - 🎛️ [`constants/theme.ts`](constants/theme.ts) – Theme tokens & palette
   - 🧵 Hooks:
      - [`hooks/use-color-scheme.ts`](hooks/use-color-scheme.ts) – Native color scheme
      - [`hooks/use-color-scheme.web.ts`](hooks/use-color-scheme.web.ts) – Web override
      - [`hooks/use-theme-color.ts`](hooks/use-theme-color.ts) – Resolve themed colors
</details>

<details>
   <summary><strong>Assets & Scripts</strong></summary>

   - 🖼️ `assets/images/` – Icons, splash, logos
   - 🛠️ [`scripts/reset-project.js`](scripts/reset-project.js) – Reset scaffold helper
</details>

<details>
   <summary><strong>Config & Meta</strong></summary>

   - ⚙️ [`app.json`](app.json) – Expo configuration (name, icons, splash)
   - 📦 [`package.json`](package.json) – Dependencies & scripts
   - 🧪 [`tsconfig.json`](tsconfig.json) – TypeScript compiler options
   - 🔍 [`eslint.config.js`](eslint.config.js) – Lint rules
   - 📝 [`README.md`](README.md) – Documentation (this file)
</details>

## File structure

```text
Lab3Mobile/Flexbox
├── 📁 app/                          # Route definitions (file-based routing)
│   ├── 🧭 _layout.tsx               # Root layout (stack + theme provider)
│   ├── 🪟 modal.tsx                 # Modal screen example
│   └── 🗂️ (tabs)/                   # Group (not in URL) for tab routes
│       ├── 🧭 _layout.tsx           # Bottom tab navigator config
│       ├── 🏠 index.tsx             # Home screen with Flexbox demo
│       └── 🔍 explore.tsx           # Explore screen placeholder
│
├── 📁 components/                   # Reusable UI & Flexbox components
│   ├── 📱 item-card.tsx             # Reusable grid item component
│   ├── 👋 hello-wave.tsx            # Animated wave / greeting
│   ├── 🖼️ parallax-scroll-view.tsx  # Parallax scroll wrapper
│   ├── ✨ themed-text.tsx           # Theme aware <Text>
│   ├── 🎨 themed-view.tsx           # Theme aware <View>
│   ├── 🔔 haptic-tab.tsx            # Haptic feedback tab item
│   ├── 🔗 external-link.tsx         # External link component
│   └── 📁 ui/                       # Lower-level UI helpers
│       ├── 📂 collapsible.tsx       # Expand / collapse container
│       ├── 🧩 icon-symbol.tsx       # Generic icon symbol
│       └── 🧩 icon-symbol.ios.tsx   # iOS specific icon variant
│
├── 📁 constants/
│   └── 🎛️ theme.ts                 # Color palette & tokens
│
├── 📁 hooks/                        # Hooks for theme & color scheme
│   ├── 🌗 use-color-scheme.ts       # Native color scheme detection
│   ├── 🌐 use-color-scheme.web.ts   # Web override implementation
│   └── 🎛️ use-theme-color.ts        # Themed color resolver
│
├── 📁 assets/
│   └── 🖼️ images/                   # Icons, splash, logos
│
├── 📁 docs/
│   └── 🖼️ screenshots/              # Project screenshots for README
│
├── 📁 scripts/
│   └── 🛠️ reset-project.js          # Reset scaffold utility
│
├── ⚙️ app.json                      # Expo configuration (name, icons)
├── 📦 package.json                  # Dependencies & scripts
├── 🧾 tsconfig.json                 # TypeScript compiler options
├── 🔍 eslint.config.js              # Lint rules
└── 📝 README.md                     # Documentation (this file)
```

### Quick Code Reference
| Icon | Type | Path | Purpose |
|------|------|------|---------|
| 🧭 | Layout | [`app/_layout.tsx`](app/_layout.tsx) | Root navigation (stack + theme) |
| 🪟 | Modal | [`app/modal.tsx`](app/modal.tsx) | Example modal screen |
| 🧭 | Layout | [`app/(tabs)/_layout.tsx`](app/(tabs)/_layout.tsx) | Bottom tab navigator setup |
| 🏠 | Screen | [`app/(tabs)/index.tsx`](app/(tabs)/index.tsx) | **Main Flexbox demo screen** |
| 🔍 | Screen | [`app/(tabs)/explore.tsx`](app/(tabs)/explore.tsx) | Explore placeholder |
| 📱 | Component | [`components/item-card.tsx`](components/item-card.tsx) | **Reusable grid item component** |
| 🎛️ | Theme | [`constants/theme.ts`](constants/theme.ts) | Theme palette & tokens |
| 🎛️ | Hook | [`hooks/use-theme-color.ts`](hooks/use-theme-color.ts) | Themed color resolver |
| 🌗 | Hook | [`hooks/use-color-scheme.ts`](hooks/use-color-scheme.ts) | Native color scheme |
| 🌐 | Hook | [`hooks/use-color-scheme.web.ts`](hooks/use-color-scheme.web.ts) | Web color scheme override |
| 🖼️ | UI | [`components/parallax-scroll-view.tsx`](components/parallax-scroll-view.tsx) | Parallax scroll wrapper |
| ✨ | UI | [`components/themed-text.tsx`](components/themed-text.tsx) | Theme aware text |
| 🎨 | UI | [`components/themed-view.tsx`](components/themed-view.tsx) | Theme aware view |
| 🔔 | UI | [`components/haptic-tab.tsx`](components/haptic-tab.tsx) | Haptic tab item |
| 🔗 | UI | [`components/external-link.tsx`](components/external-link.tsx) | External link component |
| 👋 | UI | [`components/hello-wave.tsx`](components/hello-wave.tsx) | Animated wave component |
| 📂 | Utility | [`components/ui/collapsible.tsx`](components/ui/collapsible.tsx) | Collapsible container |
| 🧩 | UI | [`components/ui/icon-symbol.tsx`](components/ui/icon-symbol.tsx) | Generic icon symbol |
| 🧩 | UI | [`components/ui/icon-symbol.ios.tsx`](components/ui/icon-symbol.ios.tsx) | iOS icon variant |
| 🛠️ | Script | [`scripts/reset-project.js`](scripts/reset-project.js) | Reset scaffold script |
| ⚙️ | Config | [`app.json`](app.json) | Expo config |
| 📦 | Config | [`package.json`](package.json) | Dependencies & scripts |
| 🧾 | Config | [`tsconfig.json`](tsconfig.json) | TypeScript compiler config |
| 🔍 | Config | [`eslint.config.js`](eslint.config.js) | Lint rules |
| 📝 | Docs | [`README.md`](README.md) | Documentation |

## Screenshots

```
Live screenshots from the Flexbox demo:
```
<div style="display: flex; gap: 10px; flex-wrap: wrap;">
  <img src="docs/screenshots/0cl.png" alt="1 Column Layout" width="200"/>
  <img src="docs/screenshots/1col.png" alt="2 Column Layout" width="200"/>  
  <img src="docs/screenshots/2col.png" alt="3 Column Layout" width="200"/>
</div>



---

*This project demonstrates modern React Native Flexbox techniques with cross-platform compatibility in mind.*
