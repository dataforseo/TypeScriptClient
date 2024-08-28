[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IDataforseoLabsGooglePageIntersectionLiveItem

# Interface: IDataforseoLabsGooglePageIntersectionLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### intersection\_result?

> `optional` **intersection\_result**: `object`

contains data on the SERP elements found for the returned keyword
data will be provided in separate arrays for each URL you specified in the pages object when setting a task;
depending on the number of specified URLs, it can contain from 1 to 20 arrays named respectively

#### Index Signature

 \[`key`: `string`\]: [`BaseDataforseoLabsSerpElementItem`](../classes/BaseDataforseoLabsSerpElementItem.md)

#### Defined in

main.ts:103402

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)

keyword data for the returned keyword

#### Defined in

main.ts:103398

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:103396
