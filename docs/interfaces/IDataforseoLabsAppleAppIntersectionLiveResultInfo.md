[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsAppleAppIntersectionLiveResultInfo

# Interface: IDataforseoLabsAppleAppIntersectionLiveResultInfo

## Implemented by

- [`DataforseoLabsAppleAppIntersectionLiveResultInfo`](../classes/DataforseoLabsAppleAppIntersectionLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [app\_ids](IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#app_ids)
- [items](IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#se_type)
- [total\_count](IDataforseoLabsAppleAppIntersectionLiveResultInfo.md#total_count)

## Properties

### app\_ids

• `Optional` **app\_ids**: `Object`

ids of the apps in a POST array

#### Index signature

▪ [key: `string`]: `string`

#### Defined in

[main.ts:112093](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112093)

___


### items

• `Optional` **items**: [`DataforseoLabsleAppIntersectionLiveItem`](../classes/DataforseoLabsleAppIntersectionLiveItem.md)[]

contains data related to the ranking keywords for the app specified in the app_id field

#### Defined in

[main.ts:112103](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112103)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:112101](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112101)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:112097](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112097)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:112095](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112095)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:112091](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112091)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

[main.ts:112099](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L112099)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")