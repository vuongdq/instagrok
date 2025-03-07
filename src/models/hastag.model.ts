export class Hastag {
  id: number;
  hashtag: string;
  description?: string;

  constructor({id, hashtag, description}){
    if(id !== null) this.id = id;
    if(hashtag !== null) this.hashtag = hashtag;
    if(description !== null) this.description = description;
  }
}