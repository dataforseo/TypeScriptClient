[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / SearchVolumeHistorySearchInfo

# Class: SearchVolumeHistorySearchInfo

## Implements

- [`ISearchVolumeHistorySearchInfo`](../interfaces/ISearchVolumeHistorySearchInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new SearchVolumeHistorySearchInfo()

> **new SearchVolumeHistorySearchInfo**(`data`?): [`SearchVolumeHistorySearchInfo`](SearchVolumeHistorySearchInfo.md)

#### Parameters

• **data?**: [`ISearchVolumeHistorySearchInfo`](../interfaces/ISearchVolumeHistorySearchInfo.md)

#### Returns

[`SearchVolumeHistorySearchInfo`](SearchVolumeHistorySearchInfo.md)

#### Defined in

main.ts:134735

## Properties

### desktop?

> `optional` **desktop**: [`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)[]

device type = desktop
contains historical search volume data for searches made from desktop devices

#### Implementation of

[`ISearchVolumeHistorySearchInfo`](../interfaces/ISearchVolumeHistorySearchInfo.md).[`desktop`](../interfaces/ISearchVolumeHistorySearchInfo.md#desktop)

#### Defined in

main.ts:134722

***

### mobile?

> `optional` **mobile**: [`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)[]

device type = mobile
contains historical search volume data for searches made from mobile devices

#### Implementation of

[`ISearchVolumeHistorySearchInfo`](../interfaces/ISearchVolumeHistorySearchInfo.md).[`mobile`](../interfaces/ISearchVolumeHistorySearchInfo.md#mobile)

#### Defined in

main.ts:134728

***

### non\_smartphones?

> `optional` **non\_smartphones**: [`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)[]

device type = non-smartphones
contains historical search volume data for searches made from feature phones (non-smartphone mobile devices)

#### Implementation of

[`ISearchVolumeHistorySearchInfo`](../interfaces/ISearchVolumeHistorySearchInfo.md).[`non_smartphones`](../interfaces/ISearchVolumeHistorySearchInfo.md#non_smartphones)

#### Defined in

main.ts:134725

***

### tablet?

> `optional` **tablet**: [`SearchVolumeHistoryItemInfo`](SearchVolumeHistoryItemInfo.md)[]

device type = tablet
contains historical search volume data for searches made from tablets

#### Implementation of

[`ISearchVolumeHistorySearchInfo`](../interfaces/ISearchVolumeHistorySearchInfo.md).[`tablet`](../interfaces/ISearchVolumeHistorySearchInfo.md#tablet)

#### Defined in

main.ts:134731

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:134744

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:134780

***

### fromJS()

> `static` **fromJS**(`data`): [`SearchVolumeHistorySearchInfo`](SearchVolumeHistorySearchInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`SearchVolumeHistorySearchInfo`](SearchVolumeHistorySearchInfo.md)

#### Defined in

main.ts:134773
