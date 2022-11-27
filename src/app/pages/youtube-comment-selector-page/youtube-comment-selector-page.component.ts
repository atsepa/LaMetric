import { Subscription, interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { YoutubeService } from 'src/app/services/youtube/youtube.service';
import { YoutubeResponse } from 'src/app/types/youtube.types';

import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-comment-selector-page',
  templateUrl: './youtube-comment-selector-page.component.html',
  styleUrls: ['./youtube-comment-selector-page.component.scss']
})
export class YoutubeCommentSelectorPageComponent implements OnInit, OnDestroy {

  hideInput: boolean = false;
  // todo create interface
  comments: any[];
  //todo create video interface
  videos: any[];

  selectedOption: any;
  private subscription: Subscription = new Subscription();

  constructor(private readonly youtubeService: YoutubeService) {
  }

  ngOnInit(): void {
    this.handleSubscriptions();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  handleSubscriptions(): void {
    this.subscription.add(this.youtubeService.getVideosList().subscribe(this.handleVideoList, this.handleYoutubeError))
  }

  getComments(): void {
    // TODO crete a way of setting videoID from the UI
    // const videoId: string = 'rWZSEkZ5nxs'
    this.subscription.add(this.youtubeService.getComments(this.selectedOption)
      .subscribe(
        this.handleYoutubeComments,
        this.handleYoutubeError
      )
    );

  }

  refresh(): void {
    this.comments = this.comments
      .sort(() => .5 - Math.random())
  }


  // TODO create youtube comments interface
  handleYoutubeComments = (youtubeComments: any): void => {

    const ignoreList = ['Beickon', 'DarthMamg'];

    this.hideInput = !this.hideInput;

    this.comments = youtubeComments.items
      // remove does on ingnore list
      .filter(comment => ignoreList.indexOf(comment.snippet.topLevelComment.snippet.authorDisplayName) === -1 &&
        /\d/.test(comment.snippet.topLevelComment.snippet.textOriginal)
      )
      .map(comment => JSON.stringify({
        username: comment.snippet.topLevelComment.snippet.authorDisplayName,
        comment: comment.snippet.topLevelComment.snippet.textOriginal
      }))
      .sort(() => .5 - Math.random())

    this.comments = [...new Set(this.comments)].map(comment => JSON.parse(comment));
  };

  handleVideoList = (videosList: any): void => {
    this.videos = videosList.items;
  }

  handleSelect(tepo): void {
    console.log(tepo);
  }

  selected() {
    console.log(this.selectedOption)
  }

  private handleYoutubeError = (error: any): void => {
    console.log(`Error! ${error.error.message}`);
  };

}
