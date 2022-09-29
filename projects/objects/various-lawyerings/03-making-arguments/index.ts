// Write your types here! ✨
export type Allowed = {
	deliberationHours: number;
	status: "allowed";
};

export type Denied = {
	annoyedJustice: boolean;
	deliberationHours: number;
	status: "denied";
};

export type Pending = {
	deliberationHours: number;
	status: "pending";
};

export type PreTrial = {
	classification: "dismissals" | "suppressions" | "venue changes";
	step: "pre-trial";
};

export type PostTrial = {
	classification: "corrections" | "acquittals" | "new trials";
	step: "post-trial";
};

export type MotionStatus = Allowed | Denied | Pending;
export type MotionStep = PreTrial | PostTrial;

export type Motion =
	| MotionStatus
	| (MotionStep & {
			from: "defendant" | "plaintiff";
			reason: string;
	  });

export const motions: Motion[] = [
	{
		annoyedJustice: true,
		classification: "acquittals",
		deliberationHours: 1,
		from: "defendant",
		reason: "The heretofore document had dried ink on it.",
		status: "denied",
		step: "post-trial",
	},
	{
		annoyedJustice: true,
		classification: "corrections",
		deliberationHours: 2.5,
		from: "plaintiff",
		reason: "The tenant has ninety days to vacate.",
		status: "denied",
		step: "post-trial",
	},
	{
		classification: "suppressions",
		deliberationHours: 4,
		from: "plaintiff",
		reason: "Frank was never allowed in the house.",
		status: "allowed",
		step: "pre-trial",
	},
	{
		classification: "new trials",
		deliberationHours: 3,
		from: "defendant",
		reason: "The duel's been accepted. There's no backing out. That's the law.",
		status: "pending",
		step: "post-trial",
	},
	{
		annoyedJustice: false,
		classification: "dismissals",
		deliberationHours: 0.5,
		from: "plaintiff",
		reason:
			"It seems like you have a tenuous grasp on the English language in general.",
		status: "denied",
		step: "pre-trial",
	},
	{
		annoyedJustice: true,
		classification: "corrections",
		deliberationHours: 1.5,
		from: "defendant",
		reason: "Fillibuster?",
		status: "denied",
		step: "post-trial",
	},
	{
		annoyedJustice: true,
		classification: "venue changes",
		deliberationHours: 0.25,
		from: "defendant",
		reason: "A time was never specified for the duel.",
		status: "denied",
		step: "pre-trial",
	},
	{
		annoyedJustice: true,
		classification: "corrections",
		deliberationHours: 5,
		from: "plaintiff",
		reason: "He's making a few good points!",
		status: "denied",
		step: "post-trial",
	},
];
