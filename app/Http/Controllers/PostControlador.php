<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Post;

class PostControlador extends Controller
{
    
    public function index()
    {
        return Post::all();
    }   
    public function store(Request $request)
    {
        $post           =new Post();
        $post           =$request-file('arquivo')->store('imagens', 'public');
        $post->nome     =$request->nome;
        $post->email    =$request->email;
        $post->titulo   =$request->titulo;
        $post->mensagem =$request->subtitulo;
        $post->mensagem =$request->mensagem;
        $post->path     =$path;
        $post->likes    =0;

        $psot->save();
    }  
    public function destroy($id)
    {
        //
    }
    
    public function like($id){
        //
    }
}
