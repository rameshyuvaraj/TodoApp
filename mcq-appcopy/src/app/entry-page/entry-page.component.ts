import { BookTestServiceService } from './../services/book-test-service.service';
import { Student } from './../model/student';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entry-page',
  templateUrl: './entry-page.component.html',
  styleUrls: ['./entry-page.component.css']
})
export class EntryPageComponent implements OnInit {

  public studentDO: Student = new Student();

  constructor(private _bookTestService: BookTestServiceService, private router: Router) { }

  ngOnInit() {
  }

  bookATest() {
    console.log(this.studentDO.Name);
    this._bookTestService.post(this.studentDO).subscribe((res) => {
      console.log(res);
      console.log("Booked a test");
      this.router.navigate(['/validate-user']);
    })
  }
}
