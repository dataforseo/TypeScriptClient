[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentGenerationCheckGrammarLiveItem

# Class: ContentGenerationCheckGrammarLiveItem

## Implements

- [`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentGenerationCheckGrammarLiveItem()

> **new ContentGenerationCheckGrammarLiveItem**(`data`?): [`ContentGenerationCheckGrammarLiveItem`](ContentGenerationCheckGrammarLiveItem.md)

#### Parameters

##### data?

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md)

#### Returns

[`ContentGenerationCheckGrammarLiveItem`](ContentGenerationCheckGrammarLiveItem.md)

#### Defined in

main.ts:182783

## Properties

### description?

> `optional` **description**: `string`

description of the grammar or spelling error

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`description`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#description)

#### Defined in

main.ts:182760

***

### length?

> `optional` **length**: `number`

offset token for subsequent requests

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`length`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#length)

#### Defined in

main.ts:182766

***

### message?

> `optional` **message**: `string`

message of the grammar or spelling error

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`message`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#message)

#### Defined in

main.ts:182758

***

### offset?

> `optional` **offset**: `number`

offset token for subsequent requests

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`offset`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#offset)

#### Defined in

main.ts:182764

***

### rule\_category\_id?

> `optional` **rule\_category\_id**: `string`

id of the rule category

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`rule_category_id`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_category_id)

#### Defined in

main.ts:182777

***

### rule\_category\_name?

> `optional` **rule\_category\_name**: `string`

name of the rule category

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`rule_category_name`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_category_name)

#### Defined in

main.ts:182779

***

### rule\_description?

> `optional` **rule\_description**: `string`

description of the grammar or spelling rule

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`rule_description`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_description)

#### Defined in

main.ts:182773

***

### rule\_id?

> `optional` **rule\_id**: `string`

id of the grammar or spelling rule
see the List of Grammar Rules for Content Generation API

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`rule_id`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_id)

#### Defined in

main.ts:182771

***

### rule\_issue\_type?

> `optional` **rule\_issue\_type**: `string`

type of the issue found by the relevant rule

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`rule_issue_type`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_issue_type)

#### Defined in

main.ts:182775

***

### suggestions?

> `optional` **suggestions**: `string`[]

suggested corrections

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`suggestions`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#suggestions)

#### Defined in

main.ts:182762

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[`type`](../interfaces/IContentGenerationCheckGrammarLiveItem.md#type)

#### Defined in

main.ts:182768

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:182792

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:182823

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentGenerationCheckGrammarLiveItem`](ContentGenerationCheckGrammarLiveItem.md)

#### Parameters

##### data

`any`

#### Returns

[`ContentGenerationCheckGrammarLiveItem`](ContentGenerationCheckGrammarLiveItem.md)

#### Defined in

main.ts:182816
