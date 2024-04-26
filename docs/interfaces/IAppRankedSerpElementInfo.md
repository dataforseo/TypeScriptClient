**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IAppRankedSerpElementInfo

# Interface: IAppRankedSerpElementInfo

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Source

main.ts:111359

***

### last\_updated\_time?

> **`optional`** **last\_updated\_time**: `string`

date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Source

main.ts:111366

***

### previous\_updated\_time?

> **`optional`** **previous\_updated\_time**: `string`

previous to the most recent date and time when SERP data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-10-15 12:57:46 +00:00;
in this case, will equal null

#### Source

main.ts:111372

***

### se\_results\_count?

> **`optional`** **se\_results\_count**: `string`

number of search results for the returned keyword

#### Source

main.ts:111361

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:111353

***

### serp\_item?

> **`optional`** **serp\_item**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)

contains data on the SERP element
the list of supported SERP elements can be found below

#### Source

main.ts:111356
