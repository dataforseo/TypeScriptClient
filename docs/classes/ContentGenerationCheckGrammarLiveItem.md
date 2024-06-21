**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ContentGenerationCheckGrammarLiveItem

# Class: ContentGenerationCheckGrammarLiveItem

## Implements

- [`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationCheckGrammarLiveItem(data)

> **new ContentGenerationCheckGrammarLiveItem**(`data`?): [`ContentGenerationCheckGrammarLiveItem`](ContentGenerationCheckGrammarLiveItem.md)

#### Parameters

• **data?**: [`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md)

#### Returns

[`ContentGenerationCheckGrammarLiveItem`](ContentGenerationCheckGrammarLiveItem.md)

#### Source

main.ts:170458

## Properties

### description?

> **`optional`** **description**: `string`

description of the grammar or spelling error

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`description`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#description)

#### Source

main.ts:170435

***

### length?

> **`optional`** **length**: `number`

offset token for subsequent requests

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`length`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#length)

#### Source

main.ts:170441

***

### message?

> **`optional`** **message**: `string`

message of the grammar or spelling error

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`message`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#message)

#### Source

main.ts:170433

***

### offset?

> **`optional`** **offset**: `number`

offset token for subsequent requests

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`offset`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#offset)

#### Source

main.ts:170439

***

### rule\_category\_id?

> **`optional`** **rule\_category\_id**: `string`

id of the rule category

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`rule_category_id`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_category_id)

#### Source

main.ts:170452

***

### rule\_category\_name?

> **`optional`** **rule\_category\_name**: `string`

name of the rule category

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`rule_category_name`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_category_name)

#### Source

main.ts:170454

***

### rule\_description?

> **`optional`** **rule\_description**: `string`

description of the grammar or spelling rule

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`rule_description`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_description)

#### Source

main.ts:170448

***

### rule\_id?

> **`optional`** **rule\_id**: `string`

id of the grammar or spelling rule
see the List of Grammar Rules for Content Generation API

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`rule_id`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_id)

#### Source

main.ts:170446

***

### rule\_issue\_type?

> **`optional`** **rule\_issue\_type**: `string`

type of the issue found by the relevant rule

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`rule_issue_type`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_issue_type)

#### Source

main.ts:170450

***

### suggestions?

> **`optional`** **suggestions**: `string`[]

suggested corrections

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`suggestions`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#suggestions)

#### Source

main.ts:170437

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`type`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#type)

#### Source

main.ts:170443

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:170467

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:170498

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ContentGenerationCheckGrammarLiveItem`](ContentGenerationCheckGrammarLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentGenerationCheckGrammarLiveItem`](ContentGenerationCheckGrammarLiveItem.md)

#### Source

main.ts:170491
