import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from './post';
import { PostDialogComponent } from './post-dialog/post-dialog.component';

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

  constructor(public dialog: MatDialog){}
  
  openDialog(){
    const dialogRef= this.dialog.open(PostDialogComponent, {
      width:'600px'
    });
    dialogRef.afterClosed().subscribe(
      (result) =>{
        if(result){
          console.log(result);
        }
      }
    );
  }
}
