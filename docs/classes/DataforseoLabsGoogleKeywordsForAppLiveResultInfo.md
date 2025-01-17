[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsGoogleKeywordsForAppLiveResultInfo

# Class: DataforseoLabsGoogleKeywordsForAppLiveResultInfo

Defined in: main.ts:121784

## Implements

- [`IDataforseoLabsGoogleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsGoogleKeywordsForAppLiveResultInfo()

> **new DataforseoLabsGoogleKeywordsForAppLiveResultInfo**(`data`?): [`DataforseoLabsGoogleKeywordsForAppLiveResultInfo`](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md)

Defined in: main.ts:121802

#### Parameters

##### data?

[`IDataforseoLabsGoogleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md)

#### Returns

[`DataforseoLabsGoogleKeywordsForAppLiveResultInfo`](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md)

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:121788

id of the app in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md).[`app_id`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#app_id)

***

### items?

> `optional` **items**: [`DataforseoLabsGoogleKeywordsForAppLiveItem`](DataforseoLabsGoogleKeywordsForAppLiveItem.md)[]

Defined in: main.ts:121798

contains data related to the ranking keywords for the app specified in the app_id field

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:121796

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:121792

language code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:121790

location code in a POST array

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:121786

search engine type

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:121794

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsGoogleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsGoogleKeywordsForAppLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:121811

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:121838

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsGoogleKeywordsForAppLiveResultInfo`](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md)

Defined in: main.ts:121831

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsGoogleKeywordsForAppLiveResultInfo`](DataforseoLabsGoogleKeywordsForAppLiveResultInfo.md)
