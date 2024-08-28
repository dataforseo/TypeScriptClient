[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / IDataforseoLabsGoogleAppIntersectionLiveItem

# Interface: IDataforseoLabsGoogleAppIntersectionLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### intersection\_result?

> `optional` **intersection\_result**: `object`

contains SERP data for the returned keyword
data will be provided in separate arrays for each app ID you specified in the app_ids object when setting a task;
depending on the number of specified app IDs, it can contain from 1 to 20 arrays named respectively

#### Index Signature

 \[`key`: `string`\]: [`AppDataGooglePlaySearchOrganicSerpElementItem`](../classes/AppDataGooglePlaySearchOrganicSerpElementItem.md)

#### Defined in

main.ts:116430

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordData`](../classes/KeywordData.md)

keyword data for the returned keyword

#### Defined in

main.ts:116426

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Defined in

main.ts:116424
