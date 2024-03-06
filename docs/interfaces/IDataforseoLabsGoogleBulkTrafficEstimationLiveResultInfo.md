[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo

# Interface: IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo

## Implemented by

- [`DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo`](../classes/DataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#se_type)
- [total\_count](IDataforseoLabsGoogleBulkTrafficEstimationLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsBulkTrafficEstimationLiveItem`](../classes/DataforseoLabsBulkTrafficEstimationLiveItem.md)[]

array of items with relevant traffic estimation data

#### Defined in

[main.ts:97851](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97851)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:97849](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97849)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:97845](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97845)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array
if there is no data, then the value is null

#### Defined in

[main.ts:97842](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97842)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:97839](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97839)

___


### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

[main.ts:97847](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L97847)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")