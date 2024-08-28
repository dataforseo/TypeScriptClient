[**Documentation**](../README.md) • **Docs**

***

[Documentation](../README.md) / DataforseoLabsAppleAppIntersectionLiveResultInfo

# Class: DataforseoLabsAppleAppIntersectionLiveResultInfo

## Implements

- [`IDataforseoLabsAppleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleAppIntersectionLiveResultInfo()

> **new DataforseoLabsAppleAppIntersectionLiveResultInfo**(`data`?): [`DataforseoLabsAppleAppIntersectionLiveResultInfo`](DataforseoLabsAppleAppIntersectionLiveResultInfo.md)

#### Parameters

• **data?**: [`IDataforseoLabsAppleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md)

#### Returns

[`DataforseoLabsAppleAppIntersectionLiveResultInfo`](DataforseoLabsAppleAppIntersectionLiveResultInfo.md)

#### Defined in

main.ts:118745

## Properties

### app\_ids?

> `optional` **app\_ids**: `object`

ids of the apps in a POST array

#### Index Signature

 \[`key`: `string`\]: `string`

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md).[`app_ids`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#app_ids)

#### Defined in

main.ts:118731

***

### items?

> `optional` **items**: [`DataforseoLabsAppleAppIntersectionLiveItem`](DataforseoLabsAppleAppIntersectionLiveItem.md)[]

contains data related to the ranking keywords for the app specified in the app_id field

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#items)

#### Defined in

main.ts:118741

***

### items\_count?

> `optional` **items\_count**: `number`

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#items_count)

#### Defined in

main.ts:118739

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#language_code)

#### Defined in

main.ts:118735

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#location_code)

#### Defined in

main.ts:118733

***

### se\_type?

> `optional` **se\_type**: `string`

search engine type

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#se_type)

#### Defined in

main.ts:118729

***

### total\_count?

> `optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAppleAppIntersectionLiveResultInfo`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#total_count)

#### Defined in

main.ts:118737

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:118754

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:118787

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAppleAppIntersectionLiveResultInfo`](DataforseoLabsAppleAppIntersectionLiveResultInfo.md)

#### Parameters

• **data**: `any`

#### Returns

[`DataforseoLabsAppleAppIntersectionLiveResultInfo`](DataforseoLabsAppleAppIntersectionLiveResultInfo.md)

#### Defined in

main.ts:118780
