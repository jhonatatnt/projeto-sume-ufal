export interface FrequencyData {
    nome: string;
    sexo: string | null;
    localidade: string;
    res: FrequencyPeriod[];
  }
  
  export interface FrequencyPeriod {
    periodo: string;
    frequencia: number;
  }
  