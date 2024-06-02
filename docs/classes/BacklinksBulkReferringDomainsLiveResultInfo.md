**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksBulkReferringDomainsLiveResultInfo

# Class: BacklinksBulkReferringDomainsLiveResultInfo

## Implements

- [`IBacklinksBulkReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksBulkReferringDomainsLiveResultInfo(data)

> **new BacklinksBulkReferringDomainsLiveResultInfo**(`data`?): [`BacklinksBulkReferringDomainsLiveResultInfo`](BacklinksBulkReferringDomainsLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksBulkReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md)

#### Returns

[`BacklinksBulkReferringDomainsLiveResultInfo`](BacklinksBulkReferringDomainsLiveResultInfo.md)

#### Source

main.ts:147217

## Properties

### items?

> **`optional`** **items**: [`BacklinksBulkReferringDomainsLiveItem`](BacklinksBulkReferringDomainsLiveItem.md)[]

contains relevant backlinks and referring domains data

#### Implementation of

[`IBacklinksBulkReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md).[`items`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md#items)

#### Source

main.ts:147213

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IBacklinksBulkReferringDomainsLiveResultInfo`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksBulkReferringDomainsLiveResultInfo.md#items_count)

#### Source

main.ts:147211

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:147226

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:147248

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksBulkReferringDomainsLiveResultInfo`](BacklinksBulkReferringDomainsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksBulkReferringDomainsLiveResultInfo`](BacklinksBulkReferringDomainsLiveResultInfo.md)

#### Source

main.ts:147241
