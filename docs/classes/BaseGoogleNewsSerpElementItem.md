[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / BaseGoogleNewsSerpElementItem

# Class: BaseGoogleNewsSerpElementItem

## Extended by

- [`GoogleNewsNewsSearchSerpElementItem`](GoogleNewsNewsSearchSerpElementItem.md)
- [`GoogleNewsTopStoriesSerpElementItem`](GoogleNewsTopStoriesSerpElementItem.md)

## Implements

- [`IBaseGoogleNewsSerpElementItem`](../interfaces/IBaseGoogleNewsSerpElementItem.md)

## Constructors

### new BaseGoogleNewsSerpElementItem()

> **new BaseGoogleNewsSerpElementItem**(`data`?): [`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md)

#### Parameters

• **data?**: [`IBaseGoogleNewsSerpElementItem`](../interfaces/IBaseGoogleNewsSerpElementItem.md)

#### Returns

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md)

#### Defined in

main.ts:43899

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Defined in

main.ts:43897

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IBaseGoogleNewsSerpElementItem`](../interfaces/IBaseGoogleNewsSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseGoogleNewsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:43887

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseGoogleNewsSerpElementItem`](../interfaces/IBaseGoogleNewsSerpElementItem.md).[`rank_group`](../interfaces/IBaseGoogleNewsSerpElementItem.md#rank_group)

#### Defined in

main.ts:43884

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IBaseGoogleNewsSerpElementItem`](../interfaces/IBaseGoogleNewsSerpElementItem.md).[`rectangle`](../interfaces/IBaseGoogleNewsSerpElementItem.md#rectangle)

#### Defined in

main.ts:43895

***

### title?

> `optional` **title**: `string`

title of the result in SERP

#### Implementation of

[`IBaseGoogleNewsSerpElementItem`](../interfaces/IBaseGoogleNewsSerpElementItem.md).[`title`](../interfaces/IBaseGoogleNewsSerpElementItem.md#title)

#### Defined in

main.ts:43891

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IBaseGoogleNewsSerpElementItem`](../interfaces/IBaseGoogleNewsSerpElementItem.md).[`type`](../interfaces/IBaseGoogleNewsSerpElementItem.md#type)

#### Defined in

main.ts:43880

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IBaseGoogleNewsSerpElementItem`](../interfaces/IBaseGoogleNewsSerpElementItem.md).[`xpath`](../interfaces/IBaseGoogleNewsSerpElementItem.md#xpath)

#### Defined in

main.ts:43889

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:43909

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:43937

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md)

#### Defined in

main.ts:43920
