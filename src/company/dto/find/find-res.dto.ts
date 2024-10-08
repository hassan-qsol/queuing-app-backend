export class FindCompaniesResponseDto {
  id: number;
  companyName: string;
  companyManager: number;
  lat: number;
  lng: number;
  isOpen: boolean;
  operating_days: {
    id: number;
    weekday_id: number;
    weekday: {
      day_name: string;
    };
  }[];
}
