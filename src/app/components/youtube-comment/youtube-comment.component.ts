import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-comment',
  templateUrl: './youtube-comment.component.html',
  styleUrls: ['./youtube-comment.component.scss']
})
export class YoutubeCommentComponent implements OnInit {

  @Input()
  commentData: any;

  @Input()
  index: number;

  username: string;
  comment: string;

  constructor() { }

  ngOnInit(): void {
    this.username = this.commentData.username;
    this.comment = this.commentData.comment;
  }

}
