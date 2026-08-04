# Priority Task Scheduler - Design Specification

## Overview

This document outlines the complete design specification for the Priority Task Scheduler UI component. It includes layout guidelines, color palette, component details, typography, spacing, responsiveness, and interaction patterns.

---

## Table of Contents

1. [Color Palette](#color-palette)
2. [Layout Structure](#layout-structure)
3. [Component Details](#component-details)
4. [Typography](#typography)
5. [Spacing & Sizing](#spacing--sizing)
6. [Mobile Responsiveness](#mobile-responsiveness)
7. [Interaction & Micro-interactions](#interaction--micro-interactions)
8. [Key Design Principles](#key-design-principles)

---

## Color Palette

| Priority | Color | Hex Code | Usage |
|----------|-------|----------|-------|
| **High** | Red | #E63946 | Left border on task cards, status indicators |
| **Medium** | Amber | #F77F00 | Left border on task cards, status indicators |
| **Low** | Teal | #06A77D | Left border on task cards, status indicators |
| **Background** | Light Gray | #F8F9FA | Page background |
| **Card Surface** | White | #FFFFFF | Task cards, input boxes |
| **Text Primary** | Dark Gray | #1F2937 | Headings, task names |
| **Text Secondary** | Medium Gray | #6B7280 | Labels, descriptions |
| **Borders** | Light Gray | #E5E7EB | Card outlines, dividers |

---

## Layout Structure

### Vertical Stack Arrangement

The Priority Task Scheduler uses a **vertical stack arrangement** (different from side-by-side) to maximize mobile responsiveness and readability:

1. **Input Section** - Located at the top
   - Task name input field
   - Priority dropdown
   - Add button

2. **Filter Dropdown** - Below inputs
   - Filter by priority level

3. **Priority Sections** - Stacked vertically below filter
   - High Priority section (top)
   - Medium Priority section (middle)
   - Low Priority section (bottom)

---

## Component Details

### A. Input Section (Top of Page)

#### Task Name Input Field
- **Placeholder Text**: "Enter task name..."
- **Background**: White (#FFFFFF)
- **Border**: Light gray (#E5E7EB), 0.5px or 1px
- **Border Radius**: 6px
- **Height**: 40px
- **Width**: ~55% on desktop
- **Font Size**: 14px
- **Text Color**: Dark gray (#1F2937)

#### Priority Dropdown
- **Label**: "Priority"
- **Options**: High, Medium, Low
- **Default Selection**: High
- **Background**: White (#FFFFFF)
- **Border**: Light gray (#E5E7EB), 0.5px or 1px
- **Border Radius**: 6px
- **Height**: 40px
- **Width**: ~20% on desktop
- **Font Size**: 14px
- **Styling**: Same as input field

#### Add Button
- **Text**: "Add Task"
- **Background**: Blue (#3B82F6)
- **Text Color**: White (#FFFFFF)
- **Border**: None
- **Border Radius**: 6px
- **Height**: 40px
- **Width**: ~15% on desktop
- **Font Weight**: 500 (medium)
- **Font Size**: 14px
- **Hover State**: Slightly darker blue
- **Active State**: Subtle scale change (scale 0.98)
- **Click Action**: Adds task to appropriate priority section
- **Cursor**: Pointer

### B. Filter Dropdown (Below Inputs)

- **Label**: "Filter by priority"
- **Options**: All, High, Medium, Low
- **Default**: All
- **Background**: White (#FFFFFF)
- **Border**: Light gray (#E5E7EB), 0.5px or 1px
- **Border Radius**: 6px
- **Height**: 36px
- **Font Size**: 14px
- **Width**: ~150px

**Behavior**:
- When "All" is selected: Shows all priority sections
- When specific priority selected: Hides non-selected priority sections
- Smooth transition when sections appear/disappear

### C. Priority Sections (Main Content Area)

Each priority level (High, Medium, Low) has its own section.

#### Section Header
- **Text Format**: "[Priority] Priority" (e.g., "High Priority", "Medium Priority", "Low Priority")
- **Font Weight**: 500 (medium)
- **Font Size**: 16px
- **Color**: Dark gray (#1F2937)
- **Margin Bottom**: 16px

### D. Task Cards

Each task appears as a card containing the following elements:

#### Left Border Accent
- **Width**: 2-3px
- **Color**: Matches priority level
  - High: #E63946 (Red)
  - Medium: #F77F00 (Amber)
  - Low: #06A77D (Teal)
- **Height**: Full height of card
- **Border Radius**: Rounded corners only on full card (not border itself)

#### Task Name
- **Font Weight**: 500 (medium)
- **Font Size**: 15px
- **Color**: Dark gray (#1F2937)
- **Line Height**: 1.4
- **Margin Bottom**: 8px

#### Task Description
- **Font Weight**: 400 (regular)
- **Font Size**: 13px
- **Color**: Medium gray (#6B7280)
- **Line Height**: 1.5
- **Margin Bottom**: 0
- **Position**: Below task name

#### Delete Button
- **Icon**: × (multiplication sign) or trash icon
- **Position**: Right side of card
- **Width**: ~36px (diameter)
- **Height**: ~36px (diameter)
- **Border Radius**: 50% (circular)
- **Background**: Soft colored circle (priority color with low opacity, ~20%)
  - High Priority: #E63946 with 20% opacity = rgba(230, 57, 70, 0.2)
  - Medium Priority: #F77F00 with 20% opacity = rgba(247, 127, 0, 0.2)
  - Low Priority: #06A77D with 20% opacity = rgba(6, 168, 125, 0.2)
- **Icon Color**: Matches priority color (full opacity)
- **Border**: None
- **Display**: Always visible (not hidden until hover)
- **Hover State**: Slightly darker background, tooltip shows "Delete task"
- **Cursor**: Pointer
- **Vertical Alignment**: Centered in card

#### Card Styling
- **Background**: White (#FFFFFF)
- **Border**: Light gray (#E5E7EB), 0.5px or 1px
- **Border Radius**: 8px
- **Padding**: 16px all sides
- **Spacing Between Cards**: 12px
- **Minimum Height**: ~90px (for standard task with name + description)
- **Height**: Flexible based on content
- **Display**: Flex container with space-between for horizontal layout
- **Hover State**: Subtle shadow or very light background change

### E. Empty State (When Priority Section Has No Tasks)

When a priority section contains no tasks, display an empty state:

- **Container**: 
  - Border: Light dashed (#E5E7EB)
  - Border Radius: 8px
  - Padding: 40px 20px
  - Background: White (#FFFFFF) with very subtle tint

- **Heading**:
  - Text: "No tasks yet"
  - Font Weight**: 500
  - Font Size**: 15px
  - Color**: Light gray (#9CA3AF)
  - Text Align**: Center

- **Sub-text**:
  - Text: "Add a task above and set priority to see it here"
  - Font Weight**: 400
  - Font Size**: 13px
  - Color**: Very light gray (#D1D5DB)
  - Text Align**: Center
  - Margin Top**: 8px

- **Tone**: Inviting and helpful, not apologetic or sad

---

## Typography

### Font Family
- **Primary Font**: Clean sans-serif (Inter, -apple-system, BlinkMacSystemFont, Segoe UI, or system default)
- **Fallback**: System default sans-serif

### Font Sizes & Weights

| Element | Font Size | Font Weight | Color |
|---------|-----------|-------------|-------|
| **Page Title** | 28px | 500 | Dark gray (#1F2937) |
| **Section Headers** | 16px | 500 | Dark gray (#1F2937) |
| **Labels** | 13px | 400 | Medium gray (#6B7280) |
| **Task Name** | 15px | 500 | Dark gray (#1F2937) |
| **Task Description** | 13px | 400 | Medium gray (#6B7280) |
| **Button Text** | 14px | 500 | White (#FFFFFF) |
| **Input Text** | 14px | 400 | Dark gray (#1F2937) |
| **Placeholder Text** | 14px | 400 | Light gray (#9CA3AF) |
| **Empty State Heading** | 15px | 500 | Light gray (#9CA3AF) |
| **Empty State Sub-text** | 13px | 400 | Very light gray (#D1D5DB) |

### Font Weights Used
- **400** = Regular text
- **500** = Medium (task names, section headers, button text, labels)

---

## Spacing & Sizing

### Page Padding
- **Desktop**: 40px from edges
- **Tablet**: 32px from edges
- **Mobile**: 16px from edges

### Component Spacing

| Component | Spacing | Notes |
|-----------|---------|-------|
| **Card Internal Padding** | 16px (all sides) | Space inside cards |
| **Gap Between Cards** | 12px | Vertical space between task cards |
| **Section Gap** | 40px | Vertical space between priority sections |
| **Input Section Height** | 120px | Container for inputs |
| **Card Minimum Height** | 90px | For standard task with name + description |
| **Button Height** | 40px | All buttons |
| **Dropdown Height** | 36px | Filter dropdown |
| **Delete Button** | 36px diameter | Circular button |
| **Margin Between Label & Input** | 8px | Vertical space between labels and inputs |

### Responsive Breakpoints

| Device | Width | Column Layout |
|--------|-------|---------------|
| **Mobile** | < 768px | Single column (100% width) |
| **Tablet** | 768px - 1024px | Single column (90% width with centered padding) |
| **Desktop** | > 1024px | Single column (680px width) |

---

## Mobile Responsiveness

### Input Section (< 768px width)

- **Layout**: Stack vertically
- **Task Name Input**: 100% width
- **Priority Dropdown**: 100% width (positioned below task name)
- **Add Button**: 100% width (positioned below priority dropdown)
- **Gap Between Elements**: 12px
- **All Styling**: Same as desktop version

### Filter Dropdown (< 768px width)

- **Width**: 100%
- **Layout**: Remains unchanged
- **Behavior**: Same as desktop

### Priority Sections (< 768px width)

- **Layout**: Stack vertically, full width
- **Spacing**: All spacing remains consistent with desktop
- **Cards**: Adapt to 100% width
- **Delete Button**: Stays on right side (horizontally centered within circular container)
- **Section Headers**: Same styling as desktop

### Typography (< 768px width)

- **Section Headers**: 15px (reduced from 16px)
- **Task Names**: 14px (reduced from 15px)
- **Other Text**: Remains same size for readability

### Page Padding (< 768px width)

- **Padding**: 16px from edges
- **Internal Spacing**: Remains consistent

---

## Interaction & Micro-interactions

### Add Button
- **Hover State**: Slightly darker blue (#2563EB or similar)
- **Active State**: Scale down to 0.98
- **Click Feedback**: Subtle visual response
- **Disabled State** (if applicable): Grayed out, cursor not-allowed

### Delete Button
- **Hover State**: Background becomes more opaque (from 20% to 35-40% opacity)
- **Tooltip**: Shows "Delete task" on hover (optional but recommended)
- **Click Action**: Removes task from board with smooth fade-out
- **Visual Feedback**: Icon color intensifies on hover

### Filter Dropdown
- **Click**: Opens dropdown menu
- **Selection**: Smooth transition when hiding/showing sections
- **Transition Duration**: ~200ms fade or slide
- **Hover State**: Subtle background change

### Task Cards
- **Hover State**: 
  - Subtle shadow appears (optional)
  - Or very light background change
  - Or slight lift effect
- **Duration**: ~150ms smooth transition
- **Cursor**: Pointer on hoverable areas

### Empty States
- **Animation**: Fade in when section becomes empty (optional)
- **Tone**: Inviting, helpful, not sad or apologetic
- **CTA Implied**: "Add a task above" in text should feel like a clear call-to-action

### Focus States (Keyboard Navigation)
- **Inputs**: Blue outline on focus (2px, #3B82F6)
- **Buttons**: Same blue outline
- **Delete Button**: Clear focus ring for accessibility

---

## Key Design Principles

### ✓ Clarity
- Color-coded priority levels are instantly recognizable
- Clear visual hierarchy guides user flow
- Each section has distinct, easy-to-scan layout

### ✓ Simplicity
- Only essential elements visible
- No unnecessary visual clutter
- Clean white cards on light gray background
- Minimal decorations

### ✓ Functionality
- Delete button always accessible and visible
- No hidden interactions or surprise elements
- Input section is prominent and easy to find
- Filter dropdown is convenient and obvious

### ✓ Hierarchy
- Clear visual flow: Inputs → Filter → Tasks
- Section headers guide user through priorities
- Card styling emphasizes task information

### ✓ Responsiveness
- Works seamlessly from mobile (320px) to desktop (1920px+)
- Touch-friendly button sizes on mobile
- Readable text at all breakpoints
- Flexible spacing adapts to screen size

### ✓ Consistency
- All cards follow identical styling rules
- All sections use same layout principles
- Color usage is predictable and consistent
- Typography scale is proportional

### ✓ Accessibility
- Good contrast ratios (WCAG AA compliant)
- Readable text sizes (minimum 13px)
- Touch targets are at least 36px diameter
- Keyboard navigation support
- Clear focus states

### ✓ Modern but Simple
- Clean, flat design (no gradients or heavy shadows)
- Rounded corners for approachability (6-8px)
- Subtle interactions, not overwhelming
- Professional yet friendly aesthetic
- Serves functionality first, looks good second

---

## Implementation Notes

### For Developers

1. **Color Variables**: Use CSS custom properties for all colors to enable easy theme switching
2. **Responsive Grid**: Use `flex` or `grid` for responsive layouts
3. **Smooth Transitions**: Use `transition: all 0.15s ease-out` for micro-interactions
4. **Touch Targets**: Ensure all clickable elements are at least 44px x 44px on mobile
5. **Accessibility**: Include proper ARIA labels and semantic HTML
6. **Performance**: Optimize animations to reduce layout thrashing

### Suggested Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Flexbox/Grid, CSS variables, media queries
- **JavaScript**: Event delegation, DOM manipulation (or React/Vue for component management)

---

## Additional Notes

- This design is optimized for light mode. Dark mode support should follow similar color principles with inverted contrast.
- All measurements are in pixels (px) for precision, except padding which uses rem units for scalability.
- The design prioritizes usability over aesthetics without sacrificing visual appeal.
- Empty states should feel inviting rather than punitive or sad.

---

**Document Version**: 1.0  
**Last Updated**: August 2026  
**Status**: Ready for Implementation
