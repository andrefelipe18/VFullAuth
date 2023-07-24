# VFull Auth - VFull Starter kit with Breeze Authentication
![VFullLogo](./public/vfull.png)

# Introduction

This repository is an implementing of the [Laravel Breeze](https://laravel.com/docs/10.x/starter-kits#breeze-and-next) application / authentication with *VFull*. All of the authentication boilerplate is already written for you - powered by Laravel Sanctum, allowing you to quickly begin pairing your beautiful Vue.js frontend with a powerful Laravel backend.
# Inspiration

The basis of VFull Auth was taken from [this project](https://github.com/faisalfjri/breeze-vue-api), I thank the creators [Faisal Fajri](https://github.com/faisalfjri) and [Eugene van der Merwe](https://github.com/eugenefvdm)

## Why VFull?

*VFull* is a heavily opinionated starter kit for Vue 3 powered by Vite. It comes with auto-importing features and leverages the latest and greatest features from Vue 3, Tailwind CSS, DaisyUI, TypeScript, Vue Router, Pinia, VueUse, UnHead, Axios, Unplugin Vue Components, Unplugin Auto Import, Vitest and Vue Test Utils configured and ready to use.

## Why VFull Auth? 

*VFull Auth* is ready to use with Laravel Breeze Authentication. It comes with the same features as VFull, but with Laravel Breeze Authentication configured and ready to use.


## Features
- 💚[Vue](https://vuejs.org/)
- 🔐[Laravel Breeze Authentication](https://laravel.com/docs/10.x/starter-kits#breeze-and-next)
- 🍍[Pinia](https://pinia.esm.dev/)
- 🔄[Vue Router](https://router.vuejs.org/)
- 👨🏽‍💻[VueUse](https://vueuse.org/)
- 🤯[UnHead](https://unhead.harlanzw.com/)
- 🤙🏽[Axios](https://axios-http.com/)
- 🚗[Unplugin Vue Components](https://github.com/antfu/unplugin-vue-components)
- 🚘[Unplugin Auto Import](https://github.com/antfu/unplugin-auto-import)
- ⚡[Vite](https://vitejs.dev/)
- 🧪[Vitest](https://vitest.dev/guide/)
- 🧪[Vue Test Utils](https://next.vue-test-utils.vuejs.org/)
- 🤩[Tailwind CSS](https://tailwindcss.com/)
- 🎨[DaysiUI](https://daisyui.com/)
- 🆔[TypeScript](https://www.typescriptlang.org/)

### Installation
First of all, you need to install [Laravel](https://laravel.com/docs/10.x/installation)

```bash
# Create the Laravel application...
laravel new vfull-backend

cd vfull-backend

# Install Breeze
composer require laravel/breeze

php artisan breeze:install api

```
# Install VFull Auth
```bash
# Clone the repository
git clone 

# Install dependencies
npm install
```
*Atention*

In the backend, you need to change the file `.env` to FRONTEND_URL=http://localhost:3000
In the frontend, you need to change the file `.env` to VITE_PUBLIC_BACKEND_URL=http://localhost:8000

Is a very important using *localhost* during local development of your backend and frontend to avoid CORS "Same-Origin" issues.

Finally, run the applications with the commands:

```bash
# Run the backend
php artisan serve

# Run the frontend
npm run dev
```
# License
VFull Auth is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).