[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksDomainIntersectionLiveItem

# Class: BacklinksDomainIntersectionLiveItem

## Implements

- [`IBacklinksDomainIntersectionLiveItem`](../interfaces/IBacklinksDomainIntersectionLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksDomainIntersectionLiveItem()

> **new BacklinksDomainIntersectionLiveItem**(`data`?): [`BacklinksDomainIntersectionLiveItem`](BacklinksDomainIntersectionLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksDomainIntersectionLiveItem`](../interfaces/IBacklinksDomainIntersectionLiveItem.md)

#### Returns

[`BacklinksDomainIntersectionLiveItem`](BacklinksDomainIntersectionLiveItem.md)

#### Defined in

main.ts:146691

## Properties

### domain\_intersection?

> `optional` **domain\_intersection**: `object`

contains data on domains that link to the corresponding targets specified in the POST array
data is provided in separate objects corresponding to domains, subdomains or pages specified in the targets object

#### Index Signature

 \[`key`: `string`\]: [`BacklinksDomainIntersectionInfo`](BacklinksDomainIntersectionInfo.md)

#### Implementation of

[`IBacklinksDomainIntersectionLiveItem`](../interfaces/IBacklinksDomainIntersectionLiveItem.md).[`domain_intersection`](../interfaces/IBacklinksDomainIntersectionLiveItem.md#domain_intersection)

#### Defined in

main.ts:146685

***

### summary?

> `optional` **summary**: [`IntersectionSummaryInfo`](IntersectionSummaryInfo.md)

contains the domain intersections summary

#### Implementation of

[`IBacklinksDomainIntersectionLiveItem`](../interfaces/IBacklinksDomainIntersectionLiveItem.md).[`summary`](../interfaces/IBacklinksDomainIntersectionLiveItem.md#summary)

#### Defined in

main.ts:146687

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:146700

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:146724

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksDomainIntersectionLiveItem`](BacklinksDomainIntersectionLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksDomainIntersectionLiveItem`](BacklinksDomainIntersectionLiveItem.md)

#### Defined in

main.ts:146717
