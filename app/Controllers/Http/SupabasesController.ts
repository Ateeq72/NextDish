// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// import { SupabaseClient } from "@supabase/supabase-js";

export default class SupabasesController {

  public async getData({ view }) {

    return view.render('welcome');

  }
}
