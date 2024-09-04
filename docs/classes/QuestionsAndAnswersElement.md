[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / QuestionsAndAnswersElement

# Class: QuestionsAndAnswersElement

## Implements

- [`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new QuestionsAndAnswersElement()

> **new QuestionsAndAnswersElement**(`data`?): [`QuestionsAndAnswersElement`](QuestionsAndAnswersElement.md)

#### Parameters

• **data?**: [`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md)

#### Returns

[`QuestionsAndAnswersElement`](QuestionsAndAnswersElement.md)

#### Defined in

main.ts:33568

## Properties

### answer\_text?

> `optional` **answer\_text**: `string`

answer included in the item

#### Implementation of

[`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md).[`answer_text`](../interfaces/IQuestionsAndAnswersElement.md#answer_text)

#### Defined in

main.ts:33557

***

### domain?

> `optional` **domain**: `string`

website domain

#### Implementation of

[`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md).[`domain`](../interfaces/IQuestionsAndAnswersElement.md#domain)

#### Defined in

main.ts:33562

***

### question\_text?

> `optional` **question\_text**: `string`

question included in the item

#### Implementation of

[`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md).[`question_text`](../interfaces/IQuestionsAndAnswersElement.md#question_text)

#### Defined in

main.ts:33555

***

### source?

> `optional` **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md).[`source`](../interfaces/IQuestionsAndAnswersElement.md#source)

#### Defined in

main.ts:33560

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md).[`type`](../interfaces/IQuestionsAndAnswersElement.md#type)

#### Defined in

main.ts:33551

***

### url?

> `optional` **url**: `string`

URL

#### Implementation of

[`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md).[`url`](../interfaces/IQuestionsAndAnswersElement.md#url)

#### Defined in

main.ts:33553

***

### votes?

> `optional` **votes**: `number`

answer upvotes from the source

#### Implementation of

[`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md).[`votes`](../interfaces/IQuestionsAndAnswersElement.md#votes)

#### Defined in

main.ts:33564

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:33577

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:33600

***

### fromJS()

> `static` **fromJS**(`data`): [`QuestionsAndAnswersElement`](QuestionsAndAnswersElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`QuestionsAndAnswersElement`](QuestionsAndAnswersElement.md)

#### Defined in

main.ts:33593
