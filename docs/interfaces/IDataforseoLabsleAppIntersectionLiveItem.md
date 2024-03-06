[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsleAppIntersectionLiveItem

# Interface: IDataforseoLabsleAppIntersectionLiveItem

## Implemented by

- [`DataforseoLabsleAppIntersectionLiveItem`](../classes/DataforseoLabsleAppIntersectionLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [intersection\_result](IDataforseoLabsleAppIntersectionLiveItem.md#intersection_result)
- [keyword\_data](IDataforseoLabsleAppIntersectionLiveItem.md#keyword_data)
- [se\_type](IDataforseoLabsleAppIntersectionLiveItem.md#se_type)

## Properties

### intersection\_result

• `Optional` **intersection\_result**: `Object`

contains SERP data for the returned keyword
data will be provided in separate arrays for each app ID you specified in the app_ids object when setting a task;
depending on the number of specified app IDs, it can contain from 1 to 20 arrays named respectively

#### Index signature

▪ [key: `string`]: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)

#### Defined in

[main.ts:109943](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109943)

___


### keyword\_data

• `Optional` **keyword\_data**: [`KeywordData`](../classes/KeywordData.md)

keyword data for the returned keyword

#### Defined in

[main.ts:109939](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109939)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:109937](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109937)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")