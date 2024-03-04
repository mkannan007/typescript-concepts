const jsonDataFormat2 = {
  companyData: {
    projects: [
      {
        id: 1,
        name: "Project 1",
        status: "Active",
        details: {
          startDate: "2022-01-01",
          endDate: "2022-12-31",
          employees: ["John Doe", "Jane Doe"],
        },
      },
      {
        id: 2,
        name: "Project 2",
        status: "Inactive",
        details: {
          startDate: "2021-01-01",
          endDate: "2021-12-31",
          employees: ["Alice", "Bob"],
        },
      },
    ],
  },
};

const filterByEmployees = (employee: string) => {
  return jsonDataFormat2.companyData.projects
    .filter((project: any) => project.details.employees.includes(employee))
    .map((project: any) => project.status).toString();
};

console.log(filterByEmployees("Jane Doe"));

const jsonDataFormat3 = {
  companyData: {
    project1: {
      id: 1,
      name: "Project 1",
      status: "Active",
      details: {
        startDate: "2022-01-01",
        endDate: "2022-12-31",
        employees: ["John Doe", "Jane Doe"],
      },
    },
    project2: {
      id: 2,
      name: "Project 2",
      status: "Inactive",
      details: {
        startDate: "2021-01-01",
        endDate: "2021-12-31",
        employees: ["Alice", "Bob"],
      },
    },
  },
};

const isObjectExists = () => {
    if ('project1' in jsonDataFormat3.companyData) {
        console.log('Yes');
    }
    else console.log('No')
}

console.log(isObjectExists()); //Output --> Yes

const getDetailsFromJsonDataFormat3 = () => {
    return (jsonDataFormat3.companyData['project1']['details']);
}

console.log(getDetailsFromJsonDataFormat3());

// Output: {
//     startDate: '2022-01-01',
//     endDate: '2022-12-31',
//     employees: [ 'John Doe', 'Jane Doe' ]
//   }

const filterFromJsonDataFormat3 = (key: string) => {
    const filteredResults: any = getDetailsFromJsonDataFormat3();

    console.log(filteredResults[key])
}

console.log(filterFromJsonDataFormat3('endDate')); //Output: 2022-12-31