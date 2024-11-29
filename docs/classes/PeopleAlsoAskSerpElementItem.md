[**Documentation**](../README.md)

***

[Documentation](../README.md) / PeopleAlsoAskSerpElementItem

# Class: PeopleAlsoAskSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new PeopleAlsoAskSerpElementItem()

> **new PeopleAlsoAskSerpElementItem**(`data`?): [`PeopleAlsoAskSerpElementItem`](PeopleAlsoAskSerpElementItem.md)

#### Parameters

##### data?

[`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md)

#### Returns

[`PeopleAlsoAskSerpElementItem`](PeopleAlsoAskSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:31963

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:21045

***

### items?

> `optional` **items**: [`PeopleAlsoAskElement`](PeopleAlsoAskElement.md)[]

contains arrays of specific images

#### Implementation of

[`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md).[`items`](../interfaces/IPeopleAlsoAskSerpElementItem.md#items)

#### Defined in

main.ts:31955

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md).[`position`](../interfaces/IPeopleAlsoAskSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

#### Defined in

main.ts:21041

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md).[`rank_absolute`](../interfaces/IPeopleAlsoAskSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_absolute`](BaseSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:21037

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md).[`rank_group`](../interfaces/IPeopleAlsoAskSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

#### Defined in

main.ts:21034

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md).[`rectangle`](../interfaces/IPeopleAlsoAskSerpElementItem.md#rectangle)

#### Defined in

main.ts:31959

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md).[`type`](../interfaces/IPeopleAlsoAskSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

#### Defined in

main.ts:21030

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IPeopleAlsoAskSerpElementItem`](../interfaces/IPeopleAlsoAskSerpElementItem.md).[`xpath`](../interfaces/IPeopleAlsoAskSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

#### Defined in

main.ts:21043

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:31968

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:31991

***

### fromJS()

> `static` **fromJS**(`data`): [`PeopleAlsoAskSerpElementItem`](PeopleAlsoAskSerpElementItem.md)

#### Parameters

##### data

`any`

#### Returns

[`PeopleAlsoAskSerpElementItem`](PeopleAlsoAskSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:31984
