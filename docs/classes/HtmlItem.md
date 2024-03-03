[Documentation](../README.md) / [Exports](../modules.md) / HtmlItem

# Class: HtmlItem

## Implements

- [`IHtmlItem`](../interfaces/IHtmlItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](HtmlItem.md#constructor)

### Properties

- [date](HtmlItem.md#date)
- [html](HtmlItem.md#html)
- [page](HtmlItem.md#page)

### Methods

- [init](HtmlItem.md#init)
- [toJSON](HtmlItem.md#tojson)
- [fromJS](HtmlItem.md#fromjs)

## Constructors

### constructor

• **new HtmlItem**(`data?`): [`HtmlItem`](HtmlItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IHtmlItem`](../interfaces/IHtmlItem.md) |

#### Returns

[`HtmlItem`](HtmlItem.md)

#### Defined in

main.ts:36435

## Properties

### date

• `Optional` **date**: `string`

date and time when the HTML page was scanned
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:
2019-11-15 12:57:46 +00:00

#### Implementation of

[IHtmlItem](../interfaces/IHtmlItem.md).[date](../interfaces/IHtmlItem.md#date)

#### Defined in

main.ts:36429

___

### html

• `Optional` **html**: `string`

HTML page

#### Implementation of

[IHtmlItem](../interfaces/IHtmlItem.md).[html](../interfaces/IHtmlItem.md#html)

#### Defined in

main.ts:36431

___

### page

• `Optional` **page**: `number`

serial number of the returned HTML page

#### Implementation of

[IHtmlItem](../interfaces/IHtmlItem.md).[page](../interfaces/IHtmlItem.md#page)

#### Defined in

main.ts:36424

## Methods

### init

▸ **init**(`_data?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_data?` | `any` |

#### Returns

`void`

#### Defined in

main.ts:36444

___

### toJSON

▸ **toJSON**(`data?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | `any` |

#### Returns

`any`

#### Defined in

main.ts:36463

___

### fromJS

▸ **fromJS**(`data`): [`HtmlItem`](HtmlItem.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`HtmlItem`](HtmlItem.md)

#### Defined in

main.ts:36456
