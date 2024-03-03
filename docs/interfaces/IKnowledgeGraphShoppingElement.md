[Documentation](../README.md) / [Exports](../modules.md) / IKnowledgeGraphShoppingElement

# Interface: IKnowledgeGraphShoppingElement

## Implemented by

- [`KnowledgeGraphShoppingElement`](../classes/KnowledgeGraphShoppingElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [domain](IKnowledgeGraphShoppingElement.md#domain)
- [marketplace](IKnowledgeGraphShoppingElement.md#marketplace)
- [marketplace\_url](IKnowledgeGraphShoppingElement.md#marketplace_url)
- [price](IKnowledgeGraphShoppingElement.md#price)
- [snippet](IKnowledgeGraphShoppingElement.md#snippet)
- [source](IKnowledgeGraphShoppingElement.md#source)
- [title](IKnowledgeGraphShoppingElement.md#title)
- [type](IKnowledgeGraphShoppingElement.md#type)
- [url](IKnowledgeGraphShoppingElement.md#url)

## Properties

### domain

• `Optional` **domain**: `string`

website domain

#### Defined in

main.ts:27520

___

### marketplace

• `Optional` **marketplace**: `string`

merchant account provider
ecommerce site that hosts products or websites of individual sellers under the same merchant account
example:
by Google

#### Defined in

main.ts:27532

___

### marketplace\_url

• `Optional` **marketplace\_url**: `string`

URL to the merchant account provider
ecommerce site that hosts products or websites of individual sellers under the same merchant account

#### Defined in

main.ts:27535

___

### price

• `Optional` **price**: [`PriceInfo`](../classes/PriceInfo.md)

pricing details
contains the pricing details of the product or service featured in the result

#### Defined in

main.ts:27523

___

### snippet

• `Optional` **snippet**: `string`

text alongside the link title

#### Defined in

main.ts:27527

___

### source

• `Optional` **source**: `string`

source of additional information about the result

#### Defined in

main.ts:27525

___

### title

• `Optional` **title**: `string`

title of the result in SERP

#### Defined in

main.ts:27516

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:27514

___

### url

• `Optional` **url**: `string`

relevant URL

#### Defined in

main.ts:27518
