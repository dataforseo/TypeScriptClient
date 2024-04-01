[Documentation](../README.md) / [Exports](../modules.md) / IContentGenerationCheckGrammarLiveItem

# Interface: IContentGenerationCheckGrammarLiveItem

## Implemented by

- [`ContentGenerationCheckGrammarLiveItem`](../classes/ContentGenerationCheckGrammarLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [description](IContentGenerationCheckGrammarLiveItem.md#description)
- [length](IContentGenerationCheckGrammarLiveItem.md#length)
- [message](IContentGenerationCheckGrammarLiveItem.md#message)
- [offset](IContentGenerationCheckGrammarLiveItem.md#offset)
- [rule\_category\_id](IContentGenerationCheckGrammarLiveItem.md#rule_category_id)
- [rule\_category\_name](IContentGenerationCheckGrammarLiveItem.md#rule_category_name)
- [rule\_description](IContentGenerationCheckGrammarLiveItem.md#rule_description)
- [rule\_id](IContentGenerationCheckGrammarLiveItem.md#rule_id)
- [rule\_issue\_type](IContentGenerationCheckGrammarLiveItem.md#rule_issue_type)
- [suggestions](IContentGenerationCheckGrammarLiveItem.md#suggestions)
- [type](IContentGenerationCheckGrammarLiveItem.md#type)

## Properties

### description

• `Optional` **description**: `string`

description of the grammar or spelling error

#### Defined in

main.ts:166990

___

### length

• `Optional` **length**: `number`

offset token for subsequent requests

#### Defined in

main.ts:166996

___

### message

• `Optional` **message**: `string`

message of the grammar or spelling error

#### Defined in

main.ts:166988

___

### offset

• `Optional` **offset**: `number`

offset token for subsequent requests

#### Defined in

main.ts:166994

___

### rule\_category\_id

• `Optional` **rule\_category\_id**: `string`

id of the rule category

#### Defined in

main.ts:167007

___

### rule\_category\_name

• `Optional` **rule\_category\_name**: `string`

name of the rule category

#### Defined in

main.ts:167009

___

### rule\_description

• `Optional` **rule\_description**: `string`

description of the grammar or spelling rule

#### Defined in

main.ts:167003

___

### rule\_id

• `Optional` **rule\_id**: `string`

id of the grammar or spelling rule
see the List of Grammar Rules for Content Generation API

#### Defined in

main.ts:167001

___

### rule\_issue\_type

• `Optional` **rule\_issue\_type**: `string`

type of the issue found by the relevant rule

#### Defined in

main.ts:167005

___

### suggestions

• `Optional` **suggestions**: `string`[]

suggested corrections

#### Defined in

main.ts:166992

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:166998
