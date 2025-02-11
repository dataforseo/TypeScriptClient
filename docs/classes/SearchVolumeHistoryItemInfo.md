[**Documentation**](../README.md)

***

[Documentation](../README.md) / SearchVolumeHistoryItemInfo

# Class: SearchVolumeHistoryItemInfo

Defined in: main.ts:146739

device type = desktop contains historical search volume data for searches made from desktop devices

## Implements

- [`ISearchVolumeHistoryItemInfo`](../interfaces/ISearchVolumeHistoryItemInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SearchVolumeHistoryItemInfo()

> **new SearchVolumeHistoryItemInfo**(`data`?): [`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)

Defined in: main.ts:146751

#### Parameters

##### data?

[`ISearchVolumeHistoryItemInfo`](../interfaces/ISearchVolumeHistoryItemInfo.md)

#### Returns

[`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)

## Properties

### day?

> `optional` **day**: `number`

Defined in: main.ts:146745

day of the month

#### Implementation of

[`ISearchVolumeHistoryItemInfo`](../interfaces/ISearchVolumeHistoryItemInfo.md).[`day`](../interfaces/ISearchVolumeHistoryItemInfo.md#day)

***

### month?

> `optional` **month**: `number`

Defined in: main.ts:146743

month

#### Implementation of

[`ISearchVolumeHistoryItemInfo`](../interfaces/ISearchVolumeHistoryItemInfo.md).[`month`](../interfaces/ISearchVolumeHistoryItemInfo.md#month)

***

### search\_volume?

> `optional` **search\_volume**: `number`

Defined in: main.ts:146747

search volume rate

#### Implementation of

[`ISearchVolumeHistoryItemInfo`](../interfaces/ISearchVolumeHistoryItemInfo.md).[`search_volume`](../interfaces/ISearchVolumeHistoryItemInfo.md#search_volume)

***

### year?

> `optional` **year**: `number`

Defined in: main.ts:146741

year

#### Implementation of

[`ISearchVolumeHistoryItemInfo`](../interfaces/ISearchVolumeHistoryItemInfo.md).[`year`](../interfaces/ISearchVolumeHistoryItemInfo.md#year)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:146760

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:146780

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)

Defined in: main.ts:146773

#### Parameters

##### data

`any`

#### Returns

[`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)
