**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksPageIntersectionLiveItem

# Class: BacklinksPageIntersectionLiveItem

## Implements

- [`IBacklinksPageIntersectionLiveItem`](../interfaces/IBacklinksPageIntersectionLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksPageIntersectionLiveItem(data)

> **new BacklinksPageIntersectionLiveItem**(`data`?): [`BacklinksPageIntersectionLiveItem`](BacklinksPageIntersectionLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksPageIntersectionLiveItem`](../interfaces/IBacklinksPageIntersectionLiveItem.md)

#### Returns

[`BacklinksPageIntersectionLiveItem`](BacklinksPageIntersectionLiveItem.md)

#### Source

main.ts:143525

## Properties

### page\_intersection?

> **`optional`** **page\_intersection**: `Object`

contains data on pages that link to the corresponding targets specified in the POST array
data is provided in separate objects corresponding to pages specified in the targets object

#### Index signature

 \[`key`: `string`\]: ([`BacklinksPageIntersectionInfo`](BacklinksPageIntersectionInfo.md) \| `undefined`)[]

#### Implementation of

[`IBacklinksPageIntersectionLiveItem`](../interfaces/IBacklinksPageIntersectionLiveItem.md).[`page_intersection`](../interfaces/IBacklinksPageIntersectionLiveItem.md#page_intersection)

#### Source

main.ts:143519

***

### summary?

> **`optional`** **summary**: [`IntersectionSummaryInfo`](IntersectionSummaryInfo.md)

contains the page intersections summary

#### Implementation of

[`IBacklinksPageIntersectionLiveItem`](../interfaces/IBacklinksPageIntersectionLiveItem.md).[`summary`](../interfaces/IBacklinksPageIntersectionLiveItem.md#summary)

#### Source

main.ts:143521

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:143534

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:143558

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksPageIntersectionLiveItem`](BacklinksPageIntersectionLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksPageIntersectionLiveItem`](BacklinksPageIntersectionLiveItem.md)

#### Source

main.ts:143551
