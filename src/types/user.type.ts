export interface IProfile {
    first_name: string;
    last_name: string;
    age: number;
    image: string;
    subject: string;
    dob: string;
    gender: string;
    phoneNumber: string;
    homeAddress: string;
    email: string;
    homeTown: string;
    stateOfOrigin: string;
    classTeacher: string;
    qualification: string;
  }

  

  export interface baseClassInterface {
    id?: number;
    total_starterpack?: number;
    total_others?: number;
    name?: string;
    abbreviation?: string;
    school_fee?: number;
    uniform?: number;
    sport_wear?: number;
    school_bus?: number;
    snack?: number;
    science?: number;
    games?: number;
    library_fee?: number;
    extra_activities?: number;
  }