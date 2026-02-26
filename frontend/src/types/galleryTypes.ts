export interface ISanityImage {
  _type: "image";
  _key: string;
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface IArtView {
  _id: string;
  title?: string;
  image: ISanityImage;
  nav: {
    prev?: string;
    next?: string;
  };
}

export interface IIllustration {
  _id: string;
  title?: string;
  image: ISanityImage;
}

export interface IConcept {
  _type?: "concept";
  _id: string;
  title?: string;
  relatedImages: ISanityImage[];
}
