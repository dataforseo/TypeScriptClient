[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoLabsAmazonProductCompetitorsLiveResultInfo

# Class: DataforseoLabsAmazonProductCompetitorsLiveResultInfo

## Implements

- [`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonProductCompetitorsLiveResultInfo()

> **new DataforseoLabsAmazonProductCompetitorsLiveResultInfo**(`data`?): [`DataforseoLabsAmazonProductCompetitorsLiveResultInfo`](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md)

#### Returns

[`DataforseoLabsAmazonProductCompetitorsLiveResultInfo`](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md)

#### Defined in

main.ts:107659

## Properties

### asin?

> `optional` **asin**: `string`

ASIN in a POST array

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[`asin`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#asin)

#### Defined in

main.ts:107643

***

### items?

> `optional` **items**: [`DataforseoLabsAmazonProductCompetitorsLiveItem`](DataforseoLabsAmazonProductCompetitorsLiveItem.md)[]

contains detected Amazon product competitors and related data

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#items)

#### Defined in

main.ts:107655

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#items_count)

#### Defined in

main.ts:107653

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#language_code)

#### Defined in

main.ts:107649

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#location_code)

#### Defined in

main.ts:107646

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#se_type)

#### Defined in

main.ts:107641

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAmazonProductCompetitorsLiveResultInfo`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAmazonProductCompetitorsLiveResultInfo.md#total_count)

#### Defined in

main.ts:107651

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:107668

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:107695

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonProductCompetitorsLiveResultInfo`](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAmazonProductCompetitorsLiveResultInfo`](DataforseoLabsAmazonProductCompetitorsLiveResultInfo.md)

#### Defined in

main.ts:107688
