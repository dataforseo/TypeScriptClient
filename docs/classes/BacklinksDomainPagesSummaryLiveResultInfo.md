[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksDomainPagesSummaryLiveResultInfo

# Class: BacklinksDomainPagesSummaryLiveResultInfo

## Implements

- [`IBacklinksDomainPagesSummaryLiveResultInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksDomainPagesSummaryLiveResultInfo()

> **new BacklinksDomainPagesSummaryLiveResultInfo**(`data`?): [`BacklinksDomainPagesSummaryLiveResultInfo`](BacklinksDomainPagesSummaryLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksDomainPagesSummaryLiveResultInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md)

#### Returns

[`BacklinksDomainPagesSummaryLiveResultInfo`](BacklinksDomainPagesSummaryLiveResultInfo.md)

#### Defined in

main.ts:146918

## Properties

### items?

> `optional` **items**: [`BacklinksDomainPagesSummaryLiveItem`](BacklinksDomainPagesSummaryLiveItem.md)[]

items array

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveResultInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md).[`items`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md#items)

#### Defined in

main.ts:146914

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the results array

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveResultInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md#items_count)

#### Defined in

main.ts:146912

***

### target?

> `optional` **target**: `string`

target in the post array

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveResultInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md).[`target`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md#target)

#### Defined in

main.ts:146908

***

### total\_count?

> `optional` **total\_count**: `number`

total number of relevant items in the database

#### Implementation of

[`IBacklinksDomainPagesSummaryLiveResultInfo`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksDomainPagesSummaryLiveResultInfo.md#total_count)

#### Defined in

main.ts:146910

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:146927

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:146951

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksDomainPagesSummaryLiveResultInfo`](BacklinksDomainPagesSummaryLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksDomainPagesSummaryLiveResultInfo`](BacklinksDomainPagesSummaryLiveResultInfo.md)

#### Defined in

main.ts:146944
