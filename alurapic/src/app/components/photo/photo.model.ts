export interface PhotoModel {
    id: number;
    postDate: Date;
    url: string;
    description: string;
    allowComments: true;
    likes: number;
    comments: number;
    userId: number;
}