import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  
  students = [
    { 
      name: 'Pallavi', 
      rollNumber: '01', 
      subjects: { 
        mathMarks: 95, 
        scienceMarks: 88 
      },
      grade: 'A' 
    },
    { 
      name: 'Vaishnavi', 
      rollNumber: '02', 
      subjects: { 
        mathMarks: 88, 
        scienceMarks: 92 
      },
      grade: 'A' 
    },
     { 
      name: 'Sahil', 
      rollNumber: '03', 
      subjects: { 
        mathMarks: 80, 
        scienceMarks: 95 
      },
      grade: 'A' 
    },
     { 
      name: 'Vinay', 
      rollNumber: '04', 
      subjects: { 
        mathMarks: 85, 
        scienceMarks: 85 
      },
      grade: 'B' 
    },

     { 
      name: 'Shubham', 
      rollNumber: '05', 
      subjects: { 
        mathMarks: 70, 
        scienceMarks: 52 
      },
      grade: 'B' 
    },

    { 
      name: 'Tanmay', 
      rollNumber: '06', 
      subjects: { 
        mathMarks: 40, 
        scienceMarks: 62 
      },
      grade: 'C' 
    },

     { 
      name: 'Ajay', 
      rollNumber: '07', 
      subjects: { 
        mathMarks: 45, 
        scienceMarks: 42 
      },
      grade: 'D' 
    },

     { 
      name: 'Apurva', 
      rollNumber: '08', 
      subjects: { 
        mathMarks: 31, 
        scienceMarks: 32 
      },
      grade: 'F' 
    },

     { 
      name: 'Prachi', 
      rollNumber: '09', 
      subjects: { 
        mathMarks: 98, 
        scienceMarks: 92 
      },
      grade: 'A' 
    },
   
     { 
      name: 'Kaushal', 
      rollNumber: '10', 
      subjects: { 
        mathMarks: 15, 
        scienceMarks: 32 
      },
      grade: 'F' 
    },
  ];
}


