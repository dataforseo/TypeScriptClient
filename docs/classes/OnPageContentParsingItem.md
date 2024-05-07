**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / OnPageContentParsingItem

# Class: OnPageContentParsingItem

## Implements

- [`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageContentParsingItem(data)

> **new OnPageContentParsingItem**(`data`?): [`OnPageContentParsingItem`](OnPageContentParsingItem.md)

#### Parameters

• **data?**: [`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md)

#### Returns

[`OnPageContentParsingItem`](OnPageContentParsingItem.md)

#### Source

main.ts:159682

## Properties

### fetch\_time?

> **`optional`** **fetch\_time**: `string`

date and time when the content was fethced
example:
"2022-11-01 10:02:52 +00:00"

#### Implementation of

[`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md).[`fetch_time`](../interfaces/IOnPageContentParsingItem.md#fetch_time)

#### Source

main.ts:159674

***

### page\_content?

> **`optional`** **page\_content**: [`PageContentInfo`](PageContentInfo.md)

parsed content of the page

#### Implementation of

[`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md).[`page_content`](../interfaces/IOnPageContentParsingItem.md#page_content)

#### Source

main.ts:159678

***

### status\_code?

> **`optional`** **status\_code**: `number`

status code of the page

#### Implementation of

[`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md).[`status_code`](../interfaces/IOnPageContentParsingItem.md#status_code)

#### Source

main.ts:159676

***

### type?

> **`optional`** **type**: `string`

type of element

#### Implementation of

[`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md).[`type`](../interfaces/IOnPageContentParsingItem.md#type)

#### Source

main.ts:159670

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:159691

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:159711

***

### fromJS()

> **`static`** **fromJS**(`data`): [`OnPageContentParsingItem`](OnPageContentParsingItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageContentParsingItem`](OnPageContentParsingItem.md)

#### Source

main.ts:159704
