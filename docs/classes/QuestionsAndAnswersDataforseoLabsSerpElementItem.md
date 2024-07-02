**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / QuestionsAndAnswersDataforseoLabsSerpElementItem

# Class: QuestionsAndAnswersDataforseoLabsSerpElementItem

## Extends

- [`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md)

## Implements

- [`IQuestionsAndAnswersDataforseoLabsSerpElementItem`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new QuestionsAndAnswersDataforseoLabsSerpElementItem(data)

> **new QuestionsAndAnswersDataforseoLabsSerpElementItem**(`data`?): [`QuestionsAndAnswersDataforseoLabsSerpElementItem`](QuestionsAndAnswersDataforseoLabsSerpElementItem.md)

#### Parameters

• **data?**: [`IQuestionsAndAnswersDataforseoLabsSerpElementItem`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md)

#### Returns

[`QuestionsAndAnswersDataforseoLabsSerpElementItem`](QuestionsAndAnswersDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`constructor`](BaseDataforseoLabsSerpElementItem.md#constructors)

#### Source

main.ts:100044

## Properties

### \_discriminator

> **`protected`** **\_discriminator**: `string`

#### Inherited from

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`_discriminator`](BaseDataforseoLabsSerpElementItem.md#_discriminator)

#### Source

main.ts:20243

***

### items?

> **`optional`** **items**: [`QuestionsAndAnswersElement`](QuestionsAndAnswersElement.md)[]

additional items present in the element
if there are none, equals null

#### Implementation of

[`IQuestionsAndAnswersDataforseoLabsSerpElementItem`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md).[`items`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md#items)

#### Source

main.ts:100040

***

### position?

> **`optional`** **position**: `string`

the alignment of the element in SERP
can take the following values:
left, right

#### Implementation of

[`IQuestionsAndAnswersDataforseoLabsSerpElementItem`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md).[`position`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md#position)

#### Source

main.ts:100035

***

### rank\_absolute?

> **`optional`** **rank\_absolute**: `number`

absolute rank in SERP
absolute position among all the elements in SERP

#### Implementation of

[`IQuestionsAndAnswersDataforseoLabsSerpElementItem`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md).[`rank_absolute`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md#rank_absolute)

#### Source

main.ts:100031

***

### rank\_group?

> **`optional`** **rank\_group**: `number`

position within a group of elements with identical type values
positions of elements with different type values are omitted from rank_group

#### Implementation of

[`IQuestionsAndAnswersDataforseoLabsSerpElementItem`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md).[`rank_group`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md#rank_group)

#### Source

main.ts:100028

***

### xpath?

> **`optional`** **xpath**: `string`

the XPath of the element

#### Implementation of

[`IQuestionsAndAnswersDataforseoLabsSerpElementItem`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md).[`xpath`](../interfaces/IQuestionsAndAnswersDataforseoLabsSerpElementItem.md#xpath)

#### Source

main.ts:100037

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`init`](BaseDataforseoLabsSerpElementItem.md#init)

#### Source

main.ts:100049

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`toJSON`](BaseDataforseoLabsSerpElementItem.md#tojson)

#### Source

main.ts:100075

***

### fromJS()

> **`static`** **fromJS**(`data`): [`QuestionsAndAnswersDataforseoLabsSerpElementItem`](QuestionsAndAnswersDataforseoLabsSerpElementItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`QuestionsAndAnswersDataforseoLabsSerpElementItem`](QuestionsAndAnswersDataforseoLabsSerpElementItem.md)

#### Overrides

[`BaseDataforseoLabsSerpElementItem`](BaseDataforseoLabsSerpElementItem.md).[`fromJS`](BaseDataforseoLabsSerpElementItem.md#fromjs)

#### Source

main.ts:100068
