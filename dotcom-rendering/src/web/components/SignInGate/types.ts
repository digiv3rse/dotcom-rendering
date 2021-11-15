export type CanShowGateProps = {
	isSignedIn: boolean;
	currentTest: CurrentSignInGateABTest;
	contentType: string;
	sectionName?: string;
	tags: TagType[];
	isPaidContent: boolean;
	isPreview?: boolean;
};

export type SignInGateComponent = {
	gate?: (props: SignInGateProps) => JSX.Element;
	canShow: ({
		isSignedIn,
		currentTest,
	}: CanShowGateProps) => Promise<boolean>;
};

export interface SignInGateProps {
	signInUrl: string;
	guUrl: string;
	dismissGate: () => void;
	ophanComponentId: string;
	isComment?: boolean;
	abTest?: CurrentSignInGateABTest;
	isMandatory?: boolean;
}

export type CurrentSignInGateABTest = {
	name: string;
	variant: string;
	id: string;
};

export interface SignInGateSelectorProps {
	isSignedIn?: boolean;
	format: ArticleFormat;
	contentType: string;
	sectionName: string;
	tags: TagType[];
	isPaidContent: boolean;
	isPreview: boolean;
	host?: string;
	pageId: string;
	idUrl?: string;
}

export type SignInGateTestMap = { [name: string]: SignInGateComponent };
