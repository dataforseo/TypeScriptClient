[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkRanksLiveItem

# Class: BacklinksBulkRanksLiveItem

Defined in: main.ts:160536

## Implements

- [`IBacklinksBulkRanksLiveItem`](../interfaces/IBacklinksBulkRanksLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkRanksLiveItem()

> **new BacklinksBulkRanksLiveItem**(`data`?): [`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)

Defined in: main.ts:160547

#### Parameters

##### data?

[`IBacklinksBulkRanksLiveItem`](../interfaces/IBacklinksBulkRanksLiveItem.md)

#### Returns

[`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)

## Properties

### rank?

> `optional` **rank**: `number`

Defined in: main.ts:160543

rank of the target
values represent real-time data for the date of the request
rank is calculated based on the method for node ranking in a linked database – a principle used in the original Google PageRank algorithm
learn more about the metric and how it is calculated in this help center article

#### Implementation of

[`IBacklinksBulkRanksLiveItem`](../interfaces/IBacklinksBulkRanksLiveItem.md).[`rank`](../interfaces/IBacklinksBulkRanksLiveItem.md#rank)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:160538

domain, subdomain or webpage from a POST array

#### Implementation of

[`IBacklinksBulkRanksLiveItem`](../interfaces/IBacklinksBulkRanksLiveItem.md).[`target`](../interfaces/IBacklinksBulkRanksLiveItem.md#target)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:160556

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:160574

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)

Defined in: main.ts:160567

#### Parameters

##### data

`any`

#### Returns

[`BacklinksBulkRanksLiveItem`](BacklinksBulkRanksLiveItem.md)
