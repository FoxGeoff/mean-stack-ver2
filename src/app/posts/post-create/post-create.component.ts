import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {

  msg: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

  onAddPost(note: any) {
    alert(`Post added! ${note.value}`);
    this.msg = "New Post Added!"
  }
}
