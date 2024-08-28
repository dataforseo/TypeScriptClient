[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo

# Class: DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo

## Implements

- [`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo()

> **new DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo**(`data`?): [`DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md)

#### Returns

[`DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md)

#### Defined in

main.ts:108215

## Properties

### asins?

> `optional` **asins**: `object`

ASINs in a POST array

#### Index Signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md).[`asins`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#asins)

#### Defined in

main.ts:108199

***

### items?

> `optional` **items**: [`DataforseoLabsAmazonProductKeywordIntersectionsLiveItem`](DataforseoLabsAmazonProductKeywordIntersectionsLiveItem.md)[]

contains detected Amazon product competitors and related data

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#items)

#### Defined in

main.ts:108211

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#items_count)

#### Defined in

main.ts:108209

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#language_code)

#### Defined in

main.ts:108205

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#location_code)

#### Defined in

main.ts:108202

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#se_type)

#### Defined in

main.ts:108197

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md#total_count)

#### Defined in

main.ts:108207

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:108224

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:108257

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo`](DataforseoLabsAmazonProductKeywordIntersectionsLiveResultInfo.md)

#### Defined in

main.ts:108250
