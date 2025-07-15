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
      name: 'Chandu',
      department: 'Confiscate tech',
      jobTitle: 'Java Developer',
      email: 'chandu132@gmail.com',
      mobile: '+91 846-864-1684',
      joinDate: 'Oct 1, 2024',
      dob: '1111-11-22',
      experience: '0.64 years',
      age: '93.53',
      gender: 'Male'
    },

    {
      name: 'Karthik',
      department: 'Confiscate tech',
      jobTitle: 'Java Developer',
      email: 'karthik32@gmail.com',
      mobile: '+91 894-894-8684',
      joinDate: 'Sep 1, 2025',
      dob: '1999-03-06',
      experience: '0.39 years',
      age: '93.53',
      gender: 'Male'
    },

    {
      name: 'Vinod',
      department: 'Confiscate tech',
      jobTitle: 'UI',
      email: 'vinod132@gmail.com',
      mobile: '+91 846-864-1684',
      joinDate: 'Oct 1, 2024',
      dob: '1993-05-17',
      experience: '0.64 years',
      age: '93.53',
      gender: 'Male'
    },

    {
      name: 'Pranay',
      department: 'Confiscate tech',
      jobTitle: 'UI',
      email: 'pranay32@gmail.com',
      mobile: '+91 894-894-8684',
      joinDate: 'Feb 25, 2025',
      dob: '2000-12-29',
      experience: '0.39 years',
      age: '93.53',
      gender: 'Male'
    },

    {
      name: 'Stalin',
      department: 'No department',
      jobTitle: 'UI',
      email: 'stalin@gmail.com',
      mobile: '+91 846-864-1684',
      joinDate: 'Nov 8, 2024',
      dob: '1997-01-18',
      experience: '0.64 years',
      age: '93.53',
      gender: 'Male'
    },

    {
      name: 'Pavan',
      department: 'Macys Private Limited',
      jobTitle: 'UI',
      email: 'pavan@gmail.com',
      mobile: '+91 894-894-8684',
      joinDate: 'May 26, 2025',
      dob: '1995-07-03',
      experience: '0.39 years',
      age: '93.53',
      gender: 'Male'
    },

    {
      name: 'Sandeep',
      department: 'Macys Private Limited',
      jobTitle: 'Angular',
      email: 'sandeep132@gmail.com',
      mobile: '+91 846-864-1684',
      joinDate: 'Apr 14, 2024',
      dob: '2000-08-28',
      experience: '0.64 years',
      age: '93.53',
      gender: 'Male'
    },

    {
      name: 'Harideep',
      department: 'Macys Private Limited',
      jobTitle: 'Java Developer',
      email: 'harideep32@gmail.com',
      mobile: '+91 894-894-8684',
      joinDate: 'Dec 9, 2025',
      dob: '2000-12-19',
      experience: '0.39 years',
      age: '93.53',
      gender: 'Male'
    },

    {
      name: 'Ricky',
      department: 'Macys Private Limited',
      jobTitle: 'UI',
      email: 'ricky132@gmail.com',
      mobile: '+91 846-864-1684',
      joinDate: 'Feb 14, 2024',
      dob: '1998-08-28',
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
      name: 'Chandu',
      department: 'Confiscate tech',
      jobTitle: 'Java Developer',
      email: 'chandu132@gmail.com',
      mobile: '+91 846-864-1684',
      joinDate: 'Oct 1, 2024',
      dob: '1111-11-22',
      experience: '0.64 years',
      age: '93.53',
      gender: 'Male'
    },

    {
      name: 'Karthik',
      department: 'Confiscate tech',
      jobTitle: 'Java Developer',
      email: 'karthik32@gmail.com',
      mobile: '+91 894-894-8684',
      joinDate: 'Sep 1, 2025',
      dob: '1999-03-06',
      experience: '0.39 years',
      age: '93.53',
      gender: 'Male'
    },

    {
      name: 'Vinod',
      department: 'Confiscate tech',
      jobTitle: 'UI',
      email: 'vinod132@gmail.com',
      mobile: '+91 846-864-1684',
      joinDate: 'Oct 1, 2024',
      dob: '1993-05-17',
      experience: '0.64 years',
      age: '93.53',
      gender: 'Male'
    },

    {
      name: 'Pranay',
      department: 'Confiscate tech',
      jobTitle: 'UI',
      email: 'pranay32@gmail.com',
      mobile: '+91 894-894-8684',
      joinDate: 'Feb 25, 2025',
      dob: '2000-12-29',
      experience: '0.39 years',
      age: '93.53',
      gender: 'Male'
    },

    {
      name: 'Stalin',
      department: 'No department',
      jobTitle: 'UI',
      email: 'stalin@gmail.com',
      mobile: '+91 846-864-1684',
      joinDate: 'Nov 8, 2024',
      dob: '1997-01-18',
      experience: '0.64 years',
      age: '93.53',
      gender: 'Male'
    },

    {
      name: 'Pavan',
      department: 'Macys Private Limited',
      jobTitle: 'UI',
      email: 'pavan@gmail.com',
      mobile: '+91 894-894-8684',
      joinDate: 'May 26, 2025',
      dob: '1995-07-03',
      experience: '0.39 years',
      age: '93.53',
      gender: 'Male'
    },

    {
      name: 'Sandeep',
      department: 'Macys Private Limited',
      jobTitle: 'Angular',
      email: 'sandeep132@gmail.com',
      mobile: '+91 846-864-1684',
      joinDate: 'Apr 14, 2024',
      dob: '2000-08-28',
      experience: '0.64 years',
      age: '93.53',
      gender: 'Male'
    },

    {
      name: 'Harideep',
      department: 'Macys Private Limited',
      jobTitle: 'Java Developer',
      email: 'harideep32@gmail.com',
      mobile: '+91 894-894-8684',
      joinDate: 'Dec 9, 2025',
      dob: '2000-12-19',
      experience: '0.39 years',
      age: '93.53',
      gender: 'Male'
    },
    
    {
      name: 'Ricky',
      department: 'Macys Private Limited',
      jobTitle: 'UI',
      email: 'ricky132@gmail.com',
      mobile: '+91 846-864-1684',
      joinDate: 'Feb 14, 2024',
      dob: '1998-08-28',
      experience: '0.64 years',
      age: '93.53',
      gender: 'Male'
    }
    
  ];

  getEmployees() {
    return this.employees;
  }
}