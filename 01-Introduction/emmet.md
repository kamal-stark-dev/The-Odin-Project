# ⚡ Emmet Cheat Sheet — Write HTML & CSS at Warp Speed

**Emmet** (built into Visual Studio Code) is a powerful toolkit that lets you write HTML and CSS faster using smart abbreviations.

---

## 🚀 HTML Shortcuts

### 1. Boilerplate

Type `!` → Generates a full HTML5 boilerplate instantly.

---

### 2. Basic Tags

`tag_name`
→ Example: `div`
→ Output:

```html
<div></div>
```

---

### 3. Classes & IDs

- `tag.class` → `<tag class="class"></tag>`
- `tag#id` → `<tag id="id"></tag>`
- Combine them:

  ```bash
  span.heading
  img#profile_img
  ```

💡 Tip: Just use `.class` → defaults to `<div>`.

---

### 4. Nesting (Children)

Use `>` to create child elements:

```bash
div>p.description
```

```html
<div>
  <p class="description"></p>
</div>
```

---

### 5. Multiplication

Use `*` to repeat elements:

```bash
p*3
```

```html
<p></p>
<p></p>
<p></p>
```

Example:

```bash
header>nav>ul>li*4
```

---

### 6. Text Content

Use `{}` to add text:

```bash
p{Hello, world!}
```

```html
<p>Hello, world!</p>
```

---

### 7. Numbering

Use `$` for incremental values:

```bash
ul>li*3{List Item $}
```

```html
<ul>
  <li>List Item 1</li>
  <li>List Item 2</li>
  <li>List Item 3</li>
</ul>
```

Advanced:

```bash
ul>li*3.class-${List Item $}
```

---

### 8. Siblings

Use `+` to create elements at the same level:

```bash
main>.left+.right
```

```html
<main>
  <div class="left"></div>
  <div class="right"></div>
</main>
```

Grouping:

```bash
(header>nav)+main+footer
```

---

## 🎯 CSS Shortcuts

Emmet also speeds up CSS:

- `bgc` → `background-color`
- `pos:r` → `position: relative`
- `d:f` → `display: flex`

💡 Just type initials and pick from suggestions.

---

## 🧠 Practice Challenges

If you can understand these, you're basically fluent in Emmet:

### 🔹 Example 1

```bash
(header>h1{Heading}+nav>ol>li*4>a{Link $})+main+footer
```

### 🔹 Example 2

```bash
form:post>(.group>label+input:text)+(.group>label+input:password)
```

---

## 📚 Resources

- 🎥 [Learn Emmet in 15 Minutes](https://www.youtube.com/watch?v=V8vizNQKtx0)
- 📄 [Official Emmet Cheat Sheet](https://docs.emmet.io/cheat-sheet/)

---

## 💡 Final Tip

Once you get comfortable, you’ll stop “writing” HTML and start **generating it** — and that’s when things get fun 😏
