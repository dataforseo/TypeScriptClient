[**Documentation**](../README.md)

***

[Documentation](../README.md) / IAppRankedSerpElementInfo

# Interface: IAppRankedSerpElementInfo

Defined in: main.ts:121812

## Indexable

\[`key`: `string`\]: `any`

## Properties

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:121820

direct URL to search engine results
you can use it to make sure that we provided accurate results

***

### last\_updated\_time?

> `optional` **last\_updated\_time**: `string`

Defined in: main.ts:121827

date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

***

### previous\_updated\_time?

> `optional` **previous\_updated\_time**: `string`

Defined in: main.ts:121833

previous to the most recent date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-10-15 12:57:46 +00:00;
in this case, will equal null

***

### se\_results\_count?

> `optional` **se\_results\_count**: `string`

Defined in: main.ts:121822

number of search results for the returned keyword

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:121814

search engine type

***

### serp\_item?

> `optional` **serp\_item**: [`AppDataGooglePlaySearchOrganicSerpElementItem`](../classes/AppDataGooglePlaySearchOrganicSerpElementItem.md)

Defined in: main.ts:121817

contains data on the SERP element
the list of supported SERP elements can be found below
