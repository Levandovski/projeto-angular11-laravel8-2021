<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Projeto Galeria</title>
        
        <link rel="icon" type="image/x-icon" href="favicon.ico">
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <!--Import css-->
        <link rel="stylesheet" href="{{asset('js/styles.css')}}">
        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;600&display=swap" rel="stylesheet">
        <!--Icons-->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

     <app-root></app-root>
     <script src="{{asset('js/runtime.js')}}" defer></script>
     <script src="{{asset('js/polyfills.js')}}" defer></script>
     <script src="{{asset('js/vendor.js')}}" defer></script>
     <script src="{{asset('js/main.js')}}" defer></script>
    </body>
</html>
