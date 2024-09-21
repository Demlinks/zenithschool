export interface IProfile {
  id?: string | number;
  title?: string;
  first_name?: string;
  last_name?: string;
  middle_name?: string;
  gender?: string;
  dob?: string;
  homeAddress?: string;
  stateOfOrigin?: string;
  homeTown?: string;
  qualification?: string;
  country?: string;
  subject?: string;
  classTeacher?: string;
  age?: number;
  image?: string;
  phoneNumber?: string;
  email?: string;
}
export interface IEvent {
  event: string;
  date: string;
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

export interface totalPercentageValueI {
  completed: number;
  incomplete: number;
  void: number;
  total_students: number;
  paid: number;
  paid_half: number;
  paid_nothing: number;
  starter_pack_collected: number;
}
