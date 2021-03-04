import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Post } from './post';
import { PostDialogComponent } from './post-dialog/post-dialog.component';
import { PostService } from './post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'Projeto Rodando';

  public posts: Post[];

  constructor(
    public dialog: MatDialog,
    public postService: PostService){}
  
  //Quando a função grafica estiver carregada, essa função será chamada automaticamente  
  ngOnInit(){
    this.posts=this.postService.posts;
  }

  openDialog(){
    const dialogRef= this.dialog.open(PostDialogComponent, {
      width:'600px'
    });
    dialogRef.afterClosed().subscribe(
      (result) =>{
        if(result){         
          this.postService.salvar(result.post, result.arquivo);
        }
      }
    );
  }
}
