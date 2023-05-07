import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-generic-list',
  templateUrl: './generic-list.component.html',
  styleUrls: ['./generic-list.component.css']
})
export class GenericListComponent {
  @Input("url") url: string = '';
  @Input("urlCount") urlCount: string = '';
  @Input("columns") columns: string[] = [];
  @Input() idField: string = 'id';
  @Output() addEvent = new EventEmitter<any>();
  @Output() editEvent = new EventEmitter<number>();
  @Output() deleteEvent = new EventEmitter<number>();

  data: any[] = [];
  currentPage = 1;
  totalPages = 1;
  pageSize = 25;
  orderBy = 'Id';
  order = 'desc';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    const params = {
      page: this.currentPage.toString(),
      quantity: this.pageSize.toString(),
      orderBy: this.orderBy,
      order: this.order
    };

    this.http.get(this.urlCount).subscribe((count) => {
      this.totalPages = Math.ceil(count as number / this.pageSize);
    });

    this.http.get(this.url, { params }).subscribe(result => {
      this.data = result as any[];
    });
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.loadData();
    }
  }

  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  changeOrderBy(orderBy: string) {
    if (this.orderBy.toLocaleLowerCase() === orderBy.toLocaleLowerCase()) {
      this.order = this.order === 'asc' ? 'desc' : 'asc';
    } else {
      this.orderBy = this.capitalizeFirstLetter(orderBy);
      this.order = 'asc';
    }

    console.log(this.order, "by ", this.orderBy);

    this.loadData();
  }

  getPages(): number[] {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  confirmDelete(id: number) {
    if (confirm('Tem certeza que deseja excluir este item?')) {
      this.deleteEvent.emit(id);
    }
  }

}
