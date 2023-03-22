export interface Contact {
	id: number;
  	infos: ContactInfo[];
}

export interface ContactInfo {
	[key: string]: string;
}