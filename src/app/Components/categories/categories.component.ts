import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Departmant } from 'src/app/Core/Interface/departmant';
import { DepartMentService } from 'src/app/Core/Service/depart-ment.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule , RouterLink],
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  departments: Departmant[] = [];
  constructor(private _DepartMentService: DepartMentService) { }
 

  ngOnInit(): void {
    

    this._DepartMentService.getDepartments().subscribe({ 
      next:(res) => {
        this.departments = res;

      }

    });

  

  }

}
