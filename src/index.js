import './index.css';

import $ from 'jquery';
import DataTable from 'datatables.net-dt';
 
const Main = () => {

	const dataSet = [
		['Tiger Nixon', 'System Architect', 'Edinburgh', '5421', '2011/04/25', '$320,800'],
		['Garrett Winters', 'Accountant', 'Tokyo', '8422', '2011/07/25', '$170,750'],
		['Ashton Cox', 'Junior Technical Author', 'San Francisco', '1562', '2009/01/12', '$86,000'],
		['Cedric Kelly', 'Senior Javascript Developer', 'Edinburgh', '6224', '2012/03/29', '$433,060'],
	];
	
	let table = new DataTable('#table', {
	columns: [
		{title: 'Name'},
		{title: 'Position'},
		{title: 'Office'},
		{title: 'Extn.'},
		{title: 'Start date'},
		{title: 'Salary'}
		],
		data: dataSet,
	});
}


document.addEventListener('DOMContentLoaded', Main, { once: true });
