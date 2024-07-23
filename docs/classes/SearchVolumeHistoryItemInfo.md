**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / SearchVolumeHistoryItemInfo

# Class: SearchVolumeHistoryItemInfo

device type = desktop contains historical search volume data for searches made from desktop devices

## Implements

- [`ISearchVolumeHistoryItemInfo`](../interfaces/ISearchVolumeHistoryItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SearchVolumeHistoryItemInfo(data)

> **new SearchVolumeHistoryItemInfo**(`data`?): [`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)

#### Parameters

• **data?**: [`ISearchVolumeHistoryItemInfo`](../interfaces/ISearchVolumeHistoryItemInfo.md)

#### Returns

[`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)

#### Source

main.ts:137937

## Properties

### day?

> **`optional`** **day**: `number`

day of the month

#### Implementation of

[`ISearchVolumeHistoryItemInfo`](../interfaces/ISearchVolumeHistoryItemInfo.md).[`day`](../interfaces/ISearchVolumeHistoryItemInfo.md#day)

#### Source

main.ts:137931

***

### month?

> **`optional`** **month**: `number`

month

#### Implementation of

[`ISearchVolumeHistoryItemInfo`](../interfaces/ISearchVolumeHistoryItemInfo.md).[`month`](../interfaces/ISearchVolumeHistoryItemInfo.md#month)

#### Source

main.ts:137929

***

### search\_volume?

> **`optional`** **search\_volume**: `number`

search volume rate

#### Implementation of

[`ISearchVolumeHistoryItemInfo`](../interfaces/ISearchVolumeHistoryItemInfo.md).[`search_volume`](../interfaces/ISearchVolumeHistoryItemInfo.md#search_volume)

#### Source

main.ts:137933

***

### year?

> **`optional`** **year**: `number`

year

#### Implementation of

[`ISearchVolumeHistoryItemInfo`](../interfaces/ISearchVolumeHistoryItemInfo.md).[`year`](../interfaces/ISearchVolumeHistoryItemInfo.md#year)

#### Source

main.ts:137927

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:137946

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:137966

***

### fromJS()

> **`static`** **fromJS**(`data`): [`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)

#### Source

main.ts:137959
