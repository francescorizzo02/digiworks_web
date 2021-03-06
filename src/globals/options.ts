export interface OptionsInterface {

  limit: number;
  sort: string;
  page: number;
  filter: string;
}

export const INITIAL_OPTIONS: OptionsInterface = {
  limit: 10,
  page: 1,
  sort: "",
  filter: "",
};

export const DEFAULT_PAGINATION = {
  current: 1,
  pageSize: INITIAL_OPTIONS.limit,
  showSizeChanger: true,
  locale: { items_per_page: "/ Pagina" },
};
