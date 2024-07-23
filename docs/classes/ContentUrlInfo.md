**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ContentUrlInfo

# Class: ContentUrlInfo

## Implements

- [`IContentUrlInfo`](../interfaces/IContentUrlInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ContentUrlInfo(data)

> **new ContentUrlInfo**(`data`?): [`ContentUrlInfo`](ContentUrlInfo.md)

#### Parameters

• **data?**: [`IContentUrlInfo`](../interfaces/IContentUrlInfo.md)

#### Returns

[`ContentUrlInfo`](ContentUrlInfo.md)

#### Source

main.ts:163454

## Properties

### anchor\_text?

> **`optional`** **anchor\_text**: `string`

text of the URL’s anchor

#### Implementation of

[`IContentUrlInfo`](../interfaces/IContentUrlInfo.md).[`anchor_text`](../interfaces/IContentUrlInfo.md#anchor_text)

#### Source

main.ts:163450

***

### url?

> **`optional`** **url**: `string`

other URL found in the content element

#### Implementation of

[`IContentUrlInfo`](../interfaces/IContentUrlInfo.md).[`url`](../interfaces/IContentUrlInfo.md#url)

#### Source

main.ts:163448

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:163463

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:163481

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ContentUrlInfo`](ContentUrlInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ContentUrlInfo`](ContentUrlInfo.md)

#### Source

main.ts:163474
