[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BaseGoogleImagesSerpElementItem

# Class: BaseGoogleImagesSerpElementItem

## Extended by

- [`GoogleImageCarouselSerpElementItem`](GoogleImageCarouselSerpElementItem.md)
- [`GoogleImageImagesSearchSerpElementItem`](GoogleImageImagesSearchSerpElementItem.md)
- [`GoogleImageRelatedSearchesSerpElementItem`](GoogleImageRelatedSearchesSerpElementItem.md)

## Implements

- [`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md)

## Constructors

### new BaseGoogleImagesSerpElementItem()

> **new BaseGoogleImagesSerpElementItem**(`data`?): [`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md)

#### Parameters

• **data?**: [`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md)

#### Returns

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md)

#### Defined in

main.ts:47550

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:47548

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseGoogleImagesSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:47544

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md).[`rank_group`](../interfaces/IBaseGoogleImagesSerpElementItem.md#rank_group)

#### Defined in

main.ts:47541

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md).[`type`](../interfaces/IBaseGoogleImagesSerpElementItem.md#type)

#### Defined in

main.ts:47537

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md).[`xpath`](../interfaces/IBaseGoogleImagesSerpElementItem.md#xpath)

#### Defined in

main.ts:47546

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:47560

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:47591

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md)

#### Defined in

main.ts:47569
