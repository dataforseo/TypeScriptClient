**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksDomainIntersectionLiveResultInfo

# Class: BacklinksDomainIntersectionLiveResultInfo

## Implements

- [`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksDomainIntersectionLiveResultInfo(data)

> **new BacklinksDomainIntersectionLiveResultInfo**(`data`?): [`BacklinksDomainIntersectionLiveResultInfo`](BacklinksDomainIntersectionLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md)

#### Returns

[`BacklinksDomainIntersectionLiveResultInfo`](BacklinksDomainIntersectionLiveResultInfo.md)

#### Source

main.ts:142576

## Properties

### items?

> **`optional`** **items**: [`BacklinksDomainIntersectionLiveItem`](BacklinksDomainIntersectionLiveItem.md)[]

contains domain that link to all targets from the POST array

#### Implementation of

[`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md).[`items`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md#items)

#### Source

main.ts:142572

***

### items\_count?

> **`optional`** **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md#items_count)

#### Source

main.ts:142570

***

### targets?

> **`optional`** **targets**: `Object`

target domains, subdomains or webpages in a POST array

#### Index signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md).[`targets`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md#targets)

#### Source

main.ts:142566

***

### total\_count?

> **`optional`** **total\_count**: `number`

total amount of results relevant to your request

#### Implementation of

[`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md#total_count)

#### Source

main.ts:142568

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:142585

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:142615

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksDomainIntersectionLiveResultInfo`](BacklinksDomainIntersectionLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksDomainIntersectionLiveResultInfo`](BacklinksDomainIntersectionLiveResultInfo.md)

#### Source

main.ts:142608
