[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo

# Interface: IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo

## Implemented by

- [`DataforseoLabsGoogleKeywordsForSiteLiveResultInfo`](../classes/DataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#location_code)
- [offset](IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#offset)
- [offset\_token](IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#offset_token)
- [se\_type](IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#se_type)
- [target](IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#target)
- [total\_count](IDataforseoLabsGoogleKeywordsForSiteLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`KeywordDataInfo`](../classes/KeywordDataInfo.md)[]

contains keyword ideas and related data

#### Defined in

[main.ts:79851](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79851)

___


### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:79843](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79843)

___


### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:79839](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79839)

___


### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:79837](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79837)

___


### offset

• `Optional` **offset**: `number`

current offset value

#### Defined in

[main.ts:79845](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79845)

___


### offset\_token

• `Optional` **offset\_token**: `string`

offset token for subsequent requests
you can use the string provided in this field to get the subsequent results of the initial task;
note: offset_token values are unique for each subsequent task

#### Defined in

[main.ts:79849](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79849)

___


### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:79833](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79833)

___


### target

• `Optional` **target**: `string`

target domain in a POST array

#### Defined in

[main.ts:79835](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79835)

___


### total\_count

• `Optional` **total\_count**: `number`

total number of results in our database relevant to your request

#### Defined in

[main.ts:79841](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L79841)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")