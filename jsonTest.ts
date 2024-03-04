interface CompanyDetails {
    company: string;
    address?: string;
    departments?: Array<string>;
    employees: Array<object>;
    projects: Array<object>;
}

const jsonData: CompanyDetails = {
    company: 'TestCompany',
    departments: ['Engineering', 'Data Science', 'Design'],
    employees: [
        {
            id: 1,
            name: 'John Doe',
            position: 'Software Engineer',
            skills: ['JavaScript', 'React', 'Node.js'],
            dob: '01/02/1990',
        },
        {
            id: 2,
            name: 'Alice Smith',
            position: 'Data Scientist',
            skills: ['Python', 'Machine Learning', 'SQL', 'Node.js'],
        },
        {
            id: 3,
            name: 'Bob Johnson',
            position: 'UX Designer',
            skills: ['Node.js', 'UI/UX Design', 'Wireframing', 'Prototyping'],
            dob: '05/02/1990',
        },
    ],
    projects: [
        {
            projectId: 'P001',
            projectName: 'E-commerce Platform',
            team: ['John Doe', 'Alice Smith'],
            status: 'In Progress',
        },
        {
            projectId: 'P002',
            projectName: 'Data Analytics Dashboard',
            team: ['Alice Smith', 'Bob Johnson'],
            status: 'Completed',
        },
        {
            projectId: 'P003',
            projectName: 'Mobile App Redesign',
            team: ['John Doe', 'Bob Johnson'],
            status: 'Planning',
        },
    ],
};


// check if a property exists in an object
const hasProperty = (obj: object, key: string) => {
    return key in obj;
};

console.log('hasProperty Employees -> ', hasProperty(jsonData, 'employees'));
console.log('hasProperty Addess -> ', hasProperty(jsonData, 'address'));
console.log('hasProperty ProjectId -> ', hasProperty(jsonData.projects[0], 'projectId'));

const filterTeamByProjectId = (projectId: string) => {
    return jsonData.projects.filter((project: any) => project.projectId === projectId)
    .map((project: any) => project.team)
    .join(' ')
    .split(',');
};

const filterResults = (status: string) => {
    return jsonData.projects.filter((project: any) => project.status === status);
};

console.log(filterResults('Planning'));

interface employeeInfo {
    name: string;
    dob: Date
}

const getEmployeesDob = (projectId: string) => {
    const teamMembers: any = filterTeamByProjectId(projectId);
    const employeeDob: employeeInfo[] = [];

    teamMembers.forEach((teamMember: string) => {
        const employee: any = jsonData.employees.find((employee: any) => employee.name === teamMember);
            employeeDob.push({name: teamMember, dob: employee.dob});
    });
    return employeeDob;
};

console.log(getEmployeesDob('P001'));


// const filterEmployees = (value: string) => {
//   return data.projects.filter((project: any) => project.projectId === value);
// };

// console.log(filterEmployees('P001'));

// const filterTeamMembersByProjectId = (value: string): Array<string> => {
//   return data.projects.filter((project: any) => project.projectId === value).map((project: any) => project.team);
//   };

// const getEmployeeDobByEmployeeName = () => {
//     const employeeNames: string[] = filterTeamMembersByProjectId('P001');

//     return employeeNames.forEach((name: string) => {
//         const employee: any = data.employees.find((employee: any) => employee.name === name);
//         if (employee) {
//             console.log(`Employee Name -> ${employee.name}, DOB -> ${employee.dob}`);
//         }
//     });
// }

// console.log(filterTeamMembersByProjectId('P001'));

// console.log(getEmployeeDobByEmployeeName());

// const projects = [
//   { name: 'Project A', team: ['John', 'Lisa'] },
//   { name: 'Project B', team: ['Mike', 'Sarah'] },
// ];

// const teamMembers = projects.flatMap((project) => project.team);

//   console.log(teamMembers);
