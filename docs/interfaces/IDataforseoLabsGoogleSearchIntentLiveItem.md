[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")

[dataforseo-client](../README.md) / [Exports](../modules.md) / IDataforseoLabsGoogleSearchIntentLiveItem

# Interface: IDataforseoLabsGoogleSearchIntentLiveItem

## Implemented by

- [`DataforseoLabsGoogleSearchIntentLiveItem`](../classes/DataforseoLabsGoogleSearchIntentLiveItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [keyword](IDataforseoLabsGoogleSearchIntentLiveItem.md#keyword)
- [keyword\_intent](IDataforseoLabsGoogleSearchIntentLiveItem.md#keyword_intent)
- [secondary\_keyword\_intents](IDataforseoLabsGoogleSearchIntentLiveItem.md#secondary_keyword_intents)

## Properties

### keyword

• `Optional` **keyword**: `string`

target keyword in a POST array

#### Defined in

[main.ts:82913](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82913)

___


### keyword\_intent

• `Optional` **keyword\_intent**: [`KeywordIntentInfo`](../classes/KeywordIntentInfo.md)

search intent data relevant for the specified keyword

#### Defined in

[main.ts:82915](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82915)

___


### secondary\_keyword\_intents

• `Optional` **secondary\_keyword\_intents**: [`KeywordIntentInfo`](../classes/KeywordIntentInfo.md)[]

contains objects with other possible search intents for the specified keyword

#### Defined in

[main.ts:82917](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L82917)

[root](./../../ "root") / [docs](./../ "docs") / [interfaces](./ "interfaces")

[[Back to README.md]](./../../README.md "[Back to README.md]")