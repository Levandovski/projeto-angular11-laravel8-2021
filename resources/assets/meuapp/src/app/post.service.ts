import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  public posts: Post[]=[];

  constructor(private http: HttpClient) {
    this.http.get("/api").subscribe(
      (posts: any[]) =>{
        console.log("POSTS", posts);
       for(let p of posts){
          this.posts.push(
            new Post(
              p.nome,
              p.titulo,
              p.subtitulo,
              p.email,
              p.mensagem,
              p.arquivo,
              p.id,
              p.likes
            )
          );
        }
      }
    );
   }

   salvar(post: Post, file:File){
    
     const uploadData = new FormData();
     uploadData.append('nome', post.nome);
     uploadData.append('email', post.email);
     uploadData.append('titulo', post.titulo);
     uploadData.append('subtitulo', post.subtitulo);
     uploadData.append('mensagem', post.mensagem);
     uploadData.append('arquivo', file, file.name);
     console.log(uploadData);
     this.http.post('/api', uploadData, {reportProgress:true, observe:'events'})
     .subscribe((event: any)=>{
       if(event.type==HttpEventType.Response){
          //console.log(event)
          //Método para carregar a imagem assim q criarmos
          let p:any= event.body;
          this.posts.push(
            new Post(
              p.nome,
              p.titulo,
              p.subtitulo,
              p.email,
              p.mensagem,
              p.arquivo,
              p.id,
              p.likes
            )
          );
       }
       if(event.type==HttpEventType.UploadProgress){
         console.log("UPLOAD");
        console.log(event)
     }
     });
   }
}
