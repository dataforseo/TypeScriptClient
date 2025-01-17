[**Documentation**](../README.md)

***

[Documentation](../README.md) / PeopleAlsoAskSerpElementItem

# Class: PeopleAlsoAskSerpElementItem

Defined in: main.ts:31953

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new PeopleAlsoAskSerpElementItem()

> **new PeopleAlsoAskSerpElementItem**(`data`?): [`PeopleAlsoAskSerpElementItem`](PeopleAlsoAskSerpElementItem.md)

Defined in: main.ts:31963

#### Parameters

##### data?

[`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md)

#### Returns

[`PeopleAlsoAskSerpElementItem`](PeopleAlsoAskSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21045

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### items?

> `optional` **items**: [`PeopleAlsoAskElement`](PeopleAlsoAskElement.md)[]

Defined in: main.ts:31955

contains arrays of specific images

#### Implementation of

[`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md).[`items`](../interfaces/IPeopleAlsoAskSerpElementItem.md#items)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md).[`position`](../interfaces/IPeopleAlsoAskSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md).[`rank_absolute`](../interfaces/IPeopleAlsoAskSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21034

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md).[`rank_group`](../interfaces/IPeopleAlsoAskSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:31959

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md).[`rectangle`](../interfaces/IPeopleAlsoAskSerpElementItem.md#rectangle)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md).[`type`](../interfaces/IPeopleAlsoAskSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md).[`xpath`](../interfaces/IPeopleAlsoAskSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:31968

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:31991

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`PeopleAlsoAskSerpElementItem`](PeopleAlsoAskSerpElementItem.md)

Defined in: main.ts:31984

#### Parameters

##### data

`any`

#### Returns

[`PeopleAlsoAskSerpElementItem`](PeopleAlsoAskSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
