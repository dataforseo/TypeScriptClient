[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksReferringDomainsLiveResultInfo

# Class: BacklinksReferringDomainsLiveResultInfo

## Implements

- [`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksReferringDomainsLiveResultInfo()

> **new BacklinksReferringDomainsLiveResultInfo**(`data`?): [`BacklinksReferringDomainsLiveResultInfo`](BacklinksReferringDomainsLiveResultInfo.md)

#### Parameters

##### data?

[`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md)

#### Returns

[`BacklinksReferringDomainsLiveResultInfo`](BacklinksReferringDomainsLiveResultInfo.md)

#### Defined in

main.ts:155802

## Properties

### items?

> `optional` **items**: [`BacklinksReferringDomainsLiveItem`](BacklinksReferringDomainsLiveItem.md)[]

items array

#### Implementation of

[`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md).[`items`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md#items)

#### Defined in

main.ts:155798

***

### items\_count?

> `optional` **items\_count**: `number`

number of items in the items array

#### Implementation of

[`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md#items_count)

#### Defined in

main.ts:155796

***

### target?

> `optional` **target**: `string`

target in a POST array

#### Implementation of

[`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md).[`target`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md#target)

#### Defined in

main.ts:155790

***

### total\_count?

> `optional` **total\_count**: `number`

total number of relevant items in the database
total number of main domains referring to your target;
example.com and blog.example.com are counted as one referring domain

#### Implementation of

[`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md#total_count)

#### Defined in

main.ts:155794

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:155811

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:155835

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksReferringDomainsLiveResultInfo`](BacklinksReferringDomainsLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BacklinksReferringDomainsLiveResultInfo`](BacklinksReferringDomainsLiveResultInfo.md)

#### Defined in

main.ts:155828
