[**Documentation**](../README.md)

***

[Documentation](../README.md) / BacklinksDomainIntersectionLiveResultInfo

# Class: BacklinksDomainIntersectionLiveResultInfo

## Implements

- [`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksDomainIntersectionLiveResultInfo()

> **new BacklinksDomainIntersectionLiveResultInfo**(`data`?): [`BacklinksDomainIntersectionLiveResultInfo`](BacklinksDomainIntersectionLiveResultInfo.md)

#### Parameters

##### data?

[`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md)

#### Returns

[`BacklinksDomainIntersectionLiveResultInfo`](BacklinksDomainIntersectionLiveResultInfo.md)

#### Defined in

main.ts:158002

## Properties

### items?

> `optional` **items**: [`BacklinksDomainIntersectionLiveItem`](BacklinksDomainIntersectionLiveItem.md)[]

contains domain that link to all targets from the POST array

#### Implementation of

[`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md).[`items`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md#items)

#### Defined in

main.ts:157998

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md).[`items_count`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md#items_count)

#### Defined in

main.ts:157996

***

### targets?

> `optional` **targets**: `object`

target domains, subdomains or webpages in a POST array

#### Index Signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md).[`targets`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md#targets)

#### Defined in

main.ts:157992

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results relevant to your request

#### Implementation of

[`IBacklinksDomainIntersectionLiveResultInfo`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md).[`total_count`](../interfaces/IBacklinksDomainIntersectionLiveResultInfo.md#total_count)

#### Defined in

main.ts:157994

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:158011

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:158041

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksDomainIntersectionLiveResultInfo`](BacklinksDomainIntersectionLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`BacklinksDomainIntersectionLiveResultInfo`](BacklinksDomainIntersectionLiveResultInfo.md)

#### Defined in

main.ts:158034
