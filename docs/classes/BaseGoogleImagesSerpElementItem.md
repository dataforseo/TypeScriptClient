[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseGoogleImagesSerpElementItem

# Class: BaseGoogleImagesSerpElementItem

Defined in: main.ts:50745

## Extended by

- [`GoogleImageCarouselSerpElementItem`](GoogleImageCarouselSerpElementItem.md)
- [`GoogleImageImagesSearchSerpElementItem`](GoogleImageImagesSearchSerpElementItem.md)
- [`GoogleImageRelatedSearchesSerpElementItem`](GoogleImageRelatedSearchesSerpElementItem.md)

## Implements

- [`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md)

## Constructors

### new BaseGoogleImagesSerpElementItem()

> **new BaseGoogleImagesSerpElementItem**(`data`?): [`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md)

Defined in: main.ts:50760

#### Parameters

##### data?

[`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md)

#### Returns

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:50758

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:50754

absolute rank in SERP for the target domain
absolute position among all the elements in SERP

#### Implementation of

[`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseGoogleImagesSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:50751

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md).[`rank_group`](../interfaces/IBaseGoogleImagesSerpElementItem.md#rank_group)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:50747

type of element

#### Implementation of

[`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md).[`type`](../interfaces/IBaseGoogleImagesSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:50756

the XPath of the element

#### Implementation of

[`IBaseGoogleImagesSerpElementItem`](../interfaces/IBaseGoogleImagesSerpElementItem.md).[`xpath`](../interfaces/IBaseGoogleImagesSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:50770

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:50801

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md)

Defined in: main.ts:50779

#### Parameters

##### data

`any`

#### Returns

[`BaseGoogleImagesSerpElementItem`](BaseGoogleImagesSerpElementItem.md)
