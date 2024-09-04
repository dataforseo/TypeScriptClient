[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / IOnPageContentParsingItem

# Interface: IOnPageContentParsingItem

## Indexable

 \[`key`: `string`\]: `any`

## Properties

### fetch\_time?

> `optional` **fetch\_time**: `string`

date and time when the content was fethced
example:
"2022-11-01 10:02:52 +00:00"

#### Defined in

main.ts:165981

***

### page\_content?

> `optional` **page\_content**: [`PageContentInfo`](../classes/PageContentInfo.md)

parsed content of the page

#### Defined in

main.ts:165985

***

### status\_code?

> `optional` **status\_code**: `number`

status code of the page

#### Defined in

main.ts:165983

***

### type?

> `optional` **type**: `string`

type of element

#### Defined in

main.ts:165977
