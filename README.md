# The Daily Brew ☕

The Daily Brew is a responsive coffee shop website created as part of a web development project. The website presents a fictional coffee shop where users can view the menu, learn more about the coffee shop, browse a gallery, and get in touch through the contact section.

The design uses warm coffee-inspired colours, large photography, responsive layouts, and simple interactive effects to create a modern café-style experience.

## Features

- Responsive navigation bar
- Sticky header that remains visible while scrolling
- Hero section with a featured coffee image
- Coffee and food menu
- About section with café information and statistics
- Image gallery
- Contact form
- Hover effects on buttons, menu cards and gallery images
- Responsive layout for tablets and mobile devices
- JavaScript functionality for interactive website features

## Website Sections

### Home

The home section introduces The Daily Brew with a large hero area containing the main heading, supporting text, date information and a featured coffee image.

### Menu

The menu displays the coffee shop's available drinks and food items in a card-based layout.

The menu currently includes items such as:

- Espresso
- Cappuccino
- Latte
- Croissant

Each menu item contains an image, name and price.

### About

The About section provides information about The Daily Brew and includes an image and statistics about the coffee shop.

### Gallery

The gallery displays photographs related to the coffee shop, including coffee, pastries, coffee beans and the café interior.

### Contact

The contact section provides a form that allows visitors to enter their details and send a message.

## Technologies Used

The website was developed using:

- **HTML5** – Used to create the structure and content of the website.
- **CSS3** – Used for the layout, colours, typography, responsive design and animations.
- **JavaScript** – Used to add interactive functionality to the website.
- **Google Fonts** – Used for the website typography.
- **Git & GitHub** – Used for version control and storing the project.

## CSS Features

The stylesheet makes use of several CSS concepts, including:

### Flexbox

Flexbox is used for layouts such as the header, navigation and hero section.

### CSS Grid

CSS Grid is used to arrange the menu cards and gallery images into columns.

### Hover Effects

Hover effects are used on buttons, menu cards and gallery images to make the website feel more interactive.

### Responsive Design

Media queries are used to change the layout depending on the size of the screen.

For example, the menu changes from four columns on a large screen to two columns on a tablet and one column on a mobile phone.

```css
@media screen and (max-width: 768px) {
    .menu-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}
```

On smaller mobile screens, the layout changes to a single column.

```css
@media screen and (max-width: 480px) {
    .menu-grid {
        grid-template-columns: 1fr;
    }
}
```

### Sticky Navigation

The header uses:

```css
position: sticky;
top: 0;
```

This keeps the navigation bar visible at the top of the screen when the user scrolls down the page.

## Project Structure

A typical project structure is:

```text
The-Daily-Brew/
│
├── index.html
├── menu.html
├── about.html
├── gallery.html
├── contact.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
├── images/
│   ├── espresso.jpg
│   ├── cappuccino.jpg
│   ├── latte.jpg
│   ├── croissant.jpg
│   ├── about.jpg
│   ├── gallery1.jpg
│   ├── gallery2.jpg
│   ├── gallery3.jpg
│   └── gallery4.jpg
│
└── README.md
```

## Images

The website uses coffee-themed images throughout the different sections.

The main images include:

- `espresso.jpg` – Espresso
- `cappuccino.jpg` – Cappuccino
- `latte.jpg` – Latte
- `croissant.jpg` – Croissant
- `about.jpg` – About section
- `sunlitcafé.jpg` – Coffee preparation
- `gallery2.jpg` – Café and coffee
- `gallery3.jpg` – Coffee and pastries
- `gallery4.jpg` – Café interior

All images should be stored in the project's `images` folder and referenced using the correct relative path.

## Running the Website

No special installation is required to view the website.

1. Download or clone the project.
2. Open the project folder.
3. Open `index.html` in a web browser.

For development, the project can also be opened using **Visual Studio Code** with the Live Server extension.

## Git Version Control

Git is used to keep track of changes made during development.

A commit should describe the change that was made. For example:

```bash
git add index.html
git commit -m "Add homepage structure"
```

As the project develops, commits can be made for individual features or groups of related changes.

Examples:

```text
Add navigation bar
Add coffee menu cards
Add responsive gallery
Add contact form
Add mobile styling
Add JavaScript form validation
```

A clear commit history makes it easier to see how the website was developed over time.

## Responsive Design

The website is designed to work across different screen sizes.

### Desktop

- Four menu columns
- Four gallery columns
- Horizontal navigation
- Hero content and image displayed beside each other

### Tablet

- Two menu columns
- Two gallery columns
- Navigation can wrap when necessary
- Hero content becomes vertically stacked

### Mobile

- One menu item per row
- One gallery image per row
- Header content is stacked
- Smaller heading sizes are used
- Statistics are displayed vertically

## Colour Scheme

The website uses a warm coffee-inspired colour palette.

| Colour | Purpose |
|---|---|
| `#2c1810` | Dark coffee brown |
| `#4a2c1a` | Medium brown |
| `#6b3f2a` | Warm brown |
| `#d4a373` | Coffee/golden accent |
| `#f8f6f3` | Light background |
| `white` | Cards and content areas |

## Project Goal

The goal of The Daily Brew is to demonstrate the use of HTML, CSS and JavaScript to create a complete, responsive multi-page website.

The project demonstrates:

- Website structure
- Navigation
- Responsive design
- CSS Flexbox
- CSS Grid
- Forms
- Images
- Typography
- Hover effects
- JavaScript interaction
- Git version control

## Author

**Hiren Thulasaie**

Web Development Project
