import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-gifs-grid',
  templateUrl: './gifs-grid.component.html',
  styleUrls: ['./gifs-grid.component.css']
})
export class GifsGridComponent implements OnInit {

  public gifs: any[] = [];
  category = new FormControl('');

  constructor(private gifsService: GifsService) {
    this.gifsService.getGifs('code', 10).subscribe((data: any) => {
      this.gifs = data.data;
      console.log(this.gifs);
    })
  }

  searchByCategory() {
    this.gifsService.getGifs(this.category.value || '', 10).subscribe((data: any) => {
      this.gifs = data.data;
      console.log(this.gifs);
    })
    console.log(this.category.value);
  }

  ngOnInit(): void {

  }

}
