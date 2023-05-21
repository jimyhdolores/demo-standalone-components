export interface IWordCardComponent {
	image: string;
	title: string;
	company: string;
	publication: string;
}

export interface IWork {
	image: string;
	title: string;
	company: string;
	publication: string;
	country: string;
	isRemote: boolean;
	detail: IWorkDetail;
}

export interface IWorkDetail {
	postulations: number;
	response: string;
	reviewed: string;
	descriptionCompany: string;
	jobFunctions: IJobFunctions;
	jobRequirements: string[];
}

export interface IJobFunctions {
	description: string;
	items: string[];
}
