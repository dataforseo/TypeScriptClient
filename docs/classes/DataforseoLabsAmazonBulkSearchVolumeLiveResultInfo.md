[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo

# Class: DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo

## Implements

- [`IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo()

> **new DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo**(`data`?): [`DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md)

#### Returns

[`DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md)

#### Defined in

main.ts:102290

## Properties

### items?

> `optional` **items**: [`DataforseoLabsAmazonBulkSearchVolumeLiveItem`](DataforseoLabsAmazonBulkSearchVolumeLiveItem.md)[]

contains keyword search volume data data

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#items)

#### Defined in

main.ts:102286

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#items_count)

#### Defined in

main.ts:102284

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#language_code)

#### Defined in

main.ts:102280

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#location_code)

#### Defined in

main.ts:102277

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#se_type)

#### Defined in

main.ts:102274

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#total_count)

#### Defined in

main.ts:102282

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:102299

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:102325

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md)

#### Defined in

main.ts:102318
