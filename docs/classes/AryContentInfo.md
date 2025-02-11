[**Documentation**](../README.md)

***

[Documentation](../README.md) / AryContentInfo

# Class: AryContentInfo

Defined in: main.ts:173684

## Implements

- [`IAryContentInfo`](../interfaces/IAryContentInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AryContentInfo()

> **new AryContentInfo**(`data`?): [`AryContentInfo`](AryContentInfo.md)

Defined in: main.ts:173695

#### Parameters

##### data?

[`IAryContentInfo`](../interfaces/IAryContentInfo.md)

#### Returns

[`AryContentInfo`](AryContentInfo.md)

## Properties

### text?

> `optional` **text**: `string`

Defined in: main.ts:173686

content text

#### Implementation of

[`IAryContentInfo`](../interfaces/IAryContentInfo.md).[`text`](../interfaces/IAryContentInfo.md#text)

***

### url?

> `optional` **url**: `string`

Defined in: main.ts:173689

page URL
displayed in case the text is a link anchor

#### Implementation of

[`IAryContentInfo`](../interfaces/IAryContentInfo.md).[`url`](../interfaces/IAryContentInfo.md#url)

***

### urls?

> `optional` **urls**: [`Urls`](Urls.md)[]

Defined in: main.ts:173691

contains other URLs and anchors found in the content element

#### Implementation of

[`IAryContentInfo`](../interfaces/IAryContentInfo.md).[`urls`](../interfaces/IAryContentInfo.md#urls)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:173704

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:173727

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AryContentInfo`](AryContentInfo.md)

Defined in: main.ts:173720

#### Parameters

##### data

`any`

#### Returns

[`AryContentInfo`](AryContentInfo.md)
