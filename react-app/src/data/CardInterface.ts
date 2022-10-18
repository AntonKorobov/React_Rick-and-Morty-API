export interface CardInterface {
  title: string;
  author: string;
  publisher: string;
  category: string[];
  description: string;
  pages: number;
  publishDate: string;
  price: number;
  language: string;
  coverType: string;
  img: string;
  written: boolean;
  id: string;
}

// export type Category =
//   | ''
//   | 'Classics'
//   | 'Literary'
//   | 'Political'
//   | 'Psychological'
//   | 'Science Fiction'
//   | 'Media Tie-In'
//   | 'Action & Adventure'
//   | 'Apocalyptic & Post-Apocalyptic'
//   | 'Space Science'
//   | 'Social History'
//   | 'Political'
//   | 'Humorous Stories'
//   | 'Satire';
