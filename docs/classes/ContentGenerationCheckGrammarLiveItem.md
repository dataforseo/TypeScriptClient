[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationCheckGrammarLiveItem

# Class: ContentGenerationCheckGrammarLiveItem

Defined in: main.ts:183186

## Implements

- [`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationCheckGrammarLiveItem()

> **new ContentGenerationCheckGrammarLiveItem**(`data`?): [`ContentGenerationCheckGrammarLiveItem`](ContentGenerationCheckGrammarLiveItem.md)

Defined in: main.ts:183213

#### Parameters

##### data?

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md)

#### Returns

[`ContentGenerationCheckGrammarLiveItem`](ContentGenerationCheckGrammarLiveItem.md)

## Properties

### description?

> `optional` **description**: `string`

Defined in: main.ts:183190

description of the grammar or spelling error

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`description`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#description)

***

### length?

> `optional` **length**: `number`

Defined in: main.ts:183196

offset token for subsequent requests

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`length`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#length)

***

### message?

> `optional` **message**: `string`

Defined in: main.ts:183188

message of the grammar or spelling error

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`message`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#message)

***

### offset?

> `optional` **offset**: `number`

Defined in: main.ts:183194

offset token for subsequent requests

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`offset`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#offset)

***

### rule\_category\_id?

> `optional` **rule\_category\_id**: `string`

Defined in: main.ts:183207

id of the rule category

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`rule_category_id`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_category_id)

***

### rule\_category\_name?

> `optional` **rule\_category\_name**: `string`

Defined in: main.ts:183209

name of the rule category

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`rule_category_name`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_category_name)

***

### rule\_description?

> `optional` **rule\_description**: `string`

Defined in: main.ts:183203

description of the grammar or spelling rule

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`rule_description`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_description)

***

### rule\_id?

> `optional` **rule\_id**: `string`

Defined in: main.ts:183201

id of the grammar or spelling rule
see the List of Grammar Rules for Content Generation API

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`rule_id`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_id)

***

### rule\_issue\_type?

> `optional` **rule\_issue\_type**: `string`

Defined in: main.ts:183205

type of the issue found by the relevant rule

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`rule_issue_type`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_issue_type)

***

### suggestions?

> `optional` **suggestions**: `string`[]

Defined in: main.ts:183192

suggested corrections

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`suggestions`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#suggestions)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:183198

type of element

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`type`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:183222

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:183253

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationCheckGrammarLiveItem`](ContentGenerationCheckGrammarLiveItem.md)

Defined in: main.ts:183246

#### Parameters

##### data

`any`

#### Returns

[`ContentGenerationCheckGrammarLiveItem`](ContentGenerationCheckGrammarLiveItem.md)
