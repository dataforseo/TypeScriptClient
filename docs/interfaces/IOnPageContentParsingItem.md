[Documentation](../README.md) / [Exports](../modules.md) / IOnPageContentParsingItem

# Interface: IOnPageContentParsingItem

## Implemented by

- [`OnPageContentParsingItem`](../classes/OnPageContentParsingItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [fetch\_time](IOnPageContentParsingItem.md#fetch_time)
- [page\_content](IOnPageContentParsingItem.md#page_content)
- [status\_code](IOnPageContentParsingItem.md#status_code)
- [type](IOnPageContentParsingItem.md#type)

## Properties

### fetch\_time

• `Optional` **fetch\_time**: `string`

date and time when the content was fethced
example:
"2022-11-01 10:02:52 +00:00"

#### Defined in

main.ts:152488

___

### page\_content

• `Optional` **page\_content**: [`PageContentInfo`](../classes/PageContentInfo.md)

parsed content of the page

#### Defined in

main.ts:152492

___

### status\_code

• `Optional` **status\_code**: `number`

status code of the page

#### Defined in

main.ts:152490

___

### type

• `Optional` **type**: `string`

type of element

#### Defined in

main.ts:152484
