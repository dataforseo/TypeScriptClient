[Documentation](../README.md) / [Exports](../modules.md) / HtmlContentInfo

# Class: HtmlContentInfo

## Implements

- [`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Constructors

- [constructor](HtmlContentInfo.md#constructor)

### Properties

- [automated\_readability\_index](HtmlContentInfo.md#automated_readability_index)
- [coleman\_liau\_readability\_index](HtmlContentInfo.md#coleman_liau_readability_index)
- [dale\_chall\_readability\_index](HtmlContentInfo.md#dale_chall_readability_index)
- [description\_to\_content\_consistency](HtmlContentInfo.md#description_to_content_consistency)
- [flesch\_kincaid\_readability\_index](HtmlContentInfo.md#flesch_kincaid_readability_index)
- [meta\_keywords\_to\_content\_consistency](HtmlContentInfo.md#meta_keywords_to_content_consistency)
- [plain\_text\_rate](HtmlContentInfo.md#plain_text_rate)
- [plain\_text\_size](HtmlContentInfo.md#plain_text_size)
- [plain\_text\_word\_count](HtmlContentInfo.md#plain_text_word_count)
- [smog\_readability\_index](HtmlContentInfo.md#smog_readability_index)
- [title\_to\_content\_consistency](HtmlContentInfo.md#title_to_content_consistency)

### Methods

- [init](HtmlContentInfo.md#init)
- [toJSON](HtmlContentInfo.md#tojson)
- [fromJS](HtmlContentInfo.md#fromjs)

## Constructors

### constructor

• **new HtmlContentInfo**(`data?`): [`HtmlContentInfo`](HtmlContentInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md) |

#### Returns

[`HtmlContentInfo`](HtmlContentInfo.md)

#### Defined in

main.ts:144219

## Properties

### automated\_readability\_index

• `Optional` **automated\_readability\_index**: `number`

Automated Readability Index

#### Implementation of

[IHtmlContentInfo](../interfaces/IHtmlContentInfo.md).[automated_readability_index](../interfaces/IHtmlContentInfo.md#automated_readability_index)

#### Defined in

main.ts:144198

___

### coleman\_liau\_readability\_index

• `Optional` **coleman\_liau\_readability\_index**: `number`

Coleman–Liau Index

#### Implementation of

[IHtmlContentInfo](../interfaces/IHtmlContentInfo.md).[coleman_liau_readability_index](../interfaces/IHtmlContentInfo.md#coleman_liau_readability_index)

#### Defined in

main.ts:144200

___

### dale\_chall\_readability\_index

• `Optional` **dale\_chall\_readability\_index**: `number`

Dale–Chall Readability Index

#### Implementation of

[IHtmlContentInfo](../interfaces/IHtmlContentInfo.md).[dale_chall_readability_index](../interfaces/IHtmlContentInfo.md#dale_chall_readability_index)

#### Defined in

main.ts:144202

___

### description\_to\_content\_consistency

• `Optional` **description\_to\_content\_consistency**: `number`

consistency of the meta description tag with the page content
measured from 0 to 1

#### Implementation of

[IHtmlContentInfo](../interfaces/IHtmlContentInfo.md).[description_to_content_consistency](../interfaces/IHtmlContentInfo.md#description_to_content_consistency)

#### Defined in

main.ts:144209

___

### flesch\_kincaid\_readability\_index

• `Optional` **flesch\_kincaid\_readability\_index**: `number`

Flesch–Kincaid Readability Index

#### Implementation of

[IHtmlContentInfo](../interfaces/IHtmlContentInfo.md).[flesch_kincaid_readability_index](../interfaces/IHtmlContentInfo.md#flesch_kincaid_readability_index)

#### Defined in

main.ts:144204

___

### meta\_keywords\_to\_content\_consistency

• `Optional` **meta\_keywords\_to\_content\_consistency**: `number`

consistency of meta keywordstag with the page content
measured from 0 to 1

#### Implementation of

[IHtmlContentInfo](../interfaces/IHtmlContentInfo.md).[meta_keywords_to_content_consistency](../interfaces/IHtmlContentInfo.md#meta_keywords_to_content_consistency)

#### Defined in

main.ts:144215

___

### plain\_text\_rate

• `Optional` **plain\_text\_rate**: `number`

plaintext rate value
plain_text_size to size ratio

#### Implementation of

[IHtmlContentInfo](../interfaces/IHtmlContentInfo.md).[plain_text_rate](../interfaces/IHtmlContentInfo.md#plain_text_rate)

#### Defined in

main.ts:144194

___

### plain\_text\_size

• `Optional` **plain\_text\_size**: `number`

total size of the text on the page measured in bytes

#### Implementation of

[IHtmlContentInfo](../interfaces/IHtmlContentInfo.md).[plain_text_size](../interfaces/IHtmlContentInfo.md#plain_text_size)

#### Defined in

main.ts:144191

___

### plain\_text\_word\_count

• `Optional` **plain\_text\_word\_count**: `number`

number of words on the page

#### Implementation of

[IHtmlContentInfo](../interfaces/IHtmlContentInfo.md).[plain_text_word_count](../interfaces/IHtmlContentInfo.md#plain_text_word_count)

#### Defined in

main.ts:144196

___

### smog\_readability\_index

• `Optional` **smog\_readability\_index**: `number`

SMOG Readability Index

#### Implementation of

[IHtmlContentInfo](../interfaces/IHtmlContentInfo.md).[smog_readability_index](../interfaces/IHtmlContentInfo.md#smog_readability_index)

#### Defined in

main.ts:144206

___

### title\_to\_content\_consistency

• `Optional` **title\_to\_content\_consistency**: `number`

consistency of the meta title tag with the page content
measured from 0 to 1

#### Implementation of

[IHtmlContentInfo](../interfaces/IHtmlContentInfo.md).[title_to_content_consistency](../interfaces/IHtmlContentInfo.md#title_to_content_consistency)

#### Defined in

main.ts:144212

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

main.ts:144228

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

main.ts:144255

___

### fromJS

▸ **fromJS**(`data`): [`HtmlContentInfo`](HtmlContentInfo.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

[`HtmlContentInfo`](HtmlContentInfo.md)

#### Defined in

main.ts:144248
