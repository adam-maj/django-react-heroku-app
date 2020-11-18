# django-react-heroku-app
A better django-react-heroku-template with full instructions and fully setup auth, better url routing with react app, and dev configuration.

# Features
1. Fully setup token authentication backend
2. Configured login, logout, and register frontend views
3. App wide notification system
4. Custom styled component library
5. Independent react side routing
6. React lazy loading for large apps configured
7. Backend configuration completely ready to go
8. Production and development environments configured

# Heroku/Git Setup & Deployment Instructions
1. Create a new heroku app on the [heroku dashboard](https://dashboard.heroku.com)
2. Add heroku domain to allowed hosts in settings.py line 13
2. Add "heroku postgres" to the apps add-ons
3. Go to the deploy tab and select "GitHub" as the deployment method, then connect it to the intended repo
4. Go to settings and add both "heroku/nodejs" and "heroku/python" to the buildpacks. Make sure the nodejs buildpack comes first (otherwise django will try to collectstatic before react has run build).
5. Configure necessary environment variables. To get and setup a secret key, set the 'DJANGO_SECRET_KEY' environment variable to a key generated at this [django secret key generator](https://djecrety.ir/). Set 'DJANGO_DEBUG' to 'False' (this turns of the development environment).
6. Go to deploy tab and click "deploy branch" in the manual deploy section
7. If you want to turn on auto deploy (your code will deploy to heroku whenever you push to the GitHub repo), you can enable automatic deploys on the deploy tab
8. Change domain in settings.py line 9 and line 109 to proper heroku domain (line 9 is technically done automatically by django heroku, but its helpful to see)

# Development Environment
1. To run the local development environment, run the command "bash rundev.sh"
2. Visit localhost to see your site

# Setup routes
All routes not specified in backend/urls.py automatically lead to the react app, so you can configure routes with react router alone (no need to setup up urls in django router).
1. Add a react route component to the App.js file with a "path" prop equal to the url path of the component.
2. Place the component at that url route inside the path

# Change App Name
1. Change name of backend folder
2. Change any instance of "backend" to your project name in the following areas (use CTRL or CMD + F to find):
    1. backend/asgi.py (Line 14)
    2. backend/wsgi.py (Line 14)
    3. backend/settings.py (Line 34, Line 52)
    4. manage.py (Line 9)
    5. Heroku Procfile line 2

# Django Heroku Configuration Details (Explanation)
([django_heroku documentation](https://pypi.org/project/django-heroku/))
1. Django heroku configures the database to connect with heroku postgres. This means that the database config in settings.py is only used in development mode (when running the server on localhost), but isn't used in production.
2. Django heroku also sets up secret key, allowed_hosts, and static files automatically, but the configuration is left just to see it.

# Other Configuration Details (Explanation)
1. package.json, package-lock.json, and requirements.txt are all in the root directory. Heroku will automatically look for these files there to install the dependencies.
2. Procfile runs the Django wsgi file with gunicorn (this tells Heroku how to run the Django server).
3. React app "src" and "public" folders are in the root directory (not inside another react app folder) - this is so Heroku can see them, because it looks for these folders in the root directory.
