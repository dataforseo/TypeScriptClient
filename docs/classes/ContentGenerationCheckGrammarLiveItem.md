[Documentation](../README.md) / [Exports](../modules.md) / ContentGenerationCheckGrammarLiveItem

# Class: ContentGenerationCheckGrammarLiveItem

## Implements

- [`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](ContentGenerationCheckGrammarLiveItem.md#constructor)

### Properties

- [description](ContentGenerationCheckGrammarLiveItem.md#description)
- [length](ContentGenerationCheckGrammarLiveItem.md#length)
- [message](ContentGenerationCheckGrammarLiveItem.md#message)
- [offset](ContentGenerationCheckGrammarLiveItem.md#offset)
- [rule\_category\_id](ContentGenerationCheckGrammarLiveItem.md#rule_category_id)
- [rule\_category\_name](ContentGenerationCheckGrammarLiveItem.md#rule_category_name)
- [rule\_description](ContentGenerationCheckGrammarLiveItem.md#rule_description)
- [rule\_id](ContentGenerationCheckGrammarLiveItem.md#rule_id)
- [rule\_issue\_type](ContentGenerationCheckGrammarLiveItem.md#rule_issue_type)
- [suggestions](ContentGenerationCheckGrammarLiveItem.md#suggestions)
- [type](ContentGenerationCheckGrammarLiveItem.md#type)

### Methods

- [init](ContentGenerationCheckGrammarLiveItem.md#init)
- [toJSON](ContentGenerationCheckGrammarLiveItem.md#tojson)
- [fromJS](ContentGenerationCheckGrammarLiveItem.md#fromjs)

## Constructors

### constructor

• **new ContentGenerationCheckGrammarLiveItem**(`data?`): [`ContentGenerationCheckGrammarLiveItem`](ContentGenerationCheckGrammarLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IContentGenerationCheckGrammarLiveItem`](../interfaces/IContentGenerationCheckGrammarLiveItem.md) |

#### Returns

[`ContentGenerationCheckGrammarLiveItem`](ContentGenerationCheckGrammarLiveItem.md)

#### Defined in

main.ts:161614

## Properties

### description

• `Optional` **description**: `string`

description of the grammar or spelling error

#### Implementation of

[IContentGenerationCheckGrammarLiveItem](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[description](../interfaces/IContentGenerationCheckGrammarLiveItem.md#description)

#### Defined in

main.ts:161591

___

### length

• `Optional` **length**: `number`

offset token for subsequent requests

#### Implementation of

[IContentGenerationCheckGrammarLiveItem](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[length](../interfaces/IContentGenerationCheckGrammarLiveItem.md#length)

#### Defined in

main.ts:161597

___

### message

• `Optional` **message**: `string`

message of the grammar or spelling error

#### Implementation of

[IContentGenerationCheckGrammarLiveItem](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[message](../interfaces/IContentGenerationCheckGrammarLiveItem.md#message)

#### Defined in

main.ts:161589

___

### offset

• `Optional` **offset**: `number`

offset token for subsequent requests

#### Implementation of

[IContentGenerationCheckGrammarLiveItem](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[offset](../interfaces/IContentGenerationCheckGrammarLiveItem.md#offset)

#### Defined in

main.ts:161595

___

### rule\_category\_id

• `Optional` **rule\_category\_id**: `string`

id of the rule category

#### Implementation of

[IContentGenerationCheckGrammarLiveItem](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[rule_category_id](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_category_id)

#### Defined in

main.ts:161608

___

### rule\_category\_name

• `Optional` **rule\_category\_name**: `string`

name of the rule category

#### Implementation of

[IContentGenerationCheckGrammarLiveItem](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[rule_category_name](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_category_name)

#### Defined in

main.ts:161610

___

### rule\_description

• `Optional` **rule\_description**: `string`

description of the grammar or spelling rule

#### Implementation of

[IContentGenerationCheckGrammarLiveItem](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[rule_description](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_description)

#### Defined in

main.ts:161604

___

### rule\_id

• `Optional` **rule\_id**: `string`

id of the grammar or spelling rule
see the List of Grammar Rules for Content Generation API

#### Implementation of

[IContentGenerationCheckGrammarLiveItem](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[rule_id](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_id)

#### Defined in

main.ts:161602

___

### rule\_issue\_type

• `Optional` **rule\_issue\_type**: `string`

type of the issue found by the relevant rule

#### Implementation of

[IContentGenerationCheckGrammarLiveItem](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[rule_issue_type](../interfaces/IContentGenerationCheckGrammarLiveItem.md#rule_issue_type)

#### Defined in

main.ts:161606

___

### suggestions

• `Optional` **suggestions**: `string`[]

suggested corrections

#### Implementation of

[IContentGenerationCheckGrammarLiveItem](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[suggestions](../interfaces/IContentGenerationCheckGrammarLiveItem.md#suggestions)

#### Defined in

main.ts:161593

___

### type

• `Optional` **type**: `string`

type of element

#### Implementation of

[IContentGenerationCheckGrammarLiveItem](../interfaces/IContentGenerationCheckGrammarLiveItem.md).[type](../interfaces/IContentGenerationCheckGrammarLiveItem.md#type)

#### Defined in

main.ts:161599

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

main.ts:161623

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

main.ts:161654

___

### fromJS

▸ **fromJS**(`data`): [`ContentGenerationCheckGrammarLiveItem`](ContentGenerationCheckGrammarLiveItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`ContentGenerationCheckGrammarLiveItem`](ContentGenerationCheckGrammarLiveItem.md)

#### Defined in

main.ts:161647
