[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleAppIntersectionLiveResultInfo

# Interface: IDataforseoLabsGoogleAppIntersectionLiveResultInfo

## Implemented by

- [`DataforseoLabsGoogleAppIntersectionLiveResultInfo`](../classes/DataforseoLabsGoogleAppIntersectionLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [app\_ids](IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#app_ids)
- [items](IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#se_type)
- [total\_count](IDataforseoLabsGoogleAppIntersectionLiveResultInfo.md#total_count)

## Properties

### app\_ids

• `Optional` **app\_ids**: `Object`

ids of the apps in a POST array

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[main.ts:110039](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110039)

___


### items

• `Optional` **items**: [`DataforseoLabsleAppIntersectionLiveItem`](../classes/DataforseoLabsleAppIntersectionLiveItem.md)[]

contains data related to the ranking keywords for the app specified in the app_id field

#### Defined in

[main.ts:110049](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110049)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:110047](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110047)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:110043](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110043)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:110041](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110041)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:110037](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110037)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

[main.ts:110045](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L110045)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")