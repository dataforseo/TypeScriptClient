[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BacklinksPageIntersectionLiveItem

# Class: BacklinksPageIntersectionLiveItem

## Implements

- [`IBacklinksPageIntersectionLiveItem`](../interfaces/IBacklinksPageIntersectionLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksPageIntersectionLiveItem()

> **new BacklinksPageIntersectionLiveItem**(`data`?): [`BacklinksPageIntersectionLiveItem`](BacklinksPageIntersectionLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksPageIntersectionLiveItem`](../interfaces/IBacklinksPageIntersectionLiveItem.md)

#### Returns

[`BacklinksPageIntersectionLiveItem`](BacklinksPageIntersectionLiveItem.md)

#### Defined in

main.ts:147729

## Properties

### page\_intersection?

> `optional` **page\_intersection**: `object`

contains data on pages that link to the corresponding targets specified in the POST array
data is provided in separate objects corresponding to pages specified in the targets object

#### Index Signature

 \[`key`: `string`\]: ([`BacklinksPageIntersectionInfo`](BacklinksPageIntersectionInfo.md) \| `undefined`)[]

#### Implementation of

[`IBacklinksPageIntersectionLiveItem`](../interfaces/IBacklinksPageIntersectionLiveItem.md).[`page_intersection`](../interfaces/IBacklinksPageIntersectionLiveItem.md#page_intersection)

#### Defined in

main.ts:147723

***

### summary?

> `optional` **summary**: [`IntersectionSummaryInfo`](IntersectionSummaryInfo.md)

contains the page intersections summary

#### Implementation of

[`IBacklinksPageIntersectionLiveItem`](../interfaces/IBacklinksPageIntersectionLiveItem.md).[`summary`](../interfaces/IBacklinksPageIntersectionLiveItem.md#summary)

#### Defined in

main.ts:147725

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:147738

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:147762

***

### fromJS()

> `static` **fromJS**(`data`): [`BacklinksPageIntersectionLiveItem`](BacklinksPageIntersectionLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksPageIntersectionLiveItem`](BacklinksPageIntersectionLiveItem.md)

#### Defined in

main.ts:147755
