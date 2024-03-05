[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo

# Interface: IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo

## Implemented by

- [`DataforseoLabsBingBulkTrafficEstimationLiveResultInfo`](../classes/DataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#se_type)
- [total\_count](IDataforseoLabsBingBulkTrafficEstimationLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsBulkTrafficEstimationLiveItem`](../classes/DataforseoLabsBulkTrafficEstimationLiveItem.md)[]

array of items with relevant traffic estimation data

#### Defined in

[main.ts:102705](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102705)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:102703](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102703)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:102699](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102699)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:102696](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102696)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:102693](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102693)

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

[main.ts:102701](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L102701)
