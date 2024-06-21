**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AmazonKeywordInfo

# Class: AmazonKeywordInfo

## Implements

- [`IAmazonKeywordInfo`](../interfaces/IAmazonKeywordInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AmazonKeywordInfo(data)

> **new AmazonKeywordInfo**(`data`?): [`AmazonKeywordInfo`](AmazonKeywordInfo.md)

#### Parameters

• **data?**: [`IAmazonKeywordInfo`](../interfaces/IAmazonKeywordInfo.md)

#### Returns

[`AmazonKeywordInfo`](AmazonKeywordInfo.md)

#### Source

main.ts:22138

## Properties

### last\_updated\_time?

> **`optional`** **last\_updated\_time**: `string`

date and time when keyword data was updated
in the UTC format: “yyyy-mm-dd hh-mm-ss +00:00”
example:    '2019-11-15 12:57:46 +00:00'

#### Implementation of

[`IAmazonKeywordInfo`](../interfaces/IAmazonKeywordInfo.md).[`last_updated_time`](../interfaces/IAmazonKeywordInfo.md#last_updated_time)

#### Source

main.ts:22131

***

### se\_type?

> **`optional`** **se\_type**: `string`

search engine type

#### Implementation of

[`IAmazonKeywordInfo`](../interfaces/IAmazonKeywordInfo.md).[`se_type`](../interfaces/IAmazonKeywordInfo.md#se_type)

#### Source

main.ts:22127

***

### search\_volume?

> **`optional`** **search\_volume**: `number`

average monthly search volume rate
represents the (approximate) number of searches for the provided keyword idea on Amazon

#### Implementation of

[`IAmazonKeywordInfo`](../interfaces/IAmazonKeywordInfo.md).[`search_volume`](../interfaces/IAmazonKeywordInfo.md#search_volume)

#### Source

main.ts:22134

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:22147

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:22166

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AmazonKeywordInfo`](AmazonKeywordInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`AmazonKeywordInfo`](AmazonKeywordInfo.md)

#### Source

main.ts:22159
