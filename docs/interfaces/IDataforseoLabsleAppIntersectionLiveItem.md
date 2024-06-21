**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsleAppIntersectionLiveItem

# Interface: IDataforseoLabsleAppIntersectionLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### intersection\_result?

> **`optional`** **intersection\_result**: `Object`

contains SERP data for the returned keyword
data will be provided in separate arrays for each app ID you specified in the app_ids object when setting a task;
depending on the number of specified app IDs, it can contain from 1 to 20 arrays named respectively

#### Index signature

 \[`key`: `string`\]: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)

#### Source

main.ts:114635

***

### keyword\_data?

> **`optional`** **keyword\_data**: [`KeywordDataKeywordDataInfo`](../classes/KeywordDataKeywordDataInfo.md)

keyword data for the returned keyword

#### Source

main.ts:114631

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Source

main.ts:114629
