[**Documentation**](../README.md)

***

[Documentation](../README.md) / AnswerBoxSerpElementItem

# Class: AnswerBoxSerpElementItem

Defined in: main.ts:33289

## Extends

- [`BaseSerpElementItem`](BaseSerpElementItem.md)

## Implements

- [`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AnswerBoxSerpElementItem()

> **new AnswerBoxSerpElementItem**(`data`?): [`AnswerBoxSerpElementItem`](AnswerBoxSerpElementItem.md)

Defined in: main.ts:33302

#### Parameters

##### data?

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md)

#### Returns

[`AnswerBoxSerpElementItem`](AnswerBoxSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`constructor`](BaseSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21045

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`_discriminator`](BaseSerpElementItem.md#_discriminator)

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:33294

link of the element

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`links`](../interfaces/IAnswerBoxSerpElementItem.md#links)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21041

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`position`](../interfaces/IAnswerBoxSerpElementItem.md#position)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`position`](BaseSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21037

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`rank_absolute`](../interfaces/IAnswerBoxSerpElementItem.md#rank_absolute)

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

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`rank_group`](../interfaces/IAnswerBoxSerpElementItem.md#rank_group)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`rank_group`](BaseSerpElementItem.md#rank_group)

***

### rectangle?

> `optional` **rectangle**: [`Rectangle`](Rectangle.md)

Defined in: main.ts:33298

rectangle parameters
contains cartesian coordinates and pixel dimensions of the result’s snippet in SERP
equals null if calculate_rectangles in the POST request is not set to true

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`rectangle`](../interfaces/IAnswerBoxSerpElementItem.md#rectangle)

***

### text?

> `optional` **text**: `string`[]

Defined in: main.ts:33292

text
if there is none, equals null

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`text`](../interfaces/IAnswerBoxSerpElementItem.md#text)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21030

type of element

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`type`](../interfaces/IAnswerBoxSerpElementItem.md#type)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`type`](BaseSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21043

the XPath of the element

#### Implementation of

[`IAnswerBoxSerpElementItem`](../interfaces/IAnswerBoxSerpElementItem.md).[`xpath`](../interfaces/IAnswerBoxSerpElementItem.md#xpath)

#### Inherited from

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`xpath`](BaseSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:33307

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

Defined in: main.ts:33335

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`toJSON`](BaseSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AnswerBoxSerpElementItem`](AnswerBoxSerpElementItem.md)

Defined in: main.ts:33328

#### Parameters

##### data

`any`

#### Returns

[`AnswerBoxSerpElementItem`](AnswerBoxSerpElementItem.md)

#### Overrides

[`BaseSerpElementItem`](BaseSerpElementItem.md).[`fromJS`](BaseSerpElementItem.md#fromjs)
