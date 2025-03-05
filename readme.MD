# Django and Wagtail Project Guide

## Introduction

This guide provides an overview of setting up a Django project with Wagtail CMS, creating apps, configuring `INSTALLED_APPS`, mapping URLs, creating a navigation system, and other basic fundamentals for using Django and Wagtail.

<<<<<<< Updated upstream
The project is currently in progres. I added my assignment version to GitHub. Starting from November 12, 2024, I will focus on improving the project by:

   - Refactoring my code
   - Improving the UX and UI
   - Adding Node.js for back end
=======
---

## Prerequisites
>>>>>>> Stashed changes

Before starting, ensure you have the following:

- Python (3.8+ recommended)
- pip or pipenv for managing Python packages
- Virtual environment tool (optional but recommended)

---

## Setting Up a Wagtail Project

### 1. Install Django and Wagtail

```bash
pip install django wagtail
```

### 2. Create a Wagtail Project

Run the following command to start a new Wagtail project:

```bash
wagtail start mysite
```

Navigate into the project directory:

```bash
cd mysite
```

### 3. Install Dependencies and Initialize the Database

Install additional dependencies if needed and set up the database:

```bash
pip install -r requirements.txt
python manage.py migrate
```

### 4. Create a Superuser

Create an admin account to access the Wagtail CMS:

```bash
python manage.py createsuperuser
```

### 5. Run the Development Server

Start the server to see your project in action:

```bash
python manage.py runserver
```

Visit `http://127.0.0.1:8000/cms` to access the Wagtail admin interface.

---

## Creating an App

Django apps are modular components of your project. To create an app:

1. Use the `startapp` command:

```bash
python manage.py startapp myapp
```

2. Add the app to the `INSTALLED_APPS` array in `settings.py`:

```python
INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'myapp',  # Add your app here
]
```

3. Set up any models, views, or templates as needed for the app.

---

## Mapping URLs

### Project-Level URLs

1. In the `urls.py` file of your project, you can include app-level URLs using `include`:

```python
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('myapp/', include('myapp.urls')),
]
```

### App-Level URLs

2. In your app folder, create a `urls.py` file:

```python
from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),  # Example route
]
```

### Connect Wagtail URLs

Add Wagtail’s routes to the main `urls.py`:

```python
from django.contrib import admin
from django.urls import path, include
from wagtail.admin import urls as wagtailadmin_urls
from wagtail.documents import urls as wagtaildocs_urls
from wagtail.core import urls as wagtail_urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('cms/', include(wagtailadmin_urls)),
    path('documents/', include(wagtaildocs_urls)),
    path('', include(wagtail_urls)),
]
```

---

## Creating a Navigation System

A dynamic navigation system in Wagtail can be built using custom templates and Page models.

### 1. Create a Template Tag for Navigation

In your app folder, create a folder called `templatetags` with an `__init__.py` file and a `navigation_tags.py` file:

```python
# myapp/templatetags/navigation_tags.py
from django import template
from wagtail.core.models import Page

register = template.Library()

@register.inclusion_tag('navigation.html')
def navigation_menu():
    pages = Page.objects.live().public()
    return {'pages': pages}
```

### 2. Create the Navigation Template

In your templates folder, create a `navigation.html` file:

```html
<ul>
  {% for page in pages %}
  <li><a href="{{ page.url }}">{{ page.title }}</a></li>
  {% endfor %}
</ul>
```

### 3. Include the Navigation in Base Template

In your base template, include the navigation menu:

```html
{% load navigation_tags %}

<body>
  {% navigation_menu %}
  <!-- Other content -->
</body>
```

### 4. Customizing Navigation (Optional)

If you need more control, you can filter pages by specific criteria (e.g., parent page, page type) in the `navigation_tags.py` file.

---

## Running the Project

1. Apply migrations:

```bash
python manage.py migrate
```

2. Create a superuser (admin account):

```bash
python manage.py createsuperuser
```

3. Start the development server:

```bash
python manage.py runserver
```

4. Visit `http://127.0.0.1:8000/cms` to access the Wagtail admin.

---

## Wagtail Basics

### Wagtail Models

In Wagtail, content is managed through Page models. Here’s a basic example of creating a Page model:

```python
from wagtail.core.models import Page
from wagtail.admin.edit_handlers import FieldPanel

class HomePage(Page):
    intro = models.CharField(max_length=255)

    content_panels = Page.content_panels + [
        FieldPanel('intro'),
    ]
```

### Wagtail Admin

Access Wagtail’s admin at `/cms`. From here, you can:

- Add or edit pages
- Manage media and documents

---

## Additional Notes

- Use the `wagtail start` command for creating new Wagtail-based apps.
- Refer to [Django documentation](https://docs.djangoproject.com/en/stable/) and [Wagtail documentation](https://docs.wagtail.org/en/stable/) for more advanced usage and customization.
