**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AmazonKeywordData

# Class: AmazonKeywordData

## Implements

- [`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AmazonKeywordData(data)

> **new AmazonKeywordData**(`data`?): [`AmazonKeywordData`](AmazonKeywordData.md)

#### Parameters

• **data?**: [`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md)

#### Returns

[`AmazonKeywordData`](AmazonKeywordData.md)

#### Source

main.ts:21873

## Properties

### keyword?

> **`optional`** **keyword**: `string`

related keyword

#### Implementation of

[`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md).[`keyword`](../interfaces/IAmazonKeywordData.md#keyword)

#### Source

main.ts:21863

***

### keyword\_info?

> **`optional`** **keyword\_info**: [`AmazonKeywordInfo`](AmazonKeywordInfo.md)

keyword info for the returned keyword

#### Implementation of

[`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md).[`keyword_info`](../interfaces/IAmazonKeywordData.md#keyword_info)

#### Source

main.ts:21869

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md).[`language_code`](../interfaces/IAmazonKeywordData.md#language_code)

#### Source

main.ts:21867

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md).[`location_code`](../interfaces/IAmazonKeywordData.md#location_code)

#### Source

main.ts:21865

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IAmazonKeywordData`](../interfaces/IAmazonKeywordData.md).[`se_type`](../interfaces/IAmazonKeywordData.md#se_type)

#### Source

main.ts:21861

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:21882

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:21903

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AmazonKeywordData`](AmazonKeywordData.md)

#### Parameters

• **data**: `any`

#### Returns

[`AmazonKeywordData`](AmazonKeywordData.md)

#### Source

main.ts:21896
