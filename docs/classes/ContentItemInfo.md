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

main.ts:157547

## Properties

### text?

> **`optional`** **text**: `string`

content text

#### Implementation of

[`IContentItemInfo`](../interfaces/IContentItemInfo.md).[`text`](../interfaces/IContentItemInfo.md#text)

#### Source

main.ts:157540

***

### url?

> **`optional`** **url**: `string`

page URL
displayed in case the text is a link anchor

#### Implementation of

[`IContentItemInfo`](../interfaces/IContentItemInfo.md).[`url`](../interfaces/IContentItemInfo.md#url)

#### Source

main.ts:157543

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:157556

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:157574

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ContentItemInfo`](ContentItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentItemInfo`](ContentItemInfo.md)

#### Source

main.ts:157567
