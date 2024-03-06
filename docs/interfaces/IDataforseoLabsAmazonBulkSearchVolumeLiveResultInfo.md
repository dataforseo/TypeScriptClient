[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo

# Interface: IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo

## Implemented by

- [`DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo`](../classes/DataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#se_type)
- [total\_count](IDataforseoLabsAmazonBulkSearchVolumeLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsAmazonBulkSearchVolumeLiveItem`](../classes/DataforseoLabsAmazonBulkSearchVolumeLiveItem.md)[]

contains keyword search volume data data

#### Defined in

[main.ts:98949](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98949)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:98947](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98947)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:98943](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98943)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:98940](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98940)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:98937](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98937)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

[main.ts:98945](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L98945)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")