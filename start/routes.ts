/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'


Route.get('/', async ({ view }) => {
  return view.render('index')
})

Route.get('/index', async ({ view }) => {
  return view.render('index')
})

Route.get('/basic-table', async ({ view }) => {
  return view.render('basic-table')
})

Route.get('/buttons', async ({ view }) => {
  return view.render('buttons')
})

Route.get('/calendar', async ({ view }) => {
  return view.render('calendar')
})

Route.get('/charts', async ({ view }) => {
  return view.render('charts')
})

Route.get('/chat', async ({ view }) => {
  return view.render('chat')
})

Route.get('/compose', async ({ view }) => {
  return view.render('compose')
})

Route.get('/datatable', async ({ view }) => {
  return view.render('datatable')
})

Route.get('/email', async ({ view }) => {
  return view.render('email')
})

Route.get('/forms', async ({ view }) => {
  return view.render('forms')
})

Route.get('/google-maps', async ({ view }) => {
  return view.render('google-maps')
})

Route.get('/signin', async ({ view }) => {
  return view.render('signin')
})

Route.get('/signup', async ({ view }) => {
  return view.render('signup')
})

Route.get('/ui', async ({ view }) => {
  return view.render('ui')
})

Route.get('/vector-maps', async ({ view }) => {
  return view.render('vector-maps')
})

Route.get('/test', async ({ view }) => {
  return view.render('test')
})

Route.get('/supabase', 'SupabasesController.getData')
