**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / QuestionsAndAnswersElement

# Class: QuestionsAndAnswersElement

## Implements

- [`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new QuestionsAndAnswersElement(data)

> **new QuestionsAndAnswersElement**(`data`?): [`QuestionsAndAnswersElement`](QuestionsAndAnswersElement.md)

#### Parameters

• **data?**: [`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md)

#### Returns

[`QuestionsAndAnswersElement`](QuestionsAndAnswersElement.md)

#### Source

main.ts:34163

## Properties

### answer\_text?

> **`optional`** **answer\_text**: `string`

answer included in the item

#### Implementation of

[`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md).[`answer_text`](../interfaces/IQuestionsAndAnswersElement.md#answer_text)

#### Source

main.ts:34152

***

### domain?

> **`optional`** **domain**: `string`

website domain

#### Implementation of

[`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md).[`domain`](../interfaces/IQuestionsAndAnswersElement.md#domain)

#### Source

main.ts:34157

***

### question\_text?

> **`optional`** **question\_text**: `string`

question included in the item

#### Implementation of

[`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md).[`question_text`](../interfaces/IQuestionsAndAnswersElement.md#question_text)

#### Source

main.ts:34150

***

### source?

> **`optional`** **source**: `string`

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md).[`source`](../interfaces/IQuestionsAndAnswersElement.md#source)

#### Source

main.ts:34155

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md).[`type`](../interfaces/IQuestionsAndAnswersElement.md#type)

#### Source

main.ts:34146

***

### url?

> **`optional`** **url**: `string`

URL

#### Implementation of

[`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md).[`url`](../interfaces/IQuestionsAndAnswersElement.md#url)

#### Source

main.ts:34148

***

### votes?

> **`optional`** **votes**: `number`

answer upvotes from the source

#### Implementation of

[`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md).[`votes`](../interfaces/IQuestionsAndAnswersElement.md#votes)

#### Source

main.ts:34159

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:34172

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:34195

***

### fromJS()

> **`static`** **fromJS**(`data`): [`QuestionsAndAnswersElement`](QuestionsAndAnswersElement.md)

#### Parameters

• **data**: `any`

#### Returns

[`QuestionsAndAnswersElement`](QuestionsAndAnswersElement.md)

#### Source

main.ts:34188
