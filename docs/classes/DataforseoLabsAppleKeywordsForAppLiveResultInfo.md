[**Documentation**](../README.md)

***

[Documentation](../README.md) / DataforseoLabsAppleKeywordsForAppLiveResultInfo

# Class: DataforseoLabsAppleKeywordsForAppLiveResultInfo

Defined in: main.ts:123994

## Implements

- [`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new DataforseoLabsAppleKeywordsForAppLiveResultInfo()

> **new DataforseoLabsAppleKeywordsForAppLiveResultInfo**(`data`?): [`DataforseoLabsAppleKeywordsForAppLiveResultInfo`](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md)

Defined in: main.ts:124012

#### Parameters

##### data?

[`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md)

#### Returns

[`DataforseoLabsAppleKeywordsForAppLiveResultInfo`](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md)

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:123998

id of the app in a POST array

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[`app_id`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#app_id)

***

### items?

> `optional` **items**: [`DataforseoLabsLiveItem`](DataforseoLabsLiveItem.md)[]

Defined in: main.ts:124008

contains data related to the ranking keywords for the app specified in the app_id field

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[`items`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#items)

***

### items\_count?

> `optional` **items\_count**: `number`

Defined in: main.ts:124006

the number of results returned in the items array

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[`items_count`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#items_count)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:124002

language code in a POST array

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[`language_code`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:124000

location code in a POST array

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[`location_code`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#location_code)

***

### se\_type?

> `optional` **se\_type**: `string`

Defined in: main.ts:123996

search engine type

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[`se_type`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#se_type)

***

### total\_count?

> `optional` **total\_count**: `number`

Defined in: main.ts:124004

total amount of results in our database relevant to your request

#### Implementation of

[`IDataforseoLabsAppleKeywordsForAppLiveResultInfo`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md).[`total_count`](../interfaces/IDataforseoLabsAppleKeywordsForAppLiveResultInfo.md#total_count)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:124021

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:124048

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`DataforseoLabsAppleKeywordsForAppLiveResultInfo`](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md)

Defined in: main.ts:124041

#### Parameters

##### data

`any`

#### Returns

[`DataforseoLabsAppleKeywordsForAppLiveResultInfo`](DataforseoLabsAppleKeywordsForAppLiveResultInfo.md)
