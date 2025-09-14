export interface Blog {
    title: string;
    url: string;
    date: string;
    description: string;
}

export interface Talk {
    title: string;
    event: string;
    date: string;
    url: string | null;
    recorded: boolean;
}

export interface Video {
    title: string;
    url: string;
    date: string;
    description: string;
}
