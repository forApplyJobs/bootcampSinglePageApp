// education.model.ts

export class Education {
    title: string;
    subTitle: string;
    dateRange: string;
    description: string;
  
    constructor(title: string, subTitle: string, dateRange: string, description: string) {
      this.title = title;
      this.subTitle = subTitle;
      this.dateRange = dateRange;
      this.description = description;
    }
  }
  