import { Component, OnInit, Input, ElementRef, ViewChild} from '@angular/core';
import { Chart } from "chart.js";

@Component({
  selector: 'app-graph-card',
  templateUrl: './graph-card.component.html',
  styleUrls: ['./graph-card.component.css']
})
export class GraphCardComponent implements OnInit {
  @ViewChild("cardChart", { static: true }) cardChartRef: ElementRef;
  @Input() cardTitle: string;
  @Input() cardSubTitle: string;
  @Input() cardBackground: string;
  @Input() totalAmount: number;
  @Input() totalSpent: number;

  @Input() cardFirstLabel: string;
  @Input() cardSecondLabel: string;
  @Input() cardThirdLabel: string;
  @Input() total: number;
  @Input() spent: number;
  @Input() chartData: [];
  @Input() chartColor: string;
  @Input() chartLabels: [];
  @Input() cardBackgroundClass: string;
  @Input() cardBodyBackgroundClass: string;

  cardChart: any[] = [];

  constructor() { }

  ngOnInit() {
    this.cardChart = new Chart(this.cardChartRef.nativeElement, {
      type: "doughnut",
      data: {
        labels: this.chartLabels,
        datasets: [
          {
            data: this.chartData,
            backgroundColor: this.chartColor,
            borderWidth: 2,
          },
        ],
      },
      options: {
        plugins: {
          labels: {
            render: 'percentage',
          }
        },
        responsive: true,
        cutoutPercentage : 85,
        legend: {
          display: false,
        },
        animation: {
          animateScale: true,
          animateRotate: true
        },
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data:any) {
              let dataset = data.datasets[tooltipItem.datasetIndex];
              let total = dataset.data.reduce(function(previousValue, currentValue) {
                return previousValue + currentValue;
              });
              let currentValue = dataset.data[tooltipItem.index];
              let percentage = Math.floor(((currentValue/total) * 100) + 0.5);         
              return percentage + "%";
            }
          }
        }
      },
    });
    
  }
}
