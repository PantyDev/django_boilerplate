**Hello! I'm new to learning Python.**<br>
This is my first boilerplate for a combination of **Django + mySQL + nodeJS**

Accordingly, **Django** serves as a web server, this is a web server
**Mysql** is a database, and **nodeJS** compiles SCSS, TypeScript using Gulp, and also copies templates from the src folder to the project statics folder.
Gulp also enables synchronization of updates to static files and project templates using browsersync

Let’s not ramble on for too long, but **let’s get down to business**.<br>
Now I will indicate the sequential steps that you need to do to deploy this boilerplate

Here's what we need:
```
- python >= 3.12.1
- django >= 5.0.1
- mysqlclient >= 2.2.1
- python-dotenv >= 1.0.0
```
<br><br>
**Preparation:**

1. Download **Python**
https://www.python.org/downloads/

```
> python -V
Python 3.12.1
```

2. Download **NVM**
https://github.com/coreybutler/nvm-windows
<br>After installing **NVM**
```
> nvm install 20.9.0
> nvm use 20.9.0
> node -v
v20.9.0
```

3. After installing python install the following packages:
```
> pip install django mysqlclient python-dotenv
```

4. Rename .env.example to .env, fill in the required fields:
```
SECRET_KEY='SOME_HASH'
DEBUG=True
APPEND_SLASH=False
DJANGO_DATABASE_HOST='exapmle'
DJANGO_DATABASE_PORT='exapmle'
DJANGO_DATABASE_NAME='exapmle'
DJANGO_DATABASE_USER='exapmle'
DJANGO_DATABASE_PASS='exapmle'
```
5. Rename the project as you need it! Enter the text "boilerplate" in the search for all files and replace the name as you need (without special characters)
6. Go to **node** folder
```
> npm install
```
7. Congratulations! To start the project in dev mode:
```
> npm run dev
```