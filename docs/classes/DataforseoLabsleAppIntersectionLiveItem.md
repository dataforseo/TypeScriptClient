**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsleAppIntersectionLiveItem

# Class: DataforseoLabsleAppIntersectionLiveItem

## Implements

- [`IDataforseoLabsleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsleAppIntersectionLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsleAppIntersectionLiveItem(data)

> **new DataforseoLabsleAppIntersectionLiveItem**(`data`?): [`DataforseoLabsleAppIntersectionLiveItem`](DataforseoLabsleAppIntersectionLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsleAppIntersectionLiveItem.md)

#### Returns

[`DataforseoLabsleAppIntersectionLiveItem`](DataforseoLabsleAppIntersectionLiveItem.md)

#### Source

main.ts:113888

## Properties

### intersection\_result?

> **`optional`** **intersection\_result**: `Object`

contains SERP data for the returned keyword
data will be provided in separate arrays for each app ID you specified in the app_ids object when setting a task;
depending on the number of specified app IDs, it can contain from 1 to 20 arrays named respectively

#### Index signature

 \[`key`: `string`\]: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

#### Implementation of

[`IDataforseoLabsleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsleAppIntersectionLiveItem.md).[`intersection_result`](../interfaces/IDataforseoLabsleAppIntersectionLiveItem.md#intersection_result)

#### Source

main.ts:113884

***

### keyword\_data?

> **`optional`** **keyword\_data**: [`KeywordDataKeywordDataInfo`](KeywordDataKeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsleAppIntersectionLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsleAppIntersectionLiveItem.md#keyword_data)

#### Source

main.ts:113880

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsleAppIntersectionLiveItem`](../interfaces/IDataforseoLabsleAppIntersectionLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsleAppIntersectionLiveItem.md#se_type)

#### Source

main.ts:113878

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:113897

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:113922

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsleAppIntersectionLiveItem`](DataforseoLabsleAppIntersectionLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsleAppIntersectionLiveItem`](DataforseoLabsleAppIntersectionLiveItem.md)

#### Source

main.ts:113915
