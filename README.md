# Innerwear Store - Full-Stack Product Listing Page

**Repository**: https://github.com/abhishekbanglr2511-max/Shopping_website_demo  
**(Monorepo containing both Frontend and Backend)**

This is a complete full-stack implementation of the **Developer Test Assignment** for a responsive Product Listing Page focused on **Clothing-Innerwear**.

The project is structured as a monorepo with:
- **Frontend**: React (in `/public` and `/src`)
- **Backend**: Django + Django REST Framework + SQLite (in `/backend` and `/products`)

## Features Implemented

### Required
- Display 6+ products with real images, name, price, short description, and "Add to Cart" button
- Add to Cart functionality with live cart count in header
- Sort by price (Low to High / High to Low)
- Filter by category (Men / Women / Kids) 
- Fully responsive design for mobile and desktop

### Bonus (All Implemented)
- Search functionality by product name
- Clean and modern UI with subtle fade-in animations
- API integration (React consumes Django REST API)
- Dedicated Cart page showing items, quantity, subtotal, GST (18%), and total price
- Proper folder structure and clean code organization

## Tech Stack
- **Frontend**: React, Axios, Custom CSS
- **Backend**: Python + Django + Django REST Framework
- **Database**: SQLite (lightweight, zero-setup, persistent via `db.sqlite3`)
- **Version Control**: GitHub

## Project Structure

```
innerware-store/
├── backend/                  # Django project configuration
│   ├── settings.py
│   ├── urls.py
│   └── products/             # Django app
│       ├── models.py
│       ├── views.py
│       ├── serializers.py
│       └── urls.py
├── public/                   # React public assets
│   └── index.html
├── src/                      # React source code
│   ├── components/           # Reusable components
│   │   ├── Header.js
│   │   ├── Product.js
│   │   ├── ProductList.js
│   │   └── Cart.js
│   ├── App.js                # Main App component
│   ├── App.css               # Global styles
│   └── index.js              # React entry point
├── venv/                     # Virtual environment
├── db.sqlite3                # SQLite database
├── manage.py                 # Django management script
├── package.json              # React dependencies
├── requirements.txt          # Python dependencies
├── .gitignore
└── README.md
```
