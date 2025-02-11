[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsPageIntersectionLiveItem

# Interface: IDataforseoLabsPageIntersectionLiveItem

Defined in: main.ts:110439

## Indexable

\[`key`: `string`\]: `any`

## Properties

### intersection\_result?

> `optional` **intersection\_result**: `object`

Defined in: main.ts:110447

contains data on the SERP elements found for the returned keyword
data will be provided in separate arrays for each URL you specified in the pages object when setting a task;
depending on the number of specified URLs, it can contain from 1 to 20 arrays named respectively

#### Index Signature

\[`key`: `string`\]: [`BaseDataforseoLabsSerpElementItem`](../classes/BaseDataforseoLabsSerpElementItem.md)

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)

Defined in: main.ts:110443

keyword data for the returned keyword

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:110441

search engine type
