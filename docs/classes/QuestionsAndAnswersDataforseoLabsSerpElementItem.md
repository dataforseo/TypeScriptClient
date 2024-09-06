[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / QuestionsAndAnswersDataforseoLabsSerpElementItem

# Class: QuestionsAndAnswersDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IQuestionsAndAnswersDataforseoLabsSerpElementItem`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new QuestionsAndAnswersDataforseoLabsSerpElementItem()

> **new QuestionsAndAnswersDataforseoLabsSerpElementItem**(`data`?): [`QuestionsAndAnswersDataforseoLabsSerpElementItem`](QuestionsAndAnswersDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IQuestionsAndAnswersDataforseoLabsSerpElementItem`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md)

#### Returns

[`QuestionsAndAnswersDataforseoLabsSerpElementItem`](QuestionsAndAnswersDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Defined in

main.ts:99073

## Properties

### \_discriminator

> `protected` **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Defined in

main.ts:20747

***

### items?

> `optional` **items**: [`QuestionsAndAnswersElement`](QuestionsAndAnswersElement.md)[]

elements of search results found in SERP

#### Implementation of

[`IQuestionsAndAnswersDataforseoLabsSerpElementItem`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md#items)

#### Defined in

main.ts:99069

***

### position?

> `optional` **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IQuestionsAndAnswersDataforseoLabsSerpElementItem`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md#position)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`position`](BaseDataforseoLabsSerpElementItem.md#position)

#### Defined in

main.ts:20743

***

### rank\_absolute?

> `optional` **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IQuestionsAndAnswersDataforseoLabsSerpElementItem`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md#rank_absolute)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_absolute`](BaseDataforseoLabsSerpElementItem.md#rank_absolute)

#### Defined in

main.ts:20739

***

### rank\_group?

> `optional` **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IQuestionsAndAnswersDataforseoLabsSerpElementItem`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md#rank_group)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`rank_group`](BaseDataforseoLabsSerpElementItem.md#rank_group)

#### Defined in

main.ts:20736

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IQuestionsAndAnswersDataforseoLabsSerpElementItem`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md).[`type`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md#type)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`type`](BaseDataforseoLabsSerpElementItem.md#type)

#### Defined in

main.ts:20733

***

### xpath?

> `optional` **xpath**: `string`

the XPath of the element

#### Implementation of

[`IQuestionsAndAnswersDataforseoLabsSerpElementItem`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md#xpath)

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`xpath`](BaseDataforseoLabsSerpElementItem.md#xpath)

#### Defined in

main.ts:20745

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

main.ts:99078

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

main.ts:99100

***

### fromJS()

> `static` **fromJS**(`data`): [`QuestionsAndAnswersDataforseoLabsSerpElementItem`](QuestionsAndAnswersDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`QuestionsAndAnswersDataforseoLabsSerpElementItem`](QuestionsAndAnswersDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Defined in

main.ts:99093
