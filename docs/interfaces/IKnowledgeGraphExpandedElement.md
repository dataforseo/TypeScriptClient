[dataforseo-client](../README.md) / [Exports](../modules.md) / IKnowledgeGraphExpandedElement

# Interface: IKnowledgeGraphExpandedElement

## Implemented by

- [`KnowledgeGraphExpandedElement`](../classes/KnowledgeGraphExpandedElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [domain](IKnowledgeGraphExpandedElement.md#domain)
- [featured\_title](IKnowledgeGraphExpandedElement.md#featured_title)
- [images](IKnowledgeGraphExpandedElement.md#images)
- [snippet](IKnowledgeGraphExpandedElement.md#snippet)
- [table](IKnowledgeGraphExpandedElement.md#table)
- [timestamp](IKnowledgeGraphExpandedElement.md#timestamp)
- [title](IKnowledgeGraphExpandedElement.md#title)
- [type](IKnowledgeGraphExpandedElement.md#type)
- [url](IKnowledgeGraphExpandedElement.md#url)

## Properties

### domain

• `Optional` **domain**: `string`

domain in SERP

#### Defined in

[main.ts:27030](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27030)

___

### featured\_title

• `Optional` **featured\_title**: `string`

title of a given element

#### Defined in

[main.ts:27026](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27026)

___

### images

• `Optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the element

#### Defined in

[main.ts:27036](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27036)

___

### snippet

• `Optional` **snippet**: `string`

text alongside the link title

#### Defined in

[main.ts:27034](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27034)

___

### table

• `Optional` **table**: [`Table`](../classes/Table.md)

table element

#### Defined in

[main.ts:27043](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27043)

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

[main.ts:27041](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27041)

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

[main.ts:27032](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27032)

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

[main.ts:27024](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27024)

___

### url

• `Optional` **url**: `string`

relevant URL

#### Defined in

[main.ts:27028](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L27028)
