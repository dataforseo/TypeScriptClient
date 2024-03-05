[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsBingCompetitorsDomainLiveResultInfo

# Interface: IDataforseoLabsBingCompetitorsDomainLiveResultInfo

## Implemented by

- [`DataforseoLabsBingCompetitorsDomainLiveResultInfo`](../classes/DataforseoLabsBingCompetitorsDomainLiveResultInfo.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [items](IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#items)
- [items\_count](IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#items_count)
- [language\_code](IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#language_code)
- [location\_code](IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#location_code)
- [se\_type](IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#se_type)
- [target](IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#target)
- [total\_count](IDataforseoLabsBingCompetitorsDomainLiveResultInfo.md#total_count)

## Properties

### items

• `Optional` **items**: [`DataforseoLabsCompetitorsDomainLiveItem`](../classes/DataforseoLabsCompetitorsDomainLiveItem.md)[]

contains data related to the target and competitor domains

#### Defined in

[main.ts:103269](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103269)

___

### items\_count

• `Optional` **items\_count**: `number`

the number of results returned in the items array

#### Defined in

[main.ts:103267](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103267)

___

### language\_code

• `Optional` **language\_code**: `string`

language code in a POST array

#### Defined in

[main.ts:103263](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103263)

___

### location\_code

• `Optional` **location\_code**: `number`

location code in a POST array

#### Defined in

[main.ts:103261](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103261)

___

### se\_type

• `Optional` **se\_type**: `string`

search engine type

#### Defined in

[main.ts:103257](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103257)

___

### target

• `Optional` **target**: `string`

target domain in a POST array

#### Defined in

[main.ts:103259](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103259)

___

### total\_count

• `Optional` **total\_count**: `number`

total amount of results in our database relevant to your request

#### Defined in

[main.ts:103265](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L103265)
