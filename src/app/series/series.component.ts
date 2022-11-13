import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { SeriesService } from './series.service';
@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  constructor(private serieService: SeriesService) { }
  series: Array<Serie> = [];
  promedio: number = 0;

  ngOnInit() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
      // this.promedio = this.series.reduce((a, b) => a + b.seasons, 0) / this.series.length;
    });
  }
}
