[**Documentation**](../README.md)

***

[Documentation](../README.md) / HtmlItem

# Class: HtmlItem

Defined in: main.ts:38451

## Implements

- [`IHtmlItem`](../interfaces/IHtmlItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new HtmlItem()

> **new HtmlItem**(`data`?): [`HtmlItem`](HtmlItem.md)

Defined in: main.ts:38464

#### Parameters

##### data?

[`IHtmlItem`](../interfaces/IHtmlItem.md)

#### Returns

[`HtmlItem`](HtmlItem.md)

## Properties

### date?

> `optional` **date**: `string`

Defined in: main.ts:38458

date and time when the HTML page was scanned
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[`IHtmlItem`](../interfaces/IHtmlItem.md).[`date`](../interfaces/IHtmlItem.md#date)

***

### html?

> `optional` **html**: `string`

Defined in: main.ts:38460

HTML page

#### Implementation of

[`IHtmlItem`](../interfaces/IHtmlItem.md).[`html`](../interfaces/IHtmlItem.md#html)

***

### page?

> `optional` **page**: `number`

Defined in: main.ts:38453

serial number of the returned HTML page

#### Implementation of

[`IHtmlItem`](../interfaces/IHtmlItem.md).[`page`](../interfaces/IHtmlItem.md#page)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:38473

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:38492

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`HtmlItem`](HtmlItem.md)

Defined in: main.ts:38485

#### Parameters

##### data

`any`

#### Returns

[`HtmlItem`](HtmlItem.md)
