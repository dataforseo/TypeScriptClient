[**Documentation**](../README.md)

***

[Documentation](../README.md) / AppDataGoogleAppListingsSearchLiveItem

# Class: AppDataGoogleAppListingsSearchLiveItem

## Implements

- [`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppListingsSearchLiveItem()

> **new AppDataGoogleAppListingsSearchLiveItem**(`data`?): [`AppDataGoogleAppListingsSearchLiveItem`](AppDataGoogleAppListingsSearchLiveItem.md)

#### Parameters

##### data?

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md)

#### Returns

[`AppDataGoogleAppListingsSearchLiveItem`](AppDataGoogleAppListingsSearchLiveItem.md)

#### Defined in

main.ts:204402

## Properties

### app\_id?

> `optional` **app\_id**: `string`

ID of the returned app

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md).[`app_id`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md#app_id)

#### Defined in

main.ts:204382

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md).[`check_url`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md#check_url)

#### Defined in

main.ts:204391

***

### item?

> `optional` **item**: [`AppDataGooglePlayInfoOrganicSerpElementItem`](AppDataGooglePlayInfoOrganicSerpElementItem.md)

detailed information about the app

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md).[`item`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md#item)

#### Defined in

main.ts:204398

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md).[`language_code`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md#language_code)

#### Defined in

main.ts:204388

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md).[`location_code`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md#location_code)

#### Defined in

main.ts:204386

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md).[`se_domain`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md#se_domain)

#### Defined in

main.ts:204384

***

### time\_update?

> `optional` **time\_update**: `string`

date and time when SERP data was last updated
in the ISO 8601 format: “YYYY-MM-DDThh:mm:ss.sssssssZ”
example:
2023-05-23 10:16:19 +00:00

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md).[`time_update`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md#time_update)

#### Defined in

main.ts:204396

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

##### \_data?

`any`

#### Returns

`void`

#### Defined in

main.ts:204411

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

##### data?

`any`

#### Returns

`any`

#### Defined in

main.ts:204434

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataGoogleAppListingsSearchLiveItem`](AppDataGoogleAppListingsSearchLiveItem.md)

#### Parameters

##### data

`any`

#### Returns

[`AppDataGoogleAppListingsSearchLiveItem`](AppDataGoogleAppListingsSearchLiveItem.md)

#### Defined in

main.ts:204427
