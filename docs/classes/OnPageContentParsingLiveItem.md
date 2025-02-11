[**Documentation**](../README.md)

***

[Documentation](../README.md) / OnPageContentParsingLiveItem

# Class: OnPageContentParsingLiveItem

Defined in: main.ts:174396

## Implements

- [`IOnPageContentParsingLiveItem`](../interfaces/IOnPageContentParsingLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new OnPageContentParsingLiveItem()

> **new OnPageContentParsingLiveItem**(`data`?): [`OnPageContentParsingLiveItem`](OnPageContentParsingLiveItem.md)

Defined in: main.ts:174410

#### Parameters

##### data?

[`IOnPageContentParsingLiveItem`](../interfaces/IOnPageContentParsingLiveItem.md)

#### Returns

[`OnPageContentParsingLiveItem`](OnPageContentParsingLiveItem.md)

## Properties

### fetch\_time?

> `optional` **fetch\_time**: `string`

Defined in: main.ts:174402

date and time when the content was fethced
example:
"2022-11-01 10:02:52 +00:00"

#### Implementation of

[`IOnPageContentParsingLiveItem`](../interfaces/IOnPageContentParsingLiveItem.md).[`fetch_time`](../interfaces/IOnPageContentParsingLiveItem.md#fetch_time)

***

### page\_content?

> `optional` **page\_content**: [`PageContentInfo`](PageContentInfo.md)

Defined in: main.ts:174406

parsed content of the page

#### Implementation of

[`IOnPageContentParsingLiveItem`](../interfaces/IOnPageContentParsingLiveItem.md).[`page_content`](../interfaces/IOnPageContentParsingLiveItem.md#page_content)

***

### status\_code?

> `optional` **status\_code**: `number`

Defined in: main.ts:174404

status code of the page

#### Implementation of

[`IOnPageContentParsingLiveItem`](../interfaces/IOnPageContentParsingLiveItem.md).[`status_code`](../interfaces/IOnPageContentParsingLiveItem.md#status_code)

***

### type?

> `optional` **type**: `string`

Defined in: main.ts:174398

type of element

#### Implementation of

[`IOnPageContentParsingLiveItem`](../interfaces/IOnPageContentParsingLiveItem.md).[`type`](../interfaces/IOnPageContentParsingLiveItem.md#type)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:174419

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:174439

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`OnPageContentParsingLiveItem`](OnPageContentParsingLiveItem.md)

Defined in: main.ts:174432

#### Parameters

##### data

`any`

#### Returns

[`OnPageContentParsingLiveItem`](OnPageContentParsingLiveItem.md)
