import { Component } from '@angular/core';
import { Post } from './post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Projeto Rodando';

  public posts: Post[]=[
    new Post("João","Meu post", "Sub João", "joao@gmail.com", "Minha msg"),
    new Post("Paulo","Post do Paulo", "Sub Paulo", "paulo@gmail.com", "Msg do Paulo"),
    new Post("Maria","Post de Maria", "Sub Maria", "maria@gmail.com", "Msg da Maria"),
    new Post("João","Meu post", "Sub João", "joao@gmail.com", "Minha msg"),
    new Post("Paulo","Post do Paulo", "Sub Paulo", "paulo@gmail.com", "Msg do Paulo"),
    new Post("Maria","Post de Maria", "Sub Maria", "maria@gmail.com", "Msg da Maria"),
    new Post("João","Meu post", "Sub João", "joao@gmail.com", "Minha msg"),
    new Post("Paulo","Post do Paulo", "Sub Paulo", "paulo@gmail.com", "Msg do Paulo"),
    new Post("Maria","Post de Maria", "Sub Maria", "maria@gmail.com", "Msg da Maria"),
  ];
}
