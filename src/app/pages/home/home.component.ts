import { Component } from '@angular/core';
import { BarChartComponent } from "../../components/bar-chart/bar-chart.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BarChartComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
