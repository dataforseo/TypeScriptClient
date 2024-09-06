[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / HtmlItem

# Class: HtmlItem

## Implements

- [`IHtmlItem`](../interfaces/IHtmlItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HtmlItem()

> **new HtmlItem**(`data`?): [`HtmlItem`](HtmlItem.md)

#### Parameters

• **data?**: [`IHtmlItem`](../interfaces/IHtmlItem.md)

#### Returns

[`HtmlItem`](HtmlItem.md)

#### Defined in

main.ts:36957

## Properties

### date?

> `optional` **date**: `string`

date and time when the HTML page was scanned
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IHtmlItem`](../interfaces/IHtmlItem.md).[`date`](../interfaces/IHtmlItem.md#date)

#### Defined in

main.ts:36951

***

### html?

> `optional` **html**: `string`

HTML page

#### Implementation of

[`IHtmlItem`](../interfaces/IHtmlItem.md).[`html`](../interfaces/IHtmlItem.md#html)

#### Defined in

main.ts:36953

***

### page?

> `optional` **page**: `number`

serial number of the returned HTML page

#### Implementation of

[`IHtmlItem`](../interfaces/IHtmlItem.md).[`page`](../interfaces/IHtmlItem.md#page)

#### Defined in

main.ts:36946

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:36966

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:36985

***

### fromJS()

> `static` **fromJS**(`data`): [`HtmlItem`](HtmlItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`HtmlItem`](HtmlItem.md)

#### Defined in

main.ts:36978
