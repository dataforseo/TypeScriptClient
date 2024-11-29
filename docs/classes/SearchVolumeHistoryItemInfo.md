[**Documentation**](../README.md)

***

[Documentation](../README.md) / SearchVolumeHistoryItemInfo

# Class: SearchVolumeHistoryItemInfo

device type = desktop contains historical search volume data for searches made from desktop devices

## Implements

- [`ISearchVolumeHistoryItemInfo`](../interfaces/ISearchVolumeHistoryItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SearchVolumeHistoryItemInfo()

> **new SearchVolumeHistoryItemInfo**(`data`?): [`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)

#### Parameters

##### data?

[`ISearchVolumeHistoryItemInfo`](../interfaces/ISearchVolumeHistoryItemInfo.md)

#### Returns

[`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)

#### Defined in

main.ts:146519

## Properties

### day?

> `optional` **day**: `number`

day of the month

#### Implementation of

[`ISearchVolumeHistoryItemInfo`](../interfaces/ISearchVolumeHistoryItemInfo.md).[`day`](../interfaces/ISearchVolumeHistoryItemInfo.md#day)

#### Defined in

main.ts:146513

***

### month?

> `optional` **month**: `number`

month

#### Implementation of

[`ISearchVolumeHistoryItemInfo`](../interfaces/ISearchVolumeHistoryItemInfo.md).[`month`](../interfaces/ISearchVolumeHistoryItemInfo.md#month)

#### Defined in

main.ts:146511

***

### search\_volume?

> `optional` **search\_volume**: `number`

search volume rate

#### Implementation of

[`ISearchVolumeHistoryItemInfo`](../interfaces/ISearchVolumeHistoryItemInfo.md).[`search_volume`](../interfaces/ISearchVolumeHistoryItemInfo.md#search_volume)

#### Defined in

main.ts:146515

***

### year?

> `optional` **year**: `number`

year

#### Implementation of

[`ISearchVolumeHistoryItemInfo`](../interfaces/ISearchVolumeHistoryItemInfo.md).[`year`](../interfaces/ISearchVolumeHistoryItemInfo.md#year)

#### Defined in

main.ts:146509

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:146528

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:146548

***

### fromJS()

> `static` **fromJS**(`data`): [`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)

#### Defined in

main.ts:146541
