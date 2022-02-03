export interface OptionsInterface {
  limit: number,
  sort: string,
  page: number,
  filter: string
}

export const INITIAL_OPTIONS: OptionsInterface = {
  limit: 10,
  page: 1,
  sort: "",
  filter: ""
};