import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { StoreModule } from '@ngrx/store';
import { reducer } from 'src/app/store/users';
import { postsReducer } from 'src/app/store/posts';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule,
    NgxPaginationModule,
    StoreModule.forFeature('users', reducer),
    StoreModule.forFeature('posts', postsReducer),
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
