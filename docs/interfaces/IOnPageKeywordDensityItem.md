[dataforseo-client](../README.md) / [Exports](../modules.md) / IOnPageKeywordDensityItem

# Interface: IOnPageKeywordDensityItem

## Implemented by

- [`OnPageKeywordDensityItem`](../classes/OnPageKeywordDensityItem.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [density](IOnPageKeywordDensityItem.md#density)
- [frequency](IOnPageKeywordDensityItem.md#frequency)
- [keyword](IOnPageKeywordDensityItem.md#keyword)

## Properties

### density

• `Optional` **density**: `number`

keyword density
calculated as a ratio of frequency to the total count of keywords with the set keyword_length on the web page or website

#### Defined in

[main.ts:150292](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150292)

___

### frequency

• `Optional` **frequency**: `number`

keyword frequency
number of times the keyword appears on the website (or webpage if you specified a url)

#### Defined in

[main.ts:150289](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150289)

___

### keyword

• `Optional` **keyword**: `string`

returned keyword

#### Defined in

[main.ts:150286](https://github.com/dataforseo/TypeScriptClient/blob/7ca1aa4/main.ts#L150286)
