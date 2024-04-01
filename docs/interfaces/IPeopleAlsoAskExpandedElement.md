[Documentation](../README.md) / [Exports](../modules.md) / IPeopleAlsoAskExpandedElement

# Interface: IPeopleAlsoAskExpandedElement

## Implemented by

- [`PeopleAlsoAskExpandedElement`](../classes/PeopleAlsoAskExpandedElement.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [description](IPeopleAlsoAskExpandedElement.md#description)
- [domain](IPeopleAlsoAskExpandedElement.md#domain)
- [featured\_title](IPeopleAlsoAskExpandedElement.md#featured_title)
- [images](IPeopleAlsoAskExpandedElement.md#images)
- [table](IPeopleAlsoAskExpandedElement.md#table)
- [timestamp](IPeopleAlsoAskExpandedElement.md#timestamp)
- [title](IPeopleAlsoAskExpandedElement.md#title)
- [type](IPeopleAlsoAskExpandedElement.md#type)
- [url](IPeopleAlsoAskExpandedElement.md#url)

## Properties

### description

• `Optional` **description**: `string`

description of the results element in SERP

#### Defined in

main.ts:29226

___

### domain

• `Optional` **domain**: `string`

domain where a link points

#### Defined in

main.ts:29222

___

### featured\_title

• `Optional` **featured\_title**: `string`

the title of the featured snippets source page

#### Defined in

main.ts:29218

___

### images

• `Optional` **images**: [`ImagesElement`](../classes/ImagesElement.md)[]

images of the element

#### Defined in

main.ts:29228

___

### table

• `Optional` **table**: [`Table`](../classes/Table.md)

results table
if there are none, equals null

#### Defined in

main.ts:29236

___

### timestamp

• `Optional` **timestamp**: `string`

date and time when the result was published
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Defined in

main.ts:29233

___

### title

• `Optional` **title**: `string`

title of the carousel item

#### Defined in

main.ts:29224

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:29216

___

### url

• `Optional` **url**: `string`

URL of element

#### Defined in

main.ts:29220
