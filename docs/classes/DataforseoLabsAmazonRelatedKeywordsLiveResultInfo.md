[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAmazonRelatedKeywordsLiveResultInfo

# Class: DataforseoLabsAmazonRelatedKeywordsLiveResultInfo

## Implements

- [`IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonRelatedKeywordsLiveResultInfo()

> **new DataforseoLabsAmazonRelatedKeywordsLiveResultInfo**(`data`?): [`DataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md)

#### Parameters

##### data?

[`IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md)

#### Returns

[`DataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md)

#### Defined in

main.ts:112529

## Properties

### items?

> `optional` **items**: [`DataforseoLabsAmazonRelatedKeywordsLiveItem`](DataforseoLabsAmazonRelatedKeywordsLiveItem.md)[]

contains objects with keywords and related data

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#items)

#### Defined in

main.ts:112525

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#items_count)

#### Defined in

main.ts:112523

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#language_code)

#### Defined in

main.ts:112519

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#location_code)

#### Defined in

main.ts:112517

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#se_type)

#### Defined in

main.ts:112510

***

### seed\_keyword?

> `optional` **seed\_keyword**: `string`

keyword in a POST array

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[`seed_keyword`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#seed_keyword)

#### Defined in

main.ts:112512

***

### seed\_keyword\_data?

> `optional` **seed\_keyword\_data**: [`AmazonKeywordData`](AmazonKeywordData.md)

keyword data for the seed keyword
fields in the object are identical to that of keyword_data

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[`seed_keyword_data`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#seed_keyword_data)

#### Defined in

main.ts:112515

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md#total_count)

#### Defined in

main.ts:112521

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:112538

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:112566

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md)

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAmazonRelatedKeywordsLiveResultInfo`](DataforseoLabsAmazonRelatedKeywordsLiveResultInfo.md)

#### Defined in

main.ts:112559
