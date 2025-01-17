[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsLiveItem

# Class: DataforseoLabsLiveItem

Defined in: main.ts:101516

## Implements

- [`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsLiveItem()

> **new DataforseoLabsLiveItem**(`data`?): [`DataforseoLabsLiveItem`](DataforseoLabsLiveItem.md)

Defined in: main.ts:101526

#### Parameters

##### data?

[`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md)

#### Returns

[`DataforseoLabsLiveItem`](DataforseoLabsLiveItem.md)

## Properties

### keyword\_data?

> `optional` **keyword\_data**: [`KeywordDataInfo`](KeywordDataInfo.md)

Defined in: main.ts:101520

keyword data for the returned keyword

#### Implementation of

[`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md).[`keyword_data`](../interfaces/IDataforseoLabsLiveItem.md#keyword_data)

***

### ranked\_serp\_element?

> `optional` **ranked\_serp\_element**: [`RankedSerpElement`](RankedSerpElement.md)

Defined in: main.ts:101522

contains data on the domain’s SERP element found for the returned keyword

#### Implementation of

[`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md).[`ranked_serp_element`](../interfaces/IDataforseoLabsLiveItem.md#ranked_serp_element)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:101518

search engine type

#### Implementation of

[`IDataforseoLabsLiveItem`](../interfaces/IDataforseoLabsLiveItem.md).[`se_type`](../interfaces/IDataforseoLabsLiveItem.md#se_type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:101535

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:101554

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsLiveItem`](DataforseoLabsLiveItem.md)

Defined in: main.ts:101547

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsLiveItem`](DataforseoLabsLiveItem.md)
