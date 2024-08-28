[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / AnswerBoxDataforseoLabsSerpElementItem

# Class: AnswerBoxDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IAnswerBoxDataforseoLabsSerpElementItem`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AnswerBoxDataforseoLabsSerpElementItem()

> **new AnswerBoxDataforseoLabsSerpElementItem**(`data`?): [`AnswerBoxDataforseoLabsSerpElementItem`](AnswerBoxDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IAnswerBoxDataforseoLabsSerpElementItem`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md)

#### Returns

[`AnswerBoxDataforseoLabsSerpElementItem`](AnswerBoxDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:98806

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20752

***

### links?

> `optional` **links**: [`LinkElement`](LinkElement.md)[]

sitelinks
the links shown below some of Google’s search results
if there are none, equals null

#### Implementation of

[`IAnswerBoxDataforseoLabsSerpElementItem`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[`links`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#links)

#### Defined in

main.ts:98802

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IAnswerBoxDataforseoLabsSerpElementItem`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:98793

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IAnswerBoxDataforseoLabsSerpElementItem`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:98789

***

### rank\_group?

> `optional` **rank\_group**: `number`

group rank in SERP
position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IAnswerBoxDataforseoLabsSerpElementItem`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:98786

***

### text?

> `optional` **text**: `string`[]

text
if there is none, equals null

#### Implementation of

[`IAnswerBoxDataforseoLabsSerpElementItem`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[`text`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#text)

#### Defined in

main.ts:98798

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IAnswerBoxDataforseoLabsSerpElementItem`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IAnswerBoxDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:98795

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Defined in

main.ts:98811

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Defined in

main.ts:98842

***

### fromJS()

> `static` **fromJS**(`data`): [`AnswerBoxDataforseoLabsSerpElementItem`](AnswerBoxDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AnswerBoxDataforseoLabsSerpElementItem`](AnswerBoxDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:98835
