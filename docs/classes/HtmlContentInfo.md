[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / HtmlContentInfo

# Class: HtmlContentInfo

## Implements

- [`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new HtmlContentInfo()

> **new HtmlContentInfo**(`data`?): [`HtmlContentInfo`](HtmlContentInfo.md)

#### Parameters

• **data?**: [`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md)

#### Returns

[`HtmlContentInfo`](HtmlContentInfo.md)

#### Defined in

main.ts:157464

## Properties

### automated\_readability\_index?

> `optional` **automated\_readability\_index**: `number`

Automated Readability Index

#### Implementation of

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md).[`automated_readability_index`](../interfaces/IHtmlContentInfo.md#automated_readability_index)

#### Defined in

main.ts:157443

***

### coleman\_liau\_readability\_index?

> `optional` **coleman\_liau\_readability\_index**: `number`

Coleman–Liau Index

#### Implementation of

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md).[`coleman_liau_readability_index`](../interfaces/IHtmlContentInfo.md#coleman_liau_readability_index)

#### Defined in

main.ts:157445

***

### dale\_chall\_readability\_index?

> `optional` **dale\_chall\_readability\_index**: `number`

Dale–Chall Readability Index

#### Implementation of

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md).[`dale_chall_readability_index`](../interfaces/IHtmlContentInfo.md#dale_chall_readability_index)

#### Defined in

main.ts:157447

***

### description\_to\_content\_consistency?

> `optional` **description\_to\_content\_consistency**: `number`

consistency of the meta description tag with the page content
measured from 0 to 1

#### Implementation of

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md).[`description_to_content_consistency`](../interfaces/IHtmlContentInfo.md#description_to_content_consistency)

#### Defined in

main.ts:157454

***

### flesch\_kincaid\_readability\_index?

> `optional` **flesch\_kincaid\_readability\_index**: `number`

Flesch–Kincaid Readability Index

#### Implementation of

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md).[`flesch_kincaid_readability_index`](../interfaces/IHtmlContentInfo.md#flesch_kincaid_readability_index)

#### Defined in

main.ts:157449

***

### meta\_keywords\_to\_content\_consistency?

> `optional` **meta\_keywords\_to\_content\_consistency**: `number`

consistency of meta keywordstag with the page content
measured from 0 to 1

#### Implementation of

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md).[`meta_keywords_to_content_consistency`](../interfaces/IHtmlContentInfo.md#meta_keywords_to_content_consistency)

#### Defined in

main.ts:157460

***

### plain\_text\_rate?

> `optional` **plain\_text\_rate**: `number`

plaintext rate value
plain_text_size to size ratio

#### Implementation of

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md).[`plain_text_rate`](../interfaces/IHtmlContentInfo.md#plain_text_rate)

#### Defined in

main.ts:157439

***

### plain\_text\_size?

> `optional` **plain\_text\_size**: `number`

total size of the text on the page measured in bytes

#### Implementation of

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md).[`plain_text_size`](../interfaces/IHtmlContentInfo.md#plain_text_size)

#### Defined in

main.ts:157436

***

### plain\_text\_word\_count?

> `optional` **plain\_text\_word\_count**: `number`

number of words on the page

#### Implementation of

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md).[`plain_text_word_count`](../interfaces/IHtmlContentInfo.md#plain_text_word_count)

#### Defined in

main.ts:157441

***

### smog\_readability\_index?

> `optional` **smog\_readability\_index**: `number`

SMOG Readability Index

#### Implementation of

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md).[`smog_readability_index`](../interfaces/IHtmlContentInfo.md#smog_readability_index)

#### Defined in

main.ts:157451

***

### title\_to\_content\_consistency?

> `optional` **title\_to\_content\_consistency**: `number`

consistency of the meta title tag with the page content
measured from 0 to 1

#### Implementation of

[`IHtmlContentInfo`](../interfaces/IHtmlContentInfo.md).[`title_to_content_consistency`](../interfaces/IHtmlContentInfo.md#title_to_content_consistency)

#### Defined in

main.ts:157457

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:157473

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:157500

***

### fromJS()

> `static` **fromJS**(`data`): [`HtmlContentInfo`](HtmlContentInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`HtmlContentInfo`](HtmlContentInfo.md)

#### Defined in

main.ts:157493
