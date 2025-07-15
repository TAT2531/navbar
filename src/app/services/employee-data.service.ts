import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  private employees = [
    {
      name: 'Abiagin Verma',
      department: 'Confiscate tech',
      jobTitle: 'Java Developer',
      email: 'abbiqinVerma32@gmail.com',
      mobile: '+91 894-894-8684',
      joinDate: 'Jan 1, 2025',
      dob: '1111-11-11',
      experience: '0.39 years',
      age: '93.53',
      gender: 'Male'
    },
    {
      name: 'Abhishak Varma',
      department: 'Confiscate tech',
      jobTitle: '',
      email: 'abhishakvarma132@gmail.com',
      mobile: '+91 846-864-1684',
      joinDate: 'Oct 1, 2024',
      dob: '1111-11-11',
      experience: '0.64 years',
      age: '93.53',
      gender: 'Male'
    },

    {
      name: 'Abiagin Verma',
      department: 'Confiscate tech',
      jobTitle: 'Java Developer',
      email: 'abbiqinVerma32@gmail.com',
      mobile: '+91 894-894-8684',
      joinDate: 'Jan 1, 2025',
      dob: '1111-11-11',
      experience: '0.39 years',
      age: '93.53',
      gender: 'Male'
    },
    {
      name: 'Abhishak Varma',
      department: 'Confiscate tech',
      jobTitle: '',
      email: 'abhishakvarma132@gmail.com',
      mobile: '+91 846-864-1684',
      joinDate: 'Oct 1, 2024',
      dob: '1111-11-11',
      experience: '0.64 years',
      age: '93.53',
      gender: 'Male'
    },

    {
      name: 'Abiagin Verma',
      department: 'Confiscate tech',
      jobTitle: 'Java Developer',
      email: 'abbiqinVerma32@gmail.com',
      mobile: '+91 894-894-8684',
      joinDate: 'Jan 1, 2025',
      dob: '1111-11-11',
      experience: '0.39 years',
      age: '93.53',
      gender: 'Male'
    },
    {
      name: 'Abhishak Varma',
      department: 'Confiscate tech',
      jobTitle: '',
      email: 'abhishakvarma132@gmail.com',
      mobile: '+91 846-864-1684',
      joinDate: 'Oct 1, 2024',
      dob: '1111-11-11',
      experience: '0.64 years',
      age: '93.53',
      gender: 'Male'
    },

    {
      name: 'Abiagin Verma',
      department: 'Confiscate tech',
      jobTitle: 'Java Developer',
      email: 'abbiqinVerma32@gmail.com',
      mobile: '+91 894-894-8684',
      joinDate: 'Jan 1, 2025',
      dob: '1111-11-11',
      experience: '0.39 years',
      age: '93.53',
      gender: 'Male'
    },
    {
      name: 'Abhishak Varma',
      department: 'Confiscate tech',
      jobTitle: '',
      email: 'abhishakvarma132@gmail.com',
      mobile: '+91 846-864-1684',
      joinDate: 'Oct 1, 2024',
      dob: '1111-11-11',
      experience: '0.64 years',
      age: '93.53',
      gender: 'Male'
    },

    {
      name: 'Abiagin Verma',
      department: 'Confiscate tech',
      jobTitle: 'Java Developer',
      email: 'abbiqinVerma32@gmail.com',
      mobile: '+91 894-894-8684',
      joinDate: 'Jan 1, 2025',
      dob: '1111-11-11',
      experience: '0.39 years',
      age: '93.53',
      gender: 'Male'
    },
    {
      name: 'Abhishak Varma',
      department: 'Confiscate tech',
      jobTitle: '',
      email: 'abhishakvarma132@gmail.com',
      mobile: '+91 846-864-1684',
      joinDate: 'Oct 1, 2024',
      dob: '1111-11-11',
      experience: '0.64 years',
      age: '93.53',
      gender: 'Male'
    }
    
  ];

  getEmployees() {
    return this.employees;
  }
}