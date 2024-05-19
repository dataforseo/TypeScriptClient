**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / ReviewResponseItemInfo

# Class: ReviewResponseItemInfo

## Implements

- [`IReviewResponseItemInfo`](../interfaces/IReviewResponseItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ReviewResponseItemInfo(data)

> **new ReviewResponseItemInfo**(`data`?): [`ReviewResponseItemInfo`](ReviewResponseItemInfo.md)

#### Parameters

• **data?**: [`IReviewResponseItemInfo`](../interfaces/IReviewResponseItemInfo.md)

#### Returns

[`ReviewResponseItemInfo`](ReviewResponseItemInfo.md)

#### Source

main.ts:21086

## Properties

### text?

> **`optional`** **text**: `string`

the content of response

#### Implementation of

[`IReviewResponseItemInfo`](../interfaces/IReviewResponseItemInfo.md).[`text`](../interfaces/IReviewResponseItemInfo.md#text)

#### Source

main.ts:21080

***

### timestamp?

> **`optional`** **timestamp**: `string`

the time of publication

#### Implementation of

[`IReviewResponseItemInfo`](../interfaces/IReviewResponseItemInfo.md).[`timestamp`](../interfaces/IReviewResponseItemInfo.md#timestamp)

#### Source

main.ts:21082

***

### title?

> **`optional`** **title**: `string`

the title of response

#### Implementation of

[`IReviewResponseItemInfo`](../interfaces/IReviewResponseItemInfo.md).[`title`](../interfaces/IReviewResponseItemInfo.md#title)

#### Source

main.ts:21078

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:21095

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:21114

***

### fromJS()

> **`static`** **fromJS**(`data`): [`ReviewResponseItemInfo`](ReviewResponseItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ReviewResponseItemInfo`](ReviewResponseItemInfo.md)

#### Source

main.ts:21107
