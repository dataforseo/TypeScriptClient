[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseGoogleImagesSerpElementItem

# Class: BaseGoogleImagesSerpElementItem

Defined in: main.ts:50729

## Extended by

- [`GoogleImageCarouselSerpElementItem`](GoogleImageCarouselSerpElementItem.md)
- [`GoogleImageImagesSearchSerpElementItem`](GoogleImageImagesSearchSerpElementItem.md)
- [`GoogleImageRelatedSearchesSerpElementItem`](GoogleImageRelatedSearchesSerpElementItem.md)

## Implements

- [`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md)

## Constructors

### new BaseGoogleImagesSerpElementItem()

> **new BaseGoogleImagesSerpElementItem**(`data`?): [`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md)

Defined in: main.ts:50744

#### Parameters

##### data?

[`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md)

#### Returns

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:50742

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:50738

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseGoogleImagesSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:50735

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md).[`rank_group`](../interfaces/IBaseGoogleImagesSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:50731

type of element

#### Implementation of

[`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md).[`type`](../interfaces/IBaseGoogleImagesSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:50740

the XPath of the element

#### Implementation of

[`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md).[`xpath`](../interfaces/IBaseGoogleImagesSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:50754

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:50785

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md)

Defined in: main.ts:50763

#### Parameters

##### data

`any`

#### Returns

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md)
