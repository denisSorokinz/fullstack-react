import { JSDOM } from 'jsdom';
import superagent from 'superagent';
import fs from 'fs';
import { FILTER_NAMES, FilterOption, ISelectFilter } from '../types/filters';
import { ENDPOINTS, FILTERS, FiltersType } from '../constants';


const fetchDocumentByUrl = async (url: string) => {
  const html = (await superagent.get(url)).text;
  fs.writeFileSync('html.txt', html);
  const {
    window: { document },
  } = new JSDOM(html);

  return document;
};

const parseSingleFilterFromDocument = (document: Document, FILTER_NAME: FILTER_NAMES) => {
  const optionNodes = document.querySelectorAll(`select[name='${FILTERS[FILTER_NAME].slug}'] option`) as NodeListOf<HTMLOptionElement>;
  const options = Array.from(optionNodes)
    .slice(1)
    .map(({ text: name, value }) => ({ name: name.trim(), value } as FilterOption));

  return options;
};

const parseFiltersFromDocument = (document: Document) => {
  return {
    [FILTER_NAMES.CATEGORY]: parseSingleFilterFromDocument(document, FILTER_NAMES.CATEGORY),
    [FILTER_NAMES.BRAND]: parseSingleFilterFromDocument(document, FILTER_NAMES.BRAND),
    [FILTER_NAMES.MODEL]: parseSingleFilterFromDocument(document, FILTER_NAMES.MODEL),
    [FILTER_NAMES.REGION]: parseSingleFilterFromDocument(document, FILTER_NAMES.REGION),
  };
};

const fetchFilterOptionsFromAPI = async (url: string) => {
  const options = (await (await fetch(url)).json()) as FilterOption[];

  return options;
};

const getFilters = async (document: Document) => {
  const filters = { ...FILTERS };

  const parsedFilters = parseFiltersFromDocument(document);
  const cityOptions = await fetchFilterOptionsFromAPI(ENDPOINTS.CITIES_API);

  const options = { ...parsedFilters, [FILTER_NAMES.CITY]: cityOptions };
  for (const filterName of Object.keys(options)) {
    const typedFilterName = filterName as FILTER_NAMES;

    const filter = filters[typedFilterName] as ISelectFilter;

    filter.options = options[typedFilterName];
  }

  return filters;
};

const sanitizeFilters = (filters: FiltersType, appliedFilters: FILTER_NAMES[]) => {
  const newFilters = { ...filters } as FiltersType;

  for (let filterName in newFilters) {
    const typedKey = filterName as keyof typeof newFilters;

    const filter = newFilters[typedKey];

    if (filter.type !== 'select' && filter.type !== 'checkbox') continue;

    if (filter.dependency && !appliedFilters.includes(filter.dependency.filterName)) filter.options = [];
  }

  return newFilters;
};

export { fetchDocumentByUrl, parseSingleFilterFromDocument, parseFiltersFromDocument, fetchFilterOptionsFromAPI, getFilters, sanitizeFilters };
