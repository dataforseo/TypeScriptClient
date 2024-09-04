[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / ReviewResponseItemInfo

# Class: ReviewResponseItemInfo

## Implements

- [`IReviewResponseItemInfo`](../interfaces/IReviewResponseItemInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new ReviewResponseItemInfo()

> **new ReviewResponseItemInfo**(`data`?): [`ReviewResponseItemInfo`](ReviewResponseItemInfo.md)

#### Parameters

• **data?**: [`IReviewResponseItemInfo`](../interfaces/IReviewResponseItemInfo.md)

#### Returns

[`ReviewResponseItemInfo`](ReviewResponseItemInfo.md)

#### Defined in

main.ts:21586

## Properties

### text?

> `optional` **text**: `string`

the content of response

#### Implementation of

[`IReviewResponseItemInfo`](../interfaces/IReviewResponseItemInfo.md).[`text`](../interfaces/IReviewResponseItemInfo.md#text)

#### Defined in

main.ts:21580

***

### timestamp?

> `optional` **timestamp**: `string`

the time of publication

#### Implementation of

[`IReviewResponseItemInfo`](../interfaces/IReviewResponseItemInfo.md).[`timestamp`](../interfaces/IReviewResponseItemInfo.md#timestamp)

#### Defined in

main.ts:21582

***

### title?

> `optional` **title**: `string`

the title of response

#### Implementation of

[`IReviewResponseItemInfo`](../interfaces/IReviewResponseItemInfo.md).[`title`](../interfaces/IReviewResponseItemInfo.md#title)

#### Defined in

main.ts:21578

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:21595

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:21614

***

### fromJS()

> `static` **fromJS**(`data`): [`ReviewResponseItemInfo`](ReviewResponseItemInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`ReviewResponseItemInfo`](ReviewResponseItemInfo.md)

#### Defined in

main.ts:21607
