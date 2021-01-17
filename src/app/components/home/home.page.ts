import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { IUsers } from '../../interfaces/users';
import { PostsService } from 'src/app/services/posts.service';
import { UsersService } from 'src/app/services/users.service';
import * as fromUsers from "../../store/users";
import * as fromPosts from "../../store/posts";
import { IPosts } from '../../interfaces/posts';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {
  public posts: IPosts[] = [];
  public users: IUsers[] = [];
  public createPost: FormGroup;
  public createUser: FormGroup;
  
  constructor(
    private _store: Store<fromUsers.IUsersState>,
    private _storePosts: Store<fromPosts.IPostsState>,
    public postsService: PostsService,
    public usersService: UsersService,
    public formBuilder: FormBuilder
  ) {
      this.createPost = formBuilder.group({
        username: '',
        title: '',
        body: ''
      });
      this.createUser = formBuilder.group({
        username: '',
        name: '',
        email: '',
      });
   }
 
  ngOnInit() {
    this._store.dispatch(new fromUsers.GetUsersLoad());
    this._storePosts.dispatch(new fromPosts.GetPostsLoad());

    this._store.pipe(select(fromUsers.allUsers)).subscribe(res => {
      this.users = res.data;
    });

    this._storePosts.pipe(select(fromPosts.allPosts)).subscribe(res => {      
      this.posts = this.mergeById(res.data, this.users);
    });
  }

  public mergeById = (array1, array2) =>
    array1.map(post => ({
      ...array2.find((user) => (user.id === post.userId) && user),
      ...post
  }));
  
  public onCreatePost() {    
    this._storePosts.dispatch(new fromPosts.PostPosts(this.createPost.value));
    this._storePosts.pipe(select(fromPosts.allPosts)).subscribe();
  }
  
  public onCreateUser() {    
    this._store.dispatch(new fromUsers.PostUser(this.createUser.value));
    this._store.pipe(select(fromUsers.allUsers)).subscribe();
  }

  public sortByName(array, key) {
    return array.sort(function (a, b) {
        var x = a[key]; var y = b[key];
        return ((x < y) ? -1 : ((x > y) ? 0 : 1));
    });
  }
}
