**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / DataforseoLabsGooglePageIntersectionLiveItem

# Class: DataforseoLabsGooglePageIntersectionLiveItem

## Implements

- [`IDataforseoLabsGooglePageIntersectionLiveItem`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGooglePageIntersectionLiveItem(data)

> **new DataforseoLabsGooglePageIntersectionLiveItem**(`data`?): [`DataforseoLabsGooglePageIntersectionLiveItem`](DataforseoLabsGooglePageIntersectionLiveItem.md)

#### Parameters

• **data?**: [`IDataforseoLabsGooglePageIntersectionLiveItem`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveItem.md)

#### Returns

[`DataforseoLabsGooglePageIntersectionLiveItem`](DataforseoLabsGooglePageIntersectionLiveItem.md)

#### Source

main.ts:100503

## Properties

### intersection\_result?

> **`optional`** **intersection\_result**: `Object`

contains data on the SERP elements found for the returned keyword
data will be provided in separate arrays for each URL you specified in the pages object when setting a task;
depending on the number of specified URLs, it can contain from 1 to 20 arrays named respectively

#### Index signature

 \[`key`: `string`\]: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveItem`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveItem.md).[`intersection_result`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveItem.md#intersection_result)

#### Source

main.ts:100499

***

### keyword\_data?

> **`optional`** **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveItem`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveItem.md#keyword_data)

#### Source

main.ts:100495

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsGooglePageIntersectionLiveItem`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsGooglePageIntersectionLiveItem.md#se_type)

#### Source

main.ts:100493

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:100512

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:100537

***

### fromJS()

> **`static`** **fromJS**(`data`): [`DataforseoLabsGooglePageIntersectionLiveItem`](DataforseoLabsGooglePageIntersectionLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsGooglePageIntersectionLiveItem`](DataforseoLabsGooglePageIntersectionLiveItem.md)

#### Source

main.ts:100530
