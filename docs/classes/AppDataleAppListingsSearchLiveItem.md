**Documentation** • [Readme](../README.md) \| [API](../globals.md)

***

[Documentation](../README.md) / AppDataleAppListingsSearchLiveItem

# Class: AppDataleAppListingsSearchLiveItem

## Implements

- [`IAppDataleAppListingsSearchLiveItem`](../interfaces/IAppDataleAppListingsSearchLiveItem.md)

## Indexable

 \[`key`: `string`\]: `any`

## Constructors

### new AppDataleAppListingsSearchLiveItem(data)

> **new AppDataleAppListingsSearchLiveItem**(`data`?): [`AppDataleAppListingsSearchLiveItem`](AppDataleAppListingsSearchLiveItem.md)

#### Parameters

• **data?**: [`IAppDataleAppListingsSearchLiveItem`](../interfaces/IAppDataleAppListingsSearchLiveItem.md)

#### Returns

[`AppDataleAppListingsSearchLiveItem`](AppDataleAppListingsSearchLiveItem.md)

#### Source

main.ts:187899

## Properties

### app\_id?

> **`optional`** **app\_id**: `string`

ID of the returned app

#### Implementation of

[`IAppDataleAppListingsSearchLiveItem`](../interfaces/IAppDataleAppListingsSearchLiveItem.md).[`app_id`](../interfaces/IAppDataleAppListingsSearchLiveItem.md#app_id)

#### Source

main.ts:187879

***

### check\_url?

> **`optional`** **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Implementation of

[`IAppDataleAppListingsSearchLiveItem`](../interfaces/IAppDataleAppListingsSearchLiveItem.md).[`check_url`](../interfaces/IAppDataleAppListingsSearchLiveItem.md#check_url)

#### Source

main.ts:187888

***

### item?

> **`optional`** **item**: [`BaseAppDataSerpElementItem`](BaseAppDataSerpElementItem.md)

detailed information about the app

#### Implementation of

[`IAppDataleAppListingsSearchLiveItem`](../interfaces/IAppDataleAppListingsSearchLiveItem.md).[`item`](../interfaces/IAppDataleAppListingsSearchLiveItem.md#item)

#### Source

main.ts:187895

***

### language\_code?

> **`optional`** **language\_code**: `string`

language code in a POST array

#### Implementation of

[`IAppDataleAppListingsSearchLiveItem`](../interfaces/IAppDataleAppListingsSearchLiveItem.md).[`language_code`](../interfaces/IAppDataleAppListingsSearchLiveItem.md#language_code)

#### Source

main.ts:187885

***

### location\_code?

> **`optional`** **location\_code**: `number`

location code in a POST array

#### Implementation of

[`IAppDataleAppListingsSearchLiveItem`](../interfaces/IAppDataleAppListingsSearchLiveItem.md).[`location_code`](../interfaces/IAppDataleAppListingsSearchLiveItem.md#location_code)

#### Source

main.ts:187883

***

### se\_domain?

> **`optional`** **se\_domain**: `string`

search engine domain in a POST array

#### Implementation of

[`IAppDataleAppListingsSearchLiveItem`](../interfaces/IAppDataleAppListingsSearchLiveItem.md).[`se_domain`](../interfaces/IAppDataleAppListingsSearchLiveItem.md#se_domain)

#### Source

main.ts:187881

***

### time\_update?

> **`optional`** **time\_update**: `string`

date and time when SERP data was last updated
in the ISO 8601 format: “YYYY-MM-DDThh:mm:ss.sssssssZ”
example:
2023-05-23 10:16:19 +00:00

#### Implementation of

[`IAppDataleAppListingsSearchLiveItem`](../interfaces/IAppDataleAppListingsSearchLiveItem.md).[`time_update`](../interfaces/IAppDataleAppListingsSearchLiveItem.md#time_update)

#### Source

main.ts:187893

## Methods

### init()

> **init**(`_data`?): `void`

#### Parameters

• **\_data?**: `any`

#### Returns

`void`

#### Source

main.ts:187908

***

### toJSON()

> **toJSON**(`data`?): `any`

#### Parameters

• **data?**: `any`

#### Returns

`any`

#### Source

main.ts:187931

***

### fromJS()

> **`static`** **fromJS**(`data`): [`AppDataleAppListingsSearchLiveItem`](AppDataleAppListingsSearchLiveItem.md)

#### Parameters

• **data**: `any`

#### Returns

[`AppDataleAppListingsSearchLiveItem`](AppDataleAppListingsSearchLiveItem.md)

#### Source

main.ts:187924
