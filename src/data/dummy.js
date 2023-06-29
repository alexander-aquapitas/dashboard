import React from 'react';
import { AiOutlineCalendar, AiOutlineUnorderedList, AiOutlineWarning } from 'react-icons/ai';
import { FiBarChart, FiCreditCard } from 'react-icons/fi';
import { BsCurrencyDollar, BsShield, BsMap, BsGearFill } from 'react-icons/bs';
import { RiContactsLine } from 'react-icons/ri';
import { MdOutlineDangerous, MdAttachMoney, MdOutlineWaterDrop } from 'react-icons/md';
import { HiOutlineDocument } from 'react-icons/hi';
import { GrLocation } from 'react-icons/gr';


export const links = [
  {
    name: 'dashboard',
    icon: <BsMap />,
  },
  {
    name: 'assets',
    icon: <AiOutlineUnorderedList />,
  },
  {
    name: 'customers',
    icon: <RiContactsLine />,
  },
  {
    name: 'schedule',
    icon: <AiOutlineCalendar />,
  },
  {
    name: 'report',
    icon: <HiOutlineDocument />,
  },
];

export const earningData = [
{
icon: <BsGearFill />,
amount: '4,000',
percentage: '-',
title: 'Total Assets',
iconColor: '#03C9D7',
iconBg: '#E5FAFB',
pcColor: 'text-gray-600',
},
{
icon: <AiOutlineWarning />,
amount: '39',
percentage: '-4%',
title: 'Critical Assets',
iconColor: 'rgb(0, 194, 146)',
iconBg: 'rgb(235, 250, 242)',
pcColor: 'text-green-600',
},
{
icon: <MdOutlineDangerous />,
amount: '4,396',
percentage: '+2%',
title: 'Failures',
iconColor: 'rgb(228, 106, 118)',
iconBg: 'rgb(255, 244, 229)',
pcColor: 'text-red-600',
},
{
icon: <MdOutlineWaterDrop />,
amount: '6,339',
percentage: '-10%',
title: 'Lost Water',
iconColor: 'rgb(0, 194, 146)',
iconBg: 'rgb(235, 250, 242)',
pcColor: 'text-green-600',
},
{
icon: <MdAttachMoney />,
amount: '39,354',
percentage: '+1,342',
title: 'Money Saved',
iconColor: 'rgb(0, 194, 146)',
iconBg: 'rgb(235, 250, 242)',
pcColor: 'text-green-600',
},
{
icon: <FiBarChart />,
amount: '98',
percentage: '-2',
title: 'Average Pipe Age',
iconColor: 'rgb(0, 194, 146)',
iconBg: 'rgb(235, 250, 242)',
pcColor: 'text-green-600',
},
];

export const gridOrderImage = (props) => (
  <div>
    <img
      className="rounded-xl h-20 md:ml-3"
      src={props.ProductImage}
      alt="order-item"
    />
  </div>
);

export const gridOrderStatus = (props) => (
  <button
    type="button"
    style={{ background: props.StatusBg }}
    className="text-white py-1 px-2 capitalize rounded-2xl text-md"
  >
    {props.Status}
  </button>
);

const gridEmployeeProfile = (props) => (
  <div className="flex items-center gap-2">
    <img
      className="rounded-full w-10 h-10"
      src={props.EmployeeImage}
      alt="employee"
    />
    <p>{props.Name}</p>
  </div>
);

const gridEmployeeCountry = (props) => (
  <div className="flex items-center justify-center gap-2">
    <GrLocation />
    <span>{props.Country}</span>
  </div>
);
const customerGridImage = (props) => (
  <div className="gap-4">
    <p>{props.CustomerName}</p>
    <p>{props.CustomerEmail}</p>
  </div>
);

const customerGridStatus = (props) => (
  <div className="flex gap-2 justify-center items-center text-gray-700 capitalize">
    <p style={{ background: props.StatusBg }} className="rounded-full h-3 w-3" />
    <p>{props.Status}</p>
  </div>
);

export const customersGrid = [
  { field: 'CustomerAddress',
    headerText: 'Address',
    width: '150',
    textAlign: 'Center' },
  { field: 'CustomerID',
    headerText: 'Customer ID',
    width: '120',
    textAlign: 'Center',
    isPrimaryKey: true,
  },
  { field: 'Status',
    headerText: 'Status',
    width: '130',
    format: 'yMd',
    textAlign: 'Center',
    template: customerGridStatus },
  {
    field: 'TotalOutages',
    headerText: 'Total Outages',
    width: '100',
    format: 'C2',
    textAlign: 'Center' },
  { field: 'Rate',
    headerText: 'Rate per Gallon',
    width: '100',
    format: 'yMd',
    textAlign: 'Center' },
  { field: 'PipeMaterial',
    headerText: 'Service Pipe Material',
    width: '150',
    textAlign: 'Center' },
];

export const employeesGrid = [
  { field: 'AssetID',
    width: '150',
    headerText: 'Asset ID',
    textAlign: 'Center' },
  { field: 'AssetCondition',
    headerText: 'Condition',
    width: '170',
    textAlign: 'Center' },
  { field: 'Street',
    headerText: 'Street',
    width: '120',
    textAlign: 'Center' },
  { field: 'AssetAge',
    headerText: 'Age',
    width: '135',
    format: 'yMd',
    textAlign: 'Center' },
  { field: 'Status',
    headerText: 'Status',
    width: '120',
    textAlign: 'Center' },
];

export const ordersGrid = [
  {
    field: 'Statistic',
    headerText: 'Statistic',
    textAlign: 'Left',
    width: '120',
  },
  {
    field: 'Value',
    headerText: 'Value',
    width: '150',
    textAlign: 'Right',
  },
];

export const kanbanGrid = [
  { headerText: 'To Do',
    keyField: 'Open',
    allowToggle: true },

  { headerText: 'In Progress',
    keyField: 'InProgress',
    allowToggle: true },

  { headerText: 'Testing',
    keyField: 'Testing',
    allowToggle: true,
    isExpanded: false },

  { headerText: 'Done',
    keyField: 'Close',
    allowToggle: true },
];

export const customersData = [
  {
    CustomerAddress: '21 Spencer Road',
    CustomerID: 1001,
    Status: 'Active',
    StatusBg: '#8BE78B',
    TotalOutages: '4',
    Rate: '$0.003',
    PipeMaterial: 'Copper',
  },
  {
    CustomerAddress: '23 Spencer Road',
    CustomerID: 1002,
    Status: 'Active',
    StatusBg: '#8BE78B',
    TotalOutages: '2',
    Rate: '$0.003',
    PipeMaterial: 'Copper',
  },
  {
    CustomerAddress: '25 Spencer Road',
    CustomerID: 1003,
    Status: 'Active',
    StatusBg: '#8BE78B',
    TotalOutages: '3',
    Rate: '$0.003',
    PipeMaterial: 'Copper',
  },
  {
    CustomerAddress: '27 Spencer Road',
    CustomerID: 1004,
    Status: 'Active',
    StatusBg: '#8BE78B',
    TotalOutages: '4',
    Rate: '$0.003',
    PipeMaterial: 'Copper',
  },
  {
    CustomerAddress: '29 Spencer Road',
    CustomerID: 1005,
    Status: 'Active',
    StatusBg: '#8BE78B',
    TotalOutages: '2',
    Rate: '$0.003',
    PipeMaterial: 'Lead',
  },
];

export const employeesData = [
  {
    AssetID: 1,
    AssetCondition: 'Good',
    Street: 'Spencer',
    AssetAge: '88',
    Status: 'UP'
  },
  {
    AssetID: 2,
    AssetCondition: 'Vulnerable',
    Street: 'Spencer',
    AssetAge: '87',
    Status: 'UP'
  },
  {
    AssetID: 3,
    AssetCondition: 'Fair',
    Street: 'Spencer',
    AssetAge: '60',
    Status: 'UP'
  },
  {
    AssetID: 4,
    AssetCondition: 'Vulnerable',
    Street: 'Spencer',
    AssetAge: '31',
    Status: 'UP'
  },
  {
    AssetID: 5,
    AssetCondition: 'Critical',
    Street: 'Spencer',
    AssetAge: '62',
    Status: 'UP'
  },
];

export const ordersData = [
  {
    Statistic: 'Total Pipes',
    Value: '1000',
  },
  {
    Statistic: 'Total Failures',
    Value: '200',
  },
  {
    Statistic: 'Total Water Delivered',
    Value: '1,000,000',
  },
  {
    Statistic: 'Water Lost',
    Value: '1,000',
  },
  {
    Statistic: 'Customers',
    Value: '24,000',
  },
];

export const scheduleData = [
  {
    Id: 1,
    Subject: 'Explosion of Betelgeuse Star',
    Location: 'Space Center USA',
    StartTime: '2021-01-10T04:00:00.000Z',
    EndTime: '2021-01-10T05:30:00.000Z',
    CategoryColor: '#1aaa55',
  },
];

export const themeColors = [
  {
    name: 'blue-theme',
    color: '#1A97F5',
  },
  {
    name: 'green-theme',
    color: '#03C9D7',
  },
  {
    name: 'purple-theme',
    color: '#7352FF',
  },
  {
    name: 'red-theme',
    color: '#FF5C8E',
  },
  {
    name: 'indigo-theme',
    color: '#1E4DB7',
  },
  {
    color: '#FB9678',
    name: 'orange-theme',
  },
];

export const userProfileData = [
  {
    icon: <BsCurrencyDollar />,
    title: 'My Profile',
    desc: 'Account Settings',
    iconColor: '#03C9D7',
    iconBg: '#E5FAFB',
  },
  {
    icon: <BsShield />,
    title: 'My Inbox',
    desc: 'Messages & Emails',
    iconColor: 'rgb(0, 194, 146)',
    iconBg: 'rgb(235, 250, 242)',
  },
  {
    icon: <FiCreditCard />,
    title: 'My Tasks',
    desc: 'To-do and Daily Tasks',
    iconColor: 'rgb(255, 244, 229)',
    iconBg: 'rgb(254, 201, 15)',
  },
];

export const areaPrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  majorGridLines: { width: 0 },
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  labelStyle: { color: 'gray' },
};

export const areaPrimaryYAxis = {
  labelFormat: '{value}%',
  lineStyle: { width: 0 },
  maximum: 4,
  interval: 1,
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelStyle: { color: 'gray' },

};
export const barPrimaryXAxis = {
  valueType: 'Category',
  interval: 1,
  majorGridLines: { width: 0 },
};
export const barPrimaryYAxis = {
  majorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  lineStyle: { width: 0 },
  labelStyle: { color: 'transparent' },
};
const areaChartData = [
  [
    { x: new Date(2002, 0, 1), y: 2.2 },
    { x: new Date(2003, 0, 1), y: 3.4 },
    { x: new Date(2004, 0, 1), y: 2.8 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 2 },
    { x: new Date(2003, 0, 1), y: 1.7 },
    { x: new Date(2004, 0, 1), y: 1.8 },
  ],
  [
    { x: new Date(2002, 0, 1), y: 0.8 },
    { x: new Date(2003, 0, 1), y: 1.3 },
    { x: new Date(2004, 0, 1), y: 1.1 },
  ],
];

export const areaCustomSeries = [
  {
    dataSource: areaChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'USA',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',

  },
  {
    dataSource: areaChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'France',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
  {
    dataSource: areaChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Germany',
    opacity: '0.8',
    type: 'SplineArea',
    width: '2',
  },
];

export const barChartData = [
  [
    { x: 'USA', y: 46 },
    { x: 'GBR', y: 27 },
    { x: 'CHN', y: 26 },
  ],
  [
    { x: 'USA', y: 37 },
    { x: 'GBR', y: 23 },
    { x: 'CHN', y: 18 },
  ],
  [
    { x: 'USA', y: 38 },
    { x: 'GBR', y: 17 },
    { x: 'CHN', y: 26 },
  ],
];

export const barCustomSeries = [
  {
    dataSource: barChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Gold',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Silver',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
  {
    dataSource: barChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'Bronze',
    type: 'Column',
    marker: {
      dataLabel: {
        visible: true,
        position: 'Top',
        font: { fontWeight: '600', color: '#ffffff' },
      },
    },
  },
];
export const colorMappingData = [
  [
    { x: 'Jan', y: 6.96 },
    { x: 'Feb', y: 8.9 },
    { x: 'Mar', y: 12 },
  ],
  ['#FFFF99'],
  ['#FFA500'],
  ['#FF4040'],
];

export const rangeColorMapping = [
  { label: '1°C to 10°C',
    start: '1',
    end: '10',
    colors: colorMappingData[1] },

  { label: '11°C to 20°C',
    start: '11',
    end: '20',
    colors: colorMappingData[2] },

  { label: '21°C to 30°C',
    start: '21',
    end: '30',
    colors: colorMappingData[3] },

];

export const ColorMappingPrimaryXAxis = {
  valueType: 'Category',
  majorGridLines: { width: 0 },
  title: 'Months',
};

export const ColorMappingPrimaryYAxis = {
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}°C',
  title: 'Temperature',
};

export const FinancialPrimaryXAxis = {
  valueType: 'DateTime',
  minimum: new Date('2016, 12, 31'),
  maximum: new Date('2017, 9, 30'),
  crosshairTooltip: { enable: true },
  majorGridLines: { width: 0 },
};

export const FinancialPrimaryYAxis = {
  title: 'Price',
  minimum: 100,
  maximum: 180,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
};

export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'y',
  intervalType: 'Years',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};

export const LinePrimaryYAxis = {
  labelFormat: '{value}%',
  rangePadding: 'None',
  minimum: 0,
  maximum: 100,
  interval: 20,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};

export const lineChartData = [
  [
    { x: new Date(2005, 0, 1), y: 21 },
    { x: new Date(2006, 0, 1), y: 24 },
    { x: new Date(2007, 0, 1), y: 36 },
  ],
  [
    { x: new Date(2005, 0, 1), y: 28 },
    { x: new Date(2006, 0, 1), y: 44 },
    { x: new Date(2007, 0, 1), y: 48 },
  ],

  [
    { x: new Date(2005, 0, 1), y: 10 },
    { x: new Date(2006, 0, 1), y: 20 },
    { x: new Date(2007, 0, 1), y: 30 },
  ],
];

export const dropdownData = [
  {
    Id: '1',
    Time: 'March 2021',
  },
  {
    Id: '2',
    Time: 'April 2021',
  }, {
    Id: '3',
    Time: 'May 2021',
  },
];

export const SparklineAreaData = [
  { x: 1, y: 2 },
  { x: 2, y: 6 },
  { x: 3, y: 8 },
  { x: 4, y: 5 },
  { x: 5, y: 10 },

];

export const lineCustomSeries = [
  { dataSource: lineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Germany',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'England',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

  { dataSource: lineChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'India',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line' },

];

export const pieChartData = [
  { x: 'Labour', y: 18, text: '18%' },
  { x: 'Legal', y: 8, text: '8%' },
  { x: 'Production', y: 15, text: '15%' },
];

export const contextMenuItems = [
  'AutoFit',
  'AutoFitAll',
  'SortAscending',
  'SortDescending',
  'Copy',
  'Edit',
  'Delete',
  'Save',
  'Cancel',
  'PdfExport',
  'ExcelExport',
  'CsvExport',
  'FirstPage',
  'PrevPage',
  'LastPage',
  'NextPage',
];

export const ecomPieChartData = [
  { x: '2018', y: 18, text: '35%' },
  { x: '2019', y: 18, text: '15%' },
  { x: '2020', y: 18, text: '25%' },
];

export const stackedChartData = [
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
  ],
  [
    { x: 'Jan', y: 111.1 },
    { x: 'Feb', y: 127.3 },
    { x: 'Mar', y: 143.4 },
  ],
];

export const stackedCustomSeries = [

  { dataSource: stackedChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'Budget',
    type: 'StackingColumn',
    background: 'blue',

  },

  { dataSource: stackedChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'Expense',
    type: 'StackingColumn',
    background: 'red',

  },

];

export const stackedPrimaryXAxis = {
  majorGridLines: { width: 0 },
  minorGridLines: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
  interval: 1,
  lineStyle: { width: 0 },
  labelIntersectAction: 'Rotate45',
  valueType: 'Category',
};

export const stackedPrimaryYAxis = {
  lineStyle: { width: 0 },
  minimum: 100,
  maximum: 400,
  interval: 100,
  majorTickLines: { width: 0 },
  majorGridLines: { width: 1 },
  minorGridLines: { width: 1 },
  minorTickLines: { width: 0 },
  labelFormat: '{value}',
};

export const kanbanData = [
  {
    Id: 'Task 1',
    Title: 'Task - 29001',
    Status: 'Open',
    Summary: 'Analyze the new requirements gathered from the customer.',
    Type: 'Story',
    Priority: 'Low',
    Tags: 'Analyze,Customer',
    Estimate: 3.5,
    Assignee: 'Nancy Davloio',
    RankId: 1,
    Color: '#02897B',
    ClassName: 'e-story, e-low, e-nancy-davloio',
  },
  {
    Id: 'Task 2',
    Title: 'Task - 29002',
    Status: 'InProgress',
    Summary: 'Improve application performance',
    Type: 'Improvement',
    Priority: 'Normal',
    Tags: 'Improvement',
    Estimate: 6,
    Assignee: 'Andrew Fuller',
    RankId: 1,
    Color: '#673AB8',
    ClassName: 'e-improvement, e-normal, e-andrew-fuller',
  },
  {
    Id: 'Task 3',
    Title: 'Task - 29003',
    Status: 'Open',
    Summary: 'Arrange a web meeting with the customer to get new requirements.',
    Type: 'Others',
    Priority: 'Critical',
    Tags: 'Meeting',
    Estimate: 5.5,
    Assignee: 'Janet Leverling',
    RankId: 2,
    Color: '#1F88E5',
    ClassName: 'e-others, e-critical, e-janet-leverling',
  },
];

export const financialChartData = [
  {
    x: new Date('2012-04-02'),
    open: 85.9757,
    high: 90.6657,
    low: 85.7685,
    close: 90.5257,
    volume: 660187068,
  },
  {
    x: new Date('2012-04-09'),
    open: 89.4471,
    high: 92,
    low: 86.2157,
    close: 86.4614,
    volume: 912634864,
  },
  {
    x: new Date('2012-04-16'),
    open: 87.1514,
    high: 88.6071,
    low: 81.4885,
    close: 81.8543,
    volume: 1221746066,
  },
];

export const PyramidData = [
  { x: 'Sweet Treats', y: 120, text: '120 cal' },
  { x: 'Milk, Youghnut, Cheese', y: 435, text: '435 cal' },
  { x: 'Vegetables', y: 470, text: '470 cal' },
];
