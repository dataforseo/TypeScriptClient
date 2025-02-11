[**Documentation**](../README.md)

***

[Documentation](../README.md) / IDataforseoLabsGoogleAppIntersectionLiveItem

# Interface: IDataforseoLabsGoogleAppIntersectionLiveItem

Defined in: main.ts:123067

## Indexable

\[`key`: `string`\]: `any`

## Properties

### intersection\_result?

> `optional` **intersection\_result**: `object`

Defined in: main.ts:123075

contains SERP data for the returned keyword
data will be provided in separate arrays for each app ID you specified in the app_ids object when setting a task;
depending on the number of specified app IDs, it can contain from 1 to 20 arrays named respectively

#### Index Signature

\[`key`: `string`\]: [`AppDataGooglePlaySearchOrganicSerpElementItem`](../classes/AppDataGooglePlaySearchOrganicSerpElementItem.md)

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)

Defined in: main.ts:123071

keyword data for the returned keyword

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:123069

search engine type
