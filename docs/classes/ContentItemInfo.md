[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ContentItemInfo

# Class: ContentItemInfo

## Implements

- [`IContentItemInfo`](../interfaces/IContentItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentItemInfo()

> **new ContentItemInfo**(`data`?): [`ContentItemInfo`](ContentItemInfo.md)

#### Parameters

• **data?**: [`IContentItemInfo`](../interfaces/IContentItemInfo.md)

#### Returns

[`ContentItemInfo`](ContentItemInfo.md)

#### Defined in

main.ts:165345

## Properties

### text?

> `optional` **text**: `string`

content text

#### Implementation of

[`IContentItemInfo`](../interfaces/IContentItemInfo.md).[`text`](../interfaces/IContentItemInfo.md#text)

#### Defined in

main.ts:165336

***

### url?

> `optional` **url**: `string`

page URL
displayed in case the text is a link anchor

#### Implementation of

[`IContentItemInfo`](../interfaces/IContentItemInfo.md).[`url`](../interfaces/IContentItemInfo.md#url)

#### Defined in

main.ts:165339

***

### urls?

> `optional` **urls**: [`ContentUrlInfo`](ContentUrlInfo.md)[]

contains other URLs and anchors found in the content element

#### Implementation of

[`IContentItemInfo`](../interfaces/IContentItemInfo.md).[`urls`](../interfaces/IContentItemInfo.md#urls)

#### Defined in

main.ts:165341

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:165354

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:165377

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentItemInfo`](ContentItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentItemInfo`](ContentItemInfo.md)

#### Defined in

main.ts:165370
