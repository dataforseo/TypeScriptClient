[**Documentation**](../README.md)

***

[Documentation](../README.md) / BaseGoogleNewsSerpElementItem

# Class: BaseGoogleNewsSerpElementItem

Defined in: main.ts:46139

## Extended by

- [`GoogleNewsNewsSearchSerpElementItem`](GoogleNewsNewsSearchSerpElementItem.md)
- [`GoogleNewsTopStoriesSerpElementItem`](GoogleNewsTopStoriesSerpElementItem.md)

## Implements

- [`IBaseGoogleNewsSerpElementItem`](../interfaces/IBaseGoogleNewsSerpElementItem.md)

## Constructors

### new BaseGoogleNewsSerpElementItem()

> **new BaseGoogleNewsSerpElementItem**(`data`?): [`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md)

Defined in: main.ts:46160

#### Parameters

##### data?

[`IBaseGoogleNewsSerpElementItem`](../interfaces/IBaseGoogleNewsSerpElementItem.md)

#### Returns

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:46158

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:46148

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IBaseGoogleNewsSerpElementItem`](../interfaces/IBaseGoogleNewsSerpElementItem.md).[`rank_absolute`](../interfaces/IBaseGoogleNewsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:46145

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IBaseGoogleNewsSerpElementItem`](../interfaces/IBaseGoogleNewsSerpElementItem.md).[`rank_group`](../interfaces/IBaseGoogleNewsSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:46156

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IBaseGoogleNewsSerpElementItem`](../interfaces/IBaseGoogleNewsSerpElementItem.md).[`rectangle`](../interfaces/IBaseGoogleNewsSerpElementItem.md#rectangle)

***

### title?

> `optional` **title**: `string`

Defined in: main.ts:46152

title of the element

#### Implementation of

[`IBaseGoogleNewsSerpElementItem`](../interfaces/IBaseGoogleNewsSerpElementItem.md).[`title`](../interfaces/IBaseGoogleNewsSerpElementItem.md#title)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:46141

type of element

#### Implementation of

[`IBaseGoogleNewsSerpElementItem`](../interfaces/IBaseGoogleNewsSerpElementItem.md).[`type`](../interfaces/IBaseGoogleNewsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:46150

the XPath of the element

#### Implementation of

[`IBaseGoogleNewsSerpElementItem`](../interfaces/IBaseGoogleNewsSerpElementItem.md).[`xpath`](../interfaces/IBaseGoogleNewsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:46170

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:46198

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md)

Defined in: main.ts:46181

#### Parameters

##### data

`any`

#### Returns

[`BaseGoogleNewsSerpElementItem`](BaseGoogleNewsSerpElementItem.md)
