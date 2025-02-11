[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksReferringDomainsLiveResultInfo

# Class: BacklinksReferringDomainsLiveResultInfo

Defined in: main.ts:156020

## Implements

- [`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new BacklinksReferringDomainsLiveResultInfo()

> **new BacklinksReferringDomainsLiveResultInfo**(`data`?): [`BacklinksReferringDomainsLiveResultInfo`](BacklinksReferringDomainsLiveResultInfo.md)

Defined in: main.ts:156034

#### Parameters

##### data?

[`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md)

#### Returns

[`BacklinksReferringDomainsLiveResultInfo`](BacklinksReferringDomainsLiveResultInfo.md)

## Properties

### items?

> `optional` **items**: [`BacklinksReferringDomainsLiveItem`](BacklinksReferringDomainsLiveItem.md)[]

Defined in: main.ts:156030

items array

#### Implementation of

[`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md).[`items`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:156028

number of items in the items array

#### Implementation of

[`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md#items_count)

***

### target?

> `optional` **target**: `string`

Defined in: main.ts:156022

target in a POST array

#### Implementation of

[`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md).[`target`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md#target)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:156026

total number of relevant items in the database
total number of main domains referring to your target;
example.com and blog.example.com are counted as one referring domain

#### Implementation of

[`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:156043

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:156067

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksReferringDomainsLiveResultInfo`](BacklinksReferringDomainsLiveResultInfo.md)

Defined in: main.ts:156060

#### Parameters

##### data

`any`

#### Returns

[`BacklinksReferringDomainsLiveResultInfo`](BacklinksReferringDomainsLiveResultInfo.md)
