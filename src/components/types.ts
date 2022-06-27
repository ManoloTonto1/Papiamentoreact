interface IbooleanQDoc {
    id: string;
    papiamento: string;
    isPapiamento: number;
    isNotPapiamento: number;
}
interface ISentanceQDoc {
    id: string;
    papiamento: string;
    english: any;
    isPapiamento: number;
}

export type {IbooleanQDoc, ISentanceQDoc};