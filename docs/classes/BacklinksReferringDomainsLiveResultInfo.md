**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksReferringDomainsLiveResultInfo

# Class: BacklinksReferringDomainsLiveResultInfo

## Implements

- [`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksReferringDomainsLiveResultInfo(data)

> **new BacklinksReferringDomainsLiveResultInfo**(`data`?): [`BacklinksReferringDomainsLiveResultInfo`](BacklinksReferringDomainsLiveResultInfo.md)

#### Parameters

• **data?**: [`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md)

#### Returns

[`BacklinksReferringDomainsLiveResultInfo`](BacklinksReferringDomainsLiveResultInfo.md)

#### Source

main.ts:141641

## Properties

### items?

> **`optional`** **items**: [`BacklinksReferringDomainsLiveItem`](BacklinksReferringDomainsLiveItem.md)[]

items array

#### Implementation of

[`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md).[`items`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md#items)

#### Source

main.ts:141637

***

### items\_count?

> **`optional`** **items\_count**: `number`

number of items in the items array

#### Implementation of

[`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md#items_count)

#### Source

main.ts:141635

***

### target?

> **`optional`** **target**: `string`

target in a POST array

#### Implementation of

[`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md).[`target`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md#target)

#### Source

main.ts:141629

***

### total\_count?

> **`optional`** **total\_count**: `number`

total number of relevant items in the database
total number of main domains referring to your target;
example.com and blog.example.com are counted as one referring domain

#### Implementation of

[`IBacklinksReferringDomainsLiveResultInfo`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksReferringDomainsLiveResultInfo.md#total_count)

#### Source

main.ts:141633

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:141650

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:141674

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksReferringDomainsLiveResultInfo`](BacklinksReferringDomainsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksReferringDomainsLiveResultInfo`](BacklinksReferringDomainsLiveResultInfo.md)

#### Source

main.ts:141667
