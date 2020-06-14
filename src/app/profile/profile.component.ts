import { Component, OnInit } from '@angular/core';
import {FreeapiService} from '../services/freeapi.service';
import {users} from './../classes/users';
import {todos} from './../classes/todos';
import {posts} from './../classes/posts';
import {comments} from './../classes/comments';

import {map} from 'rxjs/operators';
import { element } from 'protractor';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private _freeapiservice: FreeapiService) {

  }
  listUsers: users[];
  listTodos: todos[];
  listPosts: posts[];
  listComments: comments[];
  countTodos = 0;
  countPosts = 0;
  countComments = 0;
  selectedPostbody = '';
  selectedPosttitle = '';
  postbody = false;
  userId = 1;
  onSelectcancel(){
    this.postbody = ! this.postbody;
  }
  increaseUserId(){
    if (this.userId < 10) {
    this.userId = this.userId + 1;
    this.countTodos = 0;
    this.countPosts = 0;
    this.countComments = 0;
    }

  }
  decreaseUserId(){
    if (this.userId > 1) {
    this.userId = this.userId - 1;
    this.countTodos = 0;
    this.countPosts = 0;
    this.countComments = 0;
    }

  }


  ngOnInit() {
    this._freeapiservice.getusers()
    .subscribe(
      data => {
        this.listUsers = data;
        console.log(this.listUsers);
      }
    );
// POSTS DATA
    this._freeapiservice.getposts()
    .subscribe(
      data => {
        this.listPosts = data;
        console.log(this.listPosts);
      }
    );
  // TODOS DATA
    this._freeapiservice.gettodos()
    .subscribe(
      data => {
        this.listTodos = data;
        console.log(this.listTodos);
      }
    );
    // COMMENTS  DATA
    this._freeapiservice.getcomments()
  .subscribe(
    data => {
      this.listComments = data;
      console.log(this.listComments);
    }
  );
  }

  // COUNTING TODOS OF USER
  todosCount(){
    this.countTodos = 0;
    this.listTodos.forEach( element => {
      if (element.userId === this.userId)
        {
          this.countTodos = this.countTodos  + 1 ;
        }
      });
    console.log(this.countTodos);
    }
    // COUNTING POSTS OF USER
    postsCount(){
      this.countPosts = 0;
      this.listPosts.forEach( element => {
        if (element.userId === this.userId)
          {
            this.countPosts = this.countPosts  + 1 ;
          }
        });
      console.log(this.countPosts);
      }
      // COUNTING COMMENTS OF USER
      commentsCount(){
        this.countComments = 0;
        this.listComments.forEach(element => {
          if (element.postId === this.userId)
            {
              this.countComments = this.countComments + 1 ;
            }
          });
        console.log(this.countComments);
        }

  
 selectedPost(e){
   console.log(e);
   this.listPosts.forEach(element =>{
     if(element.id === e)
     {
       console.log(element.body);
       this.selectedPostbody = element.body;
       this.selectedPosttitle = element.title;
       this.postbody = ! this.postbody;
     }
   }
   );

 }
 

}
