import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css'],
})
export class EmployeeCreateComponent implements OnInit {
  @Input() employeeDetails = { firstname: '', lastname: '', email: '', phone: '' };
  constructor(public restApi: RestApiService, public router: Router) {}
  ngOnInit() {}
  addEmployee(dataEmployee: any) {
    this.restApi.createEmployee(this.employeeDetails).subscribe((data: {}) => {
      this.router.navigate(['/employees-list']);
    });
  }
}