**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / BacklinksDomainIntersectionLiveItem

# Class: BacklinksDomainIntersectionLiveItem

## Implements

- [`IBacklinksDomainIntersectionLiveItem`](../interfaces/IBacklinksDomainIntersectionLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new BacklinksDomainIntersectionLiveItem(data)

> **new BacklinksDomainIntersectionLiveItem**(`data`?): [`BacklinksDomainIntersectionLiveItem`](BacklinksDomainIntersectionLiveItem.md)

#### Parameters

• **data?**: [`IBacklinksDomainIntersectionLiveItem`](../interfaces/IBacklinksDomainIntersectionLiveItem.md)

#### Returns

[`BacklinksDomainIntersectionLiveItem`](BacklinksDomainIntersectionLiveItem.md)

#### Source

main.ts:147999

## Properties

### domain\_intersection?

> **`optional`** **domain\_intersection**: `Object`

contains data on domains that link to the corresponding targets specified in the POST array
data is provided in separate objects corresponding to domains, subdomains or pages specified in the targets object

#### Index signature

 \[`key`: `string`\]: [`BacklinksDomainIntersectionInfo`](BacklinksDomainIntersectionInfo.md)

#### Implementation of

[`IBacklinksDomainIntersectionLiveItem`](../interfaces/IBacklinksDomainIntersectionLiveItem.md).[`domain_intersection`](../interfaces/IBacklinksDomainIntersectionLiveItem.md#domain_intersection)

#### Source

main.ts:147993

***

### summary?

> **`optional`** **summary**: [`IntersectionSummaryInfo`](IntersectionSummaryInfo.md)

contains the domain intersections summary

#### Implementation of

[`IBacklinksDomainIntersectionLiveItem`](../interfaces/IBacklinksDomainIntersectionLiveItem.md).[`summary`](../interfaces/IBacklinksDomainIntersectionLiveItem.md#summary)

#### Source

main.ts:147995

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:148008

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:148032

***

### fromJS()

> **`static`** **fromJS**(`data`): [`BacklinksDomainIntersectionLiveItem`](BacklinksDomainIntersectionLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BacklinksDomainIntersectionLiveItem`](BacklinksDomainIntersectionLiveItem.md)

#### Source

main.ts:148025
