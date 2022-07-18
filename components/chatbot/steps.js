export default [
	{
		id: '1',
		message: 'What is your name?',
		trigger: '2',
	},
	{
		id: '2',
		user: true,
		trigger: '3',
	},
	{
		id: '3',
		message: 'Hi {previousValue}, nice to meet you!',
		trigger: '4',
	},
	{
		id: '4',
		message: 'Select Product to proceed!',
		trigger: '5',
	},
	{
		id: '5',
		options: [
			{ value: "Export & Domestic Credit Insurance", label: 'Export & Domestic Credit Insurance', trigger: '6' },
			{ value: "Bonds & Financial Guarantees", label: 'Bonds & Financial Guarantees', trigger: '7' },
			{ value: "MSME Credit & Financial Guarantees", label: 'MSME Credit & Financial Guarantees', trigger: '9' },
			{ value: "General Insurance", label: 'General Insurance', trigger: '8' },
		],
	},
	{
		id: '6',
		options: [
			{ value: "Export Payment Insurance Policy", label: 'Export Payment Insurance Policy', trigger: '10' },
			{ value: "Domestic Payment Insurance Policy", label: 'Domestic Payment Insurance Policy', trigger: '10' },

		],
	},
	{
		id: '7',
		options: [
			{ value: "Construction Bonds", label: 'Construction Bonds', trigger: '10' },
			{ value: "Custom Bonds", label: 'Custom Bonds', trigger: '10' },
		],
	},
	{
		id: '8',
		options: [
			{ value: "Motor Insurance", label: 'Motor Insurance', trigger: '10' },
			{ value: "Home Protection Insurance", label: 'Home Protection Insurance', trigger: '10' },
			{ value: "Marine Insurance", label: 'Marine Insurance', trigger: '10' },
			{ value: "Golfers Insurance", label: 'Golfers Insurance', trigger: '10' },
			{ value: "Personal Accident Insurance", label: 'Personal Accident Insurance', trigger: '10' },
		],
	},
	{
		id: '9',
		message: 'Sorry! we are not operating {previousValue} right now ',
		trigger: '2',
	},
	{
		id: '10',
		message: 'Awesome! We will be connecting you to our {previousValue} service Support Team!',
		end: true,
	},
];

