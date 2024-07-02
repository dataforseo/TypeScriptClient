**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataGoogleAppListingsSearchLiveItem

# Class: AppDataGoogleAppListingsSearchLiveItem

## Implements

- [`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataGoogleAppListingsSearchLiveItem(data)

> **new AppDataGoogleAppListingsSearchLiveItem**(`data`?): [`AppDataGoogleAppListingsSearchLiveItem`](AppDataGoogleAppListingsSearchLiveItem.md)

#### Parameters

• **data?**: [`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md)

#### Returns

[`AppDataGoogleAppListingsSearchLiveItem`](AppDataGoogleAppListingsSearchLiveItem.md)

#### Source

main.ts:192054

## Properties

### app\_id?

> **`optional`** **app\_id**: `string`

ID of the returned app

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md).[`app_id`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md#app_id)

#### Source

main.ts:192034

***

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md).[`check_url`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md#check_url)

#### Source

main.ts:192043

***

### item?

> **`optional`** **item**: [`AppDataGooglePlayInfoOrganicSerpElementItem`](AppDataGooglePlayInfoOrganicSerpElementItem.md)

detailed information about the app

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md).[`item`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md#item)

#### Source

main.ts:192050

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md).[`language_code`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md#language_code)

#### Source

main.ts:192040

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md).[`location_code`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md#location_code)

#### Source

main.ts:192038

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md).[`se_domain`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md#se_domain)

#### Source

main.ts:192036

***

### time\_update?

> **`optional`** **time\_update**: `string`

date and time when SERP data was last updated
in the ISO 8601 format: “YYYY-MM-DDThh:mm:ss.sssssssZ”
example:
2023-05-23 10:16:19 +00:00

#### Implementation of

[`IAppDataGoogleAppListingsSearchLiveItem`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md).[`time_update`](../interfaces/IAppDataGoogleAppListingsSearchLiveItem.md#time_update)

#### Source

main.ts:192048

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:192063

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:192086

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataGoogleAppListingsSearchLiveItem`](AppDataGoogleAppListingsSearchLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataGoogleAppListingsSearchLiveItem`](AppDataGoogleAppListingsSearchLiveItem.md)

#### Source

main.ts:192079
