[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppListingsSearchLiveItem

# Class: AppDataGoogleAppListingsSearchLiveItem

Defined in: main.ts:204950

## Implements

- [`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md)

## Indexable

\[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppListingsSearchLiveItem()

> **new AppDataGoogleAppListingsSearchLiveItem**(`data`?): [`AppDataGoogleAppListingsSearchLiveItem`](AppDataGoogleAppListingsSearchLiveItem.md)

Defined in: main.ts:204972

#### Parameters

##### data?

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md)

#### Returns

[`AppDataGoogleAppListingsSearchLiveItem`](AppDataGoogleAppListingsSearchLiveItem.md)

## Properties

### app\_id?

> `optional` **app\_id**: `string`

Defined in: main.ts:204952

ID of the returned app

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md).[`app_id`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md#app_id)

***

### check\_url?

> `optional` **check\_url**: `string`

Defined in: main.ts:204961

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md).[`check_url`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md#check_url)

***

### item?

> `optional` **item**: [`AppDataGooglePlayInfoOrganicSerpElementItem`](AppDataGooglePlayInfoOrganicSerpElementItem.md)

Defined in: main.ts:204968

detailed information about the app

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md).[`item`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md#item)

***

### language\_code?

> `optional` **language\_code**: `string`

Defined in: main.ts:204958

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md).[`language_code`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md#language_code)

***

### location\_code?

> `optional` **location\_code**: `number`

Defined in: main.ts:204956

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md).[`location_code`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md#location_code)

***

### se\_domain?

> `optional` **se\_domain**: `string`

Defined in: main.ts:204954

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md).[`se_domain`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md#se_domain)

***

### time\_update?

> `optional` **time\_update**: `string`

Defined in: main.ts:204966

date and time when SERP data was last updated
in the ISO 8601 format: “YYYY-MM-DDThh:mm:ss.sssssssZ”
example:
2023-05-23 10:16:19 +00:00

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md).[`time_update`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md#time_update)

## Methods

### init()

> **init**(`_data`?): `void`

Defined in: main.ts:204981

#### Parameters

##### \_data?

`any`

#### Returns

`void`

***

### toJSON()

> **toJSON**(`data`?): `any`

Defined in: main.ts:205004

#### Parameters

##### data?

`any`

#### Returns

`any`

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppListingsSearchLiveItem`](AppDataGoogleAppListingsSearchLiveItem.md)

Defined in: main.ts:204997

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppListingsSearchLiveItem`](AppDataGoogleAppListingsSearchLiveItem.md)
