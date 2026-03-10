# InkFlow - Enhanced Typography Features

## 🎨 Comprehensive Font Support

InkFlow now includes extensive font support with 25+ professional fonts and all standard sizes.

### Available Fonts

#### Serif Fonts (Traditional, Formal)
- **Georgia** - Elegant and readable
- **Times New Roman** - Classic newspaper style
- **Garamond** - Sophisticated, historical
- **Palatino** - Elegant, proportional
- **Cambria** - Modern serif
- **Bookman** - Bold serif
- **Century Schoolbook** - Educational style
- **Perpetua** - Classical style

#### Sans-Serif Fonts (Modern, Clean)
- **Arial** - Universal sans-serif
- **Helvetica** - International standard
- **Verdana** - Screen optimized
- **Calibri** - Microsoft Word default
- **Trebuchet MS** - Modern, friendly
- **Century Gothic** - Futuristic
- **Comic Sans MS** - Casual, friendly

#### Monospace Fonts (Code, Technical)
- **Courier New** - Classic monospace
- **Consolas** - Modern, clear
- **Lucida Console** - Technical, precise

#### Decorative Fonts
- **Impact** - Bold, dramatic headlines
- **Lucida Handwriting** - Elegant cursive style

### How to Use Fonts

1. **Select text** in your document
2. Click the **Font dropdown** in the toolbar
3. Choose your desired font
4. Your text will update immediately

---

## 📏 Complete Font Sizing

### Available Sizes

| Size | Pixels | Best For |
|------|--------|----------|
| Extra Small | 8-10px | Footnotes, annotations |
| Small | 12-14px | Body text, standard |
| Normal | 16-20px | Main text, readable |
| Large | 22-28px | Headings, emphasis |
| Extra Large | 32-72px | Titles, headers |
| Massive | 96px | Poster text |

### Quick Size Selection

Use the **Quick Sizes** panel on the right sidebar for instant size changes:
- **Small 12px** - Compact text
- **Normal 16px** - Standard reading size
- **Large 20px** - Emphasis text
- **XLarge 24px** - Section headers
- **Title 32px** - Document title

### Custom Sizes

For exact control:
1. Select text
2. Click **Size dropdown** in toolbar
3. Choose specific size (8px to 96px)
4. Preview updates instantly

---

## 🔢 Roman Numeral Support

### What Are Roman Numerals?

Roman numerals are a numeral system originated in ancient Rome using letters:
- **I** = 1
- **V** = 5
- **X** = 10
- **L** = 50
- **C** = 100
- **D** = 500
- **M** = 1000

### Using Roman Numerals

#### Method 1: Roman Numeral Converter

1. Look for **Roman Numerals** section in right sidebar
2. Click **Show Converter** button
3. Enter a number (e.g., 5):
   - **→ Roman** converts 5 to **V**
   - **→ Number** converts X to **10**
4. Result appears below
5. Click **Copy** or it's inserted into document

#### Method 2: Quick Presets

Click any preseen Roman numeral from the list:
- **Uppercase**: I, II, III, IV, V, VI, VII, VIII, IX, X... XX
- **Lowercase**: i, ii, iii, iv, v, vi, vii, viii, ix, x... xx

#### Method 3: Manual Entry

Type Roman numerals directly:
- **V** for 5
- **X** for 10
- **XV** for 15
- **XL** for 40
- **MCMXC** for 1990

### Common Uses for Roman Numerals

1. **Outlines**: 
   - I. First point
   - II. Second point
   - III. Third point

2. **Chapter Numbers**: Chapter VI, Chapter XII

3. **Page Numbers**: Front matter uses i, ii, iii, iv, v...

4. **Lists**: Formal documents, academic papers

5. **Dates**: Year MMXXVI (2026)

### Conversion Examples

| Arabic | Roman | Usage |
|--------|-------|-------|
| 1 | I | Chapter I |
| 5 | V | Section V |
| 10 | X | Part X |
| 50 | L | Volume L |
| 100 | C | Century C |
| 500 | D | Division D |
| 1000 | M | Millennium M |
| 2026 | MMXXVI | Year MMXXVI |

---

## 🎯 Formatting Examples

### Example 1: Professional Report

**Title (72px, Times New Roman)**: Annual Report 2026

**Heading (28px, Calibri, Bold)**: Executive Summary

**Body (16px, Calibri)**: This report presents...

**Subheading (20px, Calibri, Bold)**: Key Findings

1. First finding (using I. Roman numeral)
2. Second finding (using II. Roman numeral)

### Example 2: Formal Letter

**Date (14px, Georgia)**: March 10, 2026

**Salutation (16px, Georgia)**: Dear Sir/Madam,

**Body (14px, Georgia)**: I am writing to...

**Closing (14px, Georgia)**: Sincerely,

### Example 3: Academic Paper

**Title (36px, Cambria, Bold)**: Research on Typography

**Chapter I (24px, Cambria, Bold)**: Introduction

**Section 1.1 (18px, Cambria, Bold)**: Background

**Body (16px, Cambria)**: The study shows...

---

## 💡 Pro Tips

### Font Pairing

**Good combinations:**
- Serif for body + Sans-serif for headings
- Georgia + Calibri
- Cambria + Arial
- Times New Roman + Helvetica

### Readability Guidelines

- **Body text**: 14-18px minimum
- **Headlines**: 24px and above
- **Serif fonts**: Better for print
- **Sans-serif**: Better for screens

### Roman Numeral Best Practices

- Use **uppercase** for formal documents
- Use **lowercase** for outlines (i, ii, iii...)
- Combine with Arabic numbers for clarity: "Chapter 5 (V)"
- Don't mix Roman and Arabic in same list

### Accessibility

- Minimum 14px for comfortable reading
- High contrast between text and background
- Avoid decorative fonts for body text
- Test documents on multiple devices

---

## 🚀 Keyboard Shortcuts

While in the editor:
- **Bold**: Ctrl+B
- **Italic**: Ctrl+I
- **Underline**: Ctrl+U
- **Strikethrough**: (varies by browser)

---

## 🔧 Customization

### Changing Default Font

Modify the CSS in `Editor.css`:
```css
.ql-editor {
  font-family: 'Your Font', fallback, sans-serif;
}
```

### Adding Custom Fonts

1. Add font via CSS @import or Google Fonts
2. Add to font dropdown array in modules
3. Add CSS styling for preview

---

## 📚 More Resources

- [Font Pairing Guide](https://www.fontpair.co/)
- [Roman Numeral Generator](https://www.romannumerals.org/)
- [Typography Best Practices](https://practicaltypography.com/)
- [Web Font Guide](https://fonts.google.com/)

---

## ❓ FAQ

**Q: Can I use custom fonts?**  
A: Yes! You can add custom fonts via CSS @import (Google Fonts, etc.)

**Q: Are Roman numerals supported in lists?**  
A: Currently you can insert them manually. Automatic list formatting coming soon.

**Q: What's the largest font size?**  
A: 96px (can be extended in settings if needed)

**Q: Can I save different font preferences?**  
A: Font formatting saves with your document automatically

**Q: Are all fonts available on all devices?**  
A: Fonts included are web-safe and should display on all devices

---

## 🎉 Features Summary

✅ 25+ Professional Fonts  
✅ Font sizes from 8px to 96px  
✅ Roman numeral converter  
✅ Quick size presets  
✅ Comprehensive toolbar  
✅ Live font preview  
✅ Mobile responsive  

---

**Happy writing with all your font options! 📝✨**
