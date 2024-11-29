[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsPageIntersectionLiveItem

# Class: DataforseoLabsPageIntersectionLiveItem

## Implements

- [`IDataforseoLabsPageIntersectionLiveItem`](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsPageIntersectionLiveItem()

> **new DataforseoLabsPageIntersectionLiveItem**(`data`?): [`DataforseoLabsPageIntersectionLiveItem`](DataforseoLabsPageIntersectionLiveItem.md)

#### Parameters

##### data?

[`IDataforseoLabsPageIntersectionLiveItem`](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md)

#### Returns

[`DataforseoLabsPageIntersectionLiveItem`](DataforseoLabsPageIntersectionLiveItem.md)

#### Defined in

main.ts:110262

## Properties

### intersection\_result?

> `optional` **intersection\_result**: `object`

contains data on the SERP elements found for the returned keyword
data will be provided in separate arrays for each URL you specified in the pages object when setting a task;
depending on the number of specified URLs, it can contain from 1 to 20 arrays named respectively

#### Index Signature

 \[`key`: `string`\]: [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

#### Implementation of

[`IDataforseoLabsPageIntersectionLiveItem`](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md).[`intersection_result`](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md#intersection_result)

#### Defined in

main.ts:110258

***

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsPageIntersectionLiveItem`](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md#keyword_data)

#### Defined in

main.ts:110254

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsPageIntersectionLiveItem`](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsPageIntersectionLiveItem.md#se_type)

#### Defined in

main.ts:110252

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:110271

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:110296

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsPageIntersectionLiveItem`](DataforseoLabsPageIntersectionLiveItem.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsPageIntersectionLiveItem`](DataforseoLabsPageIntersectionLiveItem.md)

#### Defined in

main.ts:110289
