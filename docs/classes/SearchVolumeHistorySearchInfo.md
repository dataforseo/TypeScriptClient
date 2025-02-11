[**Documentation**](../README.md)

***

[Documentation](../README.md) / SearchVolumeHistorySearchInfo

# Class: SearchVolumeHistorySearchInfo

Defined in: main.ts:146808

## Implements

- [`ISearchVolumeHistorySearchInfo`](../interfaces/ISearchVolumeHistorySearchInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new SearchVolumeHistorySearchInfo()

> **new SearchVolumeHistorySearchInfo**(`data`?): [`SearchVolumeHistorySearchInfo`](SearchVolumeHistorySearchInfo.md)

Defined in: main.ts:146824

#### Parameters

##### data?

[`ISearchVolumeHistorySearchInfo`](../interfaces/ISearchVolumeHistorySearchInfo.md)

#### Returns

[`SearchVolumeHistorySearchInfo`](SearchVolumeHistorySearchInfo.md)

## Properties

### desktop?

> `optional` **desktop**: [`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)[]

Defined in: main.ts:146811

device type = desktop
contains historical search volume data for searches made from desktop devices

#### Implementation of

[`ISearchVolumeHistorySearchInfo`](../interfaces/ISearchVolumeHistorySearchInfo.md).[`desktop`](../interfaces/ISearchVolumeHistorySearchInfo.md#desktop)

***

### mobile?

> `optional` **mobile**: [`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)[]

Defined in: main.ts:146817

device type = mobile
contains historical search volume data for searches made from mobile devices

#### Implementation of

[`ISearchVolumeHistorySearchInfo`](../interfaces/ISearchVolumeHistorySearchInfo.md).[`mobile`](../interfaces/ISearchVolumeHistorySearchInfo.md#mobile)

***

### non\_smartphones?

> `optional` **non\_smartphones**: [`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)[]

Defined in: main.ts:146814

device type = non-smartphones
contains historical search volume data for searches made from feature phones (non-smartphone mobile devices)

#### Implementation of

[`ISearchVolumeHistorySearchInfo`](../interfaces/ISearchVolumeHistorySearchInfo.md).[`non_smartphones`](../interfaces/ISearchVolumeHistorySearchInfo.md#non_smartphones)

***

### tablet?

> `optional` **tablet**: [`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)[]

Defined in: main.ts:146820

device type = tablet
contains historical search volume data for searches made from tablets

#### Implementation of

[`ISearchVolumeHistorySearchInfo`](../interfaces/ISearchVolumeHistorySearchInfo.md).[`tablet`](../interfaces/ISearchVolumeHistorySearchInfo.md#tablet)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:146833

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:146869

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`SearchVolumeHistorySearchInfo`](SearchVolumeHistorySearchInfo.md)

Defined in: main.ts:146862

#### Parameters

##### data

`any`

#### Returns

[`SearchVolumeHistorySearchInfo`](SearchVolumeHistorySearchInfo.md)
