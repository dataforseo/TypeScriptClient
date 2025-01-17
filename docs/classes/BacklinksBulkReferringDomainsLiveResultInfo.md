[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkReferringDomainsLiveResultInfo

# Class: BacklinksBulkReferringDomainsLiveResultInfo

Defined in: main.ts:161472

## Implements

- [`IBacklinksBulkReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkReferringDomainsLiveResultInfo()

> **new BacklinksBulkReferringDomainsLiveResultInfo**(`data`?): [`BacklinksBulkReferringDomainsLiveResultInfo`](BacklinksBulkReferringDomainsLiveResultInfo.md)

Defined in: main.ts:161480

#### Parameters

##### data?

[`IBacklinksBulkReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md)

#### Returns

[`BacklinksBulkReferringDomainsLiveResultInfo`](BacklinksBulkReferringDomainsLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`BacklinksBulkReferringDomainsLiveItem`](BacklinksBulkReferringDomainsLiveItem.md)[]

Defined in: main.ts:161476

contains relevant backlinks and referring domains data

#### Implementation of

[`IBacklinksBulkReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md).[`items`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:161474

the number of results returned in the items array

#### Implementation of

[`IBacklinksBulkReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md#items_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:161489

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:161511

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkReferringDomainsLiveResultInfo`](BacklinksBulkReferringDomainsLiveResultInfo.md)

Defined in: main.ts:161504

#### Parameters

##### data

`any`

#### Returns

[`BacklinksBulkReferringDomainsLiveResultInfo`](BacklinksBulkReferringDomainsLiveResultInfo.md)
