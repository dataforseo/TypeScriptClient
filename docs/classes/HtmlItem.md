**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / HtmlItem

# Class: HtmlItem

## Implements

- [`IHtmlItem`](../interfaces/IHtmlItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HtmlItem(data)

> **new HtmlItem**(`data`?): [`HtmlItem`](HtmlItem.md)

#### Parameters

• **data?**: [`IHtmlItem`](../interfaces/IHtmlItem.md)

#### Returns

[`HtmlItem`](HtmlItem.md)

#### Source

main.ts:37801

## Properties

### date?

> **`optional`** **date**: `string`

date and time when the HTML page was scanned
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IHtmlItem`](../interfaces/IHtmlItem.md).[`date`](../interfaces/IHtmlItem.md#date)

#### Source

main.ts:37795

***

### html?

> **`optional`** **html**: `string`

HTML page

#### Implementation of

[`IHtmlItem`](../interfaces/IHtmlItem.md).[`html`](../interfaces/IHtmlItem.md#html)

#### Source

main.ts:37797

***

### page?

> **`optional`** **page**: `number`

serial number of the returned HTML page

#### Implementation of

[`IHtmlItem`](../interfaces/IHtmlItem.md).[`page`](../interfaces/IHtmlItem.md#page)

#### Source

main.ts:37790

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:37810

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:37829

***

### fromJS()

> **`static`** **fromJS**(`data`): [`HtmlItem`](HtmlItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`HtmlItem`](HtmlItem.md)

#### Source

main.ts:37822
