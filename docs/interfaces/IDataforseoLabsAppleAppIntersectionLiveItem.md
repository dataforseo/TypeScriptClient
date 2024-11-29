[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsAppleAppIntersectionLiveItem

# Interface: IDataforseoLabsAppleAppIntersectionLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### intersection\_result?

> `optional` **intersection\_result**: `object`

contains SERP data for the returned keyword
data will be provided in separate arrays for each app ID you specified in the app_ids object when setting a task;
depending on the number of specified app IDs, it can contain from 1 to 20 arrays named respectively

#### Index Signature

 \[`key`: `string`\]: [`AppDataAppStoreSearchOrganicSerpElementItem`](../classes/AppDataAppStoreSearchOrganicSerpElementItem.md)

#### Defined in

main.ts:124985

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)

keyword data for the returned keyword

#### Defined in

main.ts:124981

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:124979
