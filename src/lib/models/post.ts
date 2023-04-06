export class Post {
  title: string;
  description: string;
  location: string;
  price: number;
  published: boolean;
  content: string;
  cover: null;
  created: string;
  constructor(title: string, price: number, location: string, description: string, published: boolean, content: string, cover: null, created: string) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.location = location;
    this.published = true;
    this.content = content;
    this.cover = cover;
    this.created = created;
  }
}