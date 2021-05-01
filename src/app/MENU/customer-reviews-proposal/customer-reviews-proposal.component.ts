import {Component, Input, OnInit} from '@angular/core';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {CommentFacebookComponent} from '../../PLUGIN/comment-facebook/comment-facebook.component';

@Component({
  selector: 'app-customer-reviews-proposal',
  templateUrl: './customer-reviews-proposal.component.html',
  styleUrls: ['./customer-reviews-proposal.component.css'],
  providers: [DialogService]
})
export class CustomerReviewsProposalComponent implements OnInit {
  @Input()
  full: boolean;

  constructor(public dialogService: DialogService) {}
  ref: DynamicDialogRef;

  ngOnInit(): void {
    console.log(this.full);
  }

  show(): void {
    this.ref = this.dialogService.open(CommentFacebookComponent, {
      header: 'Avis sur le site :',
      width: '70%',
      contentStyle: {'max-height': '500px', overflow: 'auto'},
      baseZIndex: 10000
    });

  }

}
