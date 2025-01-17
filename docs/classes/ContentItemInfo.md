[**Documentation**](../README.md)

***

[Documentation](../README.md) / ContentItemInfo

# Class: ContentItemInfo

Defined in: main.ts:172978

## Implements

- [`IContentItemInfo`](../interfaces/IContentItemInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new ContentItemInfo()

> **new ContentItemInfo**(`data`?): [`ContentItemInfo`](ContentItemInfo.md)

Defined in: main.ts:172989

#### Parameters

##### data?

[`IContentItemInfo`](../interfaces/IContentItemInfo.md)

#### Returns

[`ContentItemInfo`](ContentItemInfo.md)

## Properties

### text?

> `optional` **text**: `string`

Defined in: main.ts:172980

content text

#### Implementation of

[`IContentItemInfo`](../interfaces/IContentItemInfo.md).[`text`](../interfaces/IContentItemInfo.md#text)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:172983

page URL
displayed in case the text is a link anchor

#### Implementation of

[`IContentItemInfo`](../interfaces/IContentItemInfo.md).[`url`](../interfaces/IContentItemInfo.md#url)

***

### urls?

> `optional` **urls**: [`ContentUrlInfo`](ContentUrlInfo.md)[]

Defined in: main.ts:172985

contains other URLs and anchors found in the content element

#### Implementation of

[`IContentItemInfo`](../interfaces/IContentItemInfo.md).[`urls`](../interfaces/IContentItemInfo.md#urls)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:172998

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:173021

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`ContentItemInfo`](ContentItemInfo.md)

Defined in: main.ts:173014

#### Parameters

##### data

`any`

#### Returns

[`ContentItemInfo`](ContentItemInfo.md)
