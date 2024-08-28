[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / BacklinksBulkReferringDomainsLiveResultInfo

# Class: BacklinksBulkReferringDomainsLiveResultInfo

## Implements

- [`IBacklinksBulkReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkReferringDomainsLiveResultInfo()

> **new BacklinksBulkReferringDomainsLiveResultInfo**(`data`?): [`BacklinksBulkReferringDomainsLiveResultInfo`](BacklinksBulkReferringDomainsLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksBulkReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md)

#### Returns

[`BacklinksBulkReferringDomainsLiveResultInfo`](BacklinksBulkReferringDomainsLiveResultInfo.md)

#### Defined in

main.ts:153308

## Properties

### items?

> `optional` **items**: [`BacklinksBulkReferringDomainsLiveItem`](BacklinksBulkReferringDomainsLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Implementation of

[`IBacklinksBulkReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md).[`items`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md#items)

#### Defined in

main.ts:153304

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IBacklinksBulkReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md#items_count)

#### Defined in

main.ts:153302

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:153317

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:153339

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkReferringDomainsLiveResultInfo`](BacklinksBulkReferringDomainsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkReferringDomainsLiveResultInfo`](BacklinksBulkReferringDomainsLiveResultInfo.md)

#### Defined in

main.ts:153332
