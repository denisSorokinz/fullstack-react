type AdditionalParams = {
  lang_id: number;
  page: number;
  view_type_id: number;
  target: string;
  section: string;
  catalog_name: string;
  elastica: boolean;
  nodejs: boolean;
  searchByTypeAction: boolean;
};

type Result = {
  search_result: SearchResult;
  search_result_common: SearchResultCommon;
  active_marka: ActiveMarka;
  active_model: null;
  active_state: null;
  active_city: null;
  revies: null;
  isCommonSearch: boolean;
  additional: Additional;
};

type ActiveMarka = {
  lang_id: number;
  marka_id: number;
  name: string;
  set_cat: string;
  main_category: number;
  active: number;
  country_id: number;
  eng: string;
  count: number;
  fit: number;
};

type Additional = {
  user_auto_positions: any[];
  search_params: SearchParams;
  query_string: string;
};

type SearchParams = {
  all: All;
  cleaned: Cleaned;
};

type All = {
  category_id: number;
  marka_id: number[];
  state: number[];
  s_yers: number[];
  searchType: number;
  target: string;
  event: string;
  lang_id: number;
  page: number;
  limit_page: null;
  countpage: number;
  last_id: number;
  saledParam: number;
  model_id: null[];
  mm_marka_filtr: any[];
  mm_model_filtr: any[];
  useOrigAutoTable: boolean;
  withoutStatus: boolean;
  with_photo: boolean;
  with_video: boolean;
  under_credit: number;
  confiscated_car: number;
  exchange_filter: any[];
  old_only: boolean;
  auto_options: any[];
  user_id: any[];
  person_id: number;
  with_discount: boolean;
  auto_id_str: string;
  black_user_id: number;
  order_by: number;
  is_online: boolean;
  withoutCache: boolean;
  with_last_id: boolean;
  top: number;
  currency: number;
  currency_id: number;
  currencies_arr: any[];
  power_name: number;
  powerFrom: number;
  powerTo: number;
  hide_black_list: any[];
  custom: number;
  abroad: boolean;
  damage: number;
  star_auto: number;
  price_ot: number;
  price_do: number;
  po_yers: null[];
  year: number;
  auto_ids_search_position: number;
  print_qs: number;
  is_hot: number;
  deletedAutoSearch: number;
  can_be_checked: number;
  excludeMM: number[];
  generation_id: null[];
  modification_id: null[];
};

type Cleaned = {
  category_id: number;
  marka_id: number[];
  state: number[];
  s_yers: number[];
  searchType: number;
  target: string;
  event: string;
  lang_id: number;
  countpage: number;
  model_id: null[];
  mm_marka_filtr: any[];
  mm_model_filtr: any[];
  exchange_filter: any[];
  auto_options: any[];
  user_id: any[];
  currency: number;
  currencies_arr: any[];
  hide_black_list: any[];
  po_yers: null[];
  excludeMM: number[];
  generation_id: null[];
  modification_id: null[];
};

type SearchResult = {
  ids: string[];
  count: number;
  last_id: number;
};

type SearchResultCommon = {
  count: number;
  last_id: number;
  data: Datum[];
};

type Datum = {
  id: string;
  type: CAR_TYPES;
};

export enum CAR_TYPES {
  OfferOfTheDay = "OfferOfTheDay",
  UsedAuto = "UsedAuto",
  NewAuto = "NewAuto",
}

type UsedCarsQueryResult = {
  additional_params: AdditionalParams;
  result: Result;
};

export default UsedCarsQueryResult;
