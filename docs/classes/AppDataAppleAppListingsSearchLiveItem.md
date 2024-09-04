[**Documentation**](../README.md) • **Docs**

***

[Documentation](../globals.md) / AppDataAppleAppListingsSearchLiveItem

# Class: AppDataAppleAppListingsSearchLiveItem

## Implements

- [`IAppDataAppleAppListingsSearchLiveItem`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataAppleAppListingsSearchLiveItem()

> **new AppDataAppleAppListingsSearchLiveItem**(`data`?): [`AppDataAppleAppListingsSearchLiveItem`](AppDataAppleAppListingsSearchLiveItem.md)

#### Parameters

• **data?**: [`IAppDataAppleAppListingsSearchLiveItem`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md)

#### Returns

[`AppDataAppleAppListingsSearchLiveItem`](AppDataAppleAppListingsSearchLiveItem.md)

#### Defined in

main.ts:201279

## Properties

### app\_id?

> `optional` **app\_id**: `string`

ID of the returned app

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveItem`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md).[`app_id`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md#app_id)

#### Defined in

main.ts:201259

***

### check\_url?

> `optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveItem`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md).[`check_url`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md#check_url)

#### Defined in

main.ts:201268

***

### item?

> `optional` **item**: [`AppDataAppStoreInfoOrganicSerpElementItem`](AppDataAppStoreInfoOrganicSerpElementItem.md)

detailed information about the app

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveItem`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md).[`item`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md#item)

#### Defined in

main.ts:201275

***

### language\_code?

> `optional` **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveItem`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md).[`language_code`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md#language_code)

#### Defined in

main.ts:201265

***

### location\_code?

> `optional` **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveItem`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md).[`location_code`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md#location_code)

#### Defined in

main.ts:201263

***

### se\_domain?

> `optional` **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveItem`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md).[`se_domain`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md#se_domain)

#### Defined in

main.ts:201261

***

### time\_update?

> `optional` **time\_update**: `string`

date and time when SERP data was last updated
in the ISO 8601 format: “YYYY-MM-DDThh:mm:ss.sssssssZ”
example:
2023-05-23 10:16:19 +00:00

#### Implementation of

[`IAppDataAppleAppListingsSearchLiveItem`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md).[`time_update`](../interfaces/IAppDataAppleAppListingsSearchLiveItem.md#time_update)

#### Defined in

main.ts:201273

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Defined in

main.ts:201288

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Defined in

main.ts:201311

***

### fromJS()

> `static` **fromJS**(`data`): [`AppDataAppleAppListingsSearchLiveItem`](AppDataAppleAppListingsSearchLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataAppleAppListingsSearchLiveItem`](AppDataAppleAppListingsSearchLiveItem.md)

#### Defined in

main.ts:201304
