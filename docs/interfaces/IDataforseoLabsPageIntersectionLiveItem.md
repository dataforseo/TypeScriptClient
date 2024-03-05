[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsPageIntersectionLiveItem

# Interface: IDataforseoLabsPageIntersectionLiveItem

## Implemented by

- [`DataforseoLabsPageIntersectionLiveItem`](../classes/DataforseoLabsPageIntersectionLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [intersection\_result](IDataforseoLabsPageIntersectionLiveItem.md#intersection_result)
- [keyword\_data](IDataforseoLabsPageIntersectionLiveItem.md#keyword_data)
- [se\_type](IDataforseoLabsPageIntersectionLiveItem.md#se_type)

## Properties

### intersection\_result

• `Optional` **intersection\_result**: `Object`

contains data on the SERP elements found for the returned keyword
data will be provided in separate arrays for each URL you specified in the pages object when setting a task;
depending on the number of specified URLs, it can contain from 1 to 20 arrays named respectively

#### Index signature

▪ [key: `string`]: [`BaseDataforseoLabsSerpElementItem`](../classes/BaseDataforseoLabsSerpElementItem.md)

#### Defined in

[main.ts:97211](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97211)

___

### keyword\_data

• `Optional` **keyword\_data**: [`KeywordData`](../classes/KeywordData.md)

keyword data for the returned keyword

#### Defined in

[main.ts:97207](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97207)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:97205](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97205)
