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

main.ts:160398

## Properties

### text?

> **`optional`** **text**: `string`

content text

#### Implementation of

[`IContentItemInfo`](../interfaces/IContentItemInfo.md).[`text`](../interfaces/IContentItemInfo.md#text)

#### Source

main.ts:160389

***

### url?

> **`optional`** **url**: `string`

page URL
displayed in case the text is a link anchor

#### Implementation of

[`IContentItemInfo`](../interfaces/IContentItemInfo.md).[`url`](../interfaces/IContentItemInfo.md#url)

#### Source

main.ts:160392

***

### urls?

> **`optional`** **urls**: [`ContentUrlInfo`](ContentUrlInfo.md)[]

contains other URLs and anchors found in the content element

#### Implementation of

[`IContentItemInfo`](../interfaces/IContentItemInfo.md).[`urls`](../interfaces/IContentItemInfo.md#urls)

#### Source

main.ts:160394

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:160407

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:160430

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ContentItemInfo`](ContentItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentItemInfo`](ContentItemInfo.md)

#### Source

main.ts:160423
