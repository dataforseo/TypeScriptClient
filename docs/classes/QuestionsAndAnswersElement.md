[Documentation](../README.md) / [Exports](../modules.md) / QuestionsAndAnswersElement

# Class: QuestionsAndAnswersElement

## Implements

- [`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](QuestionsAndAnswersElement.md#constructor)

### Properties

- [answer\_text](QuestionsAndAnswersElement.md#answer_text)
- [domain](QuestionsAndAnswersElement.md#domain)
- [question\_text](QuestionsAndAnswersElement.md#question_text)
- [source](QuestionsAndAnswersElement.md#source)
- [type](QuestionsAndAnswersElement.md#type)
- [url](QuestionsAndAnswersElement.md#url)
- [votes](QuestionsAndAnswersElement.md#votes)

### Methods

- [init](QuestionsAndAnswersElement.md#init)
- [toJSON](QuestionsAndAnswersElement.md#tojson)
- [fromJS](QuestionsAndAnswersElement.md#fromjs)

## Constructors

### constructor

• **new QuestionsAndAnswersElement**(`data?`): [`QuestionsAndAnswersElement`](QuestionsAndAnswersElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md) |

#### Returns

[`QuestionsAndAnswersElement`](QuestionsAndAnswersElement.md)

#### Defined in

main.ts:32955

## Properties

### answer\_text

• `Optional` **answer\_text**: `string`

answer included in the item

#### Implementation of

[IQuestionsAndAnswersElement](../interfaces/IQuestionsAndAnswersElement.md).[answer_text](../interfaces/IQuestionsAndAnswersElement.md#answer_text)

#### Defined in

main.ts:32944

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Implementation of

[IQuestionsAndAnswersElement](../interfaces/IQuestionsAndAnswersElement.md).[domain](../interfaces/IQuestionsAndAnswersElement.md#domain)

#### Defined in

main.ts:32949

___

### question\_text

• `Optional` **question\_text**: `string`

question included in the item

#### Implementation of

[IQuestionsAndAnswersElement](../interfaces/IQuestionsAndAnswersElement.md).[question_text](../interfaces/IQuestionsAndAnswersElement.md#question_text)

#### Defined in

main.ts:32942

___

### source

• `Optional` **source**: `string`

web source of the hotel booking element
indicates the source of information included in the element

#### Implementation of

[IQuestionsAndAnswersElement](../interfaces/IQuestionsAndAnswersElement.md).[source](../interfaces/IQuestionsAndAnswersElement.md#source)

#### Defined in

main.ts:32947

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IQuestionsAndAnswersElement](../interfaces/IQuestionsAndAnswersElement.md).[type](../interfaces/IQuestionsAndAnswersElement.md#type)

#### Defined in

main.ts:32938

___

### url

• `Optional` **url**: `string`

URL

#### Implementation of

[IQuestionsAndAnswersElement](../interfaces/IQuestionsAndAnswersElement.md).[url](../interfaces/IQuestionsAndAnswersElement.md#url)

#### Defined in

main.ts:32940

___

### votes

• `Optional` **votes**: `number`

answer upvotes from the source

#### Implementation of

[IQuestionsAndAnswersElement](../interfaces/IQuestionsAndAnswersElement.md).[votes](../interfaces/IQuestionsAndAnswersElement.md#votes)

#### Defined in

main.ts:32951

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:32964

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:32987

___

### fromJS

▸ **fromJS**(`data`): [`QuestionsAndAnswersElement`](QuestionsAndAnswersElement.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`QuestionsAndAnswersElement`](QuestionsAndAnswersElement.md)

#### Defined in

main.ts:32980
