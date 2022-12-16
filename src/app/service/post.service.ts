import { Injectable } from '@angular/core';
import { IPost } from '../interfaces/i-post';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }
  getAllPost(): IPost[]{
    return [
      new Post(1, 'Lorem 1', 'Ini Postingan ke 1', true, 'https://picsum.photos/200/300?grayscale'),
      new Post(2, 'Lorem 2', 'Ini Postingan ke 2', true, 'https://picsum.photos/200/300?grayscale'),
      new Post(3, 'Lorem 3', 'Ini Postingan ke 3', true, 'https://picsum.photos/200/300?grayscale'),
      new Post(4, 'Lorem 4', 'Ini Postingan ke 4', true, 'https://picsum.photos/200/300?grayscale'),
    ];
  }
}
