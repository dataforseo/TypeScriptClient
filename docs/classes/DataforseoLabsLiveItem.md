[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsLiveItem

# Class: DataforseoLabsLiveItem

## Implements

- [`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsLiveItem()

> **new DataforseoLabsLiveItem**(`data`?): [`DataforseoLabsLiveItem`](DataforseoLabsLiveItem.md)

#### Parameters

##### data?

[`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md)

#### Returns

[`DataforseoLabsLiveItem`](DataforseoLabsLiveItem.md)

#### Defined in

main.ts:101458

## Properties

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsLiveItem.md#keyword_data)

#### Defined in

main.ts:101452

***

### ranked\_serp\_element?

> `optional` **ranked\_serp\_element**: [`RankedSerpElement`](RankedSerpElement.md)

contains data on the domain’s SERP element found for the returned keyword

#### Implementation of

[`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md).[`ranked_serp_element`](../interfaces/IDataforseoLabsLiveItem.md#ranked_serp_element)

#### Defined in

main.ts:101454

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsLiveItem.md#se_type)

#### Defined in

main.ts:101450

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:101467

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:101486

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsLiveItem`](DataforseoLabsLiveItem.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsLiveItem`](DataforseoLabsLiveItem.md)

#### Defined in

main.ts:101479
