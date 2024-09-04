[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AnswerBoxSerpElementItem

# Class: AnswerBoxSerpElementItem

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AnswerBoxSerpElementItem()

> **new AnswerBoxSerpElementItem**(`data`?): [`AnswerBoxSerpElementItem`](AnswerBoxSerpElementItem.md)

#### Parameters

• **data?**: [`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md)

#### Returns

[`AnswerBoxSerpElementItem`](AnswerBoxSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

#### Defined in

main.ts:32083

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20354

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

link of the element

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`links`](../interfaces/IAnswerBoxSerpElementItem.md#links)

#### Defined in

main.ts:32075

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`position`](../interfaces/IAnswerBoxSerpElementItem.md#position)

#### Defined in

main.ts:32068

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP
always equals 0 for desktop

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`rank_absolute`](../interfaces/IAnswerBoxSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:32064

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values;
positions of elements with different type values are omitted from rank_group;
always equals 0 for desktop

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`rank_group`](../interfaces/IAnswerBoxSerpElementItem.md#rank_group)

#### Defined in

main.ts:32060

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`rectangle`](../interfaces/IAnswerBoxSerpElementItem.md#rectangle)

#### Defined in

main.ts:32079

***

### text?

> `optional` **text**: `string`[]

text
if there is none, equals null

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`text`](../interfaces/IAnswerBoxSerpElementItem.md#text)

#### Defined in

main.ts:32073

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`xpath`](../interfaces/IAnswerBoxSerpElementItem.md#xpath)

#### Defined in

main.ts:32070

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`init`](BaseSerpElementItem.md#init)

#### Defined in

main.ts:32088

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

#### Defined in

main.ts:32120

***

### fromJS()

> `static` **fromJS**(`data`): [`AnswerBoxSerpElementItem`](AnswerBoxSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AnswerBoxSerpElementItem`](AnswerBoxSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)

#### Defined in

main.ts:32113
