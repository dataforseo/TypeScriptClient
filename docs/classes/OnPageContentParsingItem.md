[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageContentParsingItem

# Class: OnPageContentParsingItem

Defined in: main.ts:173562

## Implements

- [`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageContentParsingItem()

> **new OnPageContentParsingItem**(`data`?): [`OnPageContentParsingItem`](OnPageContentParsingItem.md)

Defined in: main.ts:173576

#### Parameters

##### data?

[`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md)

#### Returns

[`OnPageContentParsingItem`](OnPageContentParsingItem.md)

## Properties

### fetch\_time?

> `optional` **fetch\_time**: `string`

Defined in: main.ts:173568

date and time when the content was fethced
example:
"2022-11-01 10:02:52 +00:00"

#### Implementation of

[`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md).[`fetch_time`](../interfaces/IOnPageContentParsingItem.md#fetch_time)

***

### page\_content?

> `optional` **page\_content**: [`PageContentInfo`](PageContentInfo.md)

Defined in: main.ts:173572

parsed content of the page

#### Implementation of

[`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md).[`page_content`](../interfaces/IOnPageContentParsingItem.md#page_content)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:173570

status code of the page

#### Implementation of

[`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md).[`status_code`](../interfaces/IOnPageContentParsingItem.md#status_code)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:173564

type of element

#### Implementation of

[`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md).[`type`](../interfaces/IOnPageContentParsingItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:173585

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:173605

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageContentParsingItem`](OnPageContentParsingItem.md)

Defined in: main.ts:173598

#### Parameters

##### data

`any`

#### Returns

[`OnPageContentParsingItem`](OnPageContentParsingItem.md)
