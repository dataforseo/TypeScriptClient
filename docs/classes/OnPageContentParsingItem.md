[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / OnPageContentParsingItem

# Class: OnPageContentParsingItem

## Implements

- [`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new OnPageContentParsingItem()

> **new OnPageContentParsingItem**(`data`?): [`OnPageContentParsingItem`](OnPageContentParsingItem.md)

#### Parameters

• **data?**: [`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md)

#### Returns

[`OnPageContentParsingItem`](OnPageContentParsingItem.md)

#### Defined in

main.ts:165932

## Properties

### fetch\_time?

> `optional` **fetch\_time**: `string`

date and time when the content was fethced
example:
"2022-11-01 10:02:52 +00:00"

#### Implementation of

[`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md).[`fetch_time`](../interfaces/IOnPageContentParsingItem.md#fetch_time)

#### Defined in

main.ts:165924

***

### page\_content?

> `optional` **page\_content**: [`PageContentInfo`](PageContentInfo.md)

parsed content of the page

#### Implementation of

[`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md).[`page_content`](../interfaces/IOnPageContentParsingItem.md#page_content)

#### Defined in

main.ts:165928

***

### status\_code?

> `optional` **status\_code**: `number`

status code of the page

#### Implementation of

[`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md).[`status_code`](../interfaces/IOnPageContentParsingItem.md#status_code)

#### Defined in

main.ts:165926

***

### type?

> `optional` **type**: `string`

type of element

#### Implementation of

[`IOnPageContentParsingItem`](../interfaces/IOnPageContentParsingItem.md).[`type`](../interfaces/IOnPageContentParsingItem.md#type)

#### Defined in

main.ts:165920

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:165941

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:165961

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageContentParsingItem`](OnPageContentParsingItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`OnPageContentParsingItem`](OnPageContentParsingItem.md)

#### Defined in

main.ts:165954
