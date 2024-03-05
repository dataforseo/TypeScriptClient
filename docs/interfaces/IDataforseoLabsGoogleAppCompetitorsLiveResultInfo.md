[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleAppCompetitorsLiveResultInfo

# Interface: IDataforseoLabsGoogleAppCompetitorsLiveResultInfo

## Implemented by

- [`DataforseoLabsGoogleAppCompetitorsLiveResultInfo`](../classes/DataforseoLabsGoogleAppCompetitorsLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [app\_id](IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#app_id)
- [items](IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#se_type)
- [total\_count](IDataforseoLabsGoogleAppCompetitorsLiveResultInfo.md#total_count)

## Properties

### app\_id

• `Optional` **app\_id**: `string`

id of the app in a POST array

#### Defined in

[main.ts:109463](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109463)

___

### items

• `Optional` **items**: [`DataforseoLabsGoogleAppCompetitorsLiveItem`](../classes/DataforseoLabsGoogleAppCompetitorsLiveItem.md)[]

contains data related to the app_id and competitor applications

#### Defined in

[main.ts:109473](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109473)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:109471](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109471)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:109467](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109467)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:109465](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109465)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:109461](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109461)

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

[main.ts:109469](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L109469)
