# Design & Style Guide

## Overview
This guide defines the visual language and interaction patterns for the project. The goal is a modern, app-like experience with glassmorphic elements, strategic whitespace, and smooth intentional animations.

---

## Colors

### Palette
Primary colors that work together:
- `#94a3b8` - Light slate
- `#4c5578` - Medium slate  
- `#e2e8f0` - Very light gray
- `#ff0080` or `#ff4081` - Accent pink/magenta
- `#1c1e26` - Dark base
- `#8b92a6` - Medium gray-blue
- `#2a2d3a` - Dark slate

### Theme Approach
- Primary theme: medium-dark
- Some sections/pages lighter, some darker
- Monochromatic base with accent colors for specific purposes
- Accent colors reserved for callouts and specific actions (consistency is key)

---

## Spacing & Layout

### Philosophy
Spaced out elements with strategic blank space for:
- Easy readability and navigation
- Minimal text on high-traffic pages
- Quick user comprehension
- Forcing engagement with desired actions

### Implementation
- Generous padding and margins between sections
- Whitespace as a design element, not wasted space
- Group related content, separate unrelated content
- Keep high-traffic pages simple and action-focused

---

## Typography

### Font Types
Modern, clean sans-serif fonts that complement the glassmorphic, 3D aesthetic:

**Primary Option:**
- Manrope - Rounded, clean, excellent readability

**Selection Criteria:**
- Excellent readability at various sizes
- Modern and contemporary feel
- Complements glassmorphic and 3D elements
- Works well on both light and dark backgrounds
- Professional but not corporate-stiff

### Hierarchy
- Big bold section headers
- Concise explanatory subheaders below main headers
- Body text kept minimal on key pages

### Tone
- Direct and clear
- No marketing fluff
- Action-oriented where appropriate

---

## Visual Style

### Backgrounds
- Textured backgrounds
- Patterned backgrounds  
- Gradient-colored backgrounds
- Background blurs for layering

### Depth & Dimension
- 3D elements, icons, and components
- Glassmorphism effects
- Layered UI with depth
- Shadow and elevation to establish hierarchy

### Shadows
Use a **grounded drop shadow** or **natural cast shadow** style that mimics product photography with top lighting.

**Shadow Characteristics:**
- Simulates a single overhead light source
- Concentrated beneath the object at the bottom center
- Darkest at the center directly beneath the element
- Fades out horizontally and vertically
- Creates the feeling that the object is resting on a surface or floating slightly above it
- Subtle and natural, not heavy or overly dramatic

**Purpose:**
- Adds realism and depth without heavy skeuomorphic styling
- Makes elements feel like photographed objects on a surface
- Maintains clean, modern aesthetic while adding dimension

**Implementation Notes:**
- Use for cards, buttons, modals, and elevated components
- Stronger shadows for higher elevation states (hover, active)
- Shadow intensity should match the overall theme (lighter on dark backgrounds, darker on light backgrounds)
- Combine with glassmorphic effects for layered depth

**Naming Convention:**
If creating design tokens or styles, use descriptive names like:
- `shadow-product-overhead`
- `shadow-photographic-ground`
- `shadow-natural-bottom`

### Effects
- Glassmorphic panels and cards
- Blur effects for modals and overlays
- Transparency and layering

---

## Navigation

### Sidebar
- Sticky left sidebar navigation
- Phosphor icons
- Page name tooltips appear on hover
- Clean, minimal aesthetic

### Header
- Simplified sticky header
- Logo placement
- Primary navigation options only
- No mega menus or complex dropdowns

### Navigation Pattern
- "Back" buttons that mimic mobile app navigation
- App-like flow instead of traditional web patterns
- Clear hierarchical structure

---

## Forms

### Approach
- Multi-step forms when appropriate
- Interactive forms with visual engagement
- Clickable visual elements instead of traditional text inputs or dropdowns (when applicable)
- Progressive disclosure - show what's needed when it's needed

### Design
- Visual feedback on interaction
- Clear progress indicators for multi-step forms
- Validation that feels helpful, not punishing

---

## Animations

### Overall Approach
Smooth, intentional animations that support the glassmorphic, 3D aesthetic. Animations should feel app-like and modern, not flashy. Every animation serves a purpose - either guiding attention or providing feedback.

### Timing & Easing
- Primary easing: ease-in-out (smooth acceleration and deceleration)
- Standard duration: moderate timing for most interactions
- Faster for micro-interactions like button hovers
- Slower for larger movements like modals and page transitions

### Key Animation Patterns

**Modals & Overlays**
- Slide in from right (like mobile apps)
- Backdrop blur fades in simultaneously
- Glassmorphic panels slide + fade in

**Navigation**
- Sidebar tooltips: fade in with slight slide
- Back button presses: subtle scale down on click
- Page transitions: crossfade between content areas

**Interactive Elements**
- Buttons: subtle lift on hover, slight glow on accent buttons
- Forms: focus states slide in underlines or borders
- 3D elements: gentle tilt or elevation change on hover
- Cards: lift with shadow increase

**Scroll Behavior**
- Fade in + slide up for sections entering viewport
- Stagger animations for lists/grids (slight delay between items)
- Parallax on hero sections only

**Background Effects**
- Gradient backgrounds: slow ambient shifts
- Blur amounts: animate on state changes (sharp to blur for overlays)

### What NOT to Animate
- Text color changes (instant)
- Small icon swaps
- Visibility toggles that don't need emphasis

### Accessibility
- Respect `prefers-reduced-motion`
- Disable all non-essential animations when user preference is set

---

## Components

### Buttons
- Clear visual states: default, hover, active, disabled
- Accent color for primary actions
- Subtle animations on interaction
- Lift effect on hover for depth

### Cards
- Glassmorphic styling
- Subtle shadows for elevation
- Hover states that increase elevation
- Can contain 3D elements or icons

### Modals
- Slide in from right
- Glassmorphic background
- Backdrop blur
- Close button easily accessible

### Icons
- Phosphor icon library
- Consistent sizing within contexts
- 3D treatment where appropriate
- Subtle animations on hover

---

## Responsive Behavior

### Approach
- Mobile-first mindset for interactions
- Desktop enhances with additional space and features
- Navigation adapts (sidebar may become bottom nav or hamburger on mobile)
- Touch-friendly targets on mobile
- Animations simplified or removed on mobile when performance is a concern

---

## Accessibility

### Core Principles
- Respect user preferences (reduced motion, high contrast, etc.)
- Sufficient color contrast for readability
- Keyboard navigation support
- Clear focus states
- ARIA labels where needed
- Touch targets sized appropriately

---

## Guidelines for Implementation

1. **Consistency Over Creativity**: Once patterns are established, repeat them. Users learn the interface faster.

2. **Purpose-Driven Design**: Every element should have a clear purpose. If it doesn't guide the user or provide feedback, question if it's needed.

3. **Performance Matters**: Beautiful animations mean nothing if the site is slow. Optimize images, use CSS animations where possible, and test on real devices.

4. **Iterate Based on Use**: This guide establishes the foundation. Adjust based on how users actually interact with the product.

5. **Whitespace is Strategic**: Empty space is not wasted space. It guides the eye and reduces cognitive load.

---

## Related Documentation

This guide focuses on **visual design** (colors, typography, layout, animations). For **copy and messaging**, see:

- **[Messaging Style Guide](./MESSAGING-STYLE-GUIDE.md)** — Voice, tone, error messages, success states, form copy, notifications
