**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / IDataforseoLabsBingPageIntersectionLiveItem

# Interface: IDataforseoLabsBingPageIntersectionLiveItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### intersection\_result?

> **`optional`** **intersection\_result**: `Object`

contains data on the SERP elements found for the returned keyword
data will be provided in separate arrays for each URL you specified in the pages object when setting a task;
depending on the number of specified URLs, it can contain from 1 to 20 arrays named respectively

#### Index signature

 \[`key`: `string`\]: [`BaseDataforseoLabsSerpElementItem`](../classes/BaseDataforseoLabsSerpElementItem.md)

#### Source

main.ts:107254

***

### keyword\_data?

> **`optional`** **keyword\_data**: [`KeywordDataKeywordDataInfo`](../classes/KeywordDataKeywordDataInfo.md)

keyword data for the returned keyword

#### Source

main.ts:107250

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type
search engine type specified in a POST request;
for this endpoint, the field equals bing

#### Source

main.ts:107248
