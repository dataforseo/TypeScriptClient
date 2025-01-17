[**Documentation**](../README.md)

***

[Documentation](../README.md) / QuestionsAndAnswersElement

# Class: QuestionsAndAnswersElement

Defined in: main.ts:35339

## Implements

- [`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new QuestionsAndAnswersElement()

> **new QuestionsAndAnswersElement**(`data`?): [`QuestionsAndAnswersElement`](QuestionsAndAnswersElement.md)

Defined in: main.ts:35358

#### Parameters

##### data?

[`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md)

#### Returns

[`QuestionsAndAnswersElement`](QuestionsAndAnswersElement.md)

## Properties

### answer\_text?

> `optional` **answer\_text**: `string`

Defined in: main.ts:35347

answer included in the item

#### Implementation of

[`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md).[`answer_text`](../interfaces/IQuestionsAndAnswersElement.md#answer_text)

***

### domain?

> `optional` **domain**: `string`

Defined in: main.ts:35352

website domain

#### Implementation of

[`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md).[`domain`](../interfaces/IQuestionsAndAnswersElement.md#domain)

***

### question\_text?

> `optional` **question\_text**: `string`

Defined in: main.ts:35345

question included in the item

#### Implementation of

[`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md).[`question_text`](../interfaces/IQuestionsAndAnswersElement.md#question_text)

***

### source?

> `optional` **source**: `string`

Defined in: main.ts:35350

source of the element
indicates the source of information included in the top_stories_element

#### Implementation of

[`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md).[`source`](../interfaces/IQuestionsAndAnswersElement.md#source)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:35341

type of element

#### Implementation of

[`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md).[`type`](../interfaces/IQuestionsAndAnswersElement.md#type)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:35343

URL

#### Implementation of

[`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md).[`url`](../interfaces/IQuestionsAndAnswersElement.md#url)

***

### votes?

> `optional` **votes**: `number`

Defined in: main.ts:35354

answer upvotes from the source

#### Implementation of

[`IQuestionsAndAnswersElement`](../interfaces/IQuestionsAndAnswersElement.md).[`votes`](../interfaces/IQuestionsAndAnswersElement.md#votes)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:35367

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:35390

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`QuestionsAndAnswersElement`](QuestionsAndAnswersElement.md)

Defined in: main.ts:35383

#### Parameters

##### data

`any`

#### Returns

[`QuestionsAndAnswersElement`](QuestionsAndAnswersElement.md)
