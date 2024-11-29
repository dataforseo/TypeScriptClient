[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksBulkNewLostReferringDomainsLiveResultInfo

# Class: BacklinksBulkNewLostReferringDomainsLiveResultInfo

## Implements

- [`IBacklinksBulkNewLostReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkNewLostReferringDomainsLiveResultInfo()

> **new BacklinksBulkNewLostReferringDomainsLiveResultInfo**(`data`?): [`BacklinksBulkNewLostReferringDomainsLiveResultInfo`](BacklinksBulkNewLostReferringDomainsLiveResultInfo.md)

#### Parameters

##### data?

[`IBacklinksBulkNewLostReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveResultInfo.md)

#### Returns

[`BacklinksBulkNewLostReferringDomainsLiveResultInfo`](BacklinksBulkNewLostReferringDomainsLiveResultInfo.md)

#### Defined in

main.ts:162172

## Properties

### items?

> `optional` **items**: [`BacklinksBulkNewLostReferringDomainsLiveItem`](BacklinksBulkNewLostReferringDomainsLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveResultInfo.md).[`items`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveResultInfo.md#items)

#### Defined in

main.ts:162168

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IBacklinksBulkNewLostReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBulkNewLostReferringDomainsLiveResultInfo.md#items_count)

#### Defined in

main.ts:162166

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:162181

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:162203

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksBulkNewLostReferringDomainsLiveResultInfo`](BacklinksBulkNewLostReferringDomainsLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BacklinksBulkNewLostReferringDomainsLiveResultInfo`](BacklinksBulkNewLostReferringDomainsLiveResultInfo.md)

#### Defined in

main.ts:162196
