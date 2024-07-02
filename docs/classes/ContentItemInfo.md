**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ContentItemInfo

# Class: ContentItemInfo

## Implements

- [`IContentItemInfo`](../interfaces/IContentItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentItemInfo(data)

> **new ContentItemInfo**(`data`?): [`ContentItemInfo`](ContentItemInfo.md)

#### Parameters

• **data?**: [`IContentItemInfo`](../interfaces/IContentItemInfo.md)

#### Returns

[`ContentItemInfo`](ContentItemInfo.md)

#### Source

main.ts:160646

## Properties

### text?

> **`optional`** **text**: `string`

content text

#### Implementation of

[`IContentItemInfo`](../interfaces/IContentItemInfo.md).[`text`](../interfaces/IContentItemInfo.md#text)

#### Source

main.ts:160637

***

### url?

> **`optional`** **url**: `string`

page URL
displayed in case the text is a link anchor

#### Implementation of

[`IContentItemInfo`](../interfaces/IContentItemInfo.md).[`url`](../interfaces/IContentItemInfo.md#url)

#### Source

main.ts:160640

***

### urls?

> **`optional`** **urls**: [`ContentUrlInfo`](ContentUrlInfo.md)[]

contains other URLs and anchors found in the content element

#### Implementation of

[`IContentItemInfo`](../interfaces/IContentItemInfo.md).[`urls`](../interfaces/IContentItemInfo.md#urls)

#### Source

main.ts:160642

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:160655

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:160678

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ContentItemInfo`](ContentItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentItemInfo`](ContentItemInfo.md)

#### Source

main.ts:160671
