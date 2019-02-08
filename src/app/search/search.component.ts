import { Component, OnInit } from '@angular/core';

import { MoviesService } from "../movies.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';




@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private movie: MoviesService, private http: HttpClient,   private route: ActivatedRoute,
    private router: Router) { }
   movieDetails: any ;
    

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('name');
    console.log(id);
    this.movie.getdetails(id).subscribe((data: any) => {
      console.log(data)
      this.movieDetails = data;
    })
  }
   
  
}