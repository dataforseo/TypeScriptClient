[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IAppDataleAppListingsSearchLiveItem

# Interface: IAppDataleAppListingsSearchLiveItem

## Implemented by

- [`AppDataleAppListingsSearchLiveItem`](../classes/AppDataleAppListingsSearchLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [app\_id](IAppDataleAppListingsSearchLiveItem.md#app_id)
- [check\_url](IAppDataleAppListingsSearchLiveItem.md#check_url)
- [item](IAppDataleAppListingsSearchLiveItem.md#item)
- [language\_code](IAppDataleAppListingsSearchLiveItem.md#language_code)
- [location\_code](IAppDataleAppListingsSearchLiveItem.md#location_code)
- [se\_domain](IAppDataleAppListingsSearchLiveItem.md#se_domain)
- [time\_update](IAppDataleAppListingsSearchLiveItem.md#time_update)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

ID of the returned app

#### Defined in

[main.ts:182347](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182347)

___


### check\_url

• `Optional` **check\_url**: `string`

direct URL to search engine results
you can use it to make sure that we provided accurate results

#### Defined in

[main.ts:182356](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182356)

___


### item

• `Optional` **item**: [`BaseAppDataSerpElementItem`](../classes/BaseAppDataSerpElementItem.md)

detailed information about the app

#### Defined in

[main.ts:182363](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182363)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:182353](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182353)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:182351](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182351)

___


### se\_domain

• `Optional` **se\_domain**: `string`

search engine domain in a POST array

#### Defined in

[main.ts:182349](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182349)

___


### time\_update

• `Optional` **time\_update**: `string`

date and time when SERP data was last updated
in the ISO 8601 format: “YYYY-MM-DDThh:mm:ss.sssssssZ”
example:
2023-05-23 10:16:19 +00:00

#### Defined in

[main.ts:182361](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L182361)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")