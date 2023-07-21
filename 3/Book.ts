// Book class (Base Class)
class Book {
  protected title: string;
  protected author: string;
  protected publicationYear: number;

  constructor(title: string, author: string, publicationYear: number) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }

  getBookInfo(): string {
    return `${this.title} by ${this.author}, ${this.publicationYear}`;
  }
}

// FictionBook class (Derived Class)
class FictionBook extends Book {
  private genre: string;

  constructor(title: string, author: string, publicationYear: number, genre: string) {
    super(title, author, publicationYear);
    this.genre = genre;
  }

  getBookInfo(): string {
    return `${super.getBookInfo()}, Genre: ${this.genre} (Fiction)`;
  }
}

// NonFictionBook class (Derived Class)
class NonFictionBook extends Book {
  private topic: string;

  constructor(title: string, author: string, publicationYear: number, topic: string) {
    super(title, author, publicationYear);
    this.topic = topic;
  }

  getBookInfo(): string {
    return `${super.getBookInfo()}, Topic: ${this.topic} (Non-Fiction)`;
  }
}

// Sample usage of the classes
const fictionBook = new FictionBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925, 'Classic');
const nonFictionBook = new NonFictionBook('Sapiens', 'Yuval Noah Harari', 2014, 'History');

console.log(fictionBook.getBookInfo());
console.log(nonFictionBook.getBookInfo());
