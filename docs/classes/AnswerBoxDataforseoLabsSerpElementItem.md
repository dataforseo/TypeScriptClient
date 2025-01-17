[**Documentation**](../README.md)

***

[Documentation](../README.md) / AnswerBoxDataforseoLabsSerpElementItem

# Class: AnswerBoxDataforseoLabsSerpElementItem

Defined in: main.ts:106911

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IAnswerBoxDataforseoLabsSerpElementItem`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AnswerBoxDataforseoLabsSerpElementItem()

> **new AnswerBoxDataforseoLabsSerpElementItem**(`data`?): [`AnswerBoxDataforseoLabsSerpElementItem`](AnswerBoxDataforseoLabsSerpElementItem.md)

Defined in: main.ts:106922

#### Parameters

##### data?

[`IAnswerBoxDataforseoLabsSerpElementItem`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md)

#### Returns

[`AnswerBoxDataforseoLabsSerpElementItem`](AnswerBoxDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

Defined in: main.ts:21425

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

Defined in: main.ts:106918

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IAnswerBoxDataforseoLabsSerpElementItem`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[`links`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#links)

***

### position?

> `optional` **position**: `string`

Defined in: main.ts:21421

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAnswerBoxDataforseoLabsSerpElementItem`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

Defined in: main.ts:21417

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAnswerBoxDataforseoLabsSerpElementItem`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

***

### rank\_group?

> `optional` **rank\_group**: `number`

Defined in: main.ts:21414

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAnswerBoxDataforseoLabsSerpElementItem`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

***

### text?

> `optional` **text**: `string`[]

Defined in: main.ts:106914

text
if there is none, equals null

#### Implementation of

[`IAnswerBoxDataforseoLabsSerpElementItem`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[`text`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#text)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:21411

type of element

#### Implementation of

[`IAnswerBoxDataforseoLabsSerpElementItem`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

***

### xpath?

> `optional` **xpath**: `string`

Defined in: main.ts:21423

the XPath of the element

#### Implementation of

[`IAnswerBoxDataforseoLabsSerpElementItem`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:106927

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:106954

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

***

### fromJS()

> `static` **fromJS**(`data`): [`AnswerBoxDataforseoLabsSerpElementItem`](AnswerBoxDataforseoLabsSerpElementItem.md)

Defined in: main.ts:106947

#### Parameters

##### data

`any`

#### Returns

[`AnswerBoxDataforseoLabsSerpElementItem`](AnswerBoxDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)
